import React, { useRef } from "react";
import Input from "../../../Reusable/Inputs/Input";
import Button from "../../../Reusable/Buttons/Buttons";
import { BenefitTabs as BenefitCard } from "../../../Reusble/BenefitTabs/BenefitTabs";
import { BenefitTextCard } from "../../../Reusble/BenefitTextCard/BenefitTextCard";

type Benefit = {
  id: string;
  text: string;
};

type BenefitChildrenProps = {
  isSummary?: boolean;
  isDiscard?: boolean;
  recentBenefitsData?: Benefit[];
  editedData?: Benefit[];
  isBenefitTextUpdated?: (b: Benefit) => boolean;
  saveBenefitsHandler: (...arg: any) => void;
};

const BenefitChildren: React.FC<BenefitChildrenProps> = ({
  isSummary = false,
  isDiscard = false,
  recentBenefitsData = [],
  editedData = [],
  isBenefitTextUpdated,
  saveBenefitsHandler,
}) => {
    const inputRef = useRef(null);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [benefitText, setBenefitText] = React.useState("");
  const [deletedIds, setDeletedIds] = React.useState<Set<string>>(new Set());

  const saveAndUpdateHandler = (e: React.FormEvent) => {
    e.preventDefault();
    saveBenefitsHandler(benefitText, editingId, setBenefitText, setEditingId);
  };

  const editHandler = (id: string, text: string) => {
    setEditingId(id);
    setBenefitText(text);
    inputRef && 'current' in inputRef && inputRef.current?.focus();
  };

  return (
    <>
      {!isSummary && !isDiscard && (
        <>
          <form
            className="benefit_form"
            id="benefit_form"
            onSubmit={saveAndUpdateHandler}
          >
            <h2 className="benefit_form_hreading">Details</h2>

            <div className="benefit_form_fields_box">
              <Input
                label="Benfit"
                name="benefit"
                type="text"
                required={true}
                onChange={(e) => setBenefitText(e.target.value)}
                placeholder="Benfit"
                value={benefitText}
                key={"benefit"}
                inputRef={inputRef}
              />

              <Button
                type="submit"
                variant="secondary"
                label="Save"
                dimensionH={"26px"}
                dimensionW={"84px"}
              />
            </div>
          </form>

          <div className="benfit_children_card">
            {recentBenefitsData.length > 0 && (
              <BenefitCard
                benefits={recentBenefitsData}
                headLabel="Recent"
                onChange={() => {}}
                editHandler={editHandler}
                editId={editingId}
              />
            )}

            {editedData.length > 0 && (
              <BenefitCard
                benefits={editedData}
                headLabel="Existing"
                onChange={() => {}}
                editHandler={editHandler}
                editId={editingId}
                deletedIds={deletedIds}
                setDeletedIds={setDeletedIds}
              />
            )}
          </div>
        </>
      )}

      {!isSummary && isDiscard && (
        <div style={{ marginTop: "20px" }}>
          {[
            ...recentBenefitsData,
            ...editedData.filter(
              (b) =>
                deletedIds.has(b.id) ||
                (isBenefitTextUpdated && isBenefitTextUpdated(b))
            ),
          ].map((benefit) => (
            <BenefitTextCard
              key={benefit.id}
              text={benefit.text}
              variant="discard"
            />
          ))}
        </div>
      )}

      {isSummary && !isDiscard && (
        <div style={{ marginTop: "20px" }}>
          {[...recentBenefitsData, ...editedData].map((b) => (
            <BenefitTextCard
              key={b.id}
              text={b.text}
              variant={
                deletedIds.has(b.id)
                  ? "discard"
                  : isBenefitTextUpdated && isBenefitTextUpdated(b)
                    ? "updated"
                    : "default"
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BenefitChildren;
