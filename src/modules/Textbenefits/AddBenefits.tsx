import React, { useEffect } from "react";
import AddForm from "../../components/Reusble/AddForm/AddForm";
import { BenefitTabs } from "../../components/Reusble/BenefitTabs/BenefitTabs";
import { BenefitTextCard } from "../../components/Reusble/BenefitTextCard/BenefitTextCard";
import { generateUniqueId } from "../../functions/functions";

export type Benefit = {
  id: string;
  text: string;
  isDeleted?: boolean;
  isUpdated?: boolean;
};

const AddBenefits = () => {
  const [open, setOpen] = React.useState(false);
  const [copyExistingBenefitsData, setCopyExistingBenefitsData] =
    React.useState<Benefit[]>([]);
  const [initialExitingbenefitData, setInitialExitingbenefitData] =
    React.useState<Benefit[]>([]);
  const [recentBenefitsData, setRecentBenefitsData] = React.useState<Benefit[]>(
    []
  );
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [benefitText, setBenefitText] = React.useState("");
  const [isSummary, setIsSummary] = React.useState(false);
  const [isDiscard, setIsDiscard] = React.useState(false);

  useEffect(() => {
    // Fetch existing benefits data from local storage when the component mounts
    if (open) {
      const storedBenefits = localStorage.getItem("copyExistingBenefitsData");
      if (storedBenefits) {
        const parsedBenefits: Benefit[] = JSON.parse(storedBenefits).map(
          (benefit: Benefit) => ({ ...benefit, isDeleted: false })
        );
        setCopyExistingBenefitsData(parsedBenefits);
        setInitialExitingbenefitData(parsedBenefits);
      }
    }
  }, [open]);

  // Function to handle the Enter key press
  // This function is called when the Enter key is pressed in the input field
  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveBenefitsHandler();
    }
  };

  // Function to save the benefit details
  const saveBenefitsHandler = () => {
    // Check if the benefit text is not empty
    if (benefitText && benefitText.trim() !== "") {
      // If editing an existing benefit, update it
      // Otherwise, add a new benefit
      if (editingId) {
        setRecentBenefitsData((prev) =>
          prev.map((b) =>
            b.id === editingId ? { ...b, text: benefitText } : b
          )
        );

        

          const initialBenefitText = initialExitingbenefitData.find((b) => b.id === editingId)?.text;
        setCopyExistingBenefitsData((prev) =>
          prev.map((b) =>
            b.id === editingId ? { ...b, text: benefitText, isUpdated : initialBenefitText !== benefitText ? true : false } : b
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

  const cancelHandler = () => {
    // Reset the state variables when the cancel button is clicked
    if (
      recentBenefitsData.length <= 0 &&
      copyExistingBenefitsData.length <= 0
    ) {
      setOpen(false);
    } else {
      setBenefitText("");
      setEditingId(null);
      setIsDiscard(true);
    }
  };

  const addBenefitsHandler = () => {
    setBenefitText("");
    setEditingId(null);
    setIsSummary(true);
  };

  const backDiscardHandler = () => {
    setIsDiscard(false);
  };

  // Function to handle the discard action
  // This function is called when the "Discard" button is clicked in the discard view
  const discardHandler = () => {
    setOpen(false);
    setTimeout(() => {
      setRecentBenefitsData([]);
      setIsDiscard(false);
    }, 1000); // Delay to allow the modal to close before resetting the state
  };

  const backSummaryHandler = () => {
    setIsSummary(false);
  };

  const submitSummaryHandler = () => {
    // Handle the submission of the summary
    // This function is called when the "Save" button is clicked in the summary view
    console.log("Summary submitted:", recentBenefitsData);
    const newBenefits: Benefit[] = recentBenefitsData;
    const oldBenefits: Benefit[] = []; // copyExistingBenefitsData.filter((benefit) => );
    localStorage.setItem(
      "copyExistingBenefitsData",
      JSON.stringify([...newBenefits, ...oldBenefits])
    );
    setRecentBenefitsData([]);
    setIsSummary(false);
    setOpen(false);
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
        btn2Label={isDiscard ? "Discard" : isSummary ? "Submit" : "Add"}
        btn2Handler={
          isDiscard
            ? discardHandler
            : isSummary
              ? submitSummaryHandler
              : addBenefitsHandler
        }
        // rightButtonHandler={() => setOpen(false)}
        // isSecondFormOpen={open}
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
                height: "100%",
              }}
            >
              {recentBenefitsData.length > 0 && (
                <BenefitTabs
                  benefits={recentBenefitsData}
                  type="Recent"
                  onChange={(updated: any) => setRecentBenefitsData(updated)}
                  editHandler={(id: string, text: string) => {
                    setEditingId(id);
                    setBenefitText(text);
                  }}
                  editId={editingId}
                />
              )}

              {copyExistingBenefitsData.length > 0 && (
                <BenefitTabs
                  benefits={copyExistingBenefitsData}
                  type="Existing"
                  onChange={(updated: any) =>
                    setCopyExistingBenefitsData(updated)
                  }
                  editHandler={(id, text) => {
                    setEditingId(id);
                    setBenefitText(text);
                  }}
                  editId={editingId}
                />
              )}
            </div>
          </>
        )}

        {!isSummary && isDiscard && (
          <div style={{ marginTop: "20px" }}>
            {recentBenefitsData.map((benefit) => (
              <BenefitTextCard
                key={benefit.id}
                text={benefit.text}
                variant="discard"
              />
            ))}
          </div>
        )}

        {/* {isSummary && !isDiscard && (
          <div style={{ marginTop: "20px" }}>
            {[...recentBenefitsData, ...copyExistingBenefitsData].map(
              (benefit) => {
                const isDeleted: Boolean = copyExistingBenefitsData.find(
                  (b) => b.id === benefit.id
                )
                  ? false
                  : true;
                const isUpdated: Boolean = initialExitingbenefitData.find(
                  (b) => b.id === benefit.id
                )
                  ? true
                  : false;
                return (
                  <BenefitTextCard
                    key={benefit.id}
                    text={benefit.text}
                    variant={
                      isDeleted ? "discard" : isUpdated ? "updated" : "default"
                    }
                  />
                );
              }
            )}
          </div>
        )} */}

        {isSummary && !isDiscard && (
          <div style={{ marginTop: "20px" }}>
            {[...recentBenefitsData, ...copyExistingBenefitsData].map(
              (benefit) => (
                <BenefitTextCard
                  key={benefit.id}
                  text={benefit.text}
                  variant={
                    benefit.isDeleted ? "discard" : benefit.isUpdated ? "updated" : "default"
                  }
                />
              )
            )}
          </div>
        )}
      </AddForm>
    </div>
  );
};

export default AddBenefits;
