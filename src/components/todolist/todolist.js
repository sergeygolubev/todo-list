import React from "react";
import AddButton from "../button/button";
import InputText from "../input/input";
import NumberList from "../number-list/number-list";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], value: "", counter: -1 };
  }
  addText = (event) => {
    this.setState({ counter: ++this.state.counter });
    const item = {
      id: this.state.counter,
      text: this.state.value,
      completed: false,
    };
    this.setState({ list: this.state.list.concat(item) });
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleSwitch = (event) => {
    let listCopy = this.state.list;
    listCopy[event.target.id].completed = !listCopy[event.target.id]
      .completed;
    this.setState({ list: listCopy });
  };
  render() {
    return (
      <ul>
        <NumberList list={this.state.list} handler={this.handleSwitch} />
        <div className="input-group mb-3">
          <InputText handler={this.handleChange} value={this.state.value} />
          <div className="input-group-append">
            <AddButton handler={this.addText} />
          </div>
        </div>
      </ul>
    );
  }
}

export default TodoList;
