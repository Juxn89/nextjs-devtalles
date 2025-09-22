export const revalidate = 60

import { redirect } from "next/navigation";
import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions/products/product-pagination";

interface Props {
	searchParams: {
		page?: string;
		take?: string;
	}
}

export default async function Home({ searchParams }: Props) {
	const { page: PageParams, take: TakeParams } = await searchParams

	const page = PageParams ? parseInt(PageParams) : 1;
	const take = TakeParams ? parseInt(TakeParams) : 12;

	const { products, totalPages } = await getPaginatedProductsWithImages({ page, take });

	if(products.length === 0)
		redirect('/')

  return (
		<>
			<Title 
				title="Shop"
				subTitle="All products"
				className="mb-2"
			/>

			<ProductGrid products={ products } />

			<Pagination totalPages={ totalPages } />
		</>
  );
}
