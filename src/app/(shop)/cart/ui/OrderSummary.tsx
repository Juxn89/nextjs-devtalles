'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { useCartStore } from "@/store"
import { currencyFormat } from "@/utils/currenctFormat"

export const OrderSummary = () => {	
	const [loaded, setLoaded] = useState(false)
	const getSummaryInformation = useCartStore(state => state.getSummaryInformation )
	const { subTotal, totalTax, total, totalItemsInCart } = getSummaryInformation()
	
	useEffect(() => {
		setLoaded(true)
		
	}, [])

	if(!loaded) return <div>Loading...</div>
	

	return (
		<>
			<h2 className="text-2xl mb-2">Order Summary</h2>

			<div className="grid grid-cols-2">
				<span>No. of Items</span>
				<span className="text-right">{ totalItemsInCart === 1 ? `1 item` : `${totalItemsInCart} items` }</span>

				<span>SubTotal</span>
				<span className="text-right">{currencyFormat(subTotal)}</span>

				<span>Taxes (15%)</span>
				<span className="text-right">{currencyFormat(totalTax)}</span>

				<span className="mt-5 text-2xl">Total</span>
				<span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
			</div>

			<div className="mt-5 mb-2 w-full">
				<Link
					href="/checkout/address"
					className="flex btn-primary justify-center"
				>
					Checkout
				</Link>
			</div>
		</>
	)
}
