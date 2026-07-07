"use client"

// Environment
import React, { useContext, useEffect } from 'react'


// Assets
import BlockProfilePic from './BlockProfilePic'
import BlockIntro from './BlockIntro'
import BlockNavBar from './BlockNavBar'
import BlockDeveloper from './BlockDeveloper'
import BlockContact from './BlockContact'
import BlockMotionDesigner from './BlockMotionDesigner'
import { MyContext } from '../MyContext'
import HR1 from './HR1'


const App = () => {

  const {navbarActive} = useContext(MyContext)
  



  return (
    <div className='app-container'>
        <div className="block-profile-visible">
          <BlockProfilePic />
        </div>
        <div className="block-profile-not-visible">
          <BlockProfilePic />
        </div>


        <div className='body flex-col justify-center'>
          <HR1 />
          <BlockIntro />
          <BlockNavBar />
          {navbarActive === 1 && <BlockDeveloper />}
          {navbarActive === 2 && <BlockContact />}

          {navbarActive === 3 && <BlockMotionDesigner />}
        </div>
    </div>
  )
}

export default App