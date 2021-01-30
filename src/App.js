import "./App.css";
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import AddBtn from "./components/AddBtn";
import List from "./components/List";
import SortBtn from "./components/SortBtn";
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
  const [currentPage, setCurrentPage] = useState(1); //1:all, 2:complete, 3:incomplete

  console.log(todoArray);

  function addBtnMouseUpEffect() {
    $("#addBtn").removeClass("add_btn_clicked");
    $("#addBtn").addClass("add_btn");
  }

  function changeSortBtnStyle(e) {
    $(this).parent().addClass("current_sort");
    // $(this).siblings().removeClass("current_sort");
    console.log($(this).parent())
    console.log(e.target);
  }

  return (
    <div
      onMouseUp={() => {
        addBtnMouseUpEffect();
      }}
    >
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

          <List
            todoArray={todoArray}
            setTodoArray={setTodoArray}
            currentPage={currentPage}
          />

          <div className="sort">
            <div
              className="sort_btn current_sort"
              id="test1"
              onClick={(e) => {
                changeSortBtnStyle(e);
              }}
            >
              <SortBtn text={"All"} />
            </div>
            <div
              className="sort_btn"
              id="test2"
              onClick={(e) => {
                changeSortBtnStyle(e);
              }}
            >
              <SortBtn text={"Complete"} />
            </div>
            <div
              className="sort_btn"
              onClick={(e) => {
                changeSortBtnStyle(e);
              }}
            >
              <SortBtn text={"Incomplete"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
