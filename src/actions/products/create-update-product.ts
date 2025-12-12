'use server'

import { z } from 'zod'
import { Gender } from '@prisma/client'

	const productSchema = z.object({
		id: z.uuid().optional().nullable(),
		title: z.string().min(3).max(255),
		slug: z.string().min(3).max(255),
		description: z.string(),
		price: z.coerce.number().min(0).transform(val => Number(val.toFixed(0))),
		categoryId: z.uuid(),
		sizes: z.coerce.string().transform(val => val.split(',')),
		tags: z.string(),
		gender: z.enum(Gender)
	})

export const createUpdateProduct = async (product: FormData) => {
	const data = Object.fromEntries(product)
	const productParsed = productSchema.safeParse(data)

	if(!productParsed.success) {
		console.log(productParsed.error)
		return {
			ok: false,
		}
	}

	return {
		ok: true
	}
}