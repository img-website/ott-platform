"use client"
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

const Categories = () => {
    const router = useRouter()
    const { authData } = useContext(AuthContext)
    if (!authData?.isAuthenticated) {
        router.push('/admin');
        return null;
    }
    return (
        <div>Categories</div>
    )
}

export default Categories