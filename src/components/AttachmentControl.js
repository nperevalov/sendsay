import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

import addAttachments from "../actions/addAttachments";

function AttachmentControl() {
  const dispatch = useDispatch();
  const fileInput = useRef();

  const onClick = () => {
    fileInput.current.click();
  };

  const onFilesAdded = event => {
    const files = event.target.files;
    const filesArray = [];
    for (var i = 0; i < files.length; i++) {
      filesArray.push(files.item(i));
    }
    dispatch(addAttachments(filesArray));
  };

  return (
    <a
      className={"AttachmentControl"}
      tabIndex={"0"}
      onClick={onClick}
      href="#0"
    >
      <FontAwesomeIcon icon={faPaperclip} />
      Прикрепить файл
      <input
        ref={fileInput}
        className="AttachmentControl--input"
        type="file"
        multiple
        onChange={onFilesAdded}
      />
    </a>
  );
}

export default AttachmentControl;
