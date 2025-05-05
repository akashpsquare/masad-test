import React from "react";
import AddForm from "../../components/Reusble/AddForm/AddForm";

const AddBenefits = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{  width:"100%", position: "relative", zIndex : 1}}>
      <div>
        <button className="btn btn-primary" onClick={() => setOpen(!open)}>Add Benefits</button>
      </div>

      <AddForm
        open={open}
        label="Add"
        headingLabel="Benefits"
        rightButtonHandler={() => setOpen(false)}
        btn1Label="Cancel"
        btn1Handler={() => setOpen(false)}
        btn2Label="Add"
        btn2Handler={() => setOpen(false)}
        isSecondFormOpen={open}
      />
    </div>
  );
};

export default AddBenefits;
