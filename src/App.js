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
  const [currentPage, setCurrentPage] = useState(0); //0:all, 1:complete, 2:incomplete

  console.log("app");
  // console.log(todoArray);
  // console.log(currentPage)

  function addBtnMouseUpEffect() {
    $("#addBtn").removeClass("add_btn_clicked");
    $("#addBtn").addClass("add_btn");
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
            <SortBtn
              id={"allBtn"}
              text={"All"}
              classlist={"allBtn"}
              setCurrentPage={setCurrentPage}
            />

            <SortBtn
              id={"completeBtn"}
              text={"Complete"}
              classlist={"completeBtn"}
              setCurrentPage={setCurrentPage}
            />

            <SortBtn
              id={"incompleteBtn"}
              text={"Incomplete"}
              classlist={"incompleteBtn"}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
