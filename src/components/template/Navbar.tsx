import { IMAGE } from "utils/images";
import { Button } from "components/template/Button";
const Navbar = () => {
  return (
    <div className="fixed z-20 w-full bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex w-11/12 justify-between py-5">
        <img src={IMAGE.logo} className="w-[150px] md:w-[200px]" alt="logo" />
        <Button title="Play Demo" style={`primary`} />
      </div>
    </div>
  );
};

export { Navbar };
