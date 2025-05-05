import React, { useState } from "react";
import styles from "./BenefitTabs.module.css";
import { DeleteIcon, UndoIcon } from "../../../assets/icons";

export type Benefit = {
  id: number;
  text: string;
  deleted: boolean;
};

type Props = {
  type: "Recent" | "Existing";
  benefits: Benefit[];
  onChange: (updated: Benefit[]) => void;
  setText?: (text: string) => void;
};

export const BenefitTabs: React.FC<Props> = ({ type, benefits, onChange }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleDelete = (id: number) => {
    if(type === "Recent") {
      onChange(benefits.filter((b) => b.id !== id));
    }else{
      onChange(benefits.map((b) => (b.id === id ? { ...b, deleted: true } : b)));
    }
  };

  const handleUndo = (id: number) => {
    onChange(benefits.map((b) => (b.id === id ? { ...b, deleted: false } : b)));
  };

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditText(text);
    console.log("Editing ID:", id);
    console.log("Editing Text:", text);
  };

  const handleEditSubmit = (id: number | any) => {
    if (!editingId && editText.trim() !== "") {
      const id = benefits.length+1;
      onChange([...benefits, { id, text: editText, deleted: false }]);
    } else {
      onChange(
        benefits.map((b) => (b.id === id ? { ...b, text: editText } : b))
      );
      setEditingId(null);
    }
    setEditText("");
  };

  return (
    <>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button
        style={{ marginBottom: "1rem", marginLeft: "8px" }}
        onClick={() => handleEditSubmit(editingId)}
      >
        Save
      </button>
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
                    handleEdit(b.id, b.text);
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
                {type !== "Recent" && b.deleted ? (
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
