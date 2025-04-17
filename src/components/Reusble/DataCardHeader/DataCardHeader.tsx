import React from 'react';
import styles from './DataCardHeader.module.css';
import { CardHeaderProp } from '../../ComponentsInterface/CardsInterface';

const DataCardHeader: React.FC<CardHeaderProp> = ({ label, count, icon, labelTag }) => {
  const showDataHeadWrapper = icon || label || count !== undefined;
  const showHeaderTag = !!labelTag;

  return (
    <div className={styles.datacard_header}>
      {showDataHeadWrapper && (
        <div className={styles.datacard_datahead_wrapper}>
          {icon && (
            <span className={styles.datacard_icon}>
              {typeof icon === 'string' ? (
                <img src={icon} alt="icon" className={styles.datacard_icon_img} />
              ) : (
                icon
              )}
            </span>
          )}
          {label && <p className={styles.datacard_datahead}>{label}</p>}
          {count !== undefined && (
            <div className={styles.datacard_count_value}>{count}</div>
          )}
        </div>
      )}

      {showHeaderTag && (
        <div className={styles.datacard_header_tag}>
          <p className={styles.datacard_tag}>{labelTag}</p>
        </div>
      )}
    </div>
  );
};

export default DataCardHeader;
