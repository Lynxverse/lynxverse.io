import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";
import { Button } from "components/template/Button";
import { URL } from "utils/url";
import React from "react";
import Aos from "aos";

const About = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="relative">
      <img
        className="absolute top-0 w-full"
        src={IMAGE.gradientbtm}
        alt="gradientbtm"
      />
      <Section size={false}>
        <div className="relative flex flex-col-reverse items-center justify-center space-y-10 py-36 md:flex-row md:space-y-0">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="space-y-4 md:w-7/12"
          >
            <h1 className="text-center font-title text-[1.8rem] text-white md:text-left md:text-title">
              What is Lynxverse?
            </h1>
            <p className="text-justify font-description text-[1rem] leading-relaxed text-[#D8D8D8] md:text-description">
            The world is constantly changing, and the age of globalization and
            economic inclusion has brought with it, higher rates of mental
            distress among different generations and cultures. These mental
            health issues are often overlooked due to many factors in the space.
            <br/>
            Lynxverse comes as a solutuion, offering Cognitive Behavioral Therapy (CBT) services 
            implemented on Virtual Reality to help and raise awareness of mental health and well-being.
            One of the first on the blockchain focused on such matters with 
            X to Earn system where users can earn the stable coin such as UST. The “earn” is designed to fully utilize Lynxverse.
            </p>
            <div className="flex space-x-5">
            <Button 
              link={URL.litepaper} 
              title="Download Lynxverse Litepaper" 
              style={`gradient`}
            />
          </div>
          
          </div>
          <img
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="2000"
            className="md:w-5/12"
            src={IMAGE.headset}
            alt="headset"
          />
        </div>
      </Section>
    </div>
  );
};

export { About };
