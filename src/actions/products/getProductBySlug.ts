'use server'

import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
	try {
		const product = await prisma.products.findUnique({
			where: { slug },
			include: {
				ProductImages: {
					select: {
						url: true,
						id: true
					}
				}
			},
		});

		if (!product)
			throw new Error('Product not found');

		return {
			...product,
			sizes: [...product.size],
			images: product.ProductImages.map(img => img.url)
		};

	} catch (error) {
		console.log(error);
		throw new Error('Error fetching product by slug');
	}
}