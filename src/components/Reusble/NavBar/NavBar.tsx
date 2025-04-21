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
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className={activeLink === item ? styles.active : ""}
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navbar_icons}>
        <Buttons label="Back" dimensionH={42} icon={BackIcon} onClick={() => console.log("button Clicked")} />
        <img className={styles.narbar_icons_icon} src={UserIcon} alt="User" />
        <img className={styles.narbar_icons_icon} src={NotificationIcon} alt="Notification" />
      </div>
    </nav>
  );
};

export default NavBar;
