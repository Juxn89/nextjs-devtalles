import { Metadata } from "next"
import { CartCounter } from "@/app/shopping-cart/components/CartCounter"

export const metadata: Metadata = {
	title: "Shopping Cart",
	description: "A simple counter"
}

const CounterPage = () => {

	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<span>Products in cart</span>
			<CartCounter value={10} />
		</div>
	)
}

export default CounterPage