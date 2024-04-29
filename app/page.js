"use client"
import HeroSwiper from "@/components/HeroSwiper";
import Swiper2 from "@/components/Swiper2";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [userSessionStorage, setUserSessionStorage] = useState('');

  useEffect(()=> {
    if (typeof window !== 'undefined') {
      const userSession = sessionStorage.getItem('user');
      setUserSessionStorage(userSession)
    }
  }, [])

  useEffect(()=> {
    if(!user && userSessionStorage) {
      router.push('/sign-up')
    }
  }, [user, userSessionStorage])

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto px-4 md:px-8">
        <HeroSwiper />
        <Swiper2 heading={"Trending Clips"} />
        <Swiper2 heading={"New Viral"} />
      </div>
    </>
  );
}

