import React, { useCallback, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import "./AttachmentControl.scss";

import { useDispatch } from "react-redux";
import { beginFileDrag, endFileDrag } from "../../redux/actions/actions";

function AttachmentControl() {
  return (
    <a
      className={"AttachmentControl"}
      tabIndex={"0"}
      href="#"
      onClick={() => {}}
    >
      <FontAwesomeIcon icon={faPaperclip} />
      Прикрепить файл
    </a>
  );
}

export default AttachmentControl;
