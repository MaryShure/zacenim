import React, { useState, useEffect } from "react";
import "./Hero.css";
import fullImage from "../assets/gomel_full.webp";
import pixelImage from "../assets/gomel_pixel.jpg";
import MediaCard from "./MediaCard";
import videoCirque from "../assets/цирк_видео.mp4";
import videoBarberShop from "../assets/барбершоп_видео.mp4";

const galleryItems = [
  {
    id: 1,
    videoSrc: videoCirque,
    link: "https://www.instagram.com/reel/Da5ewPJMUsW/?igsh=MWRhMHJodzU3cHI4bw==",
  },
  {
    id: 2,
    videoSrc: videoBarberShop,
    link: "https://www.instagram.com/reel/DbiFr2YMgb9/?igsh=bjRwMGRoZW95YTZi",
  },
  {
    id: 3,
    videoSrc: videoCirque,
    link: "https://www.instagram.com/reel/Da5ewPJMUsW/?igsh=MWRhMHJodzU3cHI4bw==",
  },
  {
    id: 4,
    videoSrc: videoCirque,
    link: "https://www.instagram.com/reel/Da5ewPJMUsW/?igsh=MWRhMHJodzU3cHI4bw==",
  },
  {
    id: 5,
    videoSrc: videoCirque,
    link: "https://www.instagram.com/reel/Da5ewPJMUsW/?igsh=MWRhMHJodzU3cHI4bw==",
  },
];

const Hero = () => {
  const [fullLoaded, setFullLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = fullImage;
    img.onload = () => setFullLoaded(true);
    if (img.complete) setFullLoaded(true);
  }, []);

  return (
    <section className="hero">
      <div
        className={`hero__blur ${fullLoaded ? "hidden" : ""}`}
        style={{ backgroundImage: `url(${pixelImage})` }}
      />
      <div
        className={`hero__full ${fullLoaded ? "loaded" : ""}`}
        style={{ backgroundImage: `url(${fullImage})` }}
      />

      <div className="hero-content">
        <div className="text-block">
          <h1>Заценим.бай</h1>
          <h2>обзорный медиа-проект о Гомеле</h2>
          <p>
            Мы снимаем истории, открываем новые места и показываем город таким,
            какой он есть. Честно. Красиво. С душой.
          </p>
          <button className="btn-primary">Свяжитесь с нами</button>
        </div>

        <div className="gallery-wrapper">
          <div className="gallery-track">
            {galleryItems.map((item) => (
              <MediaCard
                key={item.id}
                className="gallery-item"
                width="200px"
                height="300px"
                videoSrc={item.videoSrc}
                link={item.link}
                // poster не передаём – браузер покажет первый кадр
              />
            ))}
            {galleryItems.map((item) => (
              <MediaCard
                key={`dup-${item.id}`}
                className="gallery-item"
                width="200px"
                height="300px"
                videoSrc={item.videoSrc}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
