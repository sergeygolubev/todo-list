import React from "react";

class InputText extends React.Component {
  render() {
    return (
      <input
        type="text"
        data-testid="input-text-box"
        className="form-control"
        onChange={this.props.handler}
      />
    );
  }
}

export default InputText;
