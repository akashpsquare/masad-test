import styles from "./SubHeader.module.css";

import { SubHeaderProps } from "../../ComponentsInterface/CardsInterface";
import MoneyCardIcon from "../../../assets/Icons/MoneyCardIcon.svg";
import ClockIcon from "../../../assets/Icons/ClockIcon.svg";
const SubHeader: React.FC<SubHeaderProps> = ({
  label,
  description,
  month,
  memberType,
  price,
  memberIcon,
    editIcon,
}) => {
  return (
    <div className={styles.subheader_container}>
      <div className={styles.subheader_label}>
        <p>{label}</p>
      </div>

      <div className={styles.subheader_description}>
        <p>{description}</p>
      </div>

      <div className={styles.subheader_member}>
        <div className={styles.subheader_membertype}>
          <div className={styles.subheader_mertype_data}>
          <span>
        <img src={memberIcon}   alt="memberIcon" /> </span>
            <p>{memberType}</p>
          </div>

        </div>
        <div className={styles.subheader_member_month}>
        <div className={styles.subheader_mertype_data}>
          <span>
        <img src={ClockIcon} alt="edit" />
      </span>
      <p>{`${month} Months`}</p>
          </div>  
        </div>

        <div className={styles.subheader_member_price}>
        <div className={styles.subheader_mertype_data}>
          <span>
        <img src={MoneyCardIcon} alt="edit" />
      </span>
      <p>{`AED ${price}`}</p>
          </div>
        
        </div>
      </div>
      <span>
        <img src={editIcon} alt="edit" />
      </span>
    </div>
  );
};

export default SubHeader;
