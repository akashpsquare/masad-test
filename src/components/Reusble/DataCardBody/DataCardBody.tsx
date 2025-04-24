import React from 'react';
import styles from './DataCardBody.module.css';
import { CardBodyProps } from '../../ComponentsInterface/CardsInterface';

const DataCardBody: React.FC<CardBodyProps> = ({ data, variant, benefitdata,reminderdate }) => {
  console.log(data);
  console.log(benefitdata);

  const renderContent = () => {
    switch (variant) {
      case 'service':
        return (
          <>
            <div className={styles.datacard_service_heading}>
              <p className={styles.datacard_description}>
                Get priority Scheduling for service requests and maintenance visits for user
              </p>
            </div>
            <div className={`${styles.datacard_grid} ${styles.datacard_grid_service}`}>
              {data?.map((item: any) => (
                <div key={item.id} className={styles.datacard_grid_item}>
                  <h4>{item.name}</h4>
                  <p className={styles.datacard_grid_item_value}>{item.price}</p>
                </div>
              ))}
            </div>
          </>
        );

      case 'product':
        return (
          <div className={`${styles.datacard_grid} ${styles.datacard_grid_product}`}>
            {data?.map((item: any) => (
              <div key={item.id} className={styles.datacard_grid_item}>
                <h4>{item.name}</h4>
                <p className={styles.datacard_grid_item_value}>{item.price}</p>
              </div>
            ))}
          </div>
        );

      case 'reminder':
        return (
          <div className={styles.datacard_reminder_wrapper_outer}>
            <div className={styles.datacard_reminder_wrapper}>
              <div className={styles.datacard_reminder}>
                <div className={styles.datacard_reminder_expiry_wrapper}>
                  <h4 className={styles.datacard_reminder_title}>Reminder Date</h4>
                  <div className={styles.datacard_reminder_value_wrapper}>
                    <p className={styles.datacard_reminder_value}>{`${reminderdate} Days Before`}</p>
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
              <p className={styles.datacard_reminder_message}>
                Hey there! Just a friendly heads-up that your membership will expire in 10 days. Make sure to renew it to keep enjoying all the great benefits!
              </p>
            </div>
          </div>
        );

      case 'benefit':
        return (
          <div className={styles.datacard_benefit_wrapper}>
            {benefitdata?.map((benefit: string, index: number) => (
              <div key={index} className={styles.datacard_benefit_wrapper_inner}>
                <div className={styles.datacard_benefit_wrapper_count}>
                  <p>{index + 1}</p>
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
};

export default DataCardBody;