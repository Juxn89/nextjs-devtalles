import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { titleFonts } from "@/config/fonts";
import { SizeSelector } from "@/components/product/size-selector/SizeSelector";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector } from "@/components";

interface Props {
	params: {
		slug: string
	}
}

export default async function ProductPage({ params }: Props) {
	const { slug } = await params;
	const product = initialData.products.find(product => product.slug === slug);

	if(!product)
		notFound()

	return (
		<div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
			{ /* SLIDESHOW */ }
			<div className="col-span-1 md:col-span-2">

				{ /* DESKTOP SLIDESHOW */ }
				<ProductSlideshow images={product.images} title={product.title} className="hidden md:block"/>

				{ /* MOBILE SLIDESHOW */ }
				<ProductMobileSlideshow images={product.images} title={product.title} className="block md:hidden" />
			</div>

			{ /* DETAILS */ }
			<div className="col-span-1 px-5">
				<h1 className={ `${ titleFonts.className } antialiased font-bold text-xl` }>
					{ product.title}
				</h1>
				<p className="text-lg bb-5">${ product.price } </p>

				{ /* SIZES */ }
				<SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />

				{ /* QUANTITY */ }
				<QuantitySelector quantity={ 2 } />

				{ /* BUTTONS */ }
				<button className="btn-primary my-5">
					Add to Cart
				</button>

				{ /* DESCRIPTION */ }
				<h3 className="font-bold text-sm">Description</h3>
				<p className="font-light">
					{ product.description }
				</p>
			</div>
		</div>
	);
}