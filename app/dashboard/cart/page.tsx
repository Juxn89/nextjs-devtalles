import { Metadata } from "next";
import { cookies } from "next/headers";
import { ItemCard } from "@/shopping-cart";
import { WidgetItem } from "@/app/components";
import { Product, products } from "@/products/data/products";

export const metadata: Metadata = {
	title: 'Shopping cart',
	description: 'SEO Title'
}

interface ProductInCart {
	product: Product,
	quantity: number
}

interface CookiesProductCart {
	[id: string]: number
}

const getProductsInCart = (cart: CookiesProductCart): ProductInCart[] => {
	const productsInCart: ProductInCart[] = []

	Object.keys(cart).forEach(productItem => {
		const product = products.find(p => p.id === productItem)

		if(product) {
			productsInCart.push({ product: product, quantity: cart[productItem] })
		}
	})

	return productsInCart
}

export default async function CartPage() {
	const cookiesStore = await cookies()
	const cart = JSON.parse( cookiesStore.get('cart')?.value ?? '{}' ) as CookiesProductCart
	const productsInCart = getProductsInCart(cart)
	const totalToPay = productsInCart.reduce( (total, item) => total + (item.product.price * item.quantity), 0 )

	return (
		<div>
			<h1 className="text-5xl">Products in cart</h1>
			<hr className="mb-2" />
			
			<div className="flex flex-col sm:flex-row gap-2 w-full">
				<div className="flex flex-col gap-2 w-full sm:w-8/12">
				{
					productsInCart.map(({ product, quantity }) => (<ItemCard product={product} quantity={quantity} key={product.id}/>))					
				}
				</div>
				<div className="flex flex-col w-full sm:w-4/12">
					<WidgetItem title="Total in cart">
						<div className="mt-2 flex justify-center gap-4">
							<h3 className="text-3xl font-bold text-gray-700">${ totalToPay }</h3>
						</div>
						<span className="font-bold text-center text-gray-500">Taxes (15%): ${ (totalToPay * 1.15).toFixed(2) }</span>
					</WidgetItem>
				</div>
			</div>
		</div>
	);
}