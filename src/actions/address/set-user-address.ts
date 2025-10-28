'use server'

import prisma from "@/lib/prisma"
import { Address } from "@/interfaces/"

export const setUserAddress = async (address: Address, userId: string) => {
	try {
		const saveAddress = await createOrReplaceAddress(address, userId)

		return saveAddress
	}
	catch(error) {
		console.error(error)

		return {
			ok: false,
			message: "Failed to set user address"
		}
	}
}

const createOrReplaceAddress = async (address: Address, userId: string) => {
	try {
		const storedAddress = await prisma.userAddresses.findUnique({ where: { userId } })

		const newAddressData = {
			userId: userId,
			address: address.address,
			address2: address.address2,
			countryId: address.country,
			firstName: address.firstName,
			lastName: address.lastName,
			phone: address.phone,
			postalCode: address.postalCode,
			city: address.city
		}

		if(!storedAddress) {
			const newAddress = await prisma.userAddresses.create({
				data: newAddressData
			})

			return {
				ok: true,
				data: newAddress
			}
		}

		const updatedAddress = await prisma.userAddresses.update({
			where: { userId },
			data: newAddressData
		})

		return updatedAddress
	}
	catch(error) {
		console.error(error)

		throw new Error("Failed to create or replace user address")
	}
}