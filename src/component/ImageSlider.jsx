import { useState, useEffect } from "react";
import image1 from './assets/photo_5942915946937170503_y.jpg';
import image2 from './assets/photo_5942972030620121352_y.jpg';
import image3 from './assets/photo_5942972030620121353_y.jpg';
import image4 from './assets/photo_5942972030620121354_y.jpg';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3,image4];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className=" h-[478px] overflow-hidden ml-1">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${
            currentSlide === index ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 ease-in-out absolute inset-0`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className="object-cover h-[478px] w-full ml-1 brightness-75 " />
        </div>
      ))}
    </div>
  );
};

export default Slider;
