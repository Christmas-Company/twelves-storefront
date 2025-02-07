import styles from '../pages/home-static-image/RandomDotsWrapper.module.css'; // Importing CSS module
import React, { useEffect, useState } from 'react';
import heading from '@assets/images/shop/collection-list/bg-heading.jpg';
const PortfolioSection = ({ count = 8 }) => {
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
          const size = Math.random() * 50 + 10; // Random size between 50px to 150px
          const x = Math.random() * window.innerWidth; // Random x-position
          const y = Math.random() * window.innerHeight; // Random y-position
          const color = allowedColors[Math.floor(Math.random() * allowedColors.length)];
          const shadowColor = allowedColors[Math.floor(Math.random() * allowedColors.length)]; // Pick random color
          const blur = Math.random() * 10 +5; // Random blur between 5px to 15px
  
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
          <React.Fragment>
                <div className={styles.wrapper} style={{height:'15vh !important'}}>
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
            <br /> <br />
          <h4 className="fs-20 fw-medium">PORTFOLIO</h4>
         
      
        </div>
      </div>
              
       
        </React.Fragment>
    )
}
export default PortfolioSection