import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";
import { Button } from "components/template/Button";
import { URL } from "utils/url";
import React from "react";
import Aos from "aos";

const Videocampaign = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    
<div className=" flex relative z-20 items-center">
    <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
        <div className="flex flex-col">
            <h1 className="font-title w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-gray-800">
                Our Current Campaign - Maja x Lynxverse
            </h1>
            <h2 className="font-description max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-8">
               Lynxverse partnering with Maja to offer novel theraphy for those in needs such as those in crypto space that needed support in recent Luna spiral and crypto and stock market volatility. 
               <br/> Maja offers therapies such as hypno theraphy
            </h2>
            <div className="flex items-center justify-center mt-4 mb-4">
                <a href="https://www.majahealing.com/" className="uppercase py-2 px-4 rounded-md bg-[#0084FF] hover:bg-[#125593] border-2 border-transparent text-white text-md mr-4">
                    Get to know Maja
                </a>
                
            </div>
        </div>
        <div className="block w-full mx-auto mt-6 md:mt-0 relative">
        <img className="w-full" src={IMAGE.frame} alt="frame" />
          <video
            controls
            muted
            className="absolute top-0 h-full w-full rounded-xl p-3 md:p-10"
          >
            <source
              src="https://res.cloudinary.com/dggidb3n8/video/upload/v1653142111/Maja_x_Lynxverse__Resilience_sdotr6.mp4"
              type="video/mp4"
            />
          </video>
        </div>
    </div>
</div>

  );
};

export { Videocampaign };
