// Environment
import React, { useContext, useState } from 'react';
import { MyContext } from '../MyContext';
import Image from 'next/image';



// Assets
import SinglesComponent from './SinglesComponent';
import EpisodesComponent from './EpisodesComponent';
import arrow from "../assets/play-solid.svg"


const BlockMotionDesigner = () => {

  const { motionbar, moveToSingle, moveToEpisode  } = useContext(MyContext);


  // Feature Box 1  // Feature Box 1  // Feature Box 1  // Feature Box 1  // Feature Box 1
  const [videoPlayer1, setVideoPlayer1] = useState(false);
  const toggleVideo1 = () => {
    setVideoPlayer1(!videoPlayer1)
  }
  // Button
  const [isVisible1, setIsVisible1] = useState(false);
  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };




  return (
    <div className='justify-center items-center flex flex-col'>
      {/* hard skills */}
      <div className='max-w-2xl border border-2 border-white rounded-md mx-10 my-12 px-5 pb-10'>
        <p className='text-center my-8 text-xl'>
          Motion Hard Skills
        </p>
        <ul className='service-list'>
          <li>
            Cinema 4D
          </li>
          <li>
            Houdini
          </li>
          <li>
            Redshift
          </li>
          <li>
            Substance Designer
          </li>
          <li>
            Substance Painter
          </li>
          <li>
            Marvelous Designer
          </li>
          <li>
            After Effects
          </li>
          <li>
            Illustrator
          </li>
          <li>
            Photoshop
          </li>
          <li>
            Premiere
          </li>
        </ul>
      </div>


      <div className='w-[100%]'>
        <div className="w-[100%] relative flex justify-center items-center" onClick={toggleVideo1}>
          <Image className={`absolute w-[15%] h-[15%] z-20 ${videoPlayer1 ? 'hidden' : 'visible'}`} src={arrow} alt="arrow" width={1000} height={1000} />
          <img className={` w-[100%] h-[600px] object-cover rounded-md z-10 w-5 ${videoPlayer1 ? 'hidden' : 'visible'}`} alt="VideoImage" src="https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/reel.png?alt=media&token=e3a1a2dc-717c-44ef-9597-3408099179e7" />
          <iframe className={`h-[600px] w-[100%] ${videoPlayer1 ? 'visible' : 'hidden'}`}  width="100%" height="100%" src="https://www.youtube.com/embed/VjgM3-lPFLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>


      {/* navbar Singles, Episodes */}
      {/* <div className='motion-nav-container'>
        <div className={`motion-nav-bar ${motionbar === 1 ? "motion-nav-bar-single" : "motion-nav-bar-episode"}`}></div>
        <div className='motion-nav-item text-lg' onClick={moveToSingle}>
          Singles
        </div>
        <div className='motion-nav-item text-lg' onClick={moveToEpisode}>
          Episodes
        </div>
      </div>
      <div className='w-[100%]'>
        {motionbar === 1 ? <SinglesComponent /> : <EpisodesComponent />}
      </div> */}
    </div>
  )
}

export default BlockMotionDesigner