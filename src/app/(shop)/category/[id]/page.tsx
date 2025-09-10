import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces/product.interface";
import { initialData } from "@/seed/seed";

interface Props {
	params: {
		id: Category
	}
}

const products = initialData.products;

export default async function CategoryPage({ params }: Props) {

	const { id: category } = await params;
	const productsByCategory = products.filter(product => product.gender === category.toLocaleLowerCase());
	const title = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

	return (
		<div>
			<Title 
				title={ `${title}'s items` } 
				subTitle="All products"
				className="mb-2"
			/>
			{
				productsByCategory.length === 0 && <h2>No products found</h2>
			}
			{
				productsByCategory.length > 0 && <ProductGrid products={productsByCategory} />
			}
		</div>
	);
}