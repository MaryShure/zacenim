import React, { useRef, useState, useEffect, useCallback } from "react";
import MediaCard from "./MediaCard";
import "./Works.css";
// Импортируем видео (путь может отличаться, скорректируйте под свой проект)
import videoCirque from "../assets/цирк_видео.mp4";

const worksData = [
  {
    id: 1,
    videoSrc: videoCirque,
    title: "Цирк",
    subtitle: "Развлечения",
    link: "https://www.instagram.com/reel/Da5ewPJMUsW/?igsh=MWRhMHJodzU3cHI4bw==",
  },
  {
    id: 2,
    videoSrc: videoCirque,
    title: 'Ресторан "Сожский бриз"',
    subtitle: "Гастрономия",
    link: "https://www.instagram.com/reel/Da5ewPJMUsW/?igsh=MWRhMHJodzU3cHI4bw==",
  },
  {
    id: 3,
    videoSrc: videoCirque,
    title: "Шоу-рум",
    subtitle: "Шоппинг",
    link: "https://www.instagram.com/reel/Da5ewPJMUsW/?igsh=MWRhMHJodzU3cHI4bw==",
  },
  {
    id: 4,
    videoSrc: videoCirque,
    title: "Цирк",
    subtitle: "Развлечения",
    link: "https://www.instagram.com/reel/Da5ewPJMUsW/?igsh=MWRhMHJodzU3cHI4bw==",
  },
];

