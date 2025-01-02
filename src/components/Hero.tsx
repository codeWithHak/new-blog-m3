'use client'
import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import ThemeContext from "@/app/context/ThemeContext";
function Hero() {
  const {theme} = useContext(ThemeContext)
  return (
    
    <div className="w-full" style={{
      backgroundColor:theme.bg,
      color:theme.color
    }}>
    <div className="relative flex justify-center w-[80%] mx-auto h-[50vh] md:h-[80vh] font-workSans pt-5 md:pt-20 md:pb-24">
      <Image
        src={"/images/hero-bg.png"}
        alt="Hero"
        fill
        quality={100}
        priority
        // placeholder="blur"
        // blurDataURL="/images/hero-bg.png"
        className="hidden md:block object-cover absolute top-0 left-0"
      ></Image>
      <div className="md:absolute -bottom-10 left-10 ">
        <div 
           style={{
                      backgroundColor:theme.bg,
                      color:theme.color
                    }}
        className=" p-6  rounded-md max-w-md shadow-lg">
            <Button variant={"default"} size={"sm"} className=" block">Technology</Button>
            <p className="text-2xl md:text-3xl  font-semibold pt-3">The Impact of Technology on the Workplace: How Technology is Changing</p>
            <div className="flex gap-6 pt-4">
                <p>Jason Mamba</p>
                <p>December, 20, 2024</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
