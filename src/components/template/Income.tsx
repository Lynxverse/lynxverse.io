import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";
const Income = () => {
  return (
    <Section size={false}>
      <div className="w-full rounded-xl bg-[#091A34]/20 p-10 py-32">
        <h1 className="pb-28 text-center font-title text-[48px] text-white">
          4 Ways to Earn Income on Lynxverse
        </h1>
        <div className="mx-auto grid w-5/6 grid-cols-1 gap-14">
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-r from-[#10557C] to-[#1B315B]/5 text-center">
            <img
              className="absolute -left-20 -top-20"
              src={IMAGE.incomeassets01}
              alt="assets"
            />
            <div className="mx-auto flex h-full w-2/3 flex-col items-center justify-center">
              <h1 className="font-title text-[22px] text-[#69E5D0]">
                Share to earn
              </h1>
              <p className="font-title text-[22px] text-white">
                Share your story or friends/fam story of a mental health problem
                to your virtual friends in the metaverse and earn $lynx token.
              </p>
            </div>
          </div>
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-l from-[#10557C] to-[#1B315B]/5 text-center">
            <img
              className="absolute -right-20 -top-20"
              src={IMAGE.incomeassets02}
              alt="assets"
            />
            <div className="mx-auto flex h-full w-2/3 flex-col items-center justify-center">
              <h1 className="font-title text-[22px] text-[#69E5D0]">
                Play to earn
              </h1>
              <p className="font-title text-[22px] text-white">
                This is the main purpose of the Lynx metaverse, to help you.
                Don’t worry you are not alone, we are here to help you as a
                guiding friend in the journey.
              </p>
            </div>
          </div>
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-r from-[#10557C] to-[#1B315B]/5 text-center">
            <img
              className="absolute -left-20 -top-20"
              src={IMAGE.incomeassets03}
              alt="assets"
            />
            <div className="mx-auto flex h-full w-2/3 flex-col items-center justify-center">
              <h1 className="font-title text-[22px] text-[#69E5D0]">
                Learn to earn
              </h1>
              <p className="font-title text-[22px] text-white">
                Learn about various mental illnesses, complete a quiz, and earn
                $lynx in our universe (university in metaverse).
              </p>
            </div>
          </div>
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-l from-[#10557C] to-[#1B315B]/5 text-center">
            <img
              className="absolute -right-20 -top-20"
              src={IMAGE.incomeassets04}
              alt="assets"
            />
            <div className="mx-auto flex h-full w-2/3 flex-col items-center justify-center">
              <h1 className="font-title text-[22px] text-[#69E5D0]">
                Sell Assets
              </h1>
              <p className="font-title text-[22px] text-white">
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
