import { useState } from "react"; // import useState to manage the state of the container
import styles from "./PrimiumContainer.module.css";
import PrimiumLogo from "../../../assets/Icons/primiumLogo.svg";
import DeleteIcon from "../../../assets/Icons/DeleteButtonIcon.svg";

const PrimiumContainer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteClick = () => {
    console.log("Delete clicked!"); 
    setIsVisible(false); 
  };

  if (!isVisible) {
    return null; 
  }

  return (
    <div className={styles.primium_container}>
      <div className={styles.primium_container_wrapper}>
        <img 
          className={styles.primium_container_wrapper_logo} 
          src={PrimiumLogo} 
          alt="Primium logo" 
        />
        <span className={styles.primium_container_wrapper_label}>Non comprehensive</span>
      </div>
      
      <div className={styles.primium_container_deleteIcon_wrapper}>
      <img 
        className={styles.primium_container_deleteIcon} 
        src={DeleteIcon} 
        alt="Delete icon" 
        onClick={handleDeleteClick} 
      />
      </div>
    </div>
  );
};

export default PrimiumContainer;
