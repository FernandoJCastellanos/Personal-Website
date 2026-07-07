// Environment
import React from 'react';



// Assets
import EpisodePostRight from './EpisodePostRight';
import HR1 from './HR1';




const EpisodesComponent = () => {
// Episode 4
const imgsrc4 = "https://firebasestorage.googleapis.com/v0/b/personal-website-27d17.appspot.com/o/Personal%20Site%2FEpisodesPics%2FForkOnTheRoadPic.png?alt=media&token=17b5f0b5-6c9e-4861-9ac4-3a1d6b22e6ad"
const videosrc4 = "https://www.youtube.com/embed/BVkfJsYx2sE"
const lore4 = "The Source"
// Episode 3
const imgsrc3 = "https://firebasestorage.googleapis.com/v0/b/personal-website-27d17.appspot.com/o/Personal%20Site%2FEpisodesPics%2FFirePic.png?alt=media&token=19fb963b-f193-4add-a00d-b4a89606153f"
const videosrc3 = "https://www.youtube.com/embed/uRuaQCnZC5Q"
const lore3 = "Roads Untraveled"
  // Episode 2
const imgsrc2 = "https://firebasestorage.googleapis.com/v0/b/personal-website-27d17.appspot.com/o/Personal%20Site%2FEpisodesPics%2FLabPic.png?alt=media&token=ffa9039e-80c8-4e29-b2c7-4638c7fa1735"
const videosrc2 = "https://www.youtube.com/embed/XY1PNoKI5QU"
const lore2 = "Back to the Lab again"
// Episode 1
const imgsrc1 = "https://firebasestorage.googleapis.com/v0/b/personal-website-27d17.appspot.com/o/Personal%20Site%2FEpisodesPics%2FPowerPic.png?alt=media&token=d46ca8b2-c3a7-4530-9bb5-cceb7d7781de"
const videosrc1 = "https://www.youtube.com/embed/VxUPGQKHGDQ"
const lore1 = "Power"



  return (
    <div>
      <EpisodePostRight imgsrc={imgsrc4} videosrc={videosrc4} lore={lore4} />
      <div className='my-10'>
        <HR1/>
      </div>

      <EpisodePostRight imgsrc={imgsrc3} videosrc={videosrc3} lore={lore3} />
      <div className='my-10'>
        <HR1/>
      </div>
      <EpisodePostRight imgsrc={imgsrc2} videosrc={videosrc2} lore={lore2} />
      <div className='my-10'>
        <HR1/>
      </div>
      <EpisodePostRight imgsrc={imgsrc1} videosrc={videosrc1} lore={lore1} />

    </div>
  )
}

export default EpisodesComponent