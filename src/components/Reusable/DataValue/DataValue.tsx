import React from "react";
import styles from "./DataValue.module.css";

interface DiscountDateRangeProps {
  data: string;
  value: string | number;
  variant: "row" | "column";
  customStyle?: string; 
  reminder?: boolean;
}

const DataValue: React.FC<DiscountDateRangeProps> = ({
  data,
  value,
  variant,
  customStyle, 
  reminder,
}) => {
  console.log(customStyle);
  const renderContent = () => {
    switch (variant) {
      case "row":
        return (
          <div>
            <div className={ styles.datavalue_data_wrapper}>
              <h4 className={styles.datavalue_data}>{data}</h4>
              <div
                className={reminder ? `${styles.datavalue_reminder_wrapper} ` :styles.datavalue_value_wrapper}
              >
                <p className={styles.datavalue_value }>{value}</p>
              </div>
            </div>
          </div>
        );

      case "column":
        return (
          <>
            <div className={styles.datavalue_value_outer}>
              <div
                className={`${styles.datavalue_value_wrapper} ${customStyle ? styles[customStyle] : ''}`}
              >
                <p className={styles.datavalue_value}>{value}</p>
              </div>

              <h4 className={styles.datavalue_header}>{data}</h4>
            </div>
          </>
        );
    }
  };
  return <>{renderContent()}</>;
};

export default DataValue;