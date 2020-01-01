import React from "react";
import { useSelector } from "react-redux";

import AttachmentControl from "./AttachmentControl";
import AttachedFile from "./AttachedFile";

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
              filename={file.name}
            ></AttachedFile>
          );
        })}
      </div>
      <AttachmentControl></AttachmentControl>
    </div>
  );
}

export default Attachments;
