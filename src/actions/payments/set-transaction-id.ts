'use server'

import prisma from '@/lib/prisma'
import { auth } from '@/auth.config'

export const setTransactionId = async (orderId: string, transactionId: string) => {
	try{

	const session = await auth()

	if(!session?.user) {
		return {
			ok: false,
			message: 'User not authenticated'
		}
	}

	const order = await prisma.order.findUnique({ where: { id: orderId } })

	if(!order) {
		return {
			ok: false,
			message: 'Order not found'
		}
	}

	if(order?.userId !== session.user.id){
		return {
			ok: false,
			message: 'Unauthorized'
		}
	}

	await prisma.order.update({
		where: { id: orderId },
		data: {
			transactionId
		}
	})
	return {
		ok: true,
		message: 'Transaction ID set successfully'
	}

	}
	catch(error){
		console.log(error)
		return {
			ok: false,
			message: 'Failed to set transaction ID'
		}
	}
}