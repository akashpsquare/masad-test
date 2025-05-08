import styles from "./SubHeader.module.css";

import { SubHeaderProps } from "../../ComponentsInterface/CardsInterface";
import SubHeaderMember from "./SubHeaderMember/SubHeaderMember";

const SubHeader: React.FC<SubHeaderProps> = ({
  label,
  description,
  month,
  memberType,
  price,
  memberIcon,
    editIcon,
    onClick,
}) => {

  return (
    <div className={styles.subheader_container}>
      <div className={styles.subheader_label}>
        <p>{label}</p>
      </div>

      <div className={styles.subheader_description}>
        <p>{description}</p>
      </div>

      <SubHeaderMember
        memberType={memberType}
        memberIcon={memberIcon}
        month={month}
        price={price} />

    <button className={styles.subheader_edit_button_icon} onClick={onClick}>

        <img src={editIcon} alt="edit" />
    </button>
  
    </div>
  );
};

export default SubHeader;
