import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DeleteBtn() {
  return (
    <>
      <div className="delete">
        <FontAwesomeIcon icon={faTrash} />
      </div>


    </>
  );
}

export default DeleteBtn;
