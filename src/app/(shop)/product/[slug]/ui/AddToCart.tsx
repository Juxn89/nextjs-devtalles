'use client'

import { useState } from "react"
import { Product } from "@/interfaces"
import { Size } from "@/interfaces/product.interface"
import { QuantitySelector, SizeSelector } from "@/components"

interface Props {
	product: Product
}

export const AddToCart = ({ product }: Props) => {
	
	const [size, setSize] = useState<Size | undefined>()
	const [quantity, setQuantity] = useState<number>(1)
	const [posted, setPosted] = useState<boolean>(false)
	
	const addToCart = () => {
		setPosted(true)
		
		if(!size) return;
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
