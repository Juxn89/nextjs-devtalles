"use client";

import { useEffect, useState } from "react";
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat, sleep } from "@/utils";
import clsx from "clsx";

export const PlaceOrder = () => {

	const [loaded, setLoaded] = useState<boolean>()
	const [isPlacingOrder, setIsPlacingOrder] = useState(false)

	const address = useAddressStore(state => state.address)
	const getSummaryInformation = useCartStore(state => state.getSummaryInformation )
	const cart = useCartStore(state => state.cart)
	
	const { city, country, phone, firstName, lastName, address: street } = address
	const { subTotal, totalTax, total, totalItemsInCart } = getSummaryInformation()

	useEffect(() => {
		setLoaded(true)
	}, [])

	const onPlaceOrder = async() => {
		setIsPlacingOrder(true)

		const productsToOrder = cart.map(product => ({
			productId: product.id,
			quantity: product.quantity,
			size: product.size
		}))
	}

	if(!loaded) {
		return <p>Loading...</p>
	}
	

	return (
		<div className="bg-white shadow-lg rounded-lg p-7 h-fit mt-5 md:mt-0">
			<h2 className="text-2xl font-bold mb-2"> Delivery Address </h2>
			<div className="mb-5">
				<p className="text-xl">{ `${firstName} ${lastName}` }</p>
				<p>{ street }</p>
				<p>{ `${city}, ${country}` }</p>
				<p>{ phone }</p>
			</div>

			<div className="w-full h-0.5 rounded-2xl bg-gray-400 mb-10" />

			<h2 className="text-2xl mb-2">Order Summary</h2>

			<div className="grid grid-cols-2">
				<span>No. of Items</span>
				<span className="text-right">{ totalItemsInCart }</span>

				<span>SubTotal</span>
				<span className="text-right">{ currencyFormat(subTotal) }</span>

				<span>Taxes (15%)</span>
				<span className="text-right">{ currencyFormat(totalTax) }</span>

				<span className="mt-5 text-2xl">Total</span>
				<span className="mt-5 text-2xl text-right">{ currencyFormat(total) }</span>
			</div>

			<div className="mt-5 mb-2 w-full">
				<p className="text-xs mb-5">
					<span>
						By placing your order, you agree to our{" "}
						<a href="#" className="underline">
							Terms and Conditions
						</a>{" "}
						and{" "}
						<a href="#" className="underline">
							Privacy Policy
						</a>
						.
					</span>
				</p>

				<p className="text-red-500">Error while placing order</p>

				<button
					className={
						clsx({
							'btn-primary': !isPlacingOrder,
							'btn-disabled': isPlacingOrder,
						})
					}
					onClick={ () => onPlaceOrder() }
				>
					Place order
				</button>
			</div>
		</div>
	);
};
