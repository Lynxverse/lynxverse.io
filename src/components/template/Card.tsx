import { ICard } from "types/ICard";
const Card = (props: ICard) => {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#113AA4] via-[#5A0AC0]/40 to-black/5 p-5">
      <img
        className="absolute -top-28 animate-bounce"
        src={props.image}
        alt="assets"
      />
      <p className="text-center font-description text-card text-white">
        {props.description}
      </p>
    </div>
  );
};
export { Card };
