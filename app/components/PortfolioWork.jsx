// Environment
import React, {useState} from "react";
import LearnMore from "./ShowMore";
import Image from 'next/image';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


// Components

  
import arrow from "../assets/play-solid.svg"
import { Card } from "./Card";
  
  


  
const PortfolioWork = () => {


  // Portfolio Box 16 
  const [videoPlayer16, setVideoPlayer16] = useState(false);
  const toggleVideo16 = () => {
    setVideoPlayer16(!videoPlayer16)
  }
  // Button
  const [isVisible16, setIsVisible16] = useState(false);
  const toggleVisibility16 = () => {
    setIsVisible16(!isVisible16);
  };
  // Portfolio 16  // Portfolio 16  // Portfolio 16  // Portfolio 16  // Portfolio 16  // Portfolio 16  // Portfolio 16  // Portfolio 16
const title16="Blogkerting"
const img16 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/app/assets/img/edsblog.png"
const video16 = "https://www.youtube.com/embed/semdIH5eGeQ?si=C1pGzT7mFERvJb2u"
const techUsed16= "Wordpress, CTI, ACF, GraphQl, Apollo, NextJS"
const accomplishements16="Good Practice"
const repo16="https://github.com/FernandoJCastellanos/Eds-Blog"





  // Portfolio Box 15 
  const [videoPlayer15, setVideoPlayer15] = useState(false);
  const toggleVideo15 = () => {
    setVideoPlayer15(!videoPlayer15)
  };
  // Button
  const [isVisible15, setIsVisible15] = useState(false);
  const toggleVisibility15 = () => {
    setIsVisible15(!isVisible15);
  };
  // Portfolio 15  // Portfolio 15  // Portfolio 15  // Portfolio 15  // Portfolio 15  // Portfolio 15  // Portfolio 15  // Portfolio 15
const title15="Buy and Sell money!"
const img15 = "https://github.com/FernandoJCastellanos/Personal-Website/blob/master/app/assets/img/homeSeller.png"
const video15 = "https://www.youtube.com/embed/8SGU9MMV-4U?si=tUUAvd63KOgpTr3I"
const techUsed15= "Wordpress, CTI, ACF, GraphQl, Apollo, NextJS"
const accomplishements15="Learned how to properly work with Wordpress"
const repo15="https://github.com/FernandoJCastellanos/Homes-App"




  // Portfolio Box 14 
  const [videoPlayer14, setVideoPlayer14] = useState(false);
  const toggleVideo14 = () => {
    setVideoPlayer14(!videoPlayer14)
  }
  // Button
  const [isVisible14, setIsVisible14] = useState(false);
  const toggleVisibility14 = () => {
    setIsVisible14(!isVisible14);
  };
  // Portfolio 14  // Portfolio 14  // Portfolio 14  // Portfolio 14  // Portfolio 14  // Portfolio 14  // Portfolio 14  // Portfolio 14
const title14="Tindog Wordpress Edition!"
const img14 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/app/assets/img/Tindog.png"
const video14 = "https://www.youtube.com/embed/AkiOaqVMAoc?si=4jdHvbDV2cG1UKDt"
const techUsed14= "Wordpress, Elementor, REST-API, NextJS"
const accomplishements14="Worked with Wordpress elementor and REST-API"
const repo14="https://github.com/FernandoJCastellanos/WP-Headless-Tindog"



  // Portfolio Box 13 
  const [videoPlayer13, setVideoPlayer13] = useState(false);
  const toggleVideo13 = () => {
    setVideoPlayer13(!videoPlayer13)
  }
  // Button
  const [isVisible13, setIsVisible13] = useState(false);
  const toggleVisibility13 = () => {
    setIsVisible13(!isVisible13);
  };
  // Portfolio 13  // Portfolio 13  // Portfolio 13  // Portfolio 13  // Portfolio 13  // Portfolio 13  // Portfolio 13  // Portfolio 13
const title13="Twerking for a living"
const img13 = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/onlyfans-reactnative.png?alt=media&token=725580fc-13f2-45a9-974d-d0650ccd70c9"
const video13 = "https://www.youtube.com/embed/MCgKAshyd_k?si=gl2D4fPZjI93J4RX"
const techUsed13= "Fullstack- React Native and AWS Amplify"
const accomplishements13="Practiced some React Native, and learn some AWS Amplify"
const repo13="https://github.com/FernandoJCastellanos/Onlyfans-App-Fullstack"


  
  // Portfolio Box 12 
  const [videoPlayer12, setVideoPlayer12] = useState(false);
  const toggleVideo12 = () => {
    setVideoPlayer12(!videoPlayer12)
  }
  // Button
  const [isVisible12, setIsVisible12] = useState(false);
  const toggleVisibility12 = () => {
    setIsVisible12(!isVisible12);
  };
  // Portfolio 12  // Portfolio 12  // Portfolio 212  // Portfolio 12  // Portfolio 12  // Portfolio 12  // Portfolio 12  // Portfolio 12
const title12="What are thoooose!!"
const img12 = "https://firebasestorage.googleapis.com/v0/b/freelancewebsite-36de8.appspot.com/o/nike-reactnative.png?alt=media&token=ad69087b-8971-423e-ac42-d6207a1978f3"
const video12 = "https://www.youtube.com/embed/YAuSJl5kj6s?si=1Gz3k4vvg4M30WNj"
const techUsed12= "FullStack- React Native and MongoDB"
const accomplishements12="Getting comfortable with FullStack workflows"
const repo12="https://github.com/FernandoJCastellanos/Nike-E-Commerce-app"




  // Portfolio Box 11 
  const [videoPlayer11, setVideoPlayer11] = useState(false);
  const toggleVideo11 = () => {
    setVideoPlayer11(!videoPlayer11)
  }
  // Button
  const [isVisible11, setIsVisible11] = useState(false);
  const toggleVisibility11 = () => {
    setIsVisible11(!isVisible11);
  };
  // Portfolio 11  // Portfolio 11  // Portfolio 11  // Portfolio 11  // Portfolio 11  // Portfolio 11  // Portfolio 11  // Portfolio 11
const title11="Keeping up with the Crypto Bros!"
const img11 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/cryptoverse%20foto.png?alt=media&token=c506e6a9-4c73-45f2-bac0-4594be589912"
const video11 = "https://www.youtube.com/embed/KtX6ak9g2Hg"
const techUsed11= "React, Redux and Typescript"
const accomplishements11="Practiced some API data pulling with Redux"
const repo11="https://github.com/FernandoJCastellanos/CryptoVerse"
const demo11 ="https://fernandojcastellanos.github.io/CryptoVerse/"



  // Portfolio Box 10 
  const [videoPlayer10, setVideoPlayer10] = useState(false);
  const toggleVideo10 = () => {
    setVideoPlayer10(!videoPlayer10)
  }
  // Button
  const [isVisible10, setIsVisible10] = useState(false);
  const toggleVisibility10 = () => {
    setIsVisible10(!isVisible10);
  };
  // Portfolio 10  // Portfolio 10  // Portfolio 210  // Portfolio 10  // Portfolio 10  // Portfolio 10  // Portfolio 10  // Portfolio 10
const title10="We are the Mad Scientist. You are the chef."
const img10 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/recipe%20app.png?alt=media&token=e628fe15-5fc7-4531-9230-47f04fac1578"
const video10 = "https://www.youtube.com/embed/cnwgg7GMEhA"
const techUsed10= "React, Typescript, SASS"
const accomplishements10="Finally learned how to turn the dang lights off these website"
const repo10="https://github.com/FernandoJCastellanos/Recipe-Site"
const demo10="https://fernandojcastellanos.github.io/Recipe-Site/"


  // Portfolio Box 9 
  const [videoPlayer9, setVideoPlayer9] = useState(false);
  const toggleVideo9 = () => {
    setVideoPlayer9(!videoPlayer9)
  }
  // Button
  const [isVisible9, setIsVisible9] = useState(false);
  const toggleVisibility9 = () => {
    setIsVisible9(!isVisible9);
  };
  // Portfolio 9  // Portfolio 9  // Portfolio 29  // Portfolio 9  // Portfolio 9  // Portfolio 9  // Portfolio 9  // Portfolio 9
const title9="Movies. Popcorn. Action!"
const img9 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/React%20Native%20Movie%20App%20photo.png?alt=media&token=66b175f4-cafc-4e2d-8920-bd891740a3ab"
const video9 = "https://www.youtube.com/embed/0emdp0ivIRQ"
const techUsed9= "React Native"
const accomplishements9="My first Mobile App"
const repo9="https://github.com/FernandoJCastellanos/OMDBapp--ReactNative"


  // Portfolio Box 8 
  const [videoPlayer8, setVideoPlayer8] = useState(false);
  const toggleVideo8 = () => {
    setVideoPlayer8(!videoPlayer8)
  }
  // Button
  const [isVisible8, setIsVisible8] = useState(false);
  const toggleVisibility8 = () => {
    setIsVisible8(!isVisible8);
  };
  // Portfolio 8  // Portfolio 8  // Portfolio 28  // Portfolio 8  // Portfolio 8  // Portfolio 8  // Portfolio 8  // Portfolio 8
const title8="Simple. We Build. We Sell."
const img8 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/React%20E-Commerce%20Website%20photo.png?alt=media&token=37a65aa4-1b11-4b1f-b9cd-621e301e9a3f"
const video8 = "https://www.youtube.com/embed/1dUh0SFUDcI"
const techUsed8= "React"
const accomplishements8="My first website built with React"
const repo8="https://github.com/FernandoJCastellanos/E-Commerce-Site---React"
const demo8="https://fernandojcastellanos.github.io/E-Commerce-Site---React/"



  // Portfolio Box 7 
  const [videoPlayer7, setVideoPlayer7] = useState(false);
  const toggleVideo7 = () => {
    setVideoPlayer7(!videoPlayer7)
  }
  // Button
  const [isVisible7, setIsVisible7] = useState(false);
  const toggleVisibility7 = () => {
    setIsVisible7(!isVisible7);
  };
  // Portfolio 7  // Portfolio 7  // Portfolio 27  // Portfolio 7  // Portfolio 7  // Portfolio 7  // Portfolio 7  // Portfolio 7
const title7="Old Developer Site"
const img7 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/old-website-developer.png?alt=media&token=401eb0a3-8a4e-4ebd-9c06-a5061de846f9"
const video7 = "https://www.youtube.com/embed/Ppm6D2ZvGcc"
const techUsed7= "HTML, CSS, JavaScript"
const accomplishements7="Website to show people how cool I am."
const repo7="https://github.com/FernandoJCastellanos/Vanilla-Frontend-Development-Website"
const demo7="https://fernandojcastellanos.github.io/Personal-Developer-Website/"






  // Portfolio Box 6 
  const [videoPlayer6, setVideoPlayer6] = useState(false);
  const toggleVideo6 = () => {
    setVideoPlayer6(!videoPlayer6)
  }
  // Button
  const [isVisible6, setIsVisible6] = useState(false);
  const toggleVisibility6 = () => {
    setIsVisible6(!isVisible6);
  };
  // Portfolio 6  // Portfolio 6  // Portfolio 26  // Portfolio 6  // Portfolio 6  // Portfolio 6  // Portfolio 6  // Portfolio 6
const title6="To the Mooooon!!!!"
const img6 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/space.png?alt=media&token=6b166d8a-5c18-40ee-92d0-64f074315fef"
const video6 = "https://www.youtube.com/embed/Jh7JkAkKp5g"
const techUsed6= "HTML, CSS, JavaScript"
const accomplishements6="Learned about accessibility and practiced Javascript"
const repo6="https://github.com/FernandoJCastellanos/Space-Tourism-Website"
const demo6="https://fernandojcastellanos.github.io/Space-Tourism-Website/"




  // Portfolio Box 5 
  const [videoPlayer5, setVideoPlayer5] = useState(false);
  const toggleVideo5 = () => {
    setVideoPlayer5(!videoPlayer5)
  }
  // Button
  const [isVisible5, setIsVisible5] = useState(false);
  const toggleVisibility5 = () => {
    setIsVisible5(!isVisible5);
  };
  // Portfolio 5  // Portfolio 5  // Portfolio 25  // Portfolio 5  // Portfolio 5  // Portfolio 5  // Portfolio 5  // Portfolio 5
const title5="We set the fashion"
const img5 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/base.png?alt=media&token=ac209c86-49a9-4a0f-9f7a-202a7710085a"
const video5 = "https://www.youtube.com/embed/1aehupwY3J8"
const techUsed5= "HTML, CSS, JavaScript"
const accomplishements5="Landing like an ODST"
const repo5="https://github.com/FernandoJCastellanos/base-apparel-landing-page"
const demo5="https://fernandojcastellanos.github.io/base-apparel-landing-page/"



  // Portfolio Box 4 
  const [videoPlayer4, setVideoPlayer4] = useState(false);
  const toggleVideo4 = () => {
    setVideoPlayer4(!videoPlayer4)
  }
  // Button
  const [isVisible4, setIsVisible4] = useState(false);
  const toggleVisibility4 = () => {
    setIsVisible4(!isVisible4);
  };
  // Portfolio 4  // Portfolio 4  // Portfolio 24  // Portfolio 4  // Portfolio 4  // Portfolio 4  // Portfolio 4  // Portfolio 4
const title4="The grass is greener on our Side"
const img4 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/sunnyside.png?alt=media&token=7d185c6c-ec31-428f-b890-1569628e6d6a"
const video4 = "https://www.youtube.com/embed/PkBH0ch-fIE"
const techUsed4= "HTML, CSS, JavaScript"
const accomplishements4="Build some cool looking frontpage"
const repo4="https://github.com/FernandoJCastellanos/SunnySide-Ad-Agency-"
const demo4="https://fernandojcastellanos.github.io/SunnySide-Ad-Agency-/"



  // Portfolio Box 3 
  const [videoPlayer3, setVideoPlayer3] = useState(false);
  const toggleVideo3 = () => {
    setVideoPlayer3(!videoPlayer3)
  }
  // Button
  const [isVisible3, setIsVisible3] = useState(false);
  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };
  // Portfolio 3  // Portfolio 3  // Portfolio 23  // Portfolio 3  // Portfolio 3  // Portfolio 3  // Portfolio 3  // Portfolio 3
