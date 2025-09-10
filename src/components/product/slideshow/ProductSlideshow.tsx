'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

interface Props {
	images: string[],
	title: string,
	className?: string
}

export const ProductSlideshow = ({ images, title, className }: Props) => {
	return (
		<div className={className}>
			<Swiper
				pagination={{
					clickable: true
				}}
			>
				{
					images.map((image, index) => (
						<SwiperSlide key={index}>
							<Image src={ `/products/${image}` } alt={`Product ${index + 1}`} width={500} height={500} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}
