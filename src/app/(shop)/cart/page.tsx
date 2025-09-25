import Link from "next/link";
import { Title } from "@/components";
import { ProductsInCart } from "./ui/ProductsInCart";

export default function CartPage() {

	// redirect('/empty')

	return (
		<div className="flex justify-center items-center mb-72 px-10 sm:px-0">
			<div className="flex flex-col w-[1000px]">
				<Title title="Cart" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{ /* CART LIST */ }
					<div className="flex flex-col mt-5">
						<span className="text-lg">Add more items to your cart</span>
						<Link href="/home" className="underline mb-5">
							Still looking? Go to shop
						</Link>

						{ /* CART ITEMS */ }
						<ProductsInCart />
					</div>

					{ /* ORDER SUMMARY */ }
					<div className="bg-white rounded-xl shadow-xl p-7 h-fit">
						<h2 className="text-2xl mb-2">Order Summary</h2>

						<div className="grid grid-cols-2">
							<span>No. of Items</span>
							<span className="text-right">3</span>

							<span>SubTotal</span>
							<span className="text-right">$100</span>

							<span>Taxes (15%)</span>
							<span className="text-right">$100</span>

							<span className="mt-5 text-2xl">Total</span>
							<span className="mt-5 text-2xl text-right">$100</span>
						</div>

						<div className="mt-5 mb-2 w-full">
							<Link
								href="/checkout/address"
								className="flex btn-primary justify-center"
							>
								Checkout
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}