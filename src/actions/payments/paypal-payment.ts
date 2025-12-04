'use server'

import { PayPalAuthResult, PayPalOrdersStatusResponse } from "@/interfaces"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const paypalCheckPayment = async (paypalTransactionId: string) => {
	const authToken = await getPayPalAccessToken()

	if(!authToken)
		return { ok: false, message: 'The verification token could not be obtained' }

	const paymentStatus= await verifyPayPalPayment(authToken, paypalTransactionId)

	if(!paymentStatus)
		return { ok: false, message: 'We cound not verify the payment' }

	const { status, purchase_units } = paymentStatus
	const { invoice_id: order_id } = purchase_units[0]

	if(status !== 'COMPLETED')
		return { ok: false, message: 'The order has not been paid through PayPal yet.' }

	try {
		await prisma.order.update({
			where: { id: order_id },
			data: {
				isPaid: true,
				paidAt: new Date()
			}
		})

		revalidatePath(`/orders/${order_id}`)

	} catch (error) {
		console.log(error)
		return { ok: false, message: 'The payment could not be processed.' }
	}
}

const getPayPalAccessToken = async (): Promise<string | null> => {
	const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''
	const PAYPAL_SECRET = process.env.PAYPAL_CLIENT_SECRET || ''
	const PAYPAL_OATH2_URL = process.env.PAYPAL_OAUTH_URL || ''

	const base64Token = Buffer.from(
		`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`, 
		'utf-8'
	).toString('base64')

	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
	myHeaders.append("Authorization", `Basic ${base64Token}`);
	const urlencoded = new URLSearchParams();
	urlencoded.append("grant_type", "client_credentials");

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: urlencoded,
	};

	try {
		const response = await fetch(PAYPAL_OATH2_URL, {...requestOptions, cache: 'no-cache'})
		const result = await response.json() as PayPalAuthResult
		return result.access_token
	}
	catch(error){
		throw new Error('')
	}
}

const verifyPayPalPayment = async(paypalTransactionId: string, bearerToken: string): Promise<PayPalOrdersStatusResponse | null> => {
	const PAYPAL_ORDER_URL = process.env.PAYPAL_ORDERS_URL || ''
	const myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${bearerToken}`);

	const requestOptions = {
		method: "GET",
		headers: myHeaders
	};

	try {
		const response = await fetch(`${PAYPAL_ORDER_URL}/${paypalTransactionId}`, {...requestOptions, cache: 'no-cache'})
		const json = await response.json() as PayPalOrdersStatusResponse
		return json
	} catch (error) {
		console.log(`Something was wrong while verifying the Paypal Payment`, error)
		return null
	}
}