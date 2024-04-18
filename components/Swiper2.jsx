import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import { Button } from '@nextui-org/button';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from 'react';

const Swiper2 = ({heading}) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    return (
        <div className='py-8 px-4 md:px-8'>
            <div className='flex items-center pb-3'>
                <div className='grow lg:text-xl md:text-lg text-base font-semibold text-gray-100'>{heading? heading : "Send 'heading' prop"}</div>
                <div className='w-auto'>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <Button color="warning" className='text-gray-100 border-gray-100/50 mr-1 max-md:!h-8 max-md:!min-h-8' variant="bordered" aria-label="View All">
                            View All
                        </Button>
                        <Button ref={navigationPrevRef} isIconOnly color="danger" className='text-xl max-md:!w-8 max-md:!min-w-8 max-md:!h-8 max-md:!min-h-8 [&.swiper-button-disabled]:opacity-50 max-md:hidden' aria-label="Prev">
                            <FiChevronLeft />
                        </Button>
                        <Button ref={navigationNextRef} isIconOnly color="danger" className='text-xl max-md:!w-8 max-md:!min-w-8 max-md:!h-8 max-md:!min-h-8 [&.swiper-button-disabled]:opacity-50 max-md:hidden' aria-label="Next">
                            <FiChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                grabCursor={true}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    900: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    },
                    1100: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper w-full !pt-2 !pb-3 [&_.swiper-pagination-bullet]:!bg-gray-100"
            >
                <SwiperSlide className='p-1'>
                    <Image priority className='rounded-xl md:rounded-3xl shadow-xl shadow-gray-900 ring-2 ring-white/20 w-full aspect-[10/15] object-cover' width={200} height={200} src="https://swiperjs.com/demos/images/nature-1.jpg" alt='Hero Swiper' />
                    <div className='md:text-sm text-xs text-gray-100 line-clamp-2 my-2 mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt quia iusto vel, repellat nihil</div>
                </SwiperSlide>
                <SwiperSlide className='p-1'>
                    <Image priority className='rounded-xl md:rounded-3xl shadow-xl shadow-gray-900 ring-2 ring-white/20 w-full aspect-[10/15] object-cover' width={200} height={200} src="https://swiperjs.com/demos/images/nature-1.jpg" alt='Hero Swiper' />
                    <div className='md:text-sm text-xs text-gray-100 line-clamp-2 my-2 mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt quia iusto vel, repellat nihil</div>
                </SwiperSlide>
                <SwiperSlide className='p-1'>
                    <Image priority className='rounded-xl md:rounded-3xl shadow-xl shadow-gray-900 ring-2 ring-white/20 w-full aspect-[10/15] object-cover' width={200} height={200} src="https://swiperjs.com/demos/images/nature-1.jpg" alt='Hero Swiper' />
                    <div className='md:text-sm text-xs text-gray-100 line-clamp-2 my-2 mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt quia iusto vel, repellat nihil</div>
                </SwiperSlide>
                <SwiperSlide className='p-1'>
                    <Image priority className='rounded-xl md:rounded-3xl shadow-xl shadow-gray-900 ring-2 ring-white/20 w-full aspect-[10/15] object-cover' width={200} height={200} src="https://swiperjs.com/demos/images/nature-1.jpg" alt='Hero Swiper' />
                    <div className='md:text-sm text-xs text-gray-100 line-clamp-2 my-2 mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt quia iusto vel, repellat nihil</div>
                </SwiperSlide>
                <SwiperSlide className='p-1'>
                    <Image priority className='rounded-xl md:rounded-3xl shadow-xl shadow-gray-900 ring-2 ring-white/20 w-full aspect-[10/15] object-cover' width={200} height={200} src="https://swiperjs.com/demos/images/nature-1.jpg" alt='Hero Swiper' />
                    <div className='md:text-sm text-xs text-gray-100 line-clamp-2 my-2 mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt quia iusto vel, repellat nihil</div>
                </SwiperSlide>
                <SwiperSlide className='p-1'>
                    <Image priority className='rounded-xl md:rounded-3xl shadow-xl shadow-gray-900 ring-2 ring-white/20 w-full aspect-[10/15] object-cover' width={200} height={200} src="https://swiperjs.com/demos/images/nature-1.jpg" alt='Hero Swiper' />
                    <div className='md:text-sm text-xs text-gray-100 line-clamp-2 my-2 mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt quia iusto vel, repellat nihil</div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Swiper2