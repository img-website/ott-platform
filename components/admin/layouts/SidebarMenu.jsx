
import Link from 'next/link';
// import { TbCategory } from "react-icons/tb";
import { MdOutlineCategory, MdOutlineSpaceDashboard, MdOutlineVideoLibrary } from "react-icons/md";
import { TbTrendingUp3 } from "react-icons/tb";
import { usePathname } from 'next/navigation';
import { BiCategoryAlt, BiVideoPlus } from 'react-icons/bi';
import { HiTrendingUp } from 'react-icons/hi';

const SidebarMenu = ({ setSidebarIsOpen }) => {
    const pathname = usePathname();

    const sideLinks = [
        { href: '/admin/dashboard', label: 'Dashboard', icon: MdOutlineSpaceDashboard },
        { href: '/admin/all-videos', label: 'All Videos', icon: MdOutlineVideoLibrary },
        { href: '/admin/all-videos/add', label: 'Add Video', icon: BiVideoPlus },
        { href: '/admin/categories', label: 'Categories', icon: BiCategoryAlt },
        { href: '/admin/categories/add', label: 'Add Category', icon: MdOutlineCategory },
        { href: '/admin/status', label: 'Status', icon: HiTrendingUp },
        { href: '/admin/status/add', label: 'Add Status', icon: TbTrendingUp3 },
    ];
    return (
        <div className="flex flex-col py-8 overflow-hidden -mr-5 grow">
            <div className='flex flex-col overflow-auto h-full pr-5'>
                {
                    sideLinks?.map(link => (
                        <Link href={link?.href} key={link?.href} onClick={() => { setSidebarIsOpen(false) }} className={`flex items-center sm:gap-3 gap-2 py-3 px-4 rounded-lg text-gray-300 md:hover:text-white md:hover:bg-gray-900 duration-300 font-medium ${pathname == link.href ? '!text-white !bg-indigo-600' : ''}`}>
                            <div className="icon xl:*:size-5 *:size-4">
                                {link.icon && <link.icon />}
                            </div>
                            <div className="title xl:text-base text-sm">{link?.label}</div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default SidebarMenu