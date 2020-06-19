import React from "react";

function InputText(props) {
  return (
    <input
      type="text"
      data-testid="input-text-box"
      className="form-control"
      onChange={props.handler}
    />
  );
}

export default InputText;
