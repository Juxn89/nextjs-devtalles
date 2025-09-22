'use server'
import { Gender } from '@/generated/prisma';
import prisma from '@/lib/prisma'

interface PaginationOptions {
	page?: number;
	take?: number;
	gender?: Gender;
}

export const getPaginatedProductsWithImages = async({ page = 1, take = 12, gender }: PaginationOptions) => {
	try {

		if(isNaN(page)) page = 1

		if(page < 1) page = 1

		console.log({ page, take, skip: (page - 1) * take })

		// Fetch products filtered with images, ordered by id for consistent pagination
		const products = await prisma.product.findMany({
			include: {
				ProductImage: { 
					take: 2,
					select: {
						url: true
					}
				}
			},
			orderBy: {
				id: 'asc',
			},
			take: take,
			skip: (page - 1) * take,
			where: {
				gender: gender
			}
		});

		// Get total product count
		const totalProducts = await prisma.product.count({
			where: {
				gender
			}
		});

		const totalPages = Math.ceil(totalProducts / take);

		return {
			currentPage: page,
			totalPages,
			products: products.map(product => ({
				...product,
				images: product.ProductImage.map(image => image.url)
			})),
		}
	}
	catch (error) {
		throw new Error('Error fetching paginated products with images: ' + (error as Error).message);
	}
}