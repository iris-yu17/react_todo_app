import React, { useState, useEffect } from "react";
import $ from "jquery";

function SortBtn(props) {
  const { text, id, classlist, setCurrentPage } = props;

  function changeSortBtnStyle(e) {
    // console.log(e.target);
    let i;
    let j;
    let k;

    if (e.target.classList.contains("allBtn")) {
      i = 0;
      j = 1;
      k = 2;
    } else if (e.target.classList.contains("incompleteBtn")) {
      i = 2;
      j = 0;
      k = 1;
    } else if (e.target.classList.contains("completeBtn")) {
      i = 1;
      j = 0;
      k = 2;
    }
    setCurrentPage(i);
    document.querySelectorAll(".sort_btn")[i].classList.add("current_sort");
    document.querySelectorAll(".sort_btn")[j].classList.remove("current_sort");
    document.querySelectorAll(".sort_btn")[k].classList.remove("current_sort");
  }

  useEffect(() => {
    document.querySelector("#allBtn").classList.add("current_sort");
  }, []);

  return (
    <>
      <div
        className="sort_btn"
        id={id}
        onClick={(e) => {
          changeSortBtnStyle(e);
        }}
      >
        <div className={classlist}>{text}</div>
      </div>
    </>
  );
}

export default SortBtn;
