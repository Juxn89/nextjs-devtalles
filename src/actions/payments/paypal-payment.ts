'use server'

import { PayPalAuthResult } from "@/interfaces"

export const paypalCheckPayment = async (paypalTransactionId: string) => {
	const authToken = await getPayPalAccessToken()

	if(!authToken)
		return { ok: false, message: 'The verification token could not be obtained' }
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
		const response = await fetch(PAYPAL_OATH2_URL, requestOptions)
		const result = await response.json() as PayPalAuthResult
		return result.access_token
	}
	catch(error){
		throw new Error('')
	}
}