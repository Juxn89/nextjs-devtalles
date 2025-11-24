'use server'

import { auth } from "@/auth.config"
import prisma from "@/lib/prisma"

export const getOrderByID = async (id: string) => {
	const session = await auth();

	if(!session?.user) {
		return {
			ok: false,
			message: 'Please, log in to view your orders.'
		}
	}

	try {
		const order = await prisma.order.findUnique({
			where: { id },
			include: {
				OrderAddress: true,
				OrderItems: {
					select: {
						price: true,
						quantity: true,
						size: true,
						product: {
							select: {
								title: true,
								slug: true,
								ProductImages: {
									select: {
										url: true
									},
									take:1
								}
							}
						}
					}
				}
			}
		})	

		if(!order)
			throw `${id} doesn't exist`

		if(session.user.role === 'user' && session.user.id !== order.userId)
			throw 'You do not have permission to view this order.'

		return {
			ok: true,
			order
		}
	}
	catch(error) {
		return {
			ok: false,
			message: 'There was an error fetching your order. Please, reach out to support.'
		}
	}
}