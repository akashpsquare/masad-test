
import React from 'react';
import styles from './Buttons.module.css';

interface ButtonProps {
  label: string; 
  icon?: React.ReactNode; 
  iconPosition?: 'left' | 'right';
  dimensionW?: string | number;
  dimensionH?: string | number;
  iconSize?: string;
  onClick: () => void; 
  variant: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconPosition = 'right',
  iconSize = '16px',
  onClick,
  variant = 'primary',
  dimensionW = '',
  dimensionH = '',
}) => {
  return (
    <div className={variant === 'primary' ? styles.btn_bg : '' } style={{ width: dimensionW , height: dimensionH }}>

    <button className={`${styles.btn} ${styles[variant]}`} onClick={onClick} style={{ width: dimensionW , height: dimensionH }}>
      {icon && iconPosition === 'left' && (
        <span className={`${styles.icon}`} style={{ fontSize: iconSize }}>
          {typeof icon === 'string' && <img src={icon} />}
        </span>
      )}
      <span>{label}</span>
      {icon && iconPosition === 'right' && (
        <span className={`${styles.icon}`} style={{ fontSize: iconSize }}>
         {typeof icon === 'string' && <img src={icon} />}
        </span>
      )}
    </button>

    </div>

  );
};

export default Button;
