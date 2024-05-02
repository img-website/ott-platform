"use client"
import React, { useEffect } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/app/firebase/config';
import { toast } from 'react-toastify';

const testing = async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        toast.success("Document written with ID: ", docRef.id);
    } catch (e) {
        toast.error("Error adding document: ", e);
    }
}

const Testing = () => {
    useEffect(() => {
        testing();
    }, [])
    return (
        <div>Testing</div>
    )
}

export default Testing