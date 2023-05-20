import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";
import styles from './css/Banner.module.css';

const carouselItems = [
  "https://res.cloudinary.com/rsbrsb/image/upload/v1684567991/sapceX/pexels-spacex-60133_kqeldp.jpg",
  "https://res.cloudinary.com/rsbrsb/image/upload/v1684567985/sapceX/pexels-spacex-23793_jepwep.jpg",
  "https://res.cloudinary.com/rsbrsb/image/upload/v1684567985/sapceX/pexels-spacex-60130_faz7xj.jpg",
  "https://res.cloudinary.com/rsbrsb/image/upload/v1684567985/sapceX/pexels-spacex-60132_w6dtqm.jpg",
];

const Banner = () => {
  return (
    <div className={styles.caro_box}>
      <div className="carousel-container">
        <Carousel
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
        >
          {carouselItems.map((carouselItem, index) => (
            <div key={index}>
              <img src={carouselItem}  alt={`Slider ${index + 1}`} className={styles.slider_image}/>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
