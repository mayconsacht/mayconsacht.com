'use client';

import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt';
import { useEffect, useState } from 'react';

import styles from './BackToTopButton.module.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [bottomOffset, setBottomOffset] = useState(20);
  const footerElementHeight = 75;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop >= windowHeight) {
          setIsVisible(true);
          const distanceFromBottom =
            documentHeight - (scrollTop + windowHeight);
          if (distanceFromBottom <= footerElementHeight) {
            setBottomOffset(footerElementHeight - distanceFromBottom + 40);
          } else {
            setBottomOffset(20);
          }
        } else {
          setIsVisible(false);
        }
      }, 5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <span
          onClick={scrollToTop}
          className={styles.arrow}
          style={{ bottom: `${bottomOffset}px` }}
        >
          <Arrow />
        </span>
      )}
    </>
  );
};

export default BackToTopButton;
