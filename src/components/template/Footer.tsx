import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative">
      <Section size={false}>
        <footer className="z-[100] space-y-10 pb-60 pt-16">
          <div className="flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0">
            <img src={IMAGE.logo} alt="logo" />
            <ul className="flex space-x-3 font-description text-white">
              <li>Home</li>
              <li>Demo</li>
              <li>Donate</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0">
            <p className="font-description text-white">
              © 2022 Lynxverse . All rights reserved.
            </p>
            <FaTwitter size={30} color="white" />
          </div>
        </footer>
      </Section>
      <img
        className="absolute bottom-0 w-full"
        src={IMAGE.silhoute2}
        alt="silhoute"
      />
    </div>
  );
};

export { Footer };
