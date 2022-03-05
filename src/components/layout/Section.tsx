import { ISection } from "types/ISection";

const Section = (props: ISection) => {
  const size = props.size ? props.size : "w-10/12";
  return <div className={`mx-auto ${size}`}>{props.children}</div>;
};

export { Section };
