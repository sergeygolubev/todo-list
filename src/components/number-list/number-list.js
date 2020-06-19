import React from "react";
import ListItem from "../list-item/list-item";

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

export default NumberList;
