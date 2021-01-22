import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function CheckBox(props) {
  const { item, setItem, todoArray, setTodoArray } = props;

  const changeItemStatus = () => {
    // 找到點擊的item
    let itemToBeUpdate = todoArray.filter(function (itemInTodoArray) {
      return itemInTodoArray.id === item.id;
    });
    // 改變status
    if (itemToBeUpdate[0].status === 1) {
      itemToBeUpdate[0].status = 0;
    } else if (itemToBeUpdate[0].status === 0) {
      itemToBeUpdate[0].status = 1;
    }
    //　改變狀態
    setTodoArray(todoArray);

    setItem(itemToBeUpdate);
  };

  const checkedHtml = (
    <div
      className="checkbox_checked"
      onClick={() => {
        changeItemStatus();
      }}
    >
      <FontAwesomeIcon icon={faCheck} />
    </div>
  );

  const uncheckedHtml = (
    <div
      className="checkbox hide_check"
      onClick={() => {
        changeItemStatus();
      }}
    ></div>
  );

  if (item.status === 0) {
    return uncheckedHtml;
  } else {
    return checkedHtml;
  }
}

export default CheckBox;
