import { IMAGE } from "utils/images";

const Loader = () => {
  return (
    <div className="h-screen bg-[#081850] transition-all">
      <div className="relative flex h-full flex-col items-center justify-center">
        <img className="absolute mb-2" src={IMAGE.logocircle} alt="logo" />
        <img
          className="animate-spin transition-transform duration-1000"
          src={IMAGE.ring}
          alt="ring"
        />
      </div>
    </div>
  );
};
export { Loader };
