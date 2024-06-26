import { Anton, Pacifico, Sora, Teko } from "next/font/google";
import { VelocityScroll } from "../../../_components/magicui/scroll-based-velocity";

const inter = Sora({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="  NEXTJS  FRAMER - MOTION  "
      default_velocity={3}
      className={`${inter.className} text-center bg-black text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm leading-[4rem]  md:text-[8rem] md:leading-[10rem]`}
    />
  );
}

export default ScrollBasedVelocityDemo;
