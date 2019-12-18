import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import AttachmentControl from "../AttachmentControl/AttachmentControl";
import AttachedFile from "../AttachedFile/AttachedFile";
import "./Attachments.scss";

function Attachments() {
  const msgAttachments = useSelector(state => state.msgAttachments);
  return (
    <div className="Attachments">
      <div className="Attachments-filesList">
        {msgAttachments.map((file, id) => {
          return (
            <AttachedFile
              key={id}
              fileid={file.id}
              filename={file.file.name}
            ></AttachedFile>
          );
        })}
      </div>
      <AttachmentControl></AttachmentControl>
    </div>
  );
}

export default Attachments;
