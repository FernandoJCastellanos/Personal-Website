import React, {useState} from 'react'
import arrow from "../assets/play-solid.svg"
import promo from "../assets/promo.png"
import Image from "next/image";




const BlockIntro = () => {

  // Portfolio Box 1 
  const [videoPlayer, setVideoPlayer] = useState(false);
  const toggleVideo = () => {
    setVideoPlayer(!videoPlayer)
  }
  // Button
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible1(!isVisible);
  };


  return (
    <div className='flex flex-col sm:flex-row justify-center items-center h-auto text-lg my-5'>
      <div className='w-[100%] sm:w-[50%] text-center px-[10%]'>
        Business- Strategy - Production - Development - 3D/2DMotion Designer - Advertising Major
      </div>
      <div className=" w-[100%] sm:w-[50%] text-center relative flex justify-center items-center" onClick={toggleVideo}>
        <Image className={`absolute w-[15%] h-[15%] z-20 ${videoPlayer ? 'hidden' : 'visible'}`} src={arrow} alt="arrow" width={1000} height={1000} />
        <Image className={`absolute w-[100%] h-[100%] px-5 bg-black z-10 ${videoPlayer ? 'hidden' : 'visible'}`} alt="VideoImage" src={promo} />
        <iframe className={`h-[350px] w-[95%] `}  width="100%" height="100%" src="https://www.youtube.com/embed/Pd3ikFsSNVM?si=zA9A4ugClU1hbWOv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
    </div>
  )
}
export default BlockIntro