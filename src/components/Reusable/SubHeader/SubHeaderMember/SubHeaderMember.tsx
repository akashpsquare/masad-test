import React from "react";
import styles from "../SubHeader.module.css";
import ClockIcon from "../../../../assets/Icons/ClockIcon.svg";
import MoneyIcon from "../../../../assets/Icons/MoneyCardIcon.svg";
interface SubHeaderMemberProps {
  memberType: string;
  memberIcon: string;
  month: number;
  price: number;
}

const SubHeaderMember: React.FC<SubHeaderMemberProps> = ({
  memberType,
  memberIcon,
  month,
  price,
}) => {
  return (
    <div className={styles.subheader_member}>
      <div className={styles.subheader_membertype}>
        <div className={styles.subheader_mertype_data}>
          <span>
            <img src={memberIcon} alt="memberIcon" />
          </span>
          <p>{memberType}</p>
        </div>
      </div>
      <div className={styles.subheader_member_month}>
        <div className={styles.subheader_mertype_data}>
          <span>
            <img src={ClockIcon} alt="clock" />
          </span>
          <p>{`${month} Months`}</p>
        </div>
      </div>
      <div className={styles.subheader_member_price}>
        <div className={styles.subheader_mertype_data}>
          <span>
            <img src={MoneyIcon} alt="money" />
          </span>
          <p>{`AED ${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderMember;