import  {  useState } from "react";
import styles from "./NavBar.module.css";
import MassaedLogo from "../../../assets/Icons/Massaed_Logo 1.svg";
import Buttons from "../Buttons/Buttons";
import UserIcon from "../../../assets/Icons/UserIcon.svg";
import NotificationIcon from "../../../assets/Icons/NotificationIcon.svg";
import BackIcon from "../../../assets/Icons/BackIcon.svg";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={MassaedLogo} alt="Logo" />
      </div>
      <div className={styles.navbar_center}>
        <ul className={styles.navbar_links}>
          {["Products", "Sparepart", "Membership", "Designation", "Service", "Interiors", "Resource"].map((item, index) => (
            <li className={styles.navbar_list} key={index}>    
        
    
    <a
      className={activeLink === item ? styles.active : ""}
      href={`#${item.toLowerCase()}`}
      onClick={() => handleLinkClick(item)}
    >
      {item}
    </a>

      
            </li>
          
          ))}
        </ul>
      </div>
      <div className={styles.navbar_icons}>
        <Buttons variant={'primary'} label="Back" iconPosition="right" icon={BackIcon}  onClick={() => console.log("button Clicked")} />
        <img className={styles.narbar_icons_icon} src={UserIcon} alt="User" />
        <img className={styles.narbar_icons_icon} src={NotificationIcon} alt="Notification" />
      </div>
    </nav>
  );
};

export default NavBar;
