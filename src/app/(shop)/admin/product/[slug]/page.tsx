import { redirect } from 'next/navigation';

import { Title } from '@/components';
import { getCategories, getProductBySlug } from '@/actions';
import { ProductForm } from './ui/ProductForm';

interface Props {
	params: {
		slug: string
	}
}

export default async function ProductPage({ params }: Props) {

	const { slug } = await params

	const [product, categoriesResult] = await Promise.all([
		getProductBySlug(slug),
		getCategories()
	])

	const { categories } = categoriesResult

	const title = slug === 'new' ? 'New product' : 'Edit product'

	if(!product)
		redirect('/admin/products')

	return (
		<>
			<Title title={ title } />

			<ProductForm product={ product } categories={ categories } />
		</>
	);
}