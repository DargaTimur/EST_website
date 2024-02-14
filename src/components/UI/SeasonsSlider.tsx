"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const SeasonsSlider = () => {
  return (
    <Carousel
      prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
      indicators
      interval={5000}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/winter.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1>Winter</h1>
        <div style={{fontSize: "180%", fontWeight: "bolder"}}>
          <p>Winter in Mongolia is marked by extreme cold, with temperatures plummeting to -20 to -35°C. The landscape transforms into a pristine snow-covered wonderland, offering a surreal and breathtaking experience. </p>
          <p>Despite the harsh conditions, the Mongolian winter presents unique opportunities for cultural immersion, winter sports, and witnessing the resilience of nomadic communities.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/spring.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Spring</h1>
          <div style={{fontSize: "180%", fontWeight: "bolder"}}>
            <p>Mongolian spring, spanning from March to May, witnesses temperatures rising from 0 to 20°C. This season unveils a landscape awakening from winter slumber, adorned with vibrant blooms.</p>
            <p>Mild weather makes it an ideal time for outdoor activities and cultural exploration, allowing travelers to experience the nomadic way of life against the backdrop of picturesque scenery.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/summer.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Summer</h1>
          <div style={{fontSize: "180%", fontWeight: "bolder"}}>
            <p>Mongolian summer, from June to August, graces the land with warm temperatures ranging from 20 to 35°C. The vast steppes and stunning landscapes come alive, providing an ideal season for outdoor adventures and cultural exploration.</p>
            <p>The maximum temperature in the Gobi desert during this period can reach +58 degrees. Nomadic communities thrive during these months, showcasing their traditional way of life against the backdrop of lush greenery. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/autumn.jpg"
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h1>Autumn</h1>
          <div style={{fontSize: "180%", fontWeight: "bolder"}}>
            <p>Autumn in Mongolia, spanning from September to November, embraces temperatures ranging from 5 to 15°C. As the vibrant summer hues gradually fade, the landscapes transform into a mesmerizing canvas of golden and amber tones.</p>
            <p>This season offers a unique blend of crisp air and breathtaking scenery, making it an ideal time for cultural exploration and outdoor activities. Nomadic herders prepare for winter, and the autumnal landscapes provide a picturesque backdrop for witnessing traditional Mongolian life.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SeasonsSlider


