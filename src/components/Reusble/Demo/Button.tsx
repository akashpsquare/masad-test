import React from "react";

import styles from "./Button.module.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: any;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  title: "components/Reusable/Button";
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook_button_primary"
    : "storybook_button_secondary";
  return (
    <button
      type="button"
      className={`
        ${styles.storybook_button}
        ${styles[mode || ""]} ${styles[size || ""]}
      `}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
