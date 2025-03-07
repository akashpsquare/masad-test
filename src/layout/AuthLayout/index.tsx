import { Outlet } from "react-router-dom";
import styles from "./Styles/AuthLayout.module.css";
// import { logo } from "../../assets/images";
// 
const AuthLayout = () => {


  return (
    <div className={`${styles.AuthLayout_container}`}>
      <div className={`${styles.AuthLayout_outerParent}`}>
        <div className={`${styles.AuthLayout_gradient}`}>
          <div className={`${styles.AuthLayout_innerParent}`}>
            <div>
              {/* <img src={logo} alt="Suryacon Logo" /> */}
              logo
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
