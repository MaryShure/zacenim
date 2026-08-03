import React, { useState, useEffect } from "react";
import "./Hero.css";
import fullImage from "../assets/gomel_full.webp";
import pixelImage from "../assets/gomel_pixel.jpg";

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

        <div className="cards">
          <div className="card card-1">1</div>
          <div className="card card-2">2</div>
          <div className="card card-3">3</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
