'use server'

import { auth } from '@/auth.config'
import { Address, Size } from '@/interfaces/'

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

	console.log({ productToOrder, address, userId })
}