import React, { useState, useEffect } from "react";
import Item from "./Item";

function List(props) {
  const { todoArray, setTodoArray, currentPage } = props;
  const [item, setItem] = useState([]);

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

export default List;