const title3="My dream site!"
const img3 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Personal.jpg?alt=media&token=3a109d32-f826-4c15-91ce-160e9f8c8c9d"
const video3 = "https://www.youtube.com/embed/eirOLkjPSoc"
const techUsed3= "HTML, CSS, JavaScript"
const accomplishements3="Built the website I've always wanted"
const repo3="https://github.com/FernandoJCastellanos/Personal-Art-Website"
const demo3 ="https://fernandojcastellanos.github.io/Personal-Art-Website/"



  // Portfolio Box 2 
  const [videoPlayer2, setVideoPlayer2] = useState(false);
  const toggleVideo2 = () => {
    setVideoPlayer2(!videoPlayer2)
  }
  // Button
  const [isVisible2, setIsVisible2] = useState(false);
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };
  // Portfolio 2  // Portfolio 2  // Portfolio 2  // Portfolio 2  // Portfolio 2  // Portfolio 2  // Portfolio 2  // Portfolio 2
const title2="We Drum to the Beat of our Hearts"
const img2 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Drumkit.png?alt=media&token=fd0a912e-74b7-4182-bbfe-1bfe3d2d7caa"
const video2 = "https://www.youtube.com/embed/VXNTfJcLVbU"
const techUsed2= "HTML, CSS, JavaScript"
const accomplishements2="Practicing some Vanilla JS"
const repo2="https://github.com/FernandoJCastellanos/Drum-Kit"
const demo2="https://fernandojcastellanos.github.io/Drum-Kit/"


  // Portfolio Box 1 
  const [videoPlayer1, setVideoPlayer1] = useState(false);
  const toggleVideo1 = () => {
    setVideoPlayer1(!videoPlayer1)
  }
  // Button
  const [isVisible1, setIsVisible1] = useState(false);
  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };
  // Portfolio 1
