import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";

const products = initialData.products;

export default function Home() {
  return (
		<>
			<Title 
				title="Shop"
				subTitle="All products"
				className="mb-2"
			/>

			<ProductGrid products={ products } />
		</>
  );
}
