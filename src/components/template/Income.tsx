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
      <div className="w-full rounded-xl bg-gradient-to-b from-[#10557C] to-black/5 p-2 md:p-10">
        <h1 className="pb-56 text-center font-title text-[1.5rem] text-white md:pb-20 md:text-[48px]">
          5 Ways to Earn Income on Lynxverse
        </h1>
        <div className="mx-auto grid w-full grid-cols-1 gap-32 space-y-10 md:w-5/6">
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
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-3/4"
            >
              <h1 className="font-title text-[0.7rem] text-[#69E5D0] md:text-[22px]">
                Share to earn
              </h1>
              <p className="px-3 font-title text-[0.7rem] text-white md:text-[22px]">
              Users
              are encouraged to
              share their mental health
              endeavors and to talk more
              about the issues they face
              Upon doing so, the platform
              rewards them with stable coin
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
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-3/4"
            >
              <h1 className="font-title text-[0.7rem] text-[#69E5D0] md:text-[22px]">
                Play to earn
              </h1>
              <p className="px-3 font-title text-[0.7rem]  text-white md:text-[22px]">
              Users
              are rewarded in stable
              coin for their activity on the
              gamified CBT scenarios
              awarding them for their time
              spent
              </p>
            </div>
          </div>
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-r from-[#10557C] to-[#1B315B]/5 text-center">
            <img
              className="absolute -top-44 left-20 w-[150px] md:-left-20 md:-top-20 md:w-[200px]"
              data-aos="zoom-out-left"
              src={IMAGE.incomeassets03}
              alt="assets"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-3/4"
            >
              <h1 className="font-title text-[0.7rem] text-[#69E5D0] md:text-[22px]">
                Learn to earn
              </h1>
              <p className="px-3 font-title text-[0.7rem] text-white md:text-[22px]">
              Users
              can also explore various
              scenarios that spread
              awareness of mental health
              issues and teaches more about
              the illnesses Users who
              participate are rewarded with
              stable coin 
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
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-3/4"
            >
              <h1 className="font-title text-[0.7rem] text-[#69E5D0] md:text-[22px]">
                Sell Assets
              </h1>
              <p className="px-3 font-title text-[0.7rem] text-white md:text-[22px]">
                Creators can sell assets to our marketplace around mental health topics, and users can trade
                the assets and uses them to enrich their journey
              </p>
            </div>
          </div>
          <div className="relative top-5 h-40 w-full rounded-xl bg-gradient-to-r from-[#10557C] to-[#1B315B]/5 text-center md:-top-16">
            <img
              className="absolute -top-52 left-24 w-[130px] md:-left-20 md:-top-20 md:w-[200px]"
              data-aos="zoom-out-left"
              src={IMAGE.incomeassets05}
              alt="assets"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-2/3"
            >
              <h1 className="font-title text-[0.7rem] text-[#69E5D0] md:text-[22px]">
                Real-World Bridging
              </h1>
              <p className="px-3 font-title text-[0.7rem] text-white md:text-[22px]">
                Practitioner or real world clinics / hospital can team up with
                Lynxverse, rent office in our metaverse world to get more
                clients and clients who needs more help, Lynxverse can connect
                them with the real psychology in the metaverse all payment done
                using stable coin
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export { Income };
