import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Paperclip } from "../assets/s-paperclip.svg";

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
    <a className={"AttachmentControl"} tabIndex={0} onClick={onClick} href="#0">
      <Paperclip className={"AttachmentControl-paperclip"}></Paperclip>
      Прикрепить файл
      <input
        ref={fileInput}
        tabIndex={0}
        className="AttachmentControl-input"
        type="file"
        multiple
        onChange={onFilesAdded}
      />
    </a>
  );
}

export default AttachmentControl;
