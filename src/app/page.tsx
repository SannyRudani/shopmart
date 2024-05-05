import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Carousel
        data={[
          { image: "/images/Slide1.jpg" },
          { image: "/images/Slide2.jpg" },
          { image: "/images/Slide3.jpg" },
          { image: "/images/Slide4.jpg" },
          { image: "/images/Slide5.jpg" },
          { image: "/images/Slide6.jpg" },
          { image: "/images/Slide7.jpg" },
          { image: "/images/Slide8.jpg" },
        ]}
      />
    </>
  );
}
