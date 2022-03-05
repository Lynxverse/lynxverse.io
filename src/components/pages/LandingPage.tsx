import { Navbar } from "components/template/Navbar";
import { Hero } from "components/template/Hero";
import { About } from "components/template/About";
import { Unique } from "components/template/Unique";
import { Building } from "components/template/Building";
import { Video } from "components/template/Video";
import { Subscribe } from "components/template/Subscribe";
import { Footer } from "components/template/Footer";
import { Income } from "components/template/Income";
import { Illustration } from "components/template/Illustration";
const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#081850] via-[#081850] to-[#2B99B1]">
      <Navbar />
      <Hero />
      <About />
      <Unique />
      <Building />
      {/* <Illustration /> */}
      <Income />
      <Video />
      <Subscribe />
      <Footer />
    </div>
  );
};

export { LandingPage };
