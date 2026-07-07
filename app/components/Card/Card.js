import Image from "next/image";
import arrow from "../../assets/play-solid.svg"
import ShowMore from "./../ShowMore";



export const Card = ({title, toggleVideo, videoPlayer, img, video, toggleVisibility, isVisible, techUsed, Repo, Demo, accomplishments}) => {


    return (
        <div className="border border-2 border-white rounded-md">
            <div className= {`flex flex-col  w-[100%] transition `}>
                <p className=" text-center my-8 text-lg">
                    {title}
                </p>
                <div className=" w-[100%] relative flex justify-center items-center" onClick={toggleVideo}>
                    <Image className={`absolute w-[15%] h-[15%] z-20 ${videoPlayer ? 'hidden' : 'visible'}`} src={arrow} alt="arrow" width={1000} height={1000} />
                    <Image className={`absolute w-[100%] h-[100%] object-cover rounded-md z-10 ${videoPlayer ? 'hidden' : 'visible'}`} alt="VideoImage" src={img} />
                    <iframe className={`h-[300px] w-[100%] `}  width="100%" height="100%" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>
                <button className="showmore-button mx-auto my-4" onClick={toggleVisibility}>Show More</button>
                <div className={`flex text-center w-[100%] overflow-hidden showmore-content ${isVisible ? 'show' : 'hide'} `}>
                    <ShowMore
                    techUsed={techUsed}
                    accomplishments={accomplishments}
                    Repo={Repo}
                    Demo={Demo}
                    />
                </div>
            </div>
        </div>
        
    )
}