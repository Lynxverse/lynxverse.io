import { IMAGE } from "utils/images";

const Loader = () => {
  return (
    <div className="h-screen bg-[#081850] transition-all">
      <div className="relative flex h-full flex-col items-center justify-center">
        <img
          className="absolute w-[100px] md:w-[300px]"
          src={IMAGE.logocircle}
          alt="logo"
        />
        <img
          className="w-[150px] animate-spin transition-transform duration-1000  md:w-[450px]"
          src={IMAGE.ring}
          alt="ring"
        />
      </div>
    </div>
  );
};
export { Loader };
