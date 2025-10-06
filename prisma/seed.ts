import { PrismaClient } from '@prisma/client'
import { initialData } from '../src/seed/seed'
import { countries } from '@/seed/seed-countries'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding...')

  // Limpiar datos existentes
  await prisma.productImage.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()
  await prisma.user.deleteMany()
	await prisma.countryies.deleteMany()

  console.log('✅ Database cleared')

  // Crear usuarios
  console.log('👥 Creating users...')
  
  // Generar IDs únicos para usuarios
  const adminUserId = '495e7bac-be94-4ac1-9faa-7c7bca7ef70e'
  const regularUserId = '164830be-b078-470d-b68a-484582335b10'
  
  await prisma.user.create({
    data: {
      id: adminUserId,
      name: initialData.users[0].name,
      email: initialData.users[0].email,
      password: initialData.users[0].password,
      role: initialData.users[0].role as 'admin' | 'user',
      emailVerified: true,
    }
  })

  await prisma.user.create({
    data: {
      id: regularUserId,
      name: initialData.users[1].name,
      email: initialData.users[1].email,
      password: initialData.users[1].password,
      role: initialData.users[1].role as 'admin' | 'user',
      emailVerified: true,
    }
  })

  console.log('✅ Users created')

  // Crear categorías
  console.log('📂 Creating categories...')
  const categories = ['shirts', 'pants', 'hoodies', 'hats']
  
  for (const categoryName of categories) {
    await prisma.category.create({
      data: {
        name: categoryName
      }
    })
  }

  console.log('✅ Categories created')

  // Crear productos
  console.log('🛍️ Creating products...')
  
  for (const product of initialData.products) {
    // Buscar la categoría correspondiente
    const category = await prisma.category.findUnique({
      where: { name: product.type }
    })
    
    if (!category) {
      console.log(`⚠️ Category ${product.type} not found for product ${product.title}`)
      continue
    }

    // Crear el producto
    const createdProduct = await prisma.product.create({
      data: {
        title: product.title,
        description: product.description,
        inStock: product.inStock,
        price: product.price,
        size: product.sizes.map(size => size as any),
        slug: product.slug,
        tags: product.tags,
        gender: product.gender as 'men' | 'women' | 'kid' | 'unisex',
        categoryId: category.id,
      }
    })

    // Crear las imágenes del producto
    for (const image of product.images) {
      await prisma.productImage.create({
        data: {
          url: image,
          productId: createdProduct.id
        }
      })
    }
  }

  console.log('✅ Products and images created')
	
	await prisma.countryies.createMany({
		data: [ ...countries ],
	})

	console.log('🗺️ Countries created')

  console.log('\n\n🎉 Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:')
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })