import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const HeroSwiper = () => {
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
                <SwiperSlide className='overflow-hidden rounded-xl md:rounded-3xl shadow-xl shadow-gray-900'>
                    <Image priority className='w-full aspect-[10/15] object-cover' width={200} height={200} src="https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg" alt='Hero Swiper' />
                </SwiperSlide>
                <SwiperSlide className='overflow-hidden rounded-xl md:rounded-3xl shadow-xl shadow-gray-900'>
                    <Image priority className='w-full aspect-[10/15] object-cover' width={200} height={200} src="https://image.tmdb.org/t/p/w1280/lW7qHsNVo1hBtJugeE8BBJFUJd5.jpg" alt='Hero Swiper' />
                </SwiperSlide>
                <SwiperSlide className='overflow-hidden rounded-xl md:rounded-3xl shadow-xl shadow-gray-900'>
                    <Image priority className='w-full aspect-[10/15] object-cover' width={200} height={200} src="https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" alt='Hero Swiper' />
                </SwiperSlide>
                <SwiperSlide className='overflow-hidden rounded-xl md:rounded-3xl shadow-xl shadow-gray-900'>
                    <Image priority className='w-full aspect-[10/15] object-cover' width={200} height={200} src="https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg" alt='Hero Swiper' />
                </SwiperSlide>
                <SwiperSlide className='overflow-hidden rounded-xl md:rounded-3xl shadow-xl shadow-gray-900'>
                    <Image priority className='w-full aspect-[10/15] object-cover' width={200} height={200} src="https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg" alt='Hero Swiper' />
                </SwiperSlide>
                <SwiperSlide className='overflow-hidden rounded-xl md:rounded-3xl shadow-xl shadow-gray-900'>
                    <Image priority className='w-full aspect-[10/15] object-cover' width={200} height={200} src="https://image.tmdb.org/t/p/w1280/qU3aDPWKYWrWIjpt5H8Eyiwyk8h.jpg" alt='Hero Swiper' />
                </SwiperSlide>
                <SwiperSlide className='overflow-hidden rounded-xl md:rounded-3xl shadow-xl shadow-gray-900'>
                    <Image priority className='w-full aspect-[10/15] object-cover' width={200} height={200} src="https://image.tmdb.org/t/p/w1280/8ZFcbZjIdFngvmjAeXbjZeLp6ck.jpg" alt='Hero Swiper' />
                </SwiperSlide>
                <SwiperSlide className='overflow-hidden rounded-xl md:rounded-3xl shadow-xl shadow-gray-900'>
                    <Image priority className='w-full aspect-[10/15] object-cover' width={200} height={200} src="https://image.tmdb.org/t/p/w1280/6EkAgDsYoVUzbmALIhxH5rQ1PO6.jpg" alt='Hero Swiper' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HeroSwiper

