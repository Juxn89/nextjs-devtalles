// export const revalidate = 604800 // 7 days
export const revalidate = 10 // 7 days

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from './ui/AddToCart';
import { titleFonts } from "@/config/fonts";
import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow, StockLabel } from "@/components";

interface Props {
	params: {
		slug: string
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const product = await getProductBySlug(slug);

	return {
		title: product.title ?? 'Product not found',
		description: product?.description ?? '',
		openGraph: {
			title: product?.title ?? 'Product not found',
			description: product?.description ?? '',			
			images: [ `/product/${product?.images[1]}` ]
		}
	}
}

export default async function ProductPage({ params }: Props) {
	const { slug } = await params;
	const product = await getProductBySlug(slug);

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
				<StockLabel slug={ product.slug } />
				
				<h1 className={ `${ titleFonts.className } antialiased font-bold text-xl` }>
					{ product.title}
				</h1>
				<p className="text-lg bb-5">${ product.price } </p>

				<AddToCart product={product} />

				{ /* DESCRIPTION */ }
				<h3 className="font-bold text-sm">Description</h3>
				<p className="font-light">
					{ product.description }
				</p>
			</div>
		</div>
	);
}