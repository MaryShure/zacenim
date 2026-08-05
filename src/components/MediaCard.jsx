import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import "./MediaCard.css";

const MediaCard = ({
  width = "100%",
  height = "300px",
  image,
  title,
  subtitle,
  link,
  onClick,
  className = "", // дополнительный класс
  style = {}, // дополнительные инлайн-стили
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handlePlayClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if (onClick) onClick(e);
  };

  return (
    <a
      href={link}
      className={`media-card ${className}`}
      style={{ width, height, backgroundImage: `url(${image})`, ...style }}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
    >
      <div className="media-card__overlay">
        <button className="media-card__play" onClick={handlePlayClick}>
          <FaPlay className={isClicked ? "clicked" : ""} />
        </button>
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
