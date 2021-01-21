import React, { useState, useEffect } from "react";

function Input(props) {
  const { inputValue, setInputValue } = props;

  return (
    <>
      <input
        value={inputValue}
        type="text"
        className="todo_input"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </>
  );
}

export default Input;
