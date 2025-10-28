'use server'

import { auth } from '@/auth.config'
import { Address, Size } from '@/interfaces/'
import prisma from '@/lib/prisma'

interface ProductToOrder {
	productId: string,
	quantity: number,
	size: Size
}

export const placeOrder = async (productToOrder: ProductToOrder[], address: Address) => {
	const currentSession = await auth()
	const userId = currentSession?.user.id

	if(!currentSession) {
		return {
			ok: false,
			message: 'There is no active session'
		}
	}

	const products = await prisma.products.findMany({
		where: {
			id: {
				in: productToOrder.map(p => p.productId)
			}
		}
	})

	const itemsInOrder = productToOrder.reduce( (count, product) => count + product.quantity, 0)

	const { subTotal, tax, total } = productToOrder.reduce( (totals, item) => {
		const product = products.find(p => p.id === item.productId)

		if(!product) return totals

		const itemTotal = product.price * item.quantity

		return {
			subTotal: totals.subTotal + itemTotal,
			tax: totals.tax + itemTotal * 0.15,
			total: totals.total + itemTotal * 1.15
		}
	}, { subTotal: 0, tax: 0, total: 0 } )

	try {
		const placeOrderTransaction = await prisma.$transaction(async (transaction) => {
			const updatedProductsPromises = products.map(async (product) => {
				const productQuantity = productToOrder.filter(p => p.productId === product.id).reduce( (accumulate, current) => accumulate + current.quantity, 0 )

				if(productQuantity === 0)
					throw new Error(`Product ${product.title} does not have enough stock`)

				return transaction.products.update({
					where: { id: product.id },
					data: {
						inStock: {
							decrement: productQuantity
						}
					}
				})
			})

			const updateProducts = await Promise.all(updatedProductsPromises)
			updateProducts.forEach(product => {
				if(product.inStock < 0)
					throw new Error(`Product ${product.title} does not have enough stock`)
			})

			const order = await transaction.order.create({
				data: {
					userId,
					itemsInOrder,
					subTotal,
					tax,
					total,

					OrderItems: {
						createMany: {
							data: productToOrder.map(p => ({
								quantity: p.quantity,
								size: p.size,
								productId: p.productId,
								price: products.find(prod => prod.id === p.productId)?.price ?? 0
							}))
						}
					}
				}
			})

			const { country, rememberAddress, ...restAddress } = address
			const orderAddress = await transaction.orderAddress.create({
				data: {
					...restAddress,
					orderId: order.id,
					countryId: country
				}
			})

			return {
				updateProducts,
				order,
				orderAddress
			}
		})

		return {
			ok: true,
			order: placeOrderTransaction.order
		}
	} catch (error) {
		return {
			ok: false,
			message: error.message
		}
	}
}