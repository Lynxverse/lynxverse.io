import { IButton } from "types/IButton";
const Button = (props: IButton) => {
  const renderStyle = () => {
    const primaryStyle = "bg-[#0084FF] hover:bg-[#125593] py-1.5 md:py-2 text-white";
    const outlineStyle = "py-2 border-4 border-[#0084FF] text-[#0084FF]";
    const gradientStyle =
      "text-white bg-gradient-to-b from-[#4CDFFF] to-[#794DF6] hover:from-[#2F94AA] shadow-lg shadow-cyan-500/40";
    if (props.style === "primary") return primaryStyle;
    if (props.style === "outline") return outlineStyle;
    if (props.style === "gradient") return gradientStyle;
    else return primaryStyle;
  };
  const renderTitle = () => {
    if (props.icon) {
      return (
        <div className="flex items-center justify-around space-x-2">
          <div>{props.iconChildren}</div>
          <p>{props.title}</p>
        </div>
      );
    } else {
      return props.title;
    }
  };
  return (
    <a
      href={props.link}
      className={`rounded-full ${renderStyle()} flex cursor-pointer items-center px-2 font-title text-[0.7rem] md:px-7 text-sm md:text-base`}
    >
      {renderTitle()}
    </a>
  );
};

export { Button };
