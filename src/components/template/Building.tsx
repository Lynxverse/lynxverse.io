import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";

const Building = () => {
  return (
    <Section size={false}>
      <div className="relative">
        <img className="mx-auto py-10" src={IMAGE.building} alt="building" />
        <div className="h-[500px] w-[500px] rounded-full bg-[#1AC7FE]/60"></div>
      </div>
    </Section>
  );
};

export { Building };
