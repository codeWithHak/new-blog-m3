import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='relative w-[80%] mx-auto'>
        <Image src={'/images/hero-bg.png'}
         alt='Hero'
        //  width={500} 
        //  height={500}
        fill
         quality={100}
         className='object-contain w-[80%]'>

        </Image>
    </div>
  )
}

export default Hero