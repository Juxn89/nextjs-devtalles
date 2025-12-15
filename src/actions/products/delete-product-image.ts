'use server'
import { v2 as cloudinary } from 'cloudinary'
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

cloudinary.config(process.env.CLOUDINARY_URL ?? '')

export const deleteProductImage = async (imageId: number, imageUrl: string) => {
	console.log(imageId, imageUrl)
	
	if(!imageUrl.startsWith('http'))
		return { ok: false, error: 'It is not possible to delete an image from the file systems.' }

	const imageName = imageUrl.split('/').pop()?.split('.')[0] ?? ''

	try {
		await cloudinary.uploader.destroy(`teslo-shop/${imageName}`)
		const deletedImage = await prisma.productImages.delete({
			where: { id: imageId },
			select: {
				product: {
					select: { slug: true }
				}
			}
		})

		revalidatePath(`/admin/prodcuts`)
		revalidatePath(`/admin/prodcuts/${ deletedImage.product.slug }`)
		revalidatePath(`/prodcut/${ deletedImage.product.slug }`)

	} catch (error) {
		console.log(error)
		return { ok: false, message: 'It was not possible to deleted the image.' }
	}
}