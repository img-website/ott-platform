"use client"
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import Link from 'next/link';
import { IoIosReturnRight } from 'react-icons/io';
import { BiCategoryAlt } from 'react-icons/bi';
import { HiTrendingUp } from 'react-icons/hi';

const Dashboard = () => {
    const router = useRouter()
    const { authData } = useContext(AuthContext)
    if (!authData?.isAuthenticated) {
        router.push('/admin');
        return null;
    }
    return (
        <>
            <div className="overflow-x-hidden overflow-y-auto px-0 md:px-8">
                <ul className="flex flex-nowrap overflow-x-auto overflow-y-hidden">
                    <li className='w-1/3 p-3 relative group'>
                        <div class="max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
                            <div className="flex justify-between items-center">
                                <div className='font-extrabold text-3xl'>5700</div>
                                <MdOutlineVideoLibrary className='size-10 mb-3' />
                            </div>
                            <Link href="/admin/all-videos" className='before:absolute before:inset-0'>
                                <h5 class="mb-4 text-xl font-semibold tracking-tight text-white">All Videos</h5>
                            </Link>
                            <Link href="/admin/all-videos" class="inline-flex gap-2 font-medium items-center group-hover:underline">
                                View More Videos
                                <IoIosReturnRight className='size-6' />
                            </Link>
                        </div>
                    </li>
                    <li className='w-1/3 p-3 relative group'>
                        <div class="max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
                            <div className="flex justify-between items-center">
                                <div className='font-extrabold text-3xl'>84</div>
                                <BiCategoryAlt className='size-10 mb-3' />
                            </div>
                            <Link href="/admin/categories" className='before:absolute before:inset-0'>
                                <h5 class="mb-4 text-xl font-semibold tracking-tight text-white">All Categories</h5>
                            </Link>
                            <Link href="/admin/categories" class="inline-flex gap-2 font-medium items-center group-hover:underline">
                                View More Categories
                                <IoIosReturnRight className='size-6' />
                            </Link>
                        </div>
                    </li>
                    <li className='w-1/3 p-3 relative group'>
                        <div class="max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
                            <div className="flex justify-between items-center">
                                <div className='font-extrabold text-3xl'>22</div>
                                <HiTrendingUp className='size-10 mb-3' />
                            </div>
                            <Link href="/admin/status" className='before:absolute before:inset-0'>
                                <h5 class="mb-4 text-xl font-semibold tracking-tight text-white">Status</h5>
                            </Link>
                            <Link href="/admin/status" class="inline-flex gap-2 font-medium items-center group-hover:underline">
                                View More Status
                                <IoIosReturnRight className='size-6' />
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Dashboard