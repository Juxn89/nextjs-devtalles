import Link from "next/link";
import { Title } from "@/components";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";

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

						{ /* CART ITEMS */ }
						<ProductsInCart />
					</div>

					{ /* ORDER SUMMARY */ }
					<div className="bg-white rounded-xl shadow-xl p-7 h-fit">
						<OrderSummary />
					</div>
				</div>
			</div>
		</div>
	);
}