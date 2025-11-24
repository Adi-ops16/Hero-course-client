'use client'
import Image from "next/image";
import Banner from "./Components/Home/Banner";
import HowItWorks from "./Components/Home/HowItWorks";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from "./Components/Home/AboutUs";
import FAQ from "./Components/Home/FAQ";
import Achievements from "./Components/Home/Achievements";
import Newsletter from "./Components/Home/NewsLetter";
import FeaturedCourses from "./Components/Home/FeaturedCourses";

export default function Home() {
  // aos initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    })
  }, [])
  // aos refresh
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <FeaturedCourses></FeaturedCourses>
      <HowItWorks></HowItWorks>
      <AboutUs></AboutUs>
      <Achievements></Achievements>
      <FAQ></FAQ>
      <Newsletter></Newsletter>
    </div>
  );
}
