import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPaperclip } from "@fortawesome/free-solid-svg-icons";

import removeAttachmentUpdateSize from "../actions/removeAttachmentUpdateSize";

function AttachedFile(props) {
  const dispatch = useDispatch();

  return (
    <div className="AttachedFile">
      <FontAwesomeIcon icon={faPaperclip} />
      <div className="AttachedFile-filename">{props.filename}</div>
      <a
        className="AttachedFile-remove"
        href="#0"
        onClick={() => dispatch(removeAttachmentUpdateSize(props.fileid))}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
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
