import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container-fluid p-5">
      <h1>Todo list</h1>
      <p>
        You can add new task to the list by pressing "Add new" button, you also
        can cross out completed tasks by clicking on them
      </p>
      <div className="row">
        <TodoList />
      </div>
    </div>
  );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], value: "", counter: -1 };
  }
  addText = (event) =>  {
    this.setState({ counter: ++this.state.counter });
    const item = {
      id: this.state.counter,
      text: this.state.value,
      completed: false,
    };
    this.setState({ list: this.state.list.concat(item) });
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  handleSwitch = (event) => {
    let list_copy = this.state.list;
    list_copy[event.target.id].completed = !list_copy[event.target.id]
      .completed;
    this.setState({ list: list_copy });
  }
  render() {
    return (
      <ul>
        <NumberList list={this.state.list} handler={this.handleSwitch} />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div data-testid="button-new" className="input-group-append">
            <AddButton handler={this.addText} />
          </div>
        </div>
      </ul>
    );
  }
}
class AddButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-outline-secondary"
        onClick={this.props.handler}
      >
        Add new
      </button>
    );
  }
}
function ListItem(props) {
  if (props.completed) {
    return (
      <s>
        <li onClick={props.handler} id={props.id}>
          {props.value}
        </li>
      </s>
    );
  }
  return (
    <li onClick={props.handler} id={props.id}>
      {props.value}
    </li>
  );
}
function NumberList(props) {
  const list = props.list;
  const handler = props.handler;
  const listItems = list.map((list) => (
    <ListItem
      key={list.id.toString()}
      value={list.text}
      id={list.id.toString()}
      completed={list.completed}
      handler={handler}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default App;
