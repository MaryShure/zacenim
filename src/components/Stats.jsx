import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./Stats.css";

function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="stats-container">
        <h2 className="stats-title">
          Нас знает весь город благодаря нашему флагманскому проекту @vgomele
        </h2>
        <p className="stats-subtitle">Мы — неотъемлемая часть этого города!</p>

        <div className="stats-card">
          <div className="stats-card__left">
            <div className="stats-icon">
              <FaInstagram />
            </div>
            <div className="stats-info">
              <span className="stats-username">@vgomele</span>
              <span className="stats-details">
                120k подписчиков • 5000+ обзоров
              </span>
            </div>
          </div>
          <button className="btn-primary stats-btn">Подписаться</button>
        </div>
      </div>
    </section>
  );
}

export default Stats;
