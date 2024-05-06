import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { IoChevronBack } from "react-icons/io5";

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full error'>
            <div className='text-center'>
                <h2 className='md:text-2xl text-xl font-semibold text-gray-100 pb-2'>Page Not Found</h2>
                <p className='md:text-base text-sm font-medium text-gray-300'>Could not find requested resource</p>
                <div className='w-full pt-4'>
                    <Button as={Link} href="/" color="danger" variant="solid" className='px-10' startContent={<IoChevronBack />} >
                        Return Home
                    </Button>
                </div>
            </div>
        </div>
    )
}