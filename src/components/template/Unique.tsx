import { Section } from "components/layout/Section";
import { Card } from "components/template/Card";
import { IMAGE } from "utils/images";
const Unique = () => {
  return (
    <Section size={false}>
      <h1 className="text-center font-title text-title text-white">
        Why We are Unique?
      </h1>
      <div className="mt-36">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <Card
            image={IMAGE.assets01}
            description="the first game on blockchain specialize for mental illness victim"
          />
          <Card
            image={IMAGE.assets02}
            description="Charity based, not only for lynxverse but we share with our charity partners too, even clinics partner for the profit we generate or by donation"
          />
          <Card
            image={IMAGE.assets03}
            description="Helping people, not for the patient only but also if your friends/family have problem with mental illness, you can study what best to help them"
          />
          <Card
            image={IMAGE.assets04}
            description="marketplace: Users can create NFT assets (music for meditation, yoga lessons, and more) to assist user’s therapy. All assets can be purchased using $lynx token."
          />
        </div>
        <div className="mx-auto grid grid-cols-1 gap-5 py-40 md:w-10/12 md:grid-cols-3">
          <Card
            image={IMAGE.assets05}
            description="Security: Using the blockchain, users can overcome any stigma associated with mental health issues that may make them feel ashamed or as an outcast if they need to work directly with other people."
          />
          <Card
            image={IMAGE.assets06}
            description="Machine learning generated scenarios based on set parameters and constraint made by professionals in the field and AI assistants in different forms (human, animal, plans, etc)."
          />
          <Card
            image={IMAGE.assets07}
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