const title1="Dog chill Dog world"
const img1 = "https://firebasestorage.googleapis.com/v0/b/frontend-development-9534d.appspot.com/o/Tindog.png?alt=media&token=79260380-1974-4b81-ba7d-45e6563afa62"
const video1 = "https://www.youtube.com/embed/xQx6QH6_z9M"
const techUsed1= "HTML, CSS, JavaScript"
const accomplishements1="My first website built in Vanilla"
const repo1="https://github.com/FernandoJCastellanos/Tindog"
const demo1="https://fernandojcastellanos.github.io/Tindog/"




const elementsRef = useRef([]);



    return (
    <div id="Portfolio" className="w-[100%] m-12">
        <div >
          <p className= "text-center mb-12 text-xl">
            Portfolio Chronological
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mx-12">
          <div class="">
            <Card title={title16} img={img16} video={video16} accomplishments={accomplishements16} techUsed={techUsed16} Repo={repo16} 
              toggleVideo={toggleVideo16} videoPlayer={videoPlayer16} toggleVisibility={toggleVisibility16} isVisible={isVisible16}  
            />
          </div>
          <div class="">
            <Card title={title15} img={img15} video={video15} accomplishments={accomplishements15} techUsed={techUsed15} Repo={repo15} 
              toggleVideo={toggleVideo15} videoPlayer={videoPlayer15} toggleVisibility={toggleVisibility15} isVisible={isVisible15}  
            />
          </div>
          <div class="">
            <Card title={title14} img={img14} video={video14} accomplishments={accomplishements14} techUsed={techUsed14} Repo={repo14} 
              toggleVideo={toggleVideo14} videoPlayer={videoPlayer14} toggleVisibility={toggleVisibility14} isVisible={isVisible14}  
            />
          </div>
          <div class="">
            <Card title={title13} img={img13} video={video13} accomplishments={accomplishements13} techUsed={techUsed13} Repo={repo13} 
              toggleVideo={toggleVideo13} videoPlayer={videoPlayer13} toggleVisibility={toggleVisibility13} isVisible={isVisible13}  
            />
          </div>
          <div class="">
            <Card title={title12} img={img12} video={video12} accomplishments={accomplishements12} techUsed={techUsed12} Repo={repo12} 
              toggleVideo={toggleVideo12} videoPlayer={videoPlayer12} toggleVisibility={toggleVisibility12} isVisible={isVisible12}  
            />
          </div>
          <div class="">
            <Card title={title11} img={img11} video={video11} accomplishments={accomplishements11} techUsed={techUsed11} Repo={repo11} Demo={demo11}
              toggleVideo={toggleVideo11} videoPlayer={videoPlayer11} toggleVisibility={toggleVisibility11} isVisible={isVisible11}  
            />
          </div>
          <div class="">
            <Card title={title10} img={img10} video={video10} accomplishments={accomplishements10} techUsed={techUsed10} Repo={repo10} Demo={demo10}
              toggleVideo={toggleVideo10} videoPlayer={videoPlayer10} toggleVisibility={toggleVisibility10} isVisible={isVisible10}  
            />
          </div>
          <div class="">
            <Card title={title9} img={img9} video={video9} accomplishments={accomplishements9} techUsed={techUsed9} Repo={repo9} 
              toggleVideo={toggleVideo9} videoPlayer={videoPlayer9} toggleVisibility={toggleVisibility9} isVisible={isVisible9}  
            />
          </div>
          <div class="">
            <Card title={title8} img={img8} video={video8} accomplishments={accomplishements8} techUsed={techUsed8} Repo={repo8} Demo={demo8}
              toggleVideo={toggleVideo8} videoPlayer={videoPlayer8} toggleVisibility={toggleVisibility8} isVisible={isVisible8}  
            />
          </div>
          <div class="">
            <Card title={title7} img={img7} video={video7} accomplishments={accomplishements7} techUsed={techUsed7} Repo={repo7} Demo={demo7}
              toggleVideo={toggleVideo7} videoPlayer={videoPlayer7} toggleVisibility={toggleVisibility7} isVisible={isVisible7}  
            />
          </div>
          <div class="">
            <Card title={title6} img={img6} video={video6} accomplishments={accomplishements6} techUsed={techUsed6} Repo={repo6} Demo={demo6}
              toggleVideo={toggleVideo6} videoPlayer={videoPlayer6} toggleVisibility={toggleVisibility6} isVisible={isVisible6}  
            />
          </div>
          <div class="">
            <Card title={title5} img={img5} video={video5} accomplishments={accomplishements5} techUsed={techUsed5} Repo={repo5} Demo={demo5}
              toggleVideo={toggleVideo5} videoPlayer={videoPlayer5} toggleVisibility={toggleVisibility5} isVisible={isVisible5}  
            />
          </div>
          <div class="">
            <Card title={title4} img={img4} video={video4} accomplishments={accomplishements4} techUsed={techUsed4} Repo={repo4} Demo={demo4}
              toggleVideo={toggleVideo4} videoPlayer={videoPlayer4} toggleVisibility={toggleVisibility4} isVisible={isVisible4}  
            />
          </div>
          <div class="">
            <Card title={title3} img={img3} video={video3} accomplishments={accomplishements3} techUsed={techUsed3} Repo={repo3} Demo={demo3}
              toggleVideo={toggleVideo3} videoPlayer={videoPlayer3} toggleVisibility={toggleVisibility3} isVisible={isVisible3}  
            />
          </div>
          <div class="">
            <Card title={title2} img={img2} video={video2} accomplishments={accomplishements2} techUsed={techUsed2} Repo={repo2} Demo={demo2}
              toggleVideo={toggleVideo2} videoPlayer={videoPlayer2} toggleVisibility={toggleVisibility2} isVisible={isVisible2}  
            />
          </div>
          <div class="">
            <Card title={title1} img={img1} video={video1} accomplishments={accomplishements1} techUsed={techUsed1} Repo={repo1} Demo={demo1}
              toggleVideo={toggleVideo1} videoPlayer={videoPlayer1} toggleVisibility={toggleVisibility1} isVisible={isVisible1}  
            />
          </div>
        </div>
    </div>
  
    )}
  
  export default PortfolioWork;