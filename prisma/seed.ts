import { PrismaClient, Prisma } from "@/generated/prisma";
import { initialData } from "@/seed/seed";

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = initialData.products.map(product => ({
	description: product.description,
	inStock: product.inStock,
	price: product.price,
	slug: product.slug,
	title: product.title,
	gender: product.gender,
	ProductImage: {
		create: product.images.map(image => ({
			url: image ?? ''
		}))
	},
	category: {
		connectOrCreate: {
			where: { name: product.type },
			create: { name: product.type }
		}
	},
	size: product.sizes,
	tags: product.tags,
}))

export async function seedDatabase() {
	console.log('Starting database seeding...')
	
	console.log('Clearing existing data...')

	await	prisma.productImage.deleteMany()
	await	prisma.product.deleteMany()
	await	prisma.category.deleteMany()
	
	console.log('Seeding database...')

	for (const product of productData) {
		await prisma.product.create({
			data: product
		})
	}

	console.log('Database seeded successfully.')

}

seedDatabase()