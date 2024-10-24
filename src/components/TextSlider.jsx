import React, { useState, useEffect } from 'react';
import '../stylesheets/TextSlider.css';
import '../stylesheets/Mediaqueries.css';

const TextSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    'Accesorios y herramientas para tu bar.',
    'Bebidas para cualquier tipo de ocasión.',
    '¡Haz de tu evento algo inolvidable con Altos Tragos!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-slider">
      {texts.map((text, index) => (
        <p key={index} className={`slider-text ${index === currentIndex ? 'active' : ''}`}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextSlider;
