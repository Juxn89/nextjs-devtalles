'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useCartStore } from '@/store'
import { currencyFormat } from '@/utils'

export const ProductsInCart = () => {
	const productsInCart = useCartStore(state => state.cart)

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
							<span>
								{ product.size} - { product.title } ({ product.quantity })
							</span>
							<p className='font-bold'>{ currencyFormat( product.price * product.quantity ) }</p>
						</div>
					</div>
				))
			}
		</>
	)
}
