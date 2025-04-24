import styles from './SideBar.module.css';
import ServiceIcon from '../../../assets/Icons/ServicePlanIcon.svg';
import ProductIcon from '../../../assets/Icons/ProductsIcon.svg';
import BenefitsIcon from '../../../assets/Icons/BenefitDiscountIcon.svg';
import ReminderIcon from '../../../assets/Icons/ReminderIcon.svg';
import SparePartsIcon from '../../../assets/Icons/SparePartsIcon.svg';

const SideBar = () => {
  return (
    <div className={styles.sidebar_container}>
      <ul className={styles.sidebar}>
        <li className={styles.sidebar_li}>
          <a href="#">
            <div className={styles.icon_text_container}>
              <img src={ServiceIcon} alt="Service Plan" />
              <p>Service Plan</p>
            </div>
          </a>
        </li>
        <li className={styles.sidebar_li}>
          <a href="#">
            <div className={styles.icon_text_container}>
              <img src={ProductIcon} alt="Products" />
              <p>Products</p>
            </div>
          </a>
        </li>
        <li className={styles.sidebar_li}>
          <a href="#">
            <div className={styles.icon_text_container}>
              <img src={BenefitsIcon} alt="Benefits & Discounts" />
              <p>Benefits & Discounts</p>
            </div>
          </a>
        </li>
        <li className={styles.sidebar_li}>
          <a href="#">
            <div className={styles.icon_text_container}>
              <img src={ReminderIcon} alt="Reminder" />
              <p>Reminder</p>
            </div>
          </a>
        </li>
        <li className={styles.sidebar_li}>
          <a href="#">
            <div className={styles.icon_text_container}>
              <img src={SparePartsIcon} alt="Spare Parts" />
              <p>Spare Parts</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;