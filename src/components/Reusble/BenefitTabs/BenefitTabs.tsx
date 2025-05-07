import React, { useState } from "react";
import styles from "./BenefitTabs.module.css";
import { DeleteIcon, UndoIcon } from "../../../assets/icons";
import { Benefit } from "../../../modules/Textbenefits/AddBenefits";


type IBenefitsTabProps = {
  type: "Recent" | "Existing";
  benefits: Benefit[];
  onChange: (updated: Benefit[]) => void;
  editId?: string | null;
  editHandler: (id: string, text: string) => void;
};

export const BenefitTabs: React.FC<IBenefitsTabProps> = ({
  type,
  benefits,
  onChange,
  editHandler,
  editId = null,
}) => {

  const handleDelete = (id: string) => {
    // Prevent deleting the benefit if it's being edited
    // This check is to ensure that the delete action doesn't interfere with the edit action
    if(editId && editId === id) return;

    console.log("Deleting benefit with id:", id);
    // If the type is "Recent", remove the benefit from the list
    // If the type is "Existing", mark it as deleted
    if (type === "Recent") {
      onChange(benefits.filter((b) => b.id !== id));
    } else {
      onChange(
        benefits.map((b) =>
          b.id === id ? { ...b, isDeleted: true } : b
        )
      );
    }
  };

  // Function to handle undoing the delete action
  // This will set the deleted property of the benefit back to false
  const handleUndo = (id: string) => {
    onChange(benefits.map((b) => (b.id === id ? { ...b, isDeleted : false} : b)));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span className={styles.typeLabel}>{type}</span>
          <div className={styles.count}>{benefits.length}</div>
        </div>

        <div className={styles.benefitContainer}>
          {benefits.map((b) => (
            <div key={b.id} className={`${styles.benefitItem}`}>
              <span
                className={styles.benefitText}
                onClick={(e) => {
                  if ((e.target as HTMLElement).tagName !== "BUTTON") {
                    editHandler(b.id, b.text);
                  }
                }}
              >
                {b.text}
              </span>
              <button
                className={`${styles.iconBtn} ${
                  b.isDeleted ? styles.undoBtn : styles.deleteBtn
                }`}
                onClick={() =>
                  b.isDeleted ? handleUndo(b.id) : handleDelete(b.id)
                }
                title={b.isDeleted ? "Undo" : "Delete"}
              >
                {b.isDeleted ? (
                  <UndoIcon width="12" height="12" color="white" />
                ) : (
                  <DeleteIcon width="12" height="12" color="#4B180F" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
