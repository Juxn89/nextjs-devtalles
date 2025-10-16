import prisma from "@/lib/prisma"

export const getUserAddress = async (userId: string) => { 
	try {
		const address = await prisma.userAddresses.findFirst({
			where: { userId }
		})

		if(!address)
			return null

		const { countryId, address2, ...rest } = address

		return {
			...rest,
			country: countryId
		}
	} catch (error) {
		return null
	}
}