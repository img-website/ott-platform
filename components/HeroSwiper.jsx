import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Button } from '@nextui-org/button';
import { FaRegHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const HeroSwiper = ({ allMeme }) => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(allMeme)
    }, [allMeme])
    return (
        <>
            <Swiper
                slidesPerView={2.1}
                spaceBetween={0}
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                pagination={{
                    dynamicBullets: true,
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 40,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 0,
                        coverflowEffect: {
                            rotate: 30,
                            stretch: 80,
                            depth: 50,
                            modifier: 1,
                            slideShadows: true,
                        }
                    },
                    768: {
                        slidesPerView: 3.3,
                        spaceBetween: 0,
                        coverflowEffect: {
                            rotate: 30,
                            stretch: 80,
                            depth: 50,
                            modifier: 1,
                            slideShadows: true,
                        }
                    },
                    900: {
                        slidesPerView: 3.4,
                        spaceBetween: 0,
                        coverflowEffect: {
                            rotate: 30,
                            stretch: 80,
                            depth: 50,
                            modifier: 1,
                            slideShadows: true,
                        }
                    },
                    1100: {
                        slidesPerView: 3.4,
                        spaceBetween: 0,
                        coverflowEffect: {
                            rotate: 30,
                            stretch: 80,
                            depth: 50,
                            modifier: 1,
                            slideShadows: true,
                        }
                    },
                    1200: {
                        slidesPerView: 3.4,
                        spaceBetween: 0,
                        coverflowEffect: {
                            rotate: 30,
                            stretch: 80,
                            depth: 50,
                            modifier: 1,
                            slideShadows: true,
                        }
                    },
                    1350: {
                        slidesPerView: 3.6,
                        spaceBetween: 0,
                        coverflowEffect: {
                            rotate: 30,
                            stretch: 100,
                            depth: 50,
                            modifier: 1,
                            slideShadows: true,
                        }
                    },
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper w-full !pt-4 !pb-8 sm:[&_.swiper-wrapper_.swiper-slide]:opacity-0 sm:[&_.swiper-wrapper_.swiper-slide-visible]:!opacity-100 [&_.swiper-wrapper_.swiper-slide]:transition-all [&_.swiper-pagination-bullet]:!bg-gray-100 max-sm:!overflow-visible"
            >
                {data && Array.isArray(data) && data.map((item) => (
                    <SwiperSlide key={item?.id} className='overflow-hidden rounded-xl md:rounded-3xl shadow-xl shadow-gray-900 relative group'>
                        <Button isIconOnly color="danger" aria-label="Like" className='absolute top-4 right-4 z-10 group-hover:opacity-100 opacity-0 transition-all'>
                            <FaRegHeart />
                        </Button>
                        <Link href={item?.url} target='_blank'>
                            <Image className='w-full aspect-[10/15] object-cover' priority width={200} height={200} src={item?.image} alt={item?.name} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default HeroSwiper

