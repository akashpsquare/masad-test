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

  useEffect(() => {
    setIsEmpty(!(inputref.current?.value?.trim()));
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(!isEmpty);
  };

  return (
    <div
      className={`${styles.input_container} ${!isEmpty ? styles.focused : ""}`}
    >
      <div className={`${styles.input_wrapper}`}>
        <input
          name={name}
          ref={inputref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${styles.input} ${customCss}`}
          type={type}
          value={value}
          required={required}
          onChange={onChange}
        />
        {label && (
          <span
            className={`${styles.label_input} ${
              !isEmpty ? styles.labelFocused : ""
            }`}
          >
            {placeholder}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;