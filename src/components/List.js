import React, { useState, useEffect } from "react";
import Item from "./Item";

function List(props) {
  const { todoArray } = props;

  return (
    <>
      <div className="list" id="list">
        {todoArray.map((item, index) => {
          return <Item item={item} />;
        })}
      </div>
    </>
  );
}

export default List;
