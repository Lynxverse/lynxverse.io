import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";
import React from "react";
import Aos from "aos";

const Building = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <Section size={false}>
      <img
        className="mx-auto mb-16"
        data-aos="zoom-in"
        width={700}
        src={IMAGE.building}
        alt="building"
      />
    </Section>
  );
};

export { Building };
