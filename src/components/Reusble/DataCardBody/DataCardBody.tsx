import React from 'react';
import styles from './DataCardBody.module.css';
import { CardProp } from '../../ComponentsInterface/CardsInterface';

const DataCardBody: React.FC<CardProp> = ({ data, variant }) => {
  console.log(data);

  return (
    <>
      {variant === 'service' && (
        <div className={styles.datacard_service_heading}>
          <p className={styles.datacard_description}>
            Get priority Scheduling for service requests and maintenance visits
          </p>
        </div>
      )}

      {(variant === 'service' || variant === 'product') && (
        <div className={variant === 'service' ? styles.datacard_grid_service : styles.datacard_grid}>
          {data?.map((data: any) => (
            <div key={data.id} className={styles.datacard_grid_item}>
              <h4>{data.name}</h4>
              <p className={styles.datacard_grid_item_value}>{data.price}</p>
            </div>
          ))}
        </div>
      )}

      {variant === 'reminder' && (
<div className={styles.datacard_reminder_wrapper_outer}>
        <div className={styles.datacard_reminder_wrapper}>
          <div className={styles.datacard_reminder}>
            <div className={styles.datacard_reminder_expiry_wrapper}>
              <h4 className={styles.datacard_reminder_title}>Reminder Date</h4>
              <div className={styles.datacard_reminder_value_wrapper}>
                <p className={styles.datacard_reminder_value}>10 Days Before</p>
                <p>Expiring</p>
              </div>
            </div>
            <div className={styles.datacard_reminder_expiry_wrapper}>
              <h4 className={styles.datacard_reminder_title}>Reminder Time</h4>
              <div className={styles.datacard_reminder_value_wrapper}>
                
                <p>10:30 AM</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.datacard_reminder_wrapper}> 

        <h1 className={styles.datacard_reminder_message_heading}>Reminder</h1>
        <p className={styles.datacard_reminder_message}>Hey there! Just a friendly heads-up that your membership will expire in 10 days. Make sure to renew it to keep enjoying all the great benefits!</p>

        </div>
        
        </div>
      )}
    </>
  );
};

export default DataCardBody;