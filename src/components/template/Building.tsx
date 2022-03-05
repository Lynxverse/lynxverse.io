import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";

const Building = () => {
  return (
    <Section size={false}>
      <img
        className="mx-auto mb-16"
        width={700}
        src={IMAGE.building}
        alt="building"
      />
    </Section>
  );
};

export { Building };
