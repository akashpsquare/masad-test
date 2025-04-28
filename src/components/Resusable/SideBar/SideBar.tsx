import styles from './SideBar.module.css';
import ServiceIcon from '../../../assets/Icons/ServicePlanIcon.svg';
import ProductIcon from '../../../assets/Icons/ProductsIcon.svg';
import BenefitsIcon from '../../../assets/Icons/BenefitDiscountIcon.svg';
import ReminderIcon from '../../../assets/Icons/ReminderIcon.svg';
import SparePartsIcon from '../../../assets/Icons/SparePartsIcon.svg';

const SideBar = () => {
  // Sidebar items configuration
  const sidebarItems = [
    { icon: ServiceIcon, label: 'Service Plan', link: '#' },
    { icon: ProductIcon, label: 'Products', link: '#' },
    { icon: BenefitsIcon, label: 'Benefits & Discounts', link: '#' },
    { icon: ReminderIcon, label: 'Reminder', link: '#' },
    { icon: SparePartsIcon, label: 'Spare Parts', link: '#' },
  ];

  return (
    <div className={styles.sidebar_container}>
      <ul className={styles.sidebar}>
        {sidebarItems.map((item, index) => (
       <a className={styles.sidebar_container_link} href={item.link}>
          <li onClick={()=>{
            console.log(item.label);
          }}key={index} className={ index === sidebarItems.length -1 ? `${styles.sidebar_li} ${styles.last}`:  styles.sidebar_li}>
              <div className={styles.icon_text_container}>
                <img src={item.icon} alt={item.label} />
                <p>{item.label}</p>
              </div>
          </li>
            </a>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;