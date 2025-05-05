import React from 'react';
import styles from './BenefitTextCard.module.css';

export type BenefitTextCardVariant = 'default' | 'updated' | 'discarded';

type Props = {
  title?: string;
  label?: string;
  text: string;
  variant?: BenefitTextCardVariant;
};

export const BenefitTextCard: React.FC<Props> = ({
  title,
  label = 'Benefit',
  text,
  variant = 'default',
}) => {
  return (
    <div className={styles.wrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={`${styles.card} ${styles[variant]}`}>
        <span className={styles.label}>{label}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
