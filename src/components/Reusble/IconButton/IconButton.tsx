import React from "react";
import styles from "./IconButton.module.css";
import { CrossIcon } from "../../../assets/icons";

export type IconButtonProps = {
  variant?: "contained" | "outline";
  size?: "small" | "medium" | "large";
  Icon: React.ReactNode;
  onClick?: () => void;
  iconColor?: string;
  iconWidth?: Number;
  iconHeight?: Number;
};

export const IconButton: React.FC<IconButtonProps> = ({
  variant = "contained",
  size = "medium",
  Icon = CrossIcon,
  onClick,
  iconColor = "#4B180F",
  iconWidth = 12,
  iconHeight = 12,
}) => {
  const style: React.CSSProperties = {
    color: iconColor,
  };

  return (
    <div className={`${styles.icon_button_outer} ${styles[variant || ""]}`}>
      <div
        className={`${styles.icon_button} ${styles[variant || ""]} ${styles[size || ""]}`}
        onClick={onClick}
        // style={style}
      >
        <Icon
          color={iconColor}
          width={size === "small" ? 10 : iconWidth}
          height={size === "small" ? 10 : iconHeight}
        />
      </div>
    </div>
  );
};

// export default IconButton;
