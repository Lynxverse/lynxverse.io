import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";

const Video = () => {
  return (
    <Section size={false}>
      <div className="py-16">
        <h1 className="py-5 text-center font-title text-title text-white">
          Demo Video
        </h1>
        <div className="relative">
          <img src={IMAGE.frame} alt="frame" />
          <video controls muted className="absolute top-0 p-10">
            <source
              src="http://lynxverse.octagram.id/video/background.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </Section>
  );
};

export { Video };
