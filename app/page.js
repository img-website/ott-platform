"use client"
import HeroSwiper from "@/components/HeroSwiper";
import Swiper2 from "@/components/Swiper2";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  if (typeof window !== 'undefined') {
      const userSession = sessionStorage.getItem('user')
  }
  if(!user && userSession) {
    router.push('/sign-up')
  }

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

