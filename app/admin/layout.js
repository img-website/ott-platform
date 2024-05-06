"use client"
import Navbar from "@/components/admin/layouts/Navbar";
import Sidebar from "@/components/admin/layouts/Sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }) {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    const pathname = usePathname();
    const [isAuthPage, setIsAuthPage] = useState(false);
    useEffect(() => {
        const authPaths = ['/admin', '/admin/sign-up', '/admin/forgot-password']; // Your auth paths
        setIsAuthPage(authPaths.includes(pathname));
    }, [pathname]);
    return (
        <div className="flex h-dvh min-h-svh bg-gray-950 text-white overflow-hidden relative lg:px-5">

            {!isAuthPage && (<Sidebar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />)}

            <div className="grow flex overflow-hidden flex-col">
                {!isAuthPage && (<Navbar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />)}
                {children}
            </div>
        </div>
    );
}
