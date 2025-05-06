import React, { useState } from "react";
import styles from "./BenefitTabs.module.css";
import { DeleteIcon, UndoIcon } from "../../../assets/icons";

export type Benefit = {
  id: number;
  text: string;
  deleted: boolean;
};

type IBenefitsTabProps = {
  type: "Recent" | "Existing";
  benefits: Benefit[];
  onChange: (updated: Benefit[]) => void;
  editId?: Number | null;
  editHandler: (id: number, text: string) => void;
};

export const BenefitTabs: React.FC<IBenefitsTabProps> = ({
  type,
  benefits,
  onChange,
  editHandler,
  editId = false,
}) => {
  const handleDelete = (id: number) => {
    // Prevent deleting the benefit if it's being edited
    // This check is to ensure that the delete action doesn't interfere with the edit action
    if(editId && editId === id) return;

    // If the type is "Recent", remove the benefit from the list
    // If the type is "Existing", mark it as deleted
    if (type === "Recent") {
      onChange(benefits.filter((b) => b.id !== id));
    } else {
      onChange(
        benefits.map((b) => (b.id === id ? { ...b, deleted: true } : b))
      );
    }
  };

  // Function to handle undoing the delete action
  // This will set the deleted property of the benefit back to false
  const handleUndo = (id: number) => {
    onChange(benefits.map((b) => (b.id === id ? { ...b, deleted: false } : b)));
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
                  if (
                    !b.deleted &&
                    (e.target as HTMLElement).tagName !== "BUTTON"
                  ) {
                    editHandler(b.id, b.text);
                  }
                }}
              >
                {b.text}
              </span>
              <button
                className={`${styles.iconBtn} ${
                  b.deleted ? styles.undoBtn : styles.deleteBtn
                }`}
                onClick={() =>
                  b.deleted ? handleUndo(b.id) : handleDelete(b.id)
                }
                title={b.deleted ? "Undo" : "Delete"}
              >
                {b.deleted ? (
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
