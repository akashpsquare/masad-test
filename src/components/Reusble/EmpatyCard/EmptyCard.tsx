import { FC } from 'react';
import { EmptyCardProp } from '../../ComponentsInterface/CardsInterface';
import styles from './EmptyCard.module.css';

const EmptyCard: FC<EmptyCardProp> = ({ label, icon}) => {
  return (
    <div className={styles.empty_card}>
      <div className={styles.emptycard_add_label}>
        <span className={styles.card_wrapper_label}>{label}</span>
        {icon && (
          <span className={styles.icon}>
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default EmptyCard;
