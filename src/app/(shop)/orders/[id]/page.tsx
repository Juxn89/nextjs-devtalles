import clsx from "clsx";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
]

interface Props {
	params: {
		id: string;
	}
}

export default async function OrderPage({ params }: Props) {
	const { id } = await params;

	return (
		<div className="flex justify-center items-center mb-72 px-10 sm:px-0">
			<div className="flex flex-col w-[1000px]">
				<Title title={ `Order #${ id }` } />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{ /* CART LIST */ }
					<div className="flex flex-col mt-5">
						<div className={ 
							clsx(
								"flex items-center rounded-lg py-2 px-3.5 text-bold text-white mb-5", 
								{ 'bg-red-800': false },
								{ 'bg-green-800': true }
							)
						}>
							<IoCartOutline size={30} />
							{/* <span className="mx-2">Payment pending</span> */}
							<span className="mx-2">Paid</span>
						</div>

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
										<p>${ product.price } x 3</p>
										<p className="font-bold">Subtotal: ${ product.price * 3 }</p>
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
						<h2 className="text-2xl font-bold mb-2"> Delivery Address </h2>
						<div className="mb-5">
							<p className="text-xl">Juan Gómez</p>
							<p>Evergreen Ave.</p>
							<p>Springfield, USA</p>
							<p>+1 123 456 7890</p>
						</div>

						<div className="w-full h-0.5 rounded-2xl bg-gray-400 mb-10" />

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
							<div className={ 
								clsx(
									"flex items-center rounded-lg py-2 px-3.5 text-bold text-white mb-5", 
									{ 'bg-red-800': false },
									{ 'bg-green-800': true }
								)
							}>
								<IoCartOutline size={30} />
								{/* <span className="mx-2">Payment pending</span> */}
								<span className="mx-2">Paid</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}