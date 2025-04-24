import React from 'react';
import styles from './DataCardHeader.module.css';
import { CardHeaderProps } from '../../ComponentsInterface/CardsInterface';

const DataCardHeader: React.FC<CardHeaderProps> = (props) => {
  const { variant = 'service' } = props;

  const {
    headericon,
    headertitle,
    headerlabel,
    headercount,
    headerlabeltag,
  } = variant === 'form'
    ? { headericon: props.headericon, headertitle: props.headertitle, headerlabel: props.headerlabel }
    : variant === 'service'
    ? { headericon: props.headericon, headerlabel: props.headerlabel }
    : variant === 'product'
    ? { headericon: props.headericon, headerlabel: props.headerlabel, headercount: props.headercount, headerlabeltag: props.headerlabeltag }
    : variant === 'benefit'
    ? { headericon: props.headericon, headerlabel: props.headerlabel, headercount: props.headercount }
    : {};

  const renderContent = () => {
    switch (variant) {
      case 'form':
        return (
          <div className={styles.datacard_header_form_wrapper}>
            {headertitle && <h5 className={styles.datacard_header_form_title}>{headertitle}</h5>}
            {headerlabel && <p className={styles.datacard_form_datahead}>{headerlabel}</p>}
          </div>
        );

      case 'service':
        return (
          <>
            {headerlabel && <p className={styles.datacard_datahead}>{headerlabel}</p>}
          </>
        );

      case 'product':
      case 'benefit':
        return (
          <>
            {headerlabel && <p className={styles.datacard_datahead}>{headerlabel}</p>}
            {headercount !== undefined && (
              <div className={styles.datacard_count_value}>{headercount}</div>
            )}
          </>
        );

      default:
        return null;
    }
  };

  return (
    ////////////////////////////////////////////////////////////////////////////////
//-------------------header icon is provided here for all the variant
    ///////////////////////////////////////////////////////////////////////////////
    <div className={styles.datacard_header}>
      {(headericon !== undefined) && (
        <div className={styles.datacard_datahead_wrapper}>
          {headericon && (
            <span className={styles.datacard_header_icon}>
              {typeof headericon === 'string' ? (
                <img src={headericon} alt="icon" className={styles.datacard_icon_img} />
              ) : (
                headericon
              )}
            </span>
          )}

{/* //////////////////////////////////////////////////////////////////////////////////
-----------------Rendering all the header content here according to the variants
    /////////////////////////////////////////////////////////////////////////////// */}

          {renderContent()}
        </div>
      )}


{/* ////////////////////////////////////////////////////////////////////
// header tag porvided here for the product variant only
// //////////////////////////////////////////////////////*/}

      {variant === 'product' && headerlabeltag && (
        <div className={styles.datacard_header_tag}>
          <p className={styles.datacard_tag}>{headerlabeltag}</p>
        </div>
      )}
    </div>
  );
};

export default DataCardHeader;