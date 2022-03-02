import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";
const About = () => {
  return (
    <div className="relative">
      <img
        className="absolute -top-1"
        src={IMAGE.gradientbtm}
        alt="gradientbtm"
      />
      <Section size={false}>
        <div className="relative flex flex-col items-center justify-center space-y-10 py-36 md:flex-row md:space-y-0">
          <div className="space-y-4 md:w-7/12">
            <h1 className="font-title text-title text-white">
              What is Lynxverse?
            </h1>
            <p className="font-description text-description leading-relaxed text-white">
              A multichain gamification metaverse using CBT implemented on VR to
              help mental illness patients and raise awareness. This is the
              first game on the blockchain focused on mental health with
              learn-to-earn, share-to-earn, and play-to-earn where users can
              earn the native $lynx token. The “earn” is designed to fully
              utilize Lynxverse. Lynxverse is an ever-changing experience with
              machine learning to update the gaming scenario and the AI
              assistant.
            </p>
          </div>
          <img className="md:w-5/12" src={IMAGE.headset} alt="headset" />
        </div>
      </Section>
    </div>
  );
};

export { About };
