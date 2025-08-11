import { TextScroll } from "./ui/text-scroll";

const Japanese = () => {
  return (
    <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem] font-noto-jp"
      text="文 豪 が 学 校 に 戻 る I    B u n G o  B a c k  T o  S c h o o l    "
      default_velocity={5}
    />
  );
};

export default Japanese;
