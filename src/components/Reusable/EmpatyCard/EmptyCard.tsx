import { FC } from 'react';
import { EmptyCardProp } from '../../ComponentsInterface/CardsInterface';
import Card from '../Card/Card';
import styles from './EmptyCard.module.css';

const EmptyCard: FC<EmptyCardProp> = ({ label, icon}) => {
  return (

<Card className='product_card'>
    <div className={styles.empty_card}>
      <div className={styles.emptycard_add_label}>
        <span className={styles.card_wrapper_label}>{label}</span>
        {icon && (
          <span className={styles.empty_card_icon}>
         <img src={typeof icon === 'string' ? icon : ''} alt="" />
          </span>
        )}
      </div>
    </div>
    </Card>
  );
};

export default EmptyCard;
