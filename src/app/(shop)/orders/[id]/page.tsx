import clsx from "clsx";
import Image from "next/image";
import { redirect } from "next/navigation";

import { PayPalButton, Title } from "@/components";
import { currencyFormat } from "@/utils";
import { IoCartOutline } from "react-icons/io5";
import { getOrderByID } from '@/actions/order/get-order-by-id'

interface Props {
	params: {
		id: string;
	}
}

export default async function OrderPage({ params }: Props) {
	const { id } = await params;

	const { ok, order } = await getOrderByID(id);

	if(!ok)
		redirect('/orders')

	const address = order?.OrderAddress

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
								{ 'bg-red-800': !order?.isPaid },
								{ 'bg-green-800': order?.isPaid }
							)
						}>
							<IoCartOutline size={30} />
							{/* <span className="mx-2">Payment pending</span> */}
							<span className="mx-2">{ order?.isPaid ? 'Paid' : 'Payment pending' }</span>
						</div>

						{ /* CART LIST */ }
						{
							order?.OrderItems.map(item => (
								<div key={ `${item.product.slug}-${item.size}` } className="flex mb-5">
									<Image
										src={ `/products/${ item.product.ProductImages[0].url }` }
										alt={ item.product.title }
										width={100}
										height={100}
										className="mr-5 rounded object-fill"
									/>
									<div>
										<p>{ item.product.title }</p>
										<p>{ currencyFormat(item.price) } x { item.quantity }</p>
										<p className="font-bold">Subtotal: { currencyFormat(item.price * item.quantity) }</p>
									</div>
								</div>
							))
						}						
					</div>

					{ /* ORDER SUMMARY */ }
					<div className="bg-white shadow-lg rounded-lg p-7 h-fit mt-5 md:mt-0">
						<h2 className="text-2xl font-bold mb-2"> Delivery Address </h2>
						<div className="mb-5">
							<p className="text-xl">{ `${address?.firstName} ${address?.lastName}` }</p>
							<p>{ address?.address }</p>
							<p>{ address?.city }, { address?.countryId }</p>
							<p>{ address?.phone }</p>
						</div>

						<div className="w-full h-0.5 rounded-2xl bg-gray-400 mb-10" />

						<h2 className="text-2xl mb-2">Order Summary</h2>

						<div className="grid grid-cols-2">
							<span>No. of Items</span>
							<span className="text-right"> { order?.OrderItems.reduce((acc, item) => acc + item.quantity, 0) } </span>

							<span>SubTotal</span>
							<span className="text-right"> { currencyFormat(order!.subTotal) } </span>

							<span>Taxes (15%)</span>
							<span className="text-right">{ currencyFormat(order!.tax) }</span>

							<span className="mt-5 text-2xl">Total</span>
							<span className="mt-5 text-2xl text-right">{ currencyFormat(order!.total) }</span>
						</div>

						<div className="mt-5 mb-2 w-full">
							<PayPalButton
								orderId={ order!.id }
								amount={ order!.total }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}