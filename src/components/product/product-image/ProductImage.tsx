'use client'

import Image from "next/image"

interface Props {
	src?: string,
	alt: string,
	className?: React.StyleHTMLAttributes<HTMLImageElement>['className'],
	style?: React.StyleHTMLAttributes<HTMLImageElement>['style'],
	width: number,
	height: number
}

export const ProductImage = ({ src, alt, className, width, height, style }: Props) => {
	const imageUrl = src ?
		src.startsWith('http')
		? src
		: `/products/${src}`
	: '/imgs/placeholder.jpg'
	return (
		<Image
			src={ imageUrl }
			width={ width }
			height={ height }
			alt={ alt }
			className={ className }
			style={ style }
		/>
	)
}
