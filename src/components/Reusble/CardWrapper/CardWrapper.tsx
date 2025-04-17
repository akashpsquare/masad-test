import { FC } from 'react';
import styles from './CardWrapper.module.css';
import { CardsProps } from '../ReusbleInterface/CardsInterface';

const CardWrapper: FC<CardsProps> = ({
  children,
  customStyle,
}) => {
  return (
    <div className={`${styles.cardWrapper} ${customStyle} `} >
      {children}
    </div>
  );
};

export default CardWrapper;

