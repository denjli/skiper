import { TextScroll } from "./ui/text-scroll";

const Japanese = () => {
  // TODO: Change to Japanese font
  return (
    <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Skiper UI  "
      default_velocity={5}
    />
  );
};

export default Japanese;
