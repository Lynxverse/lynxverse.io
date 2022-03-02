import { IButton } from "types/IButton";
const Button = (props: IButton) => {
  const renderStyle = () => {
    const primaryStyle = "bg-[#0084FF] py-2 text-white";
    const outlineStyle = "py-2 border-4 border-[#0084FF] text-[#0084FF]";
    const gradientStyle =
      "text-white bg-gradient-to-b from-[#4CDFFF] to-[#794DF6] hover:from-[#2F94AA]";
    if (props.style === "primary") return primaryStyle;
    if (props.style === "outline") return outlineStyle;
    if (props.style === "gradient") return gradientStyle;
    else return primaryStyle;
  };
  return (
    <button className={`rounded-full ${renderStyle()} px-10 font-title`}>
      {props.title}
    </button>
  );
};

export { Button };
