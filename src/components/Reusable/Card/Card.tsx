import { useState, ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string; // optional class name from parent
}

const Card = ({ children, className = '' }: CardProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`
         ${styles[className]}
        ${styles.card_class}
        ${styles.card_customclass}
        ${isActive ? styles.active : ''}
        `}
        onClick={() => setIsActive(isActive)}
    >
      {children}
      {isActive && <span className={styles.icon}>✔</span>}
    </div>
  );
};

export default Card;
