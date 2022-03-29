import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";
import React from "react";
import Aos from "aos";
const Income = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <Section size={true}>
      <div className="w-full rounded-xl bg-gradient-to-b from-[#10557C] to-black/5 p-2 py-14 md:p-10">
        <h1 className="pb-40 text-center font-title text-[1.5rem] text-white md:pb-20 md:text-[48px]">
          4 Ways to Earn Income on Lynxverse
        </h1>
        <div className="mx-auto grid w-full grid-cols-1 gap-32 md:w-5/6">
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-r from-[#10557C] to-[#1B315B]/5 text-center">
            <img
              data-aos="zoom-out-left"
              className="absolute -top-44 left-20 w-[150px] md:-left-20 md:-top-20 md:w-[200px]"
              src={IMAGE.incomeassets01}
              alt="assets"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-2/3"
            >
              <h1 className="font-title text-[0.9rem] text-[#69E5D0] md:text-[22px]">
                Share to earn
              </h1>
              <p className="font-title text-[0.9rem] text-white md:text-[22px]">
                share your story or friends/fam story of a mental health problem
                to your virtual friends in the metaverse and earn stable coin.
                You can generate events (organisation) doing speeches, open
                discussion, and more. Bring your real world friends to the Lynx
                metaverse to earn stable coin.
              </p>
            </div>
          </div>
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-l from-[#10557C] to-[#1B315B]/5 text-center">
            <img
              data-aos="zoom-out-right"
              className="absolute -top-36 right-20 w-[150px] md:-right-20 md:-top-20 md:w-[200px]"
              src={IMAGE.incomeassets02}
              alt="assets"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-2/3"
            >
              <h1 className="font-title text-[0.9rem] text-[#69E5D0] md:text-[22px]">
                Play to earn
              </h1>
              <p className="font-title text-[0.9rem] text-white md:text-[22px]">
                This is the main purpose of the Lynx metaverse, to help you.
                Don't worry you are not alone, we are here to help you as a
                quiding friend in the journey. Play our scenario and finish.
                Step by step users will earn stable coin. We help you with your
                problems and guide you toward solutions that will you reach your
                full potential.
              </p>
            </div>
          </div>
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-r from-[#10557C] to-[#1B315B]/5 text-center">
            <img
              className="absolute -top-36 left-20 w-[150px] md:-left-20 md:-top-20 md:w-[200px]"
              data-aos="zoom-out-left"
              src={IMAGE.incomeassets03}
              alt="assets"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-2/3"
            >
              <h1 className="font-title text-[0.9rem] text-[#69E5D0] md:text-[22px]">
                Learn to earn
              </h1>
              <p className="font-title text-[0.9rem] text-white md:text-[22px]">
                learn about various mental illnesses, complete a quiz. and earn
                stable coin in our universe (university in metaverse). Users can
                also earn a degree in our metaverse based on levels and earn
                stable coin This is aimed to increase awareness about mental
                illnesses and teach people how to be aware to care for
                themselves and others
              </p>
            </div>
          </div>
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-l from-[#10557C] to-[#1B315B]/5 text-center">
            <img
              className="absolute right-32 -top-36 w-[100px] md:-right-14 md:-top-20 md:w-[170px]"
              data-aos="zoom-out-right"
              src={IMAGE.incomeassets04}
              alt="assets"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-2/3"
            >
              <h1 className="font-title text-[0.9rem] text-[#69E5D0] md:text-[22px]">
                Sell Assets
              </h1>
              <p className="font-title text-[0.9rem] text-white md:text-[22px]">
                Creators can sell assets to our marketplace, and users can trade
                the assets
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export { Income };
