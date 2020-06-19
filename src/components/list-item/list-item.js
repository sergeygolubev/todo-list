import React from "react";

function ListItem(props) {
  if (props.completed) {
    return (
      <s data-testid="strikethrough">
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

export default ListItem;
