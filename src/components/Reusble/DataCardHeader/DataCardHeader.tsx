import React from 'react';
import styles from './DataCardHeader.module.css';
import { CardHeaderProps } from '../../ComponentsInterface/CardsInterface';

const DataCardHeader: React.FC<CardHeaderProps> = (props) => {
  const { variant = 'service', headericon, headertitle, headerlabel, headercount, headerlabeltag } = props;

  const renderContent = () => {
    switch (variant) {
      case 'form':
        return (
          <div className={styles.datacard_header_form_wrapper}>
            {headertitle && <h5 className={styles.datacard_header_form_title}>{headertitle}</h5>}
            {headerlabel && <p className={styles.datacard_form_datahead}>{headerlabel}</p>}
          </div>
        );

      case 'product':
      case 'benefit':
        return (
          <> 
            {headercount ? (
              <div className={styles.datacard_count_value}>{headercount}</div>
            ): null}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.datacard_header}>
      {headericon && (
        <div className={styles.datacard_datahead_wrapper}>
          <span className={styles.datacard_header_icon}>
            {typeof headericon === 'string' ? (
              <img src={headericon} alt="icon" className={styles.datacard_icon_img} />
            ) : (
              headericon
            )}
          </span>
         {variant !== 'form' && headerlabel ? <p className={styles.datacard_datahead}>{headerlabel}</p>: null}
          {renderContent()}
        </div>
      )}

      {/* Render header tag for the 'product' variant */}
      {variant === 'product' && headerlabeltag && (
        <div className={styles.datacard_header_tag}>
          <p className={styles.datacard_tag}>{headerlabeltag}</p>
        </div>
      )}
    </div>
  );
};

export default DataCardHeader;