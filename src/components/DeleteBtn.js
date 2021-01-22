import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

function DeleteBtn(props) {
  const { item, todoArray, setTodoArray, delState, setDelState } = props;

  function deleteItem() {
    // 得到一個已排除被點擊item的陣列
    let updatedArray = todoArray.filter(function (itemInTodoArray) {
      return itemInTodoArray.id !== item.id;
    });
    //　改變狀態
    setTimeout(() => {
       setTodoArray(updatedArray);
    }, 100);
   
  }

  function delBtnMouseDownEffect() {
    setDelState(1);
  }

  if (delState === 0) {
    return (
      <>
        <div
          className="delete"
          onClick={() => {
            delBtnMouseDownEffect();
            deleteItem();
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="delete_clicked"
          onClick={() => {
            deleteItem();
          }}
          onMouseDown={() => {
            delBtnMouseDownEffect();
          }}
        >
          <div className="fa-trash-delete">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </>
    );
  }
}

export default DeleteBtn;
