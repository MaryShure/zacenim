import React, { useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import "./MediaCard.css";

const MediaCard = ({
  width = "100%",
  height = "300px",
  image, // постер (опционально)
  videoSrc, // если передан – показываем видео
  poster, // отдельный постер
  title,
  subtitle,
  link,
  className = "",
  style = {},
  loop = true,
  autoPlayOnView = true,
  playDelay = 200, // небольшая задержка перед стартом
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection Observer для автовоспроизведения
  useEffect(() => {
    if (!videoSrc || !autoPlayOnView) return;
    if (!containerRef.current) return;

    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Запускаем с задержкой, чтобы не дёргать видео при быстром скролле
            timeoutId = setTimeout(() => {
              if (videoRef.current && videoRef.current.paused) {
                videoRef.current.play().catch(() => {});
              }
            }, playDelay);
          } else {
            clearTimeout(timeoutId);
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(containerRef.current);
    observerRef.current = observer;

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [videoSrc, autoPlayOnView, playDelay]);

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
      }
    };
  }, []);

  return (
    <a
      href={link}
      className={`media-card ${className}`}
      style={{ width, height, ...style }}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      ref={containerRef}
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster || image || undefined}
          className="media-card__video"
          muted
          playsInline
          loop={loop}
          preload="metadata"
        />
      ) : (
        <div
          className="media-card__image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      )}

      {/* Оверлей с иконкой Play (чисто визуально) */}
      <div className="media-card__overlay">
        <div className="media-card__play">
          <FaPlay />
        </div>
      </div>

      {(title || subtitle) && (
        <div className="media-card__labels">
          {subtitle && <span className="media-card__subtitle">{subtitle}</span>}
          {title && <span className="media-card__title">{title}</span>}
        </div>
      )}
    </a>
  );
};

export default MediaCard;
