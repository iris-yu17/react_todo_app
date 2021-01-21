import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function CheckBox(props) {
  const { item } = props;
  const checkedHtml = (
    <div className="checkbox_checked ">
      <FontAwesomeIcon icon={faCheck} />
    </div>
  );

  const uncheckedHtml = <div className="checkbox hide_check"></div>;

  if (item.status === 0) {
    return uncheckedHtml;
  } else {
    return checkedHtml;
  }
}

export default CheckBox;
