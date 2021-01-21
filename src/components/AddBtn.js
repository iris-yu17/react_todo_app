import React, { useState, useEffect } from "react";

function AddBtn(props) {
  const { inputValue, todoArray, settodoArray } = props;

  function updateTodoList() {
    const newItemToBeAdd = {
      content: inputValue,
      status: 0,
      id: Date.now(),
    };

    console.log("todoArray", todoArray);

    // let newTodoArray =
    //   JSON.stringify(todoArray) + JSON.stringify(newItemToBeAdd);

    // console.log("newItemToBeAdd", newItemToBeAdd);

    // console.log("newTodoArray", JSON.parse(newTodoArray));
  }

  return (
    <>
      <button
        id="addBtn"
        className="add_btn"
        onClick={() => {
          updateTodoList();
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddBtn;
