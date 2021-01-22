import "./App.css";
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import AddBtn from "./components/AddBtn";
import List from "./components/List";
import $ from "jquery";

function App() {
  let dotoEx1 = new NewItem("buy flower", 1, 1);
  let dotoEx2 = new NewItem("learn React", 0, 2);
  let dotoEx3 = new NewItem("make dinner", 0, 3);

  function NewItem(content, status, id) {
    this.content = content;
    this.status = status;
    this.id = id;
  }

  const [todoArray, setTodoArray] = useState([dotoEx1, dotoEx2, dotoEx3]);
  const [inputValue, setInputValue] = useState("");

  console.log(todoArray);

  function addBtnMouseUpEffect() {
    $("#addBtn").removeClass("add_btn_clicked");
    $("#addBtn").addClass("add_btn");
  }

  return (
    <div onMouseUp={()=>{
      addBtnMouseUpEffect();
    }}>
      <div className="container">
        <div className="screen">
          <div className="title">Todo List</div>
          <div className="input_wrapper">
            <Input inputValue={inputValue} setInputValue={setInputValue} />
            <AddBtn
              inputValue={inputValue}
              todoArray={todoArray}
              setTodoArray={setTodoArray}
              setInputValue={setInputValue}
            />
          </div>

          <List todoArray={todoArray} setTodoArray={setTodoArray}/>

          <div className="sort">
            <div className="sort_btn current_sort" id="all_item">
              All
            </div>
            <div className="sort_btn" id="completed_item">
              Complete
            </div>
            <div className="sort_btn" id="incomplete_item">
              Incomplete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
