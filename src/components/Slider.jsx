import React from 'react'
import { useState,useEffect } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = () => {

    const [slide, setSlide] = useState(1);
    const prevSlide = () => {
        if(slide==1){
            setSlide(5)
        }else{
            setSlide(slide-1)
        }
    }
    const nextSlide = () => {
        if(slide==5){
            setSlide(1)
        }else{
            setSlide(slide+1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000);
        return () => clearInterval(interval);
      }, [slide]);

  return (
    <div className='relative w-[75%] h-[60vh] bg-black'>
        <button onClick={nextSlide} className='absolute top-[calc(50%-15px)] right-0 z-10 mr-2'>
           <FaArrowAltCircleRight className='text-3xl text-white' />
        </button>
       <div className='relative h-full w-full'>
          <div className={`absolute top-0 ${slide==1? `block`:`hidden`} h-full w-full`} ><img className=' object-cover h-full w-full' src="/pexels-ricardo-oliveira-18592820.jpg" alt="img1" /></div>
          <div className={`absolute top-0 ${slide==2? `block`:`hidden`} h-full w-full`} ><img className=' object-cover h-full w-full' src="/pexels-dibakar-roy-20025771.jpg" alt="img2" /></div>         
          <div className={`absolute top-0 ${slide==3? `block`:`hidden`} h-full w-full`} ><img className=' object-cover h-full w-full' src="/pexels-alexander-grey-1148998.jpg" alt="img3" /></div>
          <div className={`absolute top-0 ${slide==4? `block`:`hidden`} h-full w-full`} ><img className=' object-cover h-full w-full' src="/pexels-jan-van-der-wolf-19528148.jpg" alt="img4" /></div>
          <div className={`absolute top-0 ${slide==5? `block`:`hidden`} h-full w-full`} ><img className=' object-cover h-full w-full' src="/pexels-joem-castillo-19985008.jpg" alt="img5" /></div>
       </div>
       <button className='absolute top-[calc(50%-15px)] ml-2' onClick={prevSlide}>
        <FaArrowAltCircleLeft className='text-3xl text-white' />
       </button>
    </div>
  )
}

export default Slider