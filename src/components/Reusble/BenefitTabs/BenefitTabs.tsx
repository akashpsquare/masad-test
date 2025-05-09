import React, { useState } from "react";
import styles from "./BenefitTabs.module.css";
import { DeleteIcon, UndoIcon } from "../../../assets/icons";
import { Benefit } from "../../../modules/Testbenefits/AddBenefits";

type IBenefitsTabProps = {
  headLabel: "Recent" | "Existing";
  benefits: Benefit[];
  onChange: (updated: Benefit[]) => void;
  editId?: string | null;
  editHandler: (id: string, text: string) => void;
  deletedIds?: Set<string>;
  setDeletedIds?: (updater: (prev: Set<string>) => Set<string>) => void;
};

export const BenefitTabs: React.FC<IBenefitsTabProps> = ({
  headLabel = "Recent",
  benefits,
  onChange,
  editHandler,
  deletedIds,
  setDeletedIds,
  editId = null,
}) => {
  const handleDelete = (id: string) => {
    if (editId && editId === id) return;

    // console.log("Deleting benefit with id:", id);
    if (headLabel === "Recent") {
      onChange(benefits.filter((b) => b.id !== id));
    } else {
      // onChange(
      //   benefits.map((b) =>
      //     b.id === id ? { ...b, isDeleted: true } : b
      //   )
      // );
      setDeletedIds?.(prev => new Set(prev).add(id));
    }
  };

  const handleUndo = (id: string) => {
    // onChange(
    //   benefits.map((b) => (b.id === id ? { ...b, isDeleted: false } : b))
    // );
    setDeletedIds?.((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span className={styles.typeLabel || styles.headLabel}>{headLabel}</span>
          <div className={styles.count}>{benefits.length}</div>
        </div>

        <div className={styles.benefitContainer}>
          {benefits.map((b) => {
            const isDeleted = deletedIds?.has(b.id) 
            return  (
            <div key={b.id} className={`${styles.benefitItem} ${editId === b.id ? styles.selected : ""}`}>
              <span
                className={styles.benefitText}
                onClick={(e) => {
                  if (!isDeleted && (e.target as HTMLElement).tagName !== "BUTTON") {
                    editHandler(b.id, b.text);
                  }
                }}
              >
                {b.text}
              </span>
              <button
                className={`${styles.iconBtn} ${
                  isDeleted ? styles.undoBtn : styles.deleteBtn
                }`}
                onClick={() =>
                  isDeleted ? handleUndo(b.id) : handleDelete(b.id)
                }
                title={isDeleted ? "Undo" : "Delete"}
              >
                {isDeleted ? (
                  <UndoIcon width="12" height="12" color="white" />
                ) : (
                  <DeleteIcon width="12" height="12" color="#4B180F" />
                )}
              </button>
            </div>
          )})}
        </div>
      </div>
    </>
  );
};
