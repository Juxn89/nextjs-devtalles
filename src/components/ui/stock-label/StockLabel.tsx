'use client'

import { useEffect, useState } from "react"
import { titleFonts } from "@/config/fonts"
import { getStockBySlug } from "@/actions/"

interface Props {
	slug: string
}

export const StockLabel = ({ slug }: Props) => {
	const [stock, setStock] = useState<number>(0)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		getStock()
	}, [])

	const getStock = async () => {
		const inStock = await getStockBySlug(slug)
		setStock(inStock)
		setLoading(false)
	}

	return (
		<h2 className={ `${ titleFonts.className } antialiased font-bold text-lg` }>
			Stock: { stock > 0 ? stock : 'Out of Stock' }
		</h2>
	)
}
