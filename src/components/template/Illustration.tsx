// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE, SwiperImage } from "utils/images";
import { Pagination, Navigation } from "swiper";
import { useWindows } from "hook/useWindows";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Illustration = () => {
  const [width] = useWindows();
  return (
    <div className="relative mx-auto my-24 flex h-[600px] w-full items-center bg-gradient-to-r from-[#10557C]/30 to-[#1B315B]/30 md:px-10">
      <Swiper
        slidesPerView={width <= 900 ? 1 : 3}
        centeredSlides={true}
        spaceBetween={80}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-[300px] overflow-visible"
      >
        {SwiperImage.map((items, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <>
                    <div
                      className={
                        isActive
                          ? "transition-all md:h-[350px] md:scale-150"
                          : "mt-14 h-[250px] w-full"
                      }
                    >
                      <div className="relative">
                        {/* <img
                      className="absolute h-full w-full object-cover p-5"
                      src={items.image}
                      alt={items.title}
                    /> */}
                        <img src={IMAGE.frame} alt={items.title} />
                        {/* <div
                          hidden={!isActive}
                          className="absolute -bottom-20 space-y-5 py-10 text-center"
                        >
                          <h1 className="font-title text-xl text-white">
                            {items.title}
                          </h1>
                          <p className="font-description text-white">
                            {items.desc}
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </>
                )}
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export { Illustration };
