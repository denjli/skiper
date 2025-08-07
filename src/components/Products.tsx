import { CardCarousel } from "@/components/ui/card-carousel";
// TODO: Change to stationary images at the end
import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";

const Products = () => {
  const images = [
    {
      src: image1,
      alt: "Image 1",
    },
    {
      src: image2,
      alt: "Image 2",
    },
    {
      src: image3,
      alt: "Image 3",
    },
  ];

  return (
    <CardCarousel
      images={images}
      autoplayDelay={2000}
      showPagination={true}
      showNavigation={true}
    />
  );
};

export default Products;
