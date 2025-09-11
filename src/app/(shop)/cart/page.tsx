import Link from "next/link";
import Image from "next/image";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
]

export default function CartPage() {
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

						{ /* CART LIST */ }
						{
							productsInCart.map(product => (
								<div key={ product.slug } className="flex mb-5">
									<Image
										src={ `/products/${ product.images[0] }` }
										alt={ product.title }
										width={100}
										height={100}
										className="mr-5 rounded object-fill"
									/>
									<div>
										<p>{ product.title }</p>
										<p>${ product.price }</p>
										<QuantitySelector quantity={ 3 } />
										<button className="underline mt-3">
											Remove
										</button>
									</div>
								</div>
							))
						}						
					</div>

					{ /* ORDER SUMMARY */ }
					<div className="bg-white shadow-lg rounded-lg p-7 h-fit mt-5 md:mt-0">
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