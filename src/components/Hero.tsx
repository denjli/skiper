import ImageCursorTrail from "@/components/ui/image-cursortrail";

const Hero = () => {
  // TODO: Add stationary images from pinterest
  const images = [
    "https://i.pinimg.com/736x/51/15/01/5115019e722e17a99d2459a089b152a6.jpg",
    "https://i.pinimg.com/736x/96/17/f0/9617f001b87e3570d58fa227c2e8d89d.jpg",
    "https://i.pinimg.com/736x/c6/d1/50/c6d1507986614389e9a9b7420e273852.jpg",
    "https://i.pinimg.com/1200x/7b/7a/13/7b7a13e7b9f43e7caed9f4acd8b25d79.jpg",
    "https://i.pinimg.com/1200x/72/18/2e/72182e10bc3124175abea589ee043133.jpg",
    "https://i.pinimg.com/736x/b7/73/27/b77327bb3e150b2d21e5a3a4acf2dbcb.jpg",
    "https://i.pinimg.com/736x/7a/bd/8e/7abd8ecc6e188e7e4947509f9c1e20be.jpg",
  ];

  return (
    <ImageCursorTrail
      items={images}
      distance={25}
      imgClass="sm:w-40 w-28 sm:h-48 h-36"
    >
      <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight font-indie">
        Back to School in Style
      </h1>
    </ImageCursorTrail>
  );
};

export default Hero;
