import React from "react";
import styles from "./DataCardBody.module.css";
import { CardBodyProps } from "../../ComponentsInterface/CardsInterface";
import DataCardProductItem from "../DataCardProductItem/DataCardProductItem";
import MessageContainer from "../MessageContainer/MessageContainer";
import DataValue from "../DataValue/DataValue";
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
  console.log("sever", serviceMessage);

  const renderContent = () => {
    switch (variant) {
      case "service":
        return (
          <>
            <div className={styles.datacard_service_heading}>
              <p className={styles.datacard_description}>{serviceMessage}</p>
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
                
                  <DataValue
                  variant="row"
                  value={`${Number(data.days) < 10 ? `0${data.days}` : data.days} Days Before Expiring`}
                  data="Reminder Date"
                  customStyle="datacard_reminder_value_wrapper"
                  reminder={true}
                 />
               
                   
                
                  <DataValue
                  variant="row"
                  value={data.time}
                  data="Reminder Time"
                  customStyle="datacard_reminder_value_wrapper"
                  reminder={true}
                />
                   
                  
                </div>
                <div className={styles.datacard_reminder_wrapper}>
                  <MessageContainer
                    eventName="message"
                    message={data.message}
                    customStyle='customStyle'
                  />
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
                <MessageContainer
                  eventName={data.eventName}
                  message={data.message}
                />

                <div className={styles.datacard_discount_item}>
                  <DataValue
                    variant={"row"}
                    data="Start Date"
                    value={data.startDate}
                  
                  />
                  <DataValue
                    variant={"row"}
                    data="End Date"
                    value={data.endDate}
                    customStyle=''
                  />
                </div>

                <div className={styles.datacard_discount_item}>
                  <div className={styles.datacard_discount_time}>
                    <DataValue
                      variant={"column"}
                      data={"Alert Time"}
                      value={data.startTime}
                      customStyle='custom_style'
                    />
                    <DataValue
                      variant={"column"}
                      data={"Alert Interval"}
                      value={data.endTime}
                      customStyle='custom_style'
                    />
                  </div>
                </div>

                <div className={styles.datacard_discount_item}>
                  <div className={styles.datacard_discount_time}>
                    <DataValue
                      variant={"column"}
                      data={"Type"}
                      value={"Price"}
                      customStyle='custom_style'
                    />

                    <DataValue
                      variant={"column"}
                      data={"Type"}
                      value={`${data.currency} ${data.offerExpiry}`}
                      customStyle='custom_style'
                    />
                  </div>
                </div>

                <MessageContainer
                  eventName="Message"
                  message={String(data.expiryMessage)}
                  
                />
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
