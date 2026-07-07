import Image from "next/image";
import arrow from "../assets/play-solid.svg";

export const Card = ({ 
  title, 
  img, 
  video, 
  toggleVideo, 
  videoPlayer, 
  toggleVisibility, 
  isVisible, 
  techUsed, 
  Repo, 
  Demo 
}) => {

  return (
    <div className="border-2 border-white rounded-md">
      <div className="flex flex-col w-full transition">
        <p className="text-center my-8 text-lg">{title}</p>

        <div 
          className="w-full relative flex justify-center items-center cursor-pointer aspect-video bg-black"
          onClick={toggleVideo}
        >
          {/* Play Icon */}
          <Image 
            className={`absolute w-16 h-16 z-30 ${videoPlayer ? 'hidden' : 'block'}`} 
            src={arrow} 
            alt="Play video" 
            width={64} 
            height={64}
          />

          {/* Thumbnail Image */}
          <img 
            className={`w-full h-full object-cover rounded-md z-10 ${videoPlayer ? 'hidden' : 'block'}`}
            src={img} 
            alt={title}
            priority={false}
          />

          {/* Video */}
          <iframe 
            className={`w-full h-full ${videoPlayer ? 'block' : 'hidden'}`} 
            src={video} 
            title={title}
            allowFullScreen
          />
        </div>

        <button className="showmore-button mx-auto my-4" onClick={toggleVisibility}>
          Show More
        </button>

        <div className={`overflow-hidden ${isVisible ? 'show' : 'hide'}`}>
          <ShowMore techUsed={techUsed} Repo={Repo} Demo={Demo} />
        </div>
      </div>
    </div>
  );
};