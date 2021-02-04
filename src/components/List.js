import React, { useState, useEffect } from "react";
import Item from "./Item";

function List(props) {
  const { todoArray, setTodoArray, currentPage } = props;
  const [item, setItem] = useState([]);

  if (currentPage === 1) {
    return (
      <>
        <div className="list" id="list">
          {todoArray.map((item, index) => {
            for (let i = 0; i < todoArray.length; i++) {
              if (item.status === 1) {
                return (
                  <Item
                    item={item}
                    setItem={setItem}
                    todoArray={todoArray}
                    setTodoArray={setTodoArray}
                  />
                );
              }
            }
          })}
        </div>
      </>
    );
  } else if (currentPage === 2) {
    return (
      <>
        <div className="list" id="list">
          {todoArray.map((item, index) => {
            for (let i = 0; i < todoArray.length; i++) {
              if (item.status === 0) {
                return (
                  <Item
                    item={item}
                    setItem={setItem}
                    todoArray={todoArray}
                    setTodoArray={setTodoArray}
                  />
                );
              }
            }
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="list" id="list">
          {todoArray.map((item, index) => {
            return (
              <Item
                item={item}
                setItem={setItem}
                todoArray={todoArray}
                setTodoArray={setTodoArray}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default List;
