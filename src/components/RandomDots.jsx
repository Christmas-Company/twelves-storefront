import { useEffect } from 'react';
import styles from './RandomDots.module.css'; // Optional CSS Modules

const RandomDots = () => {
  useEffect(() => {
    const dotCount = 100; // Number of dots
    const container = document.querySelector(`.${styles.dotContainer}`);

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      const size = Math.random() * 10 + 5; // Random size between 5px and 15px
      const x = Math.random() * 100; // Random horizontal position
      const y = Math.random() * 100; // Random vertical position

      dot.style.position = 'absolute';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.borderRadius = '50%';
      dot.style.backgroundColor = getRandomColor();
      dot.style.top = `${y}%`;
      dot.style.left = `${x}%`;
      dot.style.animation = `moveDot ${Math.random() * 5 + 3}s infinite linear`; // Random movement speed

      container.appendChild(dot);
    }
  }, []);

  // Function to get a random color from the three specified colors
  const getRandomColor = () => {
    const colors = ['#171440', '#7DF9FF', '#90EE90']; // Midnight Blue, Electric Blue, Light Green
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return <div className={styles.dotContainer}></div>;
};

export default RandomDots;
