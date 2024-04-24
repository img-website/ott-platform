"use client"
import HeroSwiper from "@/components/HeroSwiper";
import Swiper2 from "@/components/Swiper2";

export default function Home() {
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

