import React, { useState, useEffect } from "react";
import $ from "jquery";

function AddBtn(props) {
  const { inputValue, todoArray, setTodoArray, setInputValue } = props;

  function updateTodoList() {
    if (inputValue !== "") {
      const newItemToBeAdd = {
        content: inputValue,
        status: 0,
        id: Date.now(),
      };

      let newTodoArray = todoArray;
      newTodoArray.push(newItemToBeAdd);
      setTodoArray(newTodoArray);
      setInputValue("");
    }
  }

  function addBtnMouseDownEffect() {
    $("#addBtn").removeClass("add_btn");
    $("#addBtn").addClass("add_btn_clicked");
  }

  function addBtnMouseUpEffect() {
    $("#addBtn").removeClass("add_btn_clicked");
    $("#addBtn").addClass("add_btn");
  }

  return (
    <>
      <button
        id="addBtn"
        className="add_btn"
        // onClick={() => {
        //   updateTodoList();
        // }}
        onMouseDown={() => {
          addBtnMouseDownEffect();
        }}
        onMouseUp={() => {
          addBtnMouseUpEffect();
          updateTodoList();
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddBtn;
