import React, { useEffect, useState } from 'react';
import './style/BackgroundStyle.css';

const getRandomPosition = () => ({
  x: Math.random() * 200 - 100, 
    y: Math.random() * 500 - 400  
});

const generateKeyframes = (index) => {
  const positions = Array.from({ length: 10 }, getRandomPosition);
  let keyframes = `@keyframes move${index} {`;
  positions.forEach((pos, i) => {
    keyframes += `${(i * 100) / (positions.length - 1)}% { transform: translate(${pos.x}vw, ${pos.y}vh); } `;
  });
  
  keyframes += `${100}% { transform: translate(${positions[positions.length - 1].x}vw, ${positions[positions.length - 1].y}vh); }`;
  keyframes += '}';
  return keyframes;
};


const generateRandomCircles = (count, setStyles) => {
  const circles = [];
  let styles = '';

  for (let i = 0; i < count; i++) {
    const size = Math.random() * 300 + 50; // Cercuri mai mici pentru o mai bună distribuție
    const colorIndex = (i % 4) + 1;
    const keyframes = generateKeyframes(i);
    styles += keyframes;

    circles.push(
      <div
        key={i}
        className="circle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `var(--background-color-${colorIndex})`,
          animation: `move${i} ${Math.random() * 510 + 120}s ease-in-out infinite`,
        }}
      ></div>
    );
  }

  setStyles(styles);
  return circles;
};


const Test = () => {
  const [circles, setCircles] = useState([]);
  const [styles, setStyles] = useState('');

  useEffect(() => {
    setCircles(generateRandomCircles(50, setStyles)); 
  }, []);

  return (
    <div className="animated-background">
      <style>{styles}</style>
      {circles}
    </div>
  );
};

export default Test;
