import { Section } from "components/layout/Section";
import { IMAGE } from "utils/images";

const Video = () => {
  return (
    <Section size={false}>
      <div className="py-16">
        <h1 className="py-5 text-center font-title text-[1.8rem] text-white md:text-title">
          Demo Video
        </h1>
        <div className="relative aspect-video">
          <img className="w-full" src={IMAGE.frame} alt="frame" />
          <video
            controls
            muted
            className="absolute top-0 h-full w-full rounded-xl p-3 md:p-10"
          >
            <source
              src="https://res.cloudinary.com/dq2h3thdg/video/upload/v1649161801/demo_qzud0q.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </Section>
  );
};

export { Video };
