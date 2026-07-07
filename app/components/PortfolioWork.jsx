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
const img16 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/edsblog.png"
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
const img15 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/homeSeller.png"
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
const img14 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/Tindog.png"
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
const img13 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/onlyfans.png"
const video13 = "https://www.youtube.com/embed/MCgKAshyd_k?si=gl2D4fPZjI93J4RX"
const techUsed13= "Fullstack- React Native and AWS S3 Bucket"
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
const img12 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/whatarethose.png"
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
const img11 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/cryptowebsite.png"
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
const img10 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/culinarywebsite.png"
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
const img9 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/imdbmobilesite.png"
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
const img8 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/shoestore.png"
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
const img7 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/oldwebsite.png"
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
const img6 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/space.png"
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
const img5 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/fashionwebsite.png"
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
const img4 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/sunnyside.png"
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
const img3 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/personal.jpg"
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
const img2 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/Drumkit.png"
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
const img1 = "https://raw.githubusercontent.com/FernandoJCastellanos/Personal-Website/refs/heads/master/public/website%20imgs/Tindog.png"
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