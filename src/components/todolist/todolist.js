import React, { useState } from 'react';
import AddButton from "../button/button";
import InputText from "../input/input";
import NumberList from "../number-list/number-list";

const TodoList = () => {

  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0)

  const addText = (event) => {
    setCounter(counter + 1);
    const item = {
      id: counter,
      text: value,
      completed: false
    };
    setList(list.concat(item));
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleSwitch = (event) => {
    let listCopy = [...list];
    //console.log(list);
    listCopy[event.target.id].completed = !listCopy[event.target.id].completed;
    setList(listCopy);
  };

    return (
      <ul>
        <NumberList list={list} handler={handleSwitch} />
        <div className="input-group mb-3">
          <InputText handler={handleChange} value={value} />
          <div className="input-group-append">
            <AddButton handler={addText} />
          </div>
        </div>
      </ul>
    );
  
}

export default TodoList;
