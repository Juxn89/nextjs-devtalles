'use server'

import prisma from "@/lib/prisma"

export const deleteUserAddress = async (userId: string) => { 
	try {
		const delte = await prisma.userAddresses.delete({
			where: {
				userId
			}
		})
		
		return {
			ok: true,
			message: 'User address deleted successfully'
		}
	} catch (error) {
		return {
			ok: false,
			message: 'Error deleting user address'
		}
	}
}