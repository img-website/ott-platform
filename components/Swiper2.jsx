import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import { Button } from '@nextui-org/button';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useRef, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';

// import { collection, getDocs, query, where } from "firebase/firestore";
import { getByFilter, getById } from '@/app/firebase/config';
import { toast } from 'react-toastify';

const Swiper2 = ({ heading, viewMore, filterByStatus }) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const [statusIdData, setStatusIdData] = useState();
    const [getAllMemeData, setGetAllMemeData] = useState([]);

    const fetchStatusData = async () => {
        try {
            const statusData = await getById('status', 'statusName', '==', filterByStatus);
            setStatusIdData(statusData?.statusID);
        } catch (error) {
            toast.error(error)
        }
    }
    const fetchAllMemeData = async () => {
        try {
            if (statusIdData) {
                const allMemeData = await getByFilter('allmemes', 'statusID', '==', statusIdData);
                setGetAllMemeData(allMemeData);
            }
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        fetchStatusData();
    }, [])

    useEffect(() => {

        fetchAllMemeData();
    }, [statusIdData])

    return (
        <div className='md:py-8 py-6 px-0 md:px-8'>
            <div className='flex items-center pb-3'>
                <div className='grow lg:text-xl md:text-lg text-base font-semibold text-gray-100'>{heading ? heading : "Send 'heading' prop"}</div>
                <div className='w-auto'>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <Button as={Link} href={viewMore} color="warning" className='text-gray-100 border-gray-100/50 mr-1 max-md:!h-8 max-md:!min-h-8' variant="bordered" aria-label="View All">
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
                className="mySwiper w-full !pt-2 !pb-3 [&_.swiper-pagination-bullet]:!bg-gray-100 md:[&_.swiper-pagination-bullet]:hidden"
            >
                {getAllMemeData && Array.isArray(getAllMemeData) && getAllMemeData?.map((item) => (
                    <SwiperSlide key={item?.id} className='p-1 relative group'>
                        <Button isIconOnly color="danger" aria-label="Like" className='absolute top-4 right-4 z-10 group-hover:opacity-100 opacity-0 transition-all'>
                            <FaRegHeart />
                        </Button>
                        <Link href={item?.url} target='_blank'>
                            <Image priority className='rounded-xl md:rounded-3xl shadow-xl shadow-gray-900 ring-2 ring-white/20 w-full aspect-[10/15] object-cover' width={200} height={200} src={item?.image} alt={item?.name} />
                            <div className='md:text-sm text-xs text-gray-100 line-clamp-2 my-2 mx-2'>{item?.name}</div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Swiper2