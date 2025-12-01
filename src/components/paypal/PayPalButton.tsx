'use client'

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { CreateOrderData, CreateOrderActions } from '@paypal/paypal-js'
import { setTransactionId } from "@/actions";

interface Props {
	orderId: string;
	amount: number
}

export const PayPalButton = ({ orderId, amount }: Props) => {
	const [{ isPending }] = usePayPalScriptReducer()

	const roundedAmount = (Math.round(amount * 100) / 100).toFixed(2);

	if(isPending){
		return (
			<div className="animate-pulse mb-16">
				<div className="h-10 bg-gray-300 rounded" />
				<div className="h-10 mt-2 bg-gray-300 rounded" />
			</div>
		)
	}

	const createOrder = async (data: CreateOrderData, actions: CreateOrderActions): Promise<string> => {
		const transactionId = await actions.order.create({
			intent: "CAPTURE",
			purchase_units: [{
				amount: {
					value: roundedAmount.toString(),
					currency_code: 'USD'
				}
			}]
		})

		const { ok } = await setTransactionId(orderId, transactionId)

		if(!ok) {
			throw new Error('Order update failed')
		}

		return transactionId
	}

	return (
		<PayPalButtons
			createOrder={ createOrder }
		/>
	)
}