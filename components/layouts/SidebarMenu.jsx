
import Link from 'next/link';
import { TbBrandGoogleHome } from "react-icons/tb";
import { TbCategory } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import { TbPlaystationTriangle } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { FaBox, FaRegUserCircle } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import { usePathname } from 'next/navigation';

const SidebarMenu = ({setSidebarIsOpen}) => {
    const pathname = usePathname();

    const sideLinks = [
        { href: '/', label: 'Home', icon: TbBrandGoogleHome },
        { href: '/new-viral', label: 'New Viral', icon: WiStars },
        { href: '/categories', label: 'Categories', icon: TbCategory },
        { href: '/favorite', label: 'Favorite', icon: MdFavoriteBorder },
        { href: '/viral-videos', label: 'Viral Videos', icon: TbPlaystationTriangle },
        { href: '/trending', label: 'Trending', icon: FaArrowTrendUp },
        { href: '/blog', label: 'Blog', icon: FiEdit3 },
        { href: '/terabox-pro-free', label: 'Terabox PRO', icon: FaBox },
        { href: '/profile', label: 'Profile', icon: FaRegUserCircle },
    ];
    return (
        <div className="flex flex-col py-8 overflow-hidden -mr-5 grow">
            <div className='flex flex-col overflow-auto h-full pr-5'>
                {sideLinks?.map(link => (
                    <Link href={link?.href} key={link?.href} onClick={()=>{setSidebarIsOpen(false)}} className={`flex items-center sm:gap-3 gap-2 py-3 px-4 rounded-lg text-gray-300 md:hover:text-white md:hover:bg-gray-900 duration-300 font-medium ${pathname == link.href ? '!text-white !bg-indigo-600' : ''}`}>
                        <div className="icon xl:*:size-5 *:size-4">
                            {link.icon && <link.icon />}
                        </div>
                        <div className="title xl:text-base text-sm">{link?.label}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SidebarMenu