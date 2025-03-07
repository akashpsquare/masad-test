import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import LayoutCss from './Styles/Layout.module.css'
import Topbar from "../../components/Common/Topbar";
import { SuryaconMainLogo } from "../../assets/TopbarAssets/SVGs";


const Layout: React.FC = () => {


  return (
    <>
      <div className={`${LayoutCss.layout_container}`}>
        <div className={`${LayoutCss.sidebar}`}>
          {/* <Sidebar setLabel={setLabel} label={label} /> */}
        </div>
        <div className={`${LayoutCss.topbar}`}>
          <div style={{paddingLeft: "1.5rem"}}>
            <SuryaconMainLogo />
          </div>
          <Topbar/>
        </div>
        <div className={`${LayoutCss.main_content}`}>
          <div className={`${LayoutCss.content}`}>
            <Outlet />
          </div>
        </div>
      </div>
      <div className="not_Compatible">The Screen size is not Compatible</div>
    </>
  );
};

export default Layout;
