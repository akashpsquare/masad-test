import { FC } from 'react';
import { CardsProps } from '../ReusbleInterface/CardsInterface';
import styles from './EmptyCard.module.css';

const EmptyCard: FC<CardsProps> = ({ label, icon, iconSize }) => {
  return (
    <div className={styles.empty_card}>
      <div className={styles.emptycard_add_label}>
        <span className={styles.card_wrapper_label}>{label}</span>
        {icon && (
          <span className={styles.icon} style={{ fontSize: iconSize }}>
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default EmptyCard;