function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Десктоп: состояние для drag (transform с clamp)
  const [isDragging, setIsDragging] = useState(false);
  const containerRefDesktop = useRef(null);
  const trackRefDesktop = useRef(null);
  const dragStartX = useRef(0);
  const startTranslateX = useRef(0);
  const currentTranslateX = useRef(0);
  const maxTranslateX = useRef(0);

  // Мобильный: состояние для touch drag
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const currentTranslateY = useRef(0);
  const isAnimating = useRef(false);
  const isDraggingMobile = useRef(false);
  const containerRefMobile = useRef(null);
  const trackRefMobile = useRef(null);

  // Отслеживание размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Пересчёт границ для десктопа
  const updateBounds = useCallback(() => {
    if (containerRefDesktop.current && trackRefDesktop.current) {
      const containerWidth = containerRefDesktop.current.clientWidth;
      const trackWidth = trackRefDesktop.current.scrollWidth;
      if (trackWidth > containerWidth) {
        maxTranslateX.current = containerWidth - trackWidth;
      } else {
        maxTranslateX.current = 0;
      }
    }
  }, []);

  useEffect(() => {
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [updateBounds]);

  // Переход к определённому индексу (мобильная)
  const goTo = useCallback((index) => {
    if (isAnimating.current) return;
    if (index < 0 || index >= worksData.length) return;
    isAnimating.current = true;
    setActiveIndex(index);
    if (trackRefMobile.current) {
      trackRefMobile.current.style.transition = "transform 0.4s ease";
      trackRefMobile.current.style.transform = `translateY(-${index * 100}%)`;
    }
    setTimeout(() => {
      isAnimating.current = false;
      if (trackRefMobile.current) {
        trackRefMobile.current.style.transition = "none";
      }
      currentTranslateY.current = -index * 100;
    }, 400);
  }, []);

  // ========== ДЕСКТОП: горизонтальный drag с ограничением ==========
  const handleMouseDown = (e) => {
    if (!trackRefDesktop.current) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    const style = window.getComputedStyle(trackRefDesktop.current);
    const matrix = style.transform;
    if (matrix !== "none") {
      const values = matrix.match(/matrix.*\((.+)\)/);
      if (values) {
        const vals = values[1].split(", ");
        const tx = parseFloat(vals[4] || 0);
        startTranslateX.current = tx;
        currentTranslateX.current = tx;
      }
    } else {
      startTranslateX.current = 0;
      currentTranslateX.current = 0;
    }
    trackRefDesktop.current.style.transition = "none";
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !trackRefDesktop.current) return;
    const dx = e.clientX - dragStartX.current;
    let newTranslateX = startTranslateX.current + dx;
    newTranslateX = Math.max(maxTranslateX.current, Math.min(0, newTranslateX));
    currentTranslateX.current = newTranslateX;
    trackRefDesktop.current.style.transform = `translateX(${newTranslateX}px)`;
    e.preventDefault();
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging && trackRefDesktop.current) {
      trackRefDesktop.current.style.transition = "transform 0.15s ease";
    }
    setIsDragging(false);
  };

  // ========== МОБИЛЬНАЯ ВЕРСИЯ: вертикальный drag без блокировки ==========
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartY.current = touch.clientY;
    touchStartX.current = touch.clientX;
    isDraggingMobile.current = false;
    if (trackRefMobile.current) {
      trackRefMobile.current.style.transition = "none";
      const style = window.getComputedStyle(trackRefMobile.current);
      const matrix = style.transform;
      if (matrix !== "none") {
        const values = matrix.match(/matrix.*\((.+)\)/);
        if (values) {
          const vals = values[1].split(", ");
          const translateY = parseFloat(vals[5] || 0);
          currentTranslateY.current = translateY;
        }
      } else {
        currentTranslateY.current = 0;
      }
    }
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const deltaY = touch.clientY - touchStartY.current;
    const deltaX = touch.clientX - touchStartX.current;

    const isVertical = Math.abs(deltaY) > Math.abs(deltaX);

    if (isVertical && !isDraggingMobile.current) {
      isDraggingMobile.current = true;
    }

    if (isDraggingMobile.current) {
      e.preventDefault();
      if (trackRefMobile.current) {
        const newTranslateY = currentTranslateY.current + deltaY;
        trackRefMobile.current.style.transform = `translateY(${newTranslateY}px)`;
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isDraggingMobile.current) return;
    if (trackRefMobile.current) {
      const style = window.getComputedStyle(trackRefMobile.current);
      const matrix = style.transform;
      let currentY = 0;
      if (matrix !== "none") {
        const values = matrix.match(/matrix.*\((.+)\)/);
        if (values) {
          const vals = values[1].split(", ");
          currentY = parseFloat(vals[5] || 0);
        }
      }
      const cardHeight = trackRefMobile.current.clientHeight;
      const targetIndex = Math.round(-currentY / cardHeight);
      const clampedIndex = Math.max(
        0,
        Math.min(targetIndex, worksData.length - 1),
      );
      goTo(clampedIndex);
    }
    isDraggingMobile.current = false;
  };

  // ========== Рендеринг ==========
  // Десктопная версия
  if (!isMobile) {
    return (
      <section className="works" id="works">
        <div className="works-container">
          <p className="works-subtitle">Наши последние работы в городе</p>
          <h2 className="works-title">Мы уже заценили</h2>
          <div
            className="works-scroll"
            ref={containerRefDesktop}
            style={{ overflow: "visible" }}
          >
            <div
              className="works-track-desktop"
              ref={trackRefDesktop}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              style={{
                display: "flex",
                gap: "30px",
                transform: "translateX(0px)",
                transition: "none",
                cursor: "grab",
                userSelect: "none",
              }}
            >
              {worksData.map((item) => (
                <MediaCard
                  key={item.id}
                  width="300px"
                  height="440px"
                  videoSrc={item.videoSrc}
                  title={item.title}
                  subtitle={item.subtitle}
                  link={item.link}
                  className="works-card"
                  // poster не передаём – браузер покажет первый кадр
                />
              ))}
            </div>
          </div>
          <a
            href="https://instagram.com/zacenim.by"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary works-btn"
          >
            Смотреть больше
          </a>
        </div>
      </section>
    );
  }

  // Мобильная версия
  return (
    <section className="works works-mobile" id="works" ref={containerRefMobile}>
      <div className="works-container">
        <p className="works-subtitle">Наши последние работы в городе</p>
        <h2 className="works-title">Мы уже заценили</h2>
        <div
          className="works-tiktok"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="works-tiktok-track"
            ref={trackRefMobile}
            style={{
              transform: `translateY(-${activeIndex * 100}%)`,
              transition: "none",
            }}
          >
            {worksData.map((item) => (
              <MediaCard
                key={item.id}
                width="100%"
                height="100%"
                videoSrc={item.videoSrc}
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
                className="works-card-mobile"
              />
            ))}
          </div>
          <div className="works-pagination">
            {worksData.map((_, i) => (
              <div
                key={i}
                className={`works-dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
        <a
          href="https://instagram.com/zacenim.by"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary works-btn"
        >
          Смотреть больше
        </a>
      </div>
    </section>
  );
}

export default Works;
