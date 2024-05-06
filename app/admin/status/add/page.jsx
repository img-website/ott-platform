"use client"
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

const AddStatus = () => {
    const router = useRouter()
    const { authData } = useContext(AuthContext)
    if (!authData?.isAuthenticated) {
        router.push('/admin');
        return null;
    }
    return (
        <div>Add Status</div>
    )
}

export default AddStatus