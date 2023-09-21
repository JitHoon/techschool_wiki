import React, {useState, useEffect} from "react";
import "../../styles/home/carousel.css";
import img1 from "../../assets/images/slide01.jpg";
import img2 from "../../assets/images/slide02.jpg";
import img3 from "../../assets/images/slide03.jpg";
import img4 from "../../assets/images/slide04.jpg";
import img5 from "../../assets/images/slide05.jpg";
import img6 from "../../assets/images/slide06.jpg";
import img7 from "../../assets/images/slide07.jpg";
import img8 from "../../assets/images/slide08.jpg";
import img9 from "../../assets/images/slide09.jpg";
import img10 from "../../assets/images/slide10.jpg";

function Carousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="slideshow">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <div className="dots">
        {images.map((image, index) => (
          <span
            className="dot"
            key={image}
            style={{
              backgroundColor:
                currentSlide === index ? "rgb(255, 101, 144)" : "#fff",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
