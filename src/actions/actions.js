import {
  BEGIN_FILE_DRAG,
  END_FILE_DRAG,
  ADD_ATTACHMENT,
  REMOVE_ATTACHMENT,
  FROM_EMAIL_VALIDATE,
  TO_EMAIL_VALIDATE,
  SEND_WAITING,
  SEND_COMPLETE,
  CHANGE_FROM_NAME,
  CHANGE_FROM_EMAIL,
  CHANGE_TO_NAME,
  CHANGE_TO_EMAIL,
  CHANGE_SUBJECT,
  CHANGE_TEXT,
  CHANGE_TOTAL_ATTACHMENTS_SIZE,
  ADD_TRACK,
  UPDATE_TRACK_STATUS
} from "../constants/ActionTypes";

function updateTrackStatus(value) {
  return {
    type: UPDATE_TRACK_STATUS,
    value: value
  };
}

function addTrack(value) {
  return {
    type: ADD_TRACK,
    value: value
  };
}
function changeTotalAttachmentsSize(value) {
  return {
    type: CHANGE_TOTAL_ATTACHMENTS_SIZE,
    value: value
  };
}

function changeText(value) {
  return {
    type: CHANGE_TEXT,
    value: value
  };
}
function changeSubject(value) {
  return {
    type: CHANGE_SUBJECT,
    value: value
  };
}
function changeToName(value) {
  return {
    type: CHANGE_TO_NAME,
    value: value
  };
}

function changeToEmail(value) {
  return {
    type: CHANGE_TO_EMAIL,
    value: value
  };
}

function changeFromName(value) {
  return {
    type: CHANGE_FROM_NAME,
    value: value
  };
}

function changeFromEmail(value) {
  return {
    type: CHANGE_FROM_EMAIL,
    value: value
  };
}

function sendWaiting() {
  return {
    type: SEND_WAITING
  };
}
function sendComplete() {
  return {
    type: SEND_COMPLETE
  };
}
function fromEmailValidate(error) {
  return {
    type: FROM_EMAIL_VALIDATE,
    error: error
  };
}

function toEmailValidate(error) {
  return {
    type: TO_EMAIL_VALIDATE,
    error: error
  };
}
function beginFileDrag() {
  return {
    type: BEGIN_FILE_DRAG
  };
}

function endFileDrag() {
  return {
    type: END_FILE_DRAG
  };
}

function addAttachment(file) {
  return {
    type: ADD_ATTACHMENT,
    file: file
  };
}

function removeAttachment(id) {
  return {
    type: REMOVE_ATTACHMENT,
    id: id
  };
}

export {
  beginFileDrag,
  endFileDrag,
  addAttachment,
  removeAttachment,
  fromEmailValidate,
  toEmailValidate,
  sendWaiting,
  sendComplete,
  changeFromEmail,
  changeFromName,
  changeSubject,
  changeText,
  changeToEmail,
  changeToName,
  changeTotalAttachmentsSize,
  addTrack,
  updateTrackStatus
};
