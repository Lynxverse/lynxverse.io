import { IButton } from "types/IButton";
const Button = (props: IButton) => {
  const renderStyle = () => {
    const primaryStyle = "bg-[#0084FF] py-2 text-white";
    const outlineStyle = "py-2 border-4 border-[#0084FF] text-[#0084FF]";
    const gradientStyle =
      "text-white bg-gradient-to-b from-[#4CDFFF] to-[#794DF6] hover:from-[#2F94AA] shadow-lg shadow-cyan-500/40";
    if (props.style === "primary") return primaryStyle;
    if (props.style === "outline") return outlineStyle;
    if (props.style === "gradient") return gradientStyle;
    else return primaryStyle;
  };
  return (
    <button
      className={`rounded-full ${renderStyle()} px-4 font-title text-[0.7rem] md:px-10 md:text-lg`}
    >
      {props.title}
    </button>
  );
};

export { Button };
