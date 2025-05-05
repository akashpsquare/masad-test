import React, { Children, ReactNode } from "react";
import styles from "./AddForm.module.css";
import { BenefitsAddIcon, CrossButtonWithIcon } from "../../../assets/icons";

export interface AddFormState {
  open: boolean;
  label?: string;
  key: string;
  headingLabel: string;
  status?: "update" | "delete" | "default";
  summaryContent: string;
  isSummary: boolean;
  isDiscard?: boolean;
  inputError?: boolean;
  variant: "primary" | "secondary";
  onCancel: () => void;
  onAdd: () => void;
  onClose: () => void;
  children?: ReactNode;
  validateError?: () => void;
  validateIsEmpty?: () => void;
  isSecondFormOpen?: boolean;
  Icon?: () => void;
  isRightButtonVisible: false;
  rightButtonHandler: () => void;
  btn1Label?: string;
  btn1Handler?: () => void;
  btn2Label?: string;
  btn2Handler?: () => void;
}

const AddForm = ({
  open,
  label = "Add",
  headingLabel = "Benefits",
  isRightButtonVisible = false,
  rightButtonHandler,
  children: Children,
  btn1Label="Cancel",
  btn1Handler,
  btn2Label = "Add",
  btn2Handler,
}: AddFormState) => {
  return (
    <div className={`${styles.addForm_box} ${open ? styles.addForm_box_open : ""}`}>
      <div className={`${styles.addForm_head}`}>
        <BenefitsAddIcon width="52px" height="52px" color="" />
        <div className={`${styles.addForm_head_content}`}>
          <h4>{label}</h4>
          <h3>{headingLabel}</h3>
        </div>

        {isRightButtonVisible && (
          <button
            className={`${styles.addForm_head_button}`}
            onClick={rightButtonHandler}
          >
            <CrossButtonWithIcon width="42" height="42" />
          </button>
        )}
      </div>

      <div>{Children}</div>

      <div className={`${styles.addForm_footer}`}>
        <button onClick={btn1Handler} className={`${styles.btn_outline}`}>{btn1Label}</button>

        <button onClick={btn2Handler} className={`${styles.btn_contained}`}>{btn2Label}</button>
      </div>
    </div>
  );
};

export default AddForm;
