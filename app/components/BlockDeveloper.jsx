// Environment
import React, { useState, useEffect } from 'react';



// Assets
import PortfolioWork from './PortfolioWork'
import FeaturedWork from './FeaturedWork'
import HR1 from './HR1'



const BlockDeveloper = () => {




  return (
    <div className='justify-center items-center flex flex-col'>
      {/* hard skills */}
      <div className='max-w-2xl border border-2 border-white rounded-md mx-10 my-12 px-5 pb-10'>
        <p className='text-center my-8 text-xl'>
          Developer Hard Skills
        </p>
        <ul className='service-list'>
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            Javascript
          </li>
          <li>
            React
          </li>
          <li>
            Solidity
          </li>
          <li>
            React Native
          </li>
          <li>
            NextJS
          </li>
          <li>
            Sass
          </li>
          <li>
            Typescript
          </li>
          <li>
            Tailwind
          </li>
          <li>
            Bootstrap
          </li>
          <li>
            Wordpress
          </li>
          <li>
            NodeJS
          </li>
          <li>
            MongoDB
          </li>
          <li>
            AWS Amplify
          </li>
          <li>
            Redux
          </li>
          <li>
            APIs
          </li>
          <li>
            Git
          </li>
          <li>
            Github
          </li>
          <li>
            Lottie
          </li>
        </ul>
      </div>
      <HR1 />
      {/* featured work */}

        <FeaturedWork />

      <HR1 />
      {/* portfolio chronological */}
      <PortfolioWork />
    </div>
  )
}

export default BlockDeveloper