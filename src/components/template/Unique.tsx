import { Section } from "components/layout/Section";
import { Card } from "components/template/Card";
import { IMAGE } from "utils/images";
import React from "react";
import Aos from "aos";

const Unique = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <Section size={false}>
      <h1 className="text-center font-title text-[1.6rem] text-white md:text-title">
        Why We are Unique?
      </h1>
      <div className="mt-36" data-aos="fade-up" data-aos-duration="2000">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <Card
            image={IMAGE.assets01}
            top="-top-28"
            description="The first gamification on blockchain that focuses on mental health and well-being with expert ties to make it a reality"
          />
          <Card
            image={IMAGE.assets02}
            top="-top-28"
            description="free to
            play and users may visit our physical
            centers to get the full equipment
            experience at no real cost!"
          />
          <Card
            image={IMAGE.assets03}
            top="-top-28"
            description="Help combat mental health illnesses by
            using machine learning data structures
            and AI assistants made to adapt to each users"
          />
          <Card
            image={IMAGE.assets04}
            top="-top-28"
            description="Ecosystem geared to fosters an unique economic
            market where users can create and trade assets to help
            health exercises, that in turn enriches user experience."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="mx-auto grid grid-cols-1 gap-5 py-20  md:grid-cols-3"
        >
          <Card
            image={IMAGE.assets05}
            top="-top-28"
            description="Security: Using the blockchain anonymity, users can overcome any stigma associated with mental health issues that may make them feel ashamed or as an outcast if they need to work directly with other people."
          />
          <Card
            image={IMAGE.assets06}
            top="-top-28"
            description="Machine learning generated scenarios based on set 
            parameters and constraint made by professionals in the field and AI assistants. 
            Which is used to implement tailored best-fit CBT Scenarios for each user needs "
          />
          <Card
            image={IMAGE.assets07}
            top="-top-20 md:-top-28"
            description="Earn by helping each other and being active: 
            share to earn,
            learn to earn,
            play to earn.
            
            Creating for others thru digital media marketplace and metaverse centers"
          />
        </div>
      </div>
    </Section>
  );
};

export { Unique };
