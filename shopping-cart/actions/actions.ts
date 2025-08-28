import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookirCart = async (): Promise<{ [id: string]: number }> => {
	if(hasCookie('cart')) {
		const cart = await getCookie('cart')

		const cookieCart = JSON.parse( cart ?? '{}' )
		return cookieCart
	}

	return {}
}

export const addProductToCart = async (id: string) => {
	const cookieCart = await getCookirCart()

	if(cookieCart[id])
		cookieCart[id] += 1
	else
		cookieCart[id] = 1

	setCookie('cart', JSON.stringify(cookieCart))
}