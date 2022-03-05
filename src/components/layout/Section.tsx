import { ISection } from "types/ISection";

const Section = (props: ISection) => {
  const size = props.size ? "w-11/12" : "w-10/12";
  return <div className={`mx-auto ${size}`}>{props.children}</div>;
};

export { Section };
