import React from "react";
import styles from "./DataCardHeader.module.css";
import { useState } from "react";
import { CardHeaderProps } from "../../ComponentsInterface/CardsInterface";
import PlusIcon from "../../../assets/Icons/PlusIcon.svg";

const DataCardHeader: React.FC<CardHeaderProps> = (props) => {
  const {
    variant = "service",
    headericon,
    headertitle,
    headerlabel,
    headercount,
    headerlabeltag,
    handelAddButton,
  } = props;
  const [buttonVisible, setButtonVisible] = useState(false);
  const renderContent = () => {
    switch (variant) {
      case "form":
        return (
          <div className={styles.datacard_header_form_wrapper}>
            {headertitle && (
              <h5 className={styles.datacard_header_form_title}>
                {headertitle}
              </h5>
            )}
            {headerlabel && (
              <p className={styles.datacard_form_datahead}>{headerlabel}</p>
            )}
          </div>
        );

      case "product":
      case "benefit":
        return (
          <>
            {headercount ? (
              buttonVisible ? (
                <button  onClick={handelAddButton} className={styles.header_Button}>
                  <img src={PlusIcon} alt="" />{" "}
                </button>
              ) : (
                <div className={styles.datacard_count_value}>
                  <p
                    onClick={() => {
                      setButtonVisible(true);
                    }}
                  >
                    {headercount}
                  </p>
                </div>
              )
            ) : null}
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
            {typeof headericon === "string" ? (
              <img
                src={headericon}
                alt="icon"
                className={styles.datacard_icon_img}
              />
            ) : (
              headericon
            )}
          </span>
          {variant !== "form" && headerlabel ? (
            <p className={styles.datacard_datahead}>{headerlabel}</p>
          ) : null}
          {renderContent()}
        </div>
      )}

      {variant === "product" && headerlabeltag && (
        <div className={styles.datacard_header_tag}>
          <p className={styles.datacard_tag}>{headerlabeltag}</p>
        </div>
      )}
    </div>
  );
};

export default DataCardHeader;
