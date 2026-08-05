import React, { useState, useEffect } from "react";
import "./Hero.css";
import fullImage from "../assets/gomel_full.webp";
import pixelImage from "../assets/gomel_pixel.jpg";
import MediaCard from "./MediaCard";

// Данные для карточек в галерее
// Вы можете добавить сюда свои изображения, видео или любые другие компоненты
const galleryItems = [
  {
    id: 1,
    image:
      "https://sferas.by/wp-content/uploads/2024/04/ispytanie-gidranta-1.png",
    link: "https://example.com/1",
  },
  {
    id: 2,
    image:
      "https://sferas.by/wp-content/uploads/2024/04/ispytanie-gidranta-1.png",
    link: "https://example.com/2",
  },
  {
    id: 3,
    image:
      "https://sferas.by/wp-content/uploads/2024/04/ispytanie-gidranta-1.png",
    link: "https://example.com/3",
  },
  {
    id: 4,
    image:
      "https://sferas.by/wp-content/uploads/2024/04/ispytanie-gidranta-1.png",
    link: "https://example.com/4",
  },
  {
    id: 5,
    image:
      "https://sferas.by/wp-content/uploads/2024/04/ispytanie-gidranta-1.png",
    link: "https://example.com/5",
  },
];

const Hero = () => {
  const [fullLoaded, setFullLoaded] = useState(false);

  // Загрузка фонового изображения
  useEffect(() => {
    const img = new Image();
    img.src = fullImage;
    img.onload = () => setFullLoaded(true);
    if (img.complete) setFullLoaded(true);
  }, []);

  return (
    <section className="hero">
      {/* LQIP (Low Quality Image Placeholder) */}
      <div
        className={`hero__blur ${fullLoaded ? "hidden" : ""}`}
        style={{ backgroundImage: `url(${pixelImage})` }}
      />
      {/* Основное фоновое изображение */}
      <div
        className={`hero__full ${fullLoaded ? "loaded" : ""}`}
        style={{ backgroundImage: `url(${fullImage})` }}
      />

      <div className="hero-content">
        {/* Левый блок с текстом */}
        <div className="text-block">
          <h1>Заценим.бай</h1>
          <h2>обзорный медиа-проект о Гомеле</h2>
          <p>
            Мы снимаем истории, открываем новые места и показываем город таким,
            какой он есть. Честно. Красиво. С душой.
          </p>
          <button className="btn-primary">Свяжитесь с нами</button>
        </div>

        {/* Правый блок с бесконечной галереей */}
        <div className="gallery-wrapper">
          <div className="gallery-track">
            {/* Первый набор карточек */}
            {galleryItems.map((item) => (
              <MediaCard
                key={item.id}
                className="gallery-item"
                width="200px"
                height="300px"
                image={item.image}
                link={item.link}
              />
            ))}
            {/* Дублируем набор для создания эффекта бесконечности */}
            {galleryItems.map((item) => (
              <MediaCard
                key={`dup-${item.id}`}
                className="gallery-item"
                width="200px"
                height="300px"
                image={item.image}
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
