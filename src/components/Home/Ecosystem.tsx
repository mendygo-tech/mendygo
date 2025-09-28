import React from 'react'
import Image from 'next/image'  
import EcosystemLight from "@/assets/LargeImages/ecosystemLight.avif";
import EcosystemDark from "@/assets/LargeImages/ecosystemDarklg-min.avif";

const Ecosystem = () => {
  return (
    <div className=" relative w-full flex flex-col lg:min-h-185 min-h-120 md:min-h-150 items-center">
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg'>Mendygo Ecosystem</h1>
          <p className='lg:text-md lg:w-1/3 w-2/3  dark:text-gray-300 lg:p-2 p-4 text-center'>Explore the various components and services that make up the Mendygo ecosystem.</p>
          <Image
          src={EcosystemLight}
          alt="Mendygo Ecosystem"
          height={1000}
          width={950}
          priority
          className="dark:hidden pt-15 lg:px-52 px-20 md:px-28  object-contain"
          
          />
          <Image
          src={EcosystemDark}
          alt="Mendygo Ecosystem"
          height={1000}
          priority
          className="hidden dark:block lg:scale-80 lg:-top-26 lg:mt-0 md:-top-30  mt-15 -bottom-5 absolute object-contain"
          
          
          />
        </div>
  )
}

export default Ecosystem