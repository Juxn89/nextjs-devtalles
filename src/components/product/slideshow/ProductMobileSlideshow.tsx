'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slideshow.css'
import { ProductImage } from '../product-image/ProductImage';

interface Props {
	images: string[],
	title: string,
	className?: string
}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {	
	return (
		<div className={className}>
			<Swiper
				style={{
					width: '100vw',
					height: '500px'
				}}
        pagination
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
			>
				{
					images.map((image, index) => (
						<SwiperSlide key={index}>
							<ProductImage 
								src={ image } 
								alt={ title } 
								width={600} 
								height={500} 
								className='object-fill'
							/>
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}
