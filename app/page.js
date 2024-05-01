"use client"
import HeroSwiper from "@/components/HeroSwiper";
import Swiper2 from "@/components/Swiper2";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, storage } from "@/app/firebase/config";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";


const fetchDataFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db,"allmemes"))

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()});
  })
  return data;
};


export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [userSessionStorage, setUserSessionStorage] = useState('');
  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userSession = sessionStorage.getItem('user');
      setUserSessionStorage(userSession)
    }
  }, [])

  useEffect(() => {
    // if (!user && userSessionStorage) {
    //   router.push('/sign-up')
    // }
  }, [user, userSessionStorage])

  // console.log("collections",collection("messages"))
  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await fetchDataFromFirestore();
        setAllMeme(data)  
      } catch (error) {
        console.log("error" , error)
      }
      
    }
    fetchData();
  },[])

  // console.log("ee",allMeme);

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto px-4 md:px-8">
        {
          allMeme.length ? <HeroSwiper allMeme={allMeme} /> : ''
        }
        <Swiper2 heading={"Trending Clips"} />
        <Swiper2 heading={"New Viral"} />
      </div>
    </>
  );
}

