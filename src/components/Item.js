import React, { useState, useEffect } from "react";
import DeleteBtn from "./DeleteBtn";
import CheckBox from "./CheckBox";

function Item(props) {
  const { item, setItem, todoArray, setTodoArray } = props;
  const [delState, setDelState] = useState(0); // 0:正常樣式, 1:刪除樣式

  return (
    <>
      <div className="item_wrapper">
        <div className="check_n_text">
          <CheckBox
            item={item}
            setItem={setItem}
            todoArray={todoArray}
            setTodoArray={setTodoArray}
          />
          <div className="text">{item.content}</div>
        </div>

        <DeleteBtn  item={item} todoArray={todoArray} setTodoArray={setTodoArray} delState={delState} setDelState={setDelState}/>
      </div>
    </>
  );
}

export default Item;
