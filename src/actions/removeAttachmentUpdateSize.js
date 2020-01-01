import { removeAttachment, changeTotalAttachmentsSize } from "./actions";

export default function removeAttachmentUpdateSize(id) {
  return (dispatch, getState) => {
    const curState = getState();
    const file = curState.msgAttachments.find(file => file.id === id);
    if (!file) return;
    dispatch(
      changeTotalAttachmentsSize(curState.msgAttachTotalSize - file.size)
    );
    dispatch(removeAttachment(id));
  };
}
