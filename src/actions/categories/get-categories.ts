'use server'

import prisma from "@/lib/prisma"

export const getCategories = async () => {
	try {
		const categories = await prisma.categories.findMany({
			orderBy: { name: 'asc' }
		})

		return {
			ok: true,
			categories
		}
	} catch (error) {
		console.log(error)
		return {
			ok: false,
			categories: []
		}
	}
}