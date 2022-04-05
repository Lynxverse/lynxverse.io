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
            description="the first game on blockchain specialize for mental health and well-being victim"
          />
          <Card
            image={IMAGE.assets02}
            top="-top-28"
            description="Free to play, play to earn where user can earn stable coin instead of native token which will be more stabilize"
          />
          <Card
            image={IMAGE.assets03}
            top="-top-28"
            description="helping people, not for the patient only but also if your friends/family have problem with mental health and well-being, you can study what
            best to help them"
          />
          <Card
            image={IMAGE.assets04}
            top="-top-28"
            description="marketplace: Users can create NFT assets (music for meditation, yoga lessons, and more) to assist user's therapy. All
            assets can be purchased using stable coin (ST, USDT, USDC etc)."
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
            description="security: Using the blockchain, users can overcome any stigma associated with mental health issues that may make them
            feel ashamed or as an outcast if they need to work directly with other people."
          />
          <Card
            image={IMAGE.assets06}
            top="-top-28"
            description="Machine learning generated scenarios based on set parameters and constraint made by professionals in the field and Al
            assistants in different forms (human, animal, plans, etc). The game implements CBT (cognitive therapy behavior) data taken
            from previous patients, current, and future users to generate the learning machine and make decisions best for the user
            along with supervision from researchers and medical professionals."
          />
          <Card
            image={IMAGE.assets07}
            top="-top-20 md:-top-28"
            description="Earn by helping each other:
            share to earn
            learn to earn
            play to earn"
          />
        </div>
      </div>
    </Section>
  );
};

export { Unique };
