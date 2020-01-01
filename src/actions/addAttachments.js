import nanoid from "nanoid";

import { addAttachment, changeTotalAttachmentsSize } from "./actions";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default function addAttachments(files) {
  return (dispatch, getState) => {
    let curAttachSize = getState().msgAttachTotalSize;

    let newSize = files.reduce((sum, file) => {
      return sum + file.size;
    }, 0);

    if (newSize + curAttachSize > 20 * 1024 * 1024) return;

    files.forEach(file => {
      getBase64(file).then(data => {
        dispatch(
          addAttachment({
            id: nanoid(),
            name: file.name,
            size: file.size,
            data: data
          })
        );
        curAttachSize += file.size;
        dispatch(changeTotalAttachmentsSize(curAttachSize));
      });
    });
  };
}
