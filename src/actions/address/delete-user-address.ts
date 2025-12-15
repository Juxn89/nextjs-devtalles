'use server'

import prisma from "@/lib/prisma"

export const deleteUserAddress = async (userId: string) => { 
	try {
		await prisma.userAddresses.delete({
			where: {
				userId
			}
		})
		
		return {
			ok: true,
			message: 'User address deleted successfully'
		}
	} catch (error) {
		console.log(error)
		return {
			ok: false,
			message: 'Error deleting user address'
		}
	}
}