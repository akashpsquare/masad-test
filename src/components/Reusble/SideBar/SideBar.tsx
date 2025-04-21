import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div>

      <ul className={styles.sidebar}>
        <li><a href="#">Service Plan</a></li>
        <li><a href="#">Producds </a></li>
        <li><a href="#">Benifite & Discount</a></li>
        <li><a href="#">Reminder</a></li>
        <li><a href="#">Spare Parts</a></li>
      </ul>
    
    </div>
  )
}

export default SideBar
