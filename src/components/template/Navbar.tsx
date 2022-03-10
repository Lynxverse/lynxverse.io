import { IMAGE } from "utils/images";
import { Button } from "components/template/Button";
import { URL } from "utils/url";
import { ImAndroid } from "react-icons/im";
const Navbar = () => {
  return (
    <div className="fixed z-20 w-full bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex w-11/12 justify-between py-5">
        <img src={IMAGE.logo} className="w-[150px] md:w-[200px]" alt="logo" />
        <Button
          link={URL.demo}
          icon={true}
          iconChildren={<ImAndroid />}
          title="Play Demo"
          style={`primary`}
        />
      </div>
    </div>
  );
};

export { Navbar };
