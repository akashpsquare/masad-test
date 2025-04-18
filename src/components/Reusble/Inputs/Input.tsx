import React, { useEffect, useRef } from "react";
import { InputProps } from "../../ComponentsInterface/CardsInterface";
import styles from "./Input.module.css";

const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  name,
  required = false,
  customCss = "",
  type,
  onChange,
}) => {
  const inputref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);

  // Update `isEmpty` whenever the `value` changes
  useEffect(() => {
    setIsEmpty(!(inputref.current?.value?.trim()));
  }, [value]);

  // Handle input focus and blur
  const handleFocus = () => {
    setIsFocused(true);
  };
console.log(isFocused)
  const handleBlur = () => {
   setIsFocused(!isEmpty);
  };

  return (
    <div
      className={`${styles.tries_input_container} ${!isEmpty ? styles.focused : ""}`}
    >
      <div className={`${styles.tries_input_wrapper}`}>
        <input
          name={name}
          ref={inputref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${styles.tries_Input} ${customCss}`}
          type={type}
          value={value}
          required={required}
          onChange={onChange}
        />
        {label && (
          <label
            className={`${styles.label_input} ${
              !isEmpty ? styles.labelFocused : ""
            }`}
            htmlFor=""
          >
            {placeholder}
          </label>
        )}
      </div>
    </div>
  );
};

export default Input;
