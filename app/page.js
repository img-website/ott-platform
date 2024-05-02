"use client"
import HeroSwiper from "@/components/HeroSwiper";
import Swiper2 from "@/components/Swiper2";
import { getAllData } from "@/app/firebase/config";
import { useEffect, useState } from "react";


export default function Home() {
  const [allMeme, setAllMeme] = useState([]);

  const fetchAllMemeData = async () => {
    try {
      const statusData = await getAllData('allmemes');
      setAllMeme(statusData);
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    fetchAllMemeData();
  }, [])

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto px-4 md:px-8">
        {
          allMeme?.length ? <HeroSwiper allMeme={allMeme} /> : ''
        }
        <Swiper2 heading={"Trending Clips"} viewMore={'/trending'} filterByStatus={'Trending'} />
        <Swiper2 heading={"New Viral"} viewMore={'/new-viral'} filterByStatus={'New'} />
      </div>
    </>
  );
}

