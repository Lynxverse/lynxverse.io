import React from "react";
import { SwiperImage } from "utils/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import { useWindows } from "hook/useWindows";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Illustration = () => {
  const [idx, setIdx] = React.useState<number>(0);
  const [width] = useWindows();
  return (
    <div className="mx-auto py-16">
      <Swiper
        slidesPerView={width <= 1000 ? 1 : 3}
        loop={true}
        centeredSlides={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        onSlideChange={(swiper) => {
          setIdx(swiper.realIndex);
        }}
        className="bg-gradient-to-r from-[#10557C]/20 to-[#1B315B]/20 md:h-[550px]"
      >
        {SwiperImage.map((items, index) => {
          return (
            <SwiperSlide
              className="flex items-center justify-start px-14"
              key={index}
            >
              {({ isActive }) => (
                <img
                  className={
                    isActive
                      ? "z-10 w-full rounded-xl bg-[#10557C] transition-transform md:scale-100 lg:scale-150"
                      : "z-0 w-full scale-100 rounded-xl bg-[#10557C]"
                  }
                  src={items.image}
                  alt={items.title}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="mx-auto h-[300px] max-w-xl space-y-3 py-16">
        <h1 className="text-center font-title text-[1.8rem] text-white">
          {SwiperImage[idx].title}
        </h1>
        <p className="px-5 text-center font-description text-description leading-relaxed text-white">
          {SwiperImage[idx].desc}
        </p>
      </div>
    </div>
  );
};

export { Illustration };
