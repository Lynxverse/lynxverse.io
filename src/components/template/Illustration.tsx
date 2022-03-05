// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE, SwiperImage } from "utils/images";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Illustration = () => {
  return (
    <div className="relative mx-auto my-24 flex h-[500px] w-full items-center bg-gradient-to-r from-[#10557C]/30 to-[#1B315B]/30 px-10">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={80}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-[355px]"
      >
        {SwiperImage.map((items, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "z-2 flex h-[350px] scale-150 items-center transition-all"
                      : "mt-14 h-[250px] w-full"
                  }
                >
                  <div className="relative">
                    <img
                      className="absolute h-full w-full object-cover p-5"
                      src={items.image}
                      alt={items.title}
                    />
                    <img src={IMAGE.frame} alt={items.title} />
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export { Illustration };
