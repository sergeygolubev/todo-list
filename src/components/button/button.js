import React from "react";

function AddButton(props) {
  return (
    <button
      data-testid="button-new"
      className="btn btn-outline-secondary"
      onClick={props.handler}
    >
      Add new
    </button>
  );
}

export default AddButton;
