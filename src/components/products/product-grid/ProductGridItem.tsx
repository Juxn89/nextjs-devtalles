import Image from "next/image"
import { Product } from "@/interfaces"
import Link from "next/link"

interface Props {
	product: Product
}

export const ProductGridItem = ({ product }: Props) => {
	return (
		<div className="rounded-md overflow-hidden fade-in">			
			<Link href={ `/product/${ product.slug }` }>
				<Image 
					src={ `/products/${ product.images[0] }` }
					alt={ product.title }
					width={ 500 }
					height={ 500 }
					className="w-full object-cover"
				/>
			</Link>

			<div className="p-4 flex flex-col">
				<Link href={ `/product/${ product.slug }` } className="text-lg font-medium hover:underline hover:text-blue-600">
					{ product.title }				
				</Link>
				<span className="font-bold"> { `$${ product.price }` } </span>
			</div>
		</div>
	)
}
