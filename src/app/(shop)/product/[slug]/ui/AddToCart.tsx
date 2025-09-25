'use client'

import { useState } from "react"
import { Product } from "@/interfaces"
import { CartProduct, Size } from "@/interfaces/product.interface"
import { QuantitySelector, SizeSelector } from "@/components"
import { useCartStore } from "@/store/cart/cart-store"

interface Props {
	product: Product
}

export const AddToCart = ({ product }: Props) => {

	const addProductToCart = useCartStore(state => state.addToCart);

	const [size, setSize] = useState<Size | undefined>()
	const [quantity, setQuantity] = useState<number>(1)
	const [posted, setPosted] = useState<boolean>(false)
	
	const addToCart = () => {
		setPosted(true)
		
		if(!size) return;

		const cartProduct: CartProduct = {
			id: product.id,
			slug: product.slug,
			title: product.title,
			quantity: quantity,
			size: size,
			image: product.images[0]
		}
		
		addProductToCart(cartProduct);
		setPosted(false)
		setSize(undefined)
		setQuantity(1)
	}

	return (
		<>
			{
				( posted && !size ) &&
				<span className="mt-2 text-red-800 fade-in">
					You must select a size
				</span>				
			}

			{ /* SIZES */ }
			<SizeSelector 
				selectedSize={ size } 
				availableSizes={product.sizes}
				onSizeChange={ (size) => setSize(size) }
			/>

			{ /* QUANTITY */ }
			<QuantitySelector 
				quantity={ quantity }
				onQuantityChange={ (quantity) => setQuantity(quantity) }
			/>

			{ /* BUTTONS */ }
			<button 
				className="btn-primary my-5"
				onClick={addToCart}
			>
				Add to Cart
			</button>
		</>
	)
}
