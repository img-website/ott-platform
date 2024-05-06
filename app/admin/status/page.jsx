"use client"
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

const Status = () => {
    const router = useRouter()
    const { authData } = useContext(AuthContext)
    if (!authData?.isAuthenticated) {
        router.push('/admin');
        return null;
    }
    return (
        <div>Status</div>
    )
}

export default Status