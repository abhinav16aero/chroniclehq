import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';


export default function Home() {
  const [textColor, setTextColor] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const text = 'In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.';

      const updatedTextColor = text.split('').map((letter, index) => {
        const color = scrollY > index * 8 ? 'white' : '#333333';
        return { letter, color };
      });

      setTextColor(updatedTextColor);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {textColor.map((letter, index) => (
          <span key={index} style={{ color: letter.color }}>
            {letter.letter}
          </span>
        ))}
      </h1>
    </div>
  )};
