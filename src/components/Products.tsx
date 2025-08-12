import { CardCarousel } from "@/components/ui/card-carousel";
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import image4 from "@/assets/4.jpg";

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
    {
      src: image4,
      alt: "Image 4",
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
