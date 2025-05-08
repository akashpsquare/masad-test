import React, { ReactNode } from "react";
import styles from "./AddForm.module.css";
import {
  BenefitsAddIcon,
  CrossButtonWithIcon,
  BenfitsDiscardIcon,
  BenfitsSummaryUpdatedIcon,
  BenfitsSummaryIcon,
} from "../../../assets/icons";

export interface AddFormState {
  open: boolean;
  label?: string;
  key: string;
  isUpdated?: boolean;
  isDeleted?: boolean;
  headingLabel: string;
  status?: "update" | "delete" | "default";
  summaryContent: string;
  isSummary: boolean;
  setSummary: (value: boolean) => void;
  isDiscard?: boolean;
  setDiscard: (value: boolean) => void;
  inputError?: boolean;
  variant: "primary" | "secondary";
  onCancel: () => void;
  onAdd: () => void;
  onClose: () => void;
  children?: ReactNode;
  validateError?: () => void;
  validateIsEmpty?: () => void;
  isSecondFormOpen?: boolean;
  Icon?: React.ElementType;
  isRightButtonVisible: false;
  rightButtonHandler: () => void;
  btn1Label?: string;
  btn1Handler?: () => void;
  btn2Label?: string;
  btn2Handler?: () => void;
}

const AddForm = ({
  open,
  isSummary = false,
  isDiscard = false,
  isUpdated = false,
  isDeleted = false,
  setDiscard,
  setSummary,
  label = "Add",
  headingLabel,
  Icon = BenefitsAddIcon,
  isRightButtonVisible = false,
  rightButtonHandler,
  children: Children,
  btn1Label = "Cancel",
  btn1Handler,
  btn2Label = "Add",
  btn2Handler,
}: AddFormState) => {

  // console.log("AddForm rendered", {isUpdated, isDeleted, });

  return (
    <div
      className={`${styles.addForm_box} ${open ? styles.addForm_box_open : ""}`}
    >
      <div className={`${styles.addForm_head}`}>
        {isDiscard ? (
          <BenfitsDiscardIcon width="52px" height="52px" />
        ) : isSummary ? (
          isUpdated ? (
            <BenfitsSummaryUpdatedIcon width="52px" height="52px" />
          ) : (
            <BenfitsSummaryIcon width="52px" height="52px" />
          )
        ) : (
          <Icon width="52px" height="52px" />
        )}
        <div
          className={`
            ${styles.addForm_head_content} 
            ${isDiscard ? styles.addForm_head_content_discard : isSummary ? styles.addForm_head_content_summary : ""}
            ${isSummary && isUpdated ? styles.addForm_head_content_updated : ""}
            ${isSummary && isDeleted ? styles.addForm_head_content_deleted : ""}
            `}
        >
          <h4>
            {isDiscard ? "Discard" : isSummary ? "Summary" : label}
          </h4>
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

      <div className={styles.addForm_content}>{Children}</div>

      <div className={`${styles.addForm_footer}`}>
        <button onClick={btn1Handler} className={`${styles.btn_outline}`}>
          {isDiscard ? "Back" : isSummary ? "Back" : btn1Label}
        </button>

        <button onClick={btn2Handler} className={`${styles.btn_contained}`}>
          {isDiscard ? "Discard" : isSummary ? "Submit" : btn2Label}
        </button>
      </div>
    </div>
  );
};

export default AddForm;
