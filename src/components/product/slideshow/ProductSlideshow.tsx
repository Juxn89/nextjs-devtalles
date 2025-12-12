'use client'

import Image from 'next/image'
import { useState } from 'react';
import { Swiper as SwipperObject } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import './slideshow.css'
import { ProductImage } from '../product-image/ProductImage';

interface Props {
	images: string[],
	title: string,
	className?: string
}

export const ProductSlideshow = ({ images, title, className }: Props) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwipperObject>();
	
	return (
		<div className={className}>
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
				} as React.CSSProperties }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
			>
				{
					images.map((image, index) => (
						<SwiperSlide key={index}>
							<ProductImage 
								src={ image } 
								alt={`Product ${index + 1}`} 
								width={500} 
								height={500} 
								className='rounded-lg object-fill'
							/>
						</SwiperSlide>
					))
				}
			</Swiper>
			<Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
			>
				{
					images.map((image, index) => (
						<SwiperSlide key={index}>
							<Image src={ `/products/${image}` } alt={ title } width={1024} height={800} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}
