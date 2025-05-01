import React from "react";
import styles from "./DataCardBody.module.css";
import { CardBodyProps } from "../../ComponentsInterface/CardsInterface";
import DataCardProductItem from "../DataCardProductItem/DataCardProductItem";
const DataCardBody: React.FC<CardBodyProps> = ({
  data,
  variant,
  benefitdata,
  reminderdata,
  discountdata,
  serviceMessage,
}) => {
  console.log(data);
  console.log(
    "reminder",
    reminderdata?.map((data) => data.days)
  );
  console.log('sever' ,serviceMessage)

  const renderContent = () => {
    switch (variant) {
      case "service":
        return (
          <>
            <div className={styles.datacard_service_heading}>
              <p className={styles.datacard_description}>
              {serviceMessage}
              </p>
            </div>
            <div
              className={`${styles.datacard_grid} ${styles.datacard_grid_service}`}
            >
              {data?.map((data) => (
                <DataCardProductItem
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  price={data.price}
                />
              ))}
            </div>
          </>
        );

      case "product":
        return (
          <div
            className={`${styles.datacard_grid} ${styles.datacard_grid_product}`}
          >
            {data?.map((data) => (
              <DataCardProductItem
                key={data.id}
                id={data.id}
                name={data.name}
                price={data.price}
              />
            ))}
          </div>
        );

        
      case "reminder":
        return (
          <>
            {reminderdata?.map((data, index) => (
              <div
                className={styles.datacard_reminder_wrapper_outer}
                key={index}
              >
                <div className={styles.datacard_reminder_wrapper}>
                  <div className={styles.datacard_reminder}>
                    <div className={styles.datacard_reminder_expiry_wrapper}>
                      <h4 className={styles.datacard_reminder_title}>
                        Reminder Date
                      </h4>
                      <div className={styles.datacard_reminder_value_wrapper}>
                        <p className={styles.datacard_reminder_value}>
                          {`${Number(data.days) < 10 ? `0${data.days}` : data.days} Days Before`}
                        </p>
                        <p>Expiring</p>
                      </div>
                    </div>
                    <div className={styles.datacard_reminder_expiry_wrapper}>
                      <p className={styles.datacard_reminder_title}>
                        Reminder Time
                      </p>
                      <div className={styles.datacard_reminder_value_wrapper}>
                        <p>{data.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.datacard_reminder_wrapper}>
                  <h1 className={styles.datacard_reminder_message_heading}>
                    Reminder
                  </h1>
                  <p className={styles.datacard_reminder_message}>
                    {data.message}
                  </p>
                </div>
              </div>
            ))}
          </>
        );

      case "benefit":
        return (
          <div className={styles.datacard_benefit_wrapper}>
            {benefitdata?.map((benefit: string, index: number) => (
              <div
                key={index}
                className={styles.datacard_benefit_wrapper_inner}
              >
                <div className={styles.datacard_benefit_wrapper_count}>
                  <p className={styles.datacard_benefit_count}>{index + 1}</p>
                </div>
                <p className={styles.datacard_benefit_value}>{benefit}</p>
              </div>
            ))}
          </div>
        );

      case "discount":
        return (
          <div className={styles.datacard_discount_grid}>
            {discountdata?.map((data) => (
              <div className={styles.datacard_discount_items}>
                <div className={styles.datacard_discount_item}>
                  <h1 className={styles.datacard_discount_header}>
                    {data.eventName}
                  </h1>
                  <p className={styles.datacard_discount_para}>
                    {data.message}
                  </p>
                </div>

                <div className={styles.datacard_discount_item}>
                  <div className={styles.datacard_discount_start_date}>
                    <h4 className={styles.datacard_discount_start_date_header}>
                      Start Date
                    </h4>
                    <div
                      className={
                        styles.datacard_discount_start_date_value_wrapper
                      }
                    >
                      <p className={styles.datacard_discount_start_date_value}>
                        {data.startDate}
                      </p>
                    </div>
                  </div>
                  <div className={styles.datacard_discount_start_date}>
                    <h4 className={styles.datacard_discount_start_date_header}>
                      End Date
                    </h4>
                    <div
                      className={
                        styles.datacard_discount_start_date_value_wrapper
                      }
                    >
                      <p className={styles.datacard_discount_start_date_value}>
                        {data.endDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.datacard_discount_item}>
                  <div className={styles.datacard_discount_time}>
                    <div className={styles.datacard_discount_value_outer}>
                      <div
                        className={styles.datacard_discount_time_value_wrapper}
                      >
                        <p className={styles.datacard_discount_time_value}>
                          {data.startTime}
                        </p>
                      </div>

                      <h4 className={styles.datacard_discount_time_header}>
                        Alert time
                      </h4>
                    </div>
                    <div className={styles.datacard_discount_value_outer}>
                      <div
                        className={styles.datacard_discount_time_value_wrapper}
                      >
                        <p className={styles.datacard_discount_time_value}>
                          {data.endTime}
                        </p>
                      </div>

                      <h4 className={styles.datacard_discount_time_header}>
                        Alert interval
                      </h4>
                    </div>
                  </div>
                </div>
                <div className={styles.datacard_discount_item}>
                  <div className={styles.datacard_discount_time}>
                    <div className={styles.datacard_discount_value_outer}>
                      <div
                        className={styles.datacard_discount_time_value_wrapper}
                      >
                        <p className={styles.datacard_discount_time_value}>
                          Price
                        </p>
                      </div>

                      <h4 className={styles.datacard_discount_time_header}>
                        Type
                      </h4>
                    </div>
                    <div className={styles.datacard_discount_value_outer}>
                      <div
                        className={styles.datacard_discount_time_value_wrapper}
                      >
                        <p className={styles.datacard_discount_time_value}>
                          {` ${data.currency} ${data.offerExpiry}`}
                        </p>
                      </div>

                      <h4 className={styles.datacard_discount_time_header}>
                        selected offer
                      </h4>
                    </div>
                  </div>
                </div>
                <div className={styles.datacard_discount_item}>
                  <h1 className={styles.datacard_discount_header}>Message</h1>
                  <p className={styles.datacard_discount_para}>
                    {data.expiryMessage}
                  </p>
                </div>
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
