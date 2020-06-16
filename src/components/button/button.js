import React from "react";

class AddButton extends React.Component {
  render() {
    return (
      <button
        data-testid="button-new"
        className="btn btn-outline-secondary"
        onClick={this.props.handler}
      >
        Add new
      </button>
    );
  }
}

export default AddButton;
