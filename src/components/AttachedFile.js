import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ReactComponent as Trash } from "../assets/trash.svg";
import { ReactComponent as Paperclip } from "../assets/paperclip.svg";

import removeAttachmentUpdateSize from "../actions/removeAttachmentUpdateSize";

function AttachedFile(props) {
  const dispatch = useDispatch();

  return (
    <div className="AttachedFile">
      <Paperclip className="AttachedFile-paperclip"></Paperclip>
      <div className="AttachedFile-filename">{props.filename}</div>
      <a
        tabIndex="0"
        className="AttachedFile-remove"
        href="#0"
        onClick={() => dispatch(removeAttachmentUpdateSize(props.fileid))}
      >
        <Trash className="AttachedFile-trash"></Trash>
        Удалить
      </a>
    </div>
  );
}
AttachedFile.propTypes = {
  fileid: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired
};
export default AttachedFile;
