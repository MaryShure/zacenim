import React, { useState, useEffect } from "react";
import "./About.css";
import fullImage from "../assets/gomel_full.webp";
import pixelImage from "../assets/gomel_pixel.jpg";

function About() {
  const [fullLoaded, setFullLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = fullImage;
    img.onload = () => setFullLoaded(true);
    if (img.complete) setFullLoaded(true);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-header">
        <div
          className={`about-header__blur ${fullLoaded ? "hidden" : ""}`}
          style={{ backgroundImage: `url(${pixelImage})` }}
        />
        <div
          className={`about-header__full ${fullLoaded ? "loaded" : ""}`}
          style={{ backgroundImage: `url(${fullImage})` }}
        />
        <div className="about-header__gradient" />
        <div className="about-header__content">
          <h2 className="about-title">Гомель меняется каждый день</h2>
        </div>
      </div>

      {/* Остальной контент (текстовые блоки) */}
      <div className="about-content">
        <div className="about__right">
          <div className="about-text">
            <p>
              Здесь появляются новые кофейни, открываются новые магазины,
              работают шоу-румы и обновляются городские локации. Каждый день в
              городе случается что-то интересное. Наша команда выезжает на
              места, чтобы снять это на видео, попробовать, почувствовать и
              показать вам.
            </p>
            <p>
              Мы делимся вайбом и настроением города. И делаем это так, чтобы у
              вас возникло желание выйти из дома и увидеть всё своими глазами.
            </p>
          </div>
          <div className="text-block quote-block">
            <blockquote>
              «Потому что лучший город — тот, который знаешь лично.»
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
