'use server'

import prisma from "@/lib/prisma"
import { sleep } from "@/utils/sleep";

export const getStockBySlug = async ( slug: string ): Promise<number> => {
	try {
		const product = await prisma.product.findUnique({
			where: { slug },
			select: { inStock: true }
		})

		if ( !product )
			return 0

		return product.inStock
	}
	catch (error) {
		console.log(error)
		return 0
	}
}
		