'use server'

import { z } from 'zod'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { v2 as cloudinary } from 'cloudinary'
import { Gender, Products, Size } from '@prisma/client'

cloudinary.config(process.env.CLOUDINARY_URL ?? '')

const productSchema = z.object({
	id: z.uuid().optional().nullable(),
	title: z.string().min(3).max(255),
	slug: z.string().min(3).max(255),
	description: z.string(),
	price: z.coerce.number().min(0).transform(val => Number(val.toFixed(0))),
	categoryId: z.uuid(),
	sizes: z.coerce.string().transform(val => val.split(',')),
	tags: z.string(),
	gender: z.enum(Gender),
	inStock: z.number().min(0).transform(val => Number(val.toFixed(0)))
})

export const createUpdateProduct = async (product: FormData) => {
	const data = Object.fromEntries(product)
	const productParsed = productSchema.safeParse(data)

	if(!productParsed.success)
		return { ok: false }

	const currentProduct = productParsed.data
	const { id, ...rest } = currentProduct
	currentProduct.slug = currentProduct.slug.toLocaleLowerCase().replace(/ /g, '-').trim()

	try {
		const transaction = await prisma.$transaction(async (trasact) => {
			let productTransaction: Products
			const tagsArray = rest.tags.split(',').map(tag => tag.trim().toLowerCase())

			// Products
			if(id) {
				productTransaction = await prisma.products.update({
					where: { id },
					data: {
						...rest,
						size: { set: rest.sizes as Size[] },
						tags: { set: tagsArray }
					}
				})
			}
			else {
				productTransaction = await prisma.products.create({
					data: {
						...rest,
						size: { set: rest.sizes as Size[] },
						tags: tagsArray
					}
				})
			}

			// Images
			if(product.getAll('images')) {
				const imagesUrl = uploadImages(product.getAll('images') as File[])
			}

			return {
				productTransaction
			}
		})

		revalidatePath('/admin/products')
		revalidatePath(`/products/${currentProduct.slug}`)
		revalidatePath(`/admin/products/${currentProduct.slug}`)

		return {
			ok: true,
			product: transaction.productTransaction
		}

	} catch (error) {
		console.log(error)
		return {
			ok: false,
			message: 'Something was wrong!'
		}
	}
}

const uploadImages = async(images: File[]) => {
	try {
		const uploadProcessPromisses = images.map( async(image) => {
			const buffer = await image.arrayBuffer()
			const base64Image = Buffer.from(buffer).toString('base64')

			return cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`, { folder: 'teslo-shop' })
				.then(response => response.secure_url)
		})

		const uploadedImages = await Promise.all(uploadProcessPromisses)
		return uploadedImages
	} catch (error) {
		console.log(error)
		return null
	}
}