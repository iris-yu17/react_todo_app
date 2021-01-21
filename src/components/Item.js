import React, { useState, useEffect } from "react";
import DeleteBtn from "./DeleteBtn";
import CheckBox from "./CheckBox";

function Item(props) {
  const { item } = props;

  return (
    <>
      <div className="item_wrapper">
        <div className="check_n_text">
          <CheckBox item={item}/>
          <div className="text">{item.content}</div>
        </div>

        <DeleteBtn />
      </div>
    </>
  );
}

export default Item;
