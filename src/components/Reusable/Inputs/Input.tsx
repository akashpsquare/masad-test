import React, { useEffect, useRef } from "react";
import { InputProps } from "../../ComponentsInterface/CardsInterface";
import styles from "./Input.module.css";

const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  name,
  required = false,
  customStyle = "",
  type,
  onChange,
  inputRef = null,
}) => {
  // const inputRef = useRef<HTMLInputElement>(null);
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);

  useEffect(() => {
    setIsEmpty(!(inputRef && 'current' in inputRef && inputRef.current?.value?.trim()));
  }, [value]);
  
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (onChange) {
    onChange(e);
  }
};
  return (
    <div
      className={`${styles.input_container} ${!isEmpty ? styles.focused : ""}`}
    >
      <div className={`${styles.input_wrapper}`}>
        <input
          name={name}
          ref={inputRef}
          className={`${styles.input} ${customStyle}`}
          type={type}
          value={value}
          required={required}
          onChange={handleChange}
          
        />
        {label && (
          <span
            className={`${styles.label_input} ${
              !isEmpty ? styles.labelFocused : ""
            }`}
          >
            {placeholder ? placeholder : label }
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;