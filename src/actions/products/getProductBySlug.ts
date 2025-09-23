'use server'

import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
	try {
		const product = await prisma.product.findUnique({
			where: { slug },
			include: {
				ProductImage: {
					select: {
						url: true,
					}
				}
			},
		});

		if (!product)
			throw new Error('Product not found');

		return {
			...product,
			sizes: [...product.size],
			images: product.ProductImage.map(img => img.url)
		};

	} catch (error) {
		console.log(error);
		throw new Error('Error fetching product by slug');
	}
}