'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useCartStore } from '@/store'
import { QuantitySelector } from '@/components'
import Link from 'next/link'

export const ProductsInCart = () => {
	const productsInCart = useCartStore(state => state.cart)
	const updateProductQuantity = useCartStore(state => state.updateProductQuantity)
	const removeProduct = useCartStore(state => state.removeProduct)

	const [loaded, setLoaded] = useState<boolean>(false)

	useEffect(() => {		
		setLoaded(true)
	}, [])
	

	if(!loaded)
		return <p>Loading...</p>

	return (
		<>
			{
				productsInCart.map(product => (
					<div key={ `${product.slug}-${product.size}` } className="flex mb-5">
						<Image
							src={ `/products/${ product.image }` }
							alt={ product.title }
							width={100}
							height={100}
							className="mr-5 rounded object-fit"
						/>
						<div>
							<Link
								href={ `/products/${ product.slug }` }
								className='hover:underline cursor-pointer'
							>
								{ product.title }
							</Link>
							<p>${ product.quantity }</p>
							<QuantitySelector 
								quantity={ product.quantity }
								onQuantityChange={ (quantity) => updateProductQuantity(product, quantity) }
							/>
							<button 
								className="underline mt-3 hover:underline cursor-pointer"
								onClick={ () => removeProduct(product) }
							>
								Remove
							</button>
						</div>
					</div>
				))
			}
		</>
	)
}
