import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div>
      <ul className={styles.sidebar}>
        <li><a href="#"><span><img  className=""    src={'sadf'} alt=''  /></span> Service Plan</a></li>
        <li><a href="#"><span><img className="" src={'aosdif'} alt=''   /> </span> Products</a></li>
        <li><a href="#"><span><img className="" src={'aosdif'} alt=''   /> </span> Benefits & Discounts</a></li>
        <li><a href="#"><span><img className="" src={'aosdif'} alt=''  /> </span> Reminder</a></li>
        <li><a href="#"><span><img className=""     src={'aosdif'} alt='' /> </span> Spare Parts</a></li>
      </ul>
    </div>
  );
};

export default SideBar;
