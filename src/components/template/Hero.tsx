import React from "react";
import { IMAGE } from "utils/images";
import { Button } from "components/template/Button";

const Hero = () => {
  return (
    <div className="relative top-0 flex w-full justify-center py-36 px-5">
      <img className="absolute" src={IMAGE.grid} alt="logo" />
      <img className="absolute" src={IMAGE.stars} alt="logo" />
      <img
        className="absolute -bottom-1 w-full"
        src={IMAGE.silhoute}
        alt="silhoute"
      />
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative my-5 flex flex-col items-center justify-center">
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
        <div className="text-center">
          <h1 className="font-title text-[2rem] text-white md:text-hero">
            LYNXVERSE
          </h1>
          <p className="font-description text-[1.5rem] text-white md:text-subtitle">
            Dont worry you are not alone, we are here for you
          </p>
        </div>
        <div className="mt-10 flex max-w-lg flex-col items-center justify-center space-y-10">
          <p className="text-center font-description text-[1rem] text-[#D8D8D8] md:text-description">
            we are charity based game, feel free to support us by click donate
            us below, or if you wish to join our whitelist presale, please click
            join presale.
          </p>
          <div className="flex space-x-5">
            <Button title="Donate Us" style={`gradient`} />
            <Button title="Donate Us" style={`outline`} />
          </div>
        </div>
      </div>
    </div>
  );
};
export { Hero };
