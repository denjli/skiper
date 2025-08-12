import Image from "next/image";

import BlurVignette from "@/components/ui/blur-vignette";

function BlurVignetteDemo() {
  return (
    <div className="relative max-w-4xl">
      <BlurVignette
        radius="24px"
        inset="10px"
        transitionLength="100px"
        blur="15px"
        className=" rounded-[2.5rem]"
        switchView={true}
      >
        <video
          autoPlay={true}
          muted
          loop
          content="true"
          className="size-full  object-cover transition-all "
        >
          <source
            src="https://videos.pexels.com/video-files/4360158/4360158-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </BlurVignette>

      <div className="flex flex-wrap gap-4 py-4">
        <BlurVignette
          radius="24px"
          inset="20px"
          transitionLength="120px"
          blur="35px"
          switchView={true}
          className="aspect-square max-w-[calc(50%-1rem)] flex-1 rounded-[2.5rem]"
        >
          <Image
            width={200}
            height={200}
            className="size-full rounded-[2.5rem] object-cover"
            src="https://i.pinimg.com/1200x/42/e7/00/42e700bcff37675688d5d7f179ef9555.jpg"
            alt=""
            priority
          />
        </BlurVignette>
        <BlurVignette
          radius="24px"
          inset="20px"
          transitionLength="120px"
          blur="35px"
          switchView={true}
          className="aspect-square max-w-[calc(50%-1rem)] flex-1 rounded-[2.5rem]"
        >
          <Image
            width={200}
            priority
            height={200}
            className="size-full rounded-[2.5rem] object-cover"
            src="https://i.pinimg.com/1200x/11/c3/8e/11c38ef7af113bd3449920079186150d.jpg"
            alt=""
          />
        </BlurVignette>
      </div>
    </div>
  );
}

export default BlurVignetteDemo;
