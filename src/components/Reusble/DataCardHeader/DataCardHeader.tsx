import React from 'react';
import styles from './DataCardHeader.module.css';
import { CardProp } from '../../ComponentsInterface/CardsInterface';
const DataCardHeader: React.FC<CardProp> = ({ headerlabel, headercount, headericon, headerlabeltag }) => {
  const showDataHeadWrapper = headericon || headerlabel || headercount !== undefined;
  const showHeaderTag = !!headerlabeltag;

  return (
    <div className={styles.datacard_header}>
      {showDataHeadWrapper && (
        <div className={styles.datacard_datahead_wrapper}>
          {headericon && (
            <span className={styles.datacard_icon}>
              {typeof headericon === 'string' ? (
                <img src={headericon} alt="icon" className={styles.datacard_icon_img} />
              ) : (
                headericon
              )}
            </span>
          )}
          {headerlabel && <p className={styles.datacard_datahead}>{headerlabel}</p>}
          {headercount !== undefined && (
            <div className={styles.datacard_count_value}>{headercount}</div>
          )}
        </div>
      )}

      {showHeaderTag && (
        <div className={styles.datacard_header_tag}>
          <p className={styles.datacard_tag}>{headerlabeltag}</p>
        </div>
      )}
    </div>
  );
};

export default DataCardHeader;
