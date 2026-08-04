import React from "react";
import { FaComment, FaCamera, FaVideo, FaPencilAlt } from "react-icons/fa";
import "./Steps.css";

const stepsData = [
  {
    icon: <FaComment />,
    title: "Расскажите о себе",
    text: "Вы рассказываете о своём месте — мы слушаем и вдохновляемся",
  },
  {
    icon: <FaCamera />,
    title: "Мы продумываем каждый кадр",
    text: "Мы придумываем, как показать вас с лучшей стороны",
  },
  {
    icon: <FaVideo />,
    title: "Снимаем всё вживую",
    text: "Мы приезжаем, чтобы снять атмосферу в живую",
  },
  {
    icon: <FaPencilAlt />,
    title: "Сводим, монтируем, упаковываем",
    text: "Мы монтируем так, чтобы хотелось досматривать и пересматривать",
  },
];

function Steps() {
  return (
    <section className="steps" id="steps">
      <div className="steps-container">
        <h2 className="steps-title">
          Никакой бюрократии — только живое общение и результат.
        </h2>
        <p className="steps-subtitle">От идеи до поста: 4 простых шага</p>

        <div className="steps-grid">
          {stepsData.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">
                <div className="step-icon__circle">{step.icon}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
