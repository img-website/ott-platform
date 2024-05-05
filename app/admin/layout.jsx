"use client"
import Navbar from "@/components/admin/layouts/Navbar";
import Sidebar from "@/components/admin/layouts/Sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }) {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    const pathName = usePathname()
    const [loginLayout, setLoginLayout] = useState(false)

    useEffect(() => {
        setLoginLayout(pathName == '/sign-in' || pathName == '/sign-up')
    }, [pathName])
    return (
        <div className="flex h-dvh min-h-svh bg-gray-950 text-white overflow-hidden relative lg:px-5">

            {loginLayout ? <></> : <Sidebar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />}

            <div className="grow flex overflow-hidden flex-col">
                {loginLayout ? <></> : <Navbar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />}
                {children}
            </div>
        </div>
    );
}
