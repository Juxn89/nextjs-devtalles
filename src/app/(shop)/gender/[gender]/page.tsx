export const revalidate = 60;

import { redirect } from "next/navigation";
import { Gender } from "@/generated/prisma";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";

interface Props {
	params: Promise <{
		gender: string
	}>,
	searchParams: Promise<{
		page?: string
	}>
}

export default async function CategoryPage({ params, searchParams }: Props) {

	const { gender } = await params;
	const { page: pageParam } = await searchParams;

	const page = pageParam ? parseInt(pageParam) : 1;
	const { products, totalPages } = await getPaginatedProductsWithImages({ page, gender: gender as Gender });

	if(products.length === 0)
		redirect(`/`)
	
	const labels: Record<string, string> = {
		'men': 'for him',
		'women': 'for her',
		'kids': 'for kids',
		'unisex': 'for all'
	}

	return (
		<>
			<Title 
				title={ `Articles ${ labels[gender] }` } 
				subTitle="All products"
				className="mb-2"
			/>
			{
				products.length === 0 && <h2>No products found</h2>
			}
			{
				products.length > 0 && <ProductGrid products={products} />
			}

			<Pagination totalPages={totalPages} />
		</>
	);
}