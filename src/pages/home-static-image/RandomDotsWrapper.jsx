// components/RandomDotsWrapper.js
import styles from './RandomDotsWrapper.module.css'; // Importing CSS module
import React, { useEffect, useState } from 'react';
import Link from 'next/link'


const RandomDotsWrapper = ({ count = 12 }) => {
  const [dots, setDots] = useState([]);
  const allowedColors = [
    "#7df9ff", // Electric Blue
    "#002366", // Midnight Blue
    "#ff69b4", // Pink
    "#66cdaa", // Aquamarine
    "#4682b4", // Steel Blue
    "#ffb6c1", // Light Pink
  ];



  useEffect(() => {
    const generateDots = () => {
      const dotsArray = [];
      for (let i = 0; i < 10; i++) {
        const size = Math.random() * 300 + 100; // Random size between 50px to 150px
        const x = Math.random() * window.innerWidth; // Random x-position
        const y = Math.random() * window.innerHeight; // Random y-position
        const color = allowedColors[Math.floor(Math.random() * allowedColors.length)];
        const shadowColor = allowedColors[Math.floor(Math.random() * allowedColors.length)]; // Pick random color
        const blur = Math.random() * 100 +50; // Random blur between 5px to 15px

        dotsArray.push({
          id: i,
          size,
          x,
          y,
          color,
          blur,
        });
      }
      setDots(dotsArray);
    };

    generateDots();

  
  }, []);


  return (
    <div className={styles.wrapper}>
      {dots.map((dot, index) => (
        <span
          key={index}
          className={styles.dot}
          style={{
            width: dot.size + 'px',
            height: dot.size + 'px',
            backgroundColor: dot.color,
           // boxShadow: `0 0 ${dot.blur}px ${dot.shadowColor}`,
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
      //      boxShadow: `${Math.random() * 5 + 5}px ${Math.random() * 5 + 5}px ${Math.random() * 20 + 10}px rgba(0, 0, 0, 0.3), 0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.7)`, // External glow
      boxShadow: `${Math.random() * 50 + 100}px ${Math.random() * 50 + 100}px ${Math.random() * 300 + 200}px ${dot.color}, 0 0 ${Math.random() * 200 + 100}px ${dot.color}, 0.7)`, // External glow
      textShadow: `${Math.random() * 50 + 10}px ${Math.random() * 50 + 10}px ${Math.random() * 200 + 100}px ${dot.color}, 0.6)` // Internal glow
  
          }}
        ></span>
      ))}
        <div className={styles.content}>
      <h1 className="text-uppercase mt-4" style={{fontFamily:'"Roxborough", serif',fontSize:'4.6rem !important',lineHeight:'1.20 !important', fontWeight:'100 !important', fontVariationSettings:'"wght" 100 !important',textShadow:'0 0 3rem rgba(23, 20, 64 ,1)'}}><br />
        UNLEASH THE MAGIC <br /> WITH TWELVES</h1><br />
      <h2 className="fs-24 font-secondary" style={{fontFamily:'"jost", sans-serif !important',fontSize:'1.8rem !important',lineHeight:'1.20 !important', fontWeight:'100 !important', fontVariationSettings:'"wght" 300 !important', maxWidth:'64rem', textShadow:'0 0 3rem rgba(23, 20, 64 ,1)'}}>Create Sensational festive experiences that deliver <br /> dazzling commercial performance</h2>

     <br /><br />
      <Link href="/shop" className="btn-dark fw-medium min-w-150 rounded-pill stretched-link" style={{Width:'200px!important'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shop
      Now &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
  <br /><br /> <br /><br /><br /><br /><br />
      <scroll-cta classBame="splash-screen__scroll-cta">
        Ready to be dazzled?        <span class="splash-screen__scroll-cta-line"></span>
      </scroll-cta>
      </div>
    </div>
    
  );
};

export default RandomDotsWrapper;
