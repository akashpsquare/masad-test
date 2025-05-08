import React, { useCallback, useEffect, useMemo } from "react";
import AddForm from "../../components/Reusble/AddForm/AddForm";
import { BenefitTabs } from "../../components/Reusble/BenefitTabs/BenefitTabs";
import { BenefitTextCard } from "../../components/Reusble/BenefitTextCard/BenefitTextCard";
import { generateUniqueId } from "../../functions/functions";

export type Benefit = {
  id: string;
  text: string;
};

const AddBenefits = () => {
  const [open, setOpen] = React.useState(false);
  const [recentBenefitsData, setRecentBenefitsData] = React.useState<Benefit[]>(
    []
  );
  const [deletedIds, setDeletedIds] = React.useState<Set<string>>(new Set());

  const [apiData, setApiData] = React.useState<Benefit[]>([]);
  const [editedData, setEditedData] = React.useState<Benefit[]>([]);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [benefitText, setBenefitText] = React.useState("");
  const [isSummary, setIsSummary] = React.useState(false);
  const [isDiscard, setIsDiscard] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  // console.log("AddBenefits rendered", editedData);

  useEffect(() => {
    if (open) {
      const response = localStorage.getItem("apiBenefitsData");
      if (response) {
        const parsedBenefits: Benefit[] = JSON.parse(response);
        setApiData(parsedBenefits);
        setEditedData(parsedBenefits);
      }
    }
  }, [open]);


  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveBenefitsHandler();
    }
  };

  const isBenefitTextUpdated = (item: Benefit) => {
    const original = apiData.find((i) => i.id === item.id);
    return original && original.text !== item.text;
  };

  const saveBenefitsHandler = () => {
    if (benefitText && benefitText.trim() !== "") {
      if (editingId) {
        setRecentBenefitsData((prev) =>
          prev.map((b) =>
            b.id === editingId ? { ...b, text: benefitText } : b
          )
        );

        setEditedData((prev) =>
          prev.map((b) =>
            b.id === editingId ? { ...b, text: benefitText } : b
          )
        );

        setEditingId(null);
      } else {
        // Add a new benefit
        const newBenefit: Benefit = {
          id: generateUniqueId(16, ""),
          text: benefitText,
        };
        setRecentBenefitsData((prev) => [...prev, newBenefit]);
      }
      setBenefitText("");
    } else {
      // If the benefit text is empty, show an alert
      alert("Please enter a benefit detail.");
    }
  };

  const editHandler = (id: string, text: string) => {
    setEditingId(id);
    setBenefitText(text);
    inputRef.current?.focus();
  };


  const isUpdatedAnyExitingBenefit = useMemo(() => {
    const isUpdatedAnytext = apiData.some((item) => {
      const original = editedData.find((i) => i.id === item.id);
      return original && original.text !== item.text;
    });
    console.log("isUpdatedAnyExitingBenefit", isUpdatedAnytext);
    return isUpdatedAnytext;
  }, [isSummary, isDiscard, editedData]);

  const isDeletedAnyExitingBenefit = useMemo(
    () => deletedIds.size > 0,
    [deletedIds, isSummary, isDiscard]
  );

  
  
  const cancelHandler = () => {
    // Reset the state variables when the cancel button is clicked
    if (recentBenefitsData.length > 0 || (editedData.length > 0 && isUpdatedAnyExitingBenefit || isDeletedAnyExitingBenefit)) {
      setBenefitText("");
      setEditingId(null);
      setIsDiscard(true);
    } else {
      setOpen(false);
    }
  };

  const addBenefitsHandler = () => {
    if(recentBenefitsData.length > 0 || (editedData.length > 0 && isUpdatedAnyExitingBenefit || isDeletedAnyExitingBenefit)) {
      setBenefitText("");
      setEditingId(null);
      setIsSummary(true);
    }else{
      alert("Please add or update a benefit detail.");
    }
  };

  const backDiscardHandler = () => {
    setIsDiscard(false);
  };

  const discardHandler = () => {
    setOpen(false);
    setTimeout(() => {
      setRecentBenefitsData([]);
      setIsDiscard(false);
      setDeletedIds(new Set());
    }, 1000); 
  };

  const backSummaryHandler = () => {
    setIsSummary(false);
  };

  const submitSummaryHandler = () => {
    // console.log("Summary submitted:", recentBenefitsData, copyExistingBenefitsData);
    const newBenefits: Benefit[] = recentBenefitsData;
    const filteredBenefits = editedData.filter(
      (benefit) => !deletedIds.has(benefit.id)
    );

    localStorage.setItem(
      "apiBenefitsData",
      JSON.stringify([...newBenefits, ...filteredBenefits])
    );

    setOpen(false);
    setRecentBenefitsData([]);
    setDeletedIds(new Set());
    setEditedData([]);
    setApiData([]);
    setIsSummary(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        zIndex: 1,
        overflowX: "hidden",
      }}
    >
      <div>
        <button className="btn btn-primary" onClick={() => setOpen(!open)}>
          Add Benefits
        </button>
      </div>

      <AddForm
        open={open}
        isSummary={isSummary}
        setSummary={setIsSummary}
        isDiscard={isDiscard}
        setDiscard={setIsDiscard}
        isUpdated={isUpdatedAnyExitingBenefit}
        isDeleted={isDeletedAnyExitingBenefit}
        label={"Add"}
        headingLabel="Benefits"
        btn1Label={"Cancel"}
        btn1Handler={
          isDiscard
            ? backDiscardHandler
            : isSummary
              ? backSummaryHandler
              : cancelHandler
        }
        btn2Label={editedData.length > 0 ? "Update" : "Add"}
        btn2Handler={
          isDiscard
            ? discardHandler
            : isSummary
              ? submitSummaryHandler
              : addBenefitsHandler
        }
        // isRightButtonVisible={true}
        // rightButtonHandler={() => setOpen(false)}\
      >
        {!isSummary && !isDiscard && (
          <>
            <div
              className="benefit-form"
              id="benefit-form"
              style={{ width: "100%", fontFamily: "Lexend Deca" }}
            >
              <h4
                style={{
                  color: "#4B180F",
                  fontSize: "21px",
                  fontWeight: "300",
                  margin: 0,
                }}
              >
                Details
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  justifyContent: "center",
                  alignItems: "start",
                  marginBottom: "20px",
                  marginTop: "0.725rem",
                }}
              >
                <input
                  type="text"
                  className="benefit-details"
                  value={benefitText}
                  onChange={(e) => setBenefitText(e.target.value)}
                  onKeyDown={keyDownHandler}
                  placeholder="Benefit"
                  style={{
                    // width: "94%",
                    height: "40px",
                    padding: "12px 16px",
                    maxWidth: "100%",
                    width: "-webkit-fill-available",
                    outline: "none",
                    border: "none",
                    borderTopWidth: "3px",
                    borderTopStyle: "solid",
                    borderTopColor: "#80291A",
                    borderRadius: "1rem",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "18px",
                  }}
                  ref={inputRef}
                />

                <button
                  type="button"
                  className="btn"
                  onClick={saveBenefitsHandler}
                  style={{
                    padding: "0.3125rem 1rem",
                    width: "84px",
                    height: "26px",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                    borderWidth: "1.2px",
                    borderStyle: "solid",
                    borderColor: "#80291A",
                    backgroundColor: "transparent",
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "1rem",
                    background:
                      "linear-gradient(163.28deg, #80291A 10%, #2B0E08 91.55%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Save
                </button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "0.725rem",
                flexDirection: "column",
                // height: "inherit",
              }}
            >
              {recentBenefitsData.length > 0 && (
                <BenefitTabs
                  benefits={recentBenefitsData}
                  type="Recent"
                  onChange={(updated: any) => setRecentBenefitsData(updated)}
                  editHandler={editHandler}
                  editId={editingId}
                />
              )}

              {editedData.length > 0 && (
                <BenefitTabs
                  benefits={editedData}
                  type="Existing"
                  onChange={(updated: any) => setEditedData(updated)}
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
                  apiData.find(
                    (initial) => initial.id === b.id && initial.text !== b.text
                  )
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
            {[...recentBenefitsData, ...editedData].map((benefit) => (
              <BenefitTextCard
                key={benefit.id}
                text={benefit.text}
                variant={
                  deletedIds.has(benefit.id)
                    ? "discard"
                    : isBenefitTextUpdated(benefit)
                      ? "updated"
                      : "default"
                }
              />
            ))}
          </div>
        )}
      </AddForm>
    </div>
  );
};

export default AddBenefits;
