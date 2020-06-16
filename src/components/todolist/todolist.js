import React from "react";
import AddButton from '../button/button';
import InputText from '../input/input';

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
          <InputText handler={this.handleChange} value={this.state.value}/>
          <div className="input-group-append">
            <AddButton handler={this.addText} />
          </div>
        </div>
      </ul>
    );
  }
}
function ListItem(props) {
  if (props.completed) {
    return (
      <s>
        <li onClick={props.handler} id={props.id} data-testid="list-item">
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

export default TodoList;
