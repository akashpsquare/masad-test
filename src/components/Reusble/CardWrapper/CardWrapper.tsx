import { FC } from 'react';
import styles from './CardWrapper.module.css';
import { CardsProps } from '../../ComponentsInterface/CardsInterface';

interface ExtendedCardsProps extends CardsProps {
  active?: boolean;
}

const CardWrapper: FC<ExtendedCardsProps> = ({
  children,
  customStyle,
  active = true,
}) => {
  return (
    <div className={`${styles.cardWrapper} ${customStyle} ${active ? styles.active : ''}`}>
      {active && <span className={styles.icon}>★</span>}
      {children}
    </div>
  );
};

export default CardWrapper;
