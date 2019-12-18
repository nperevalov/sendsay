export const BEGIN_FILE_DRAG = "BEGIN_FILE_DRAG";
export const END_FILE_DRAG = "END_FILE_DRAG";
export const ADD_ATTACHMENT = "ADD_ATTACHMENT";
export const REMOVE_ATTACHMENT = "REMOVE_ATTACHMENT";
export const FROM_EMAIL_VALIDATE = "FROM_EMAIL_VALIDATE";
export const TO_EMAIL_VALIDATE = "TO_EMAIL_VALIDATE";
export const SEND_WAITING = "SEND_WAITING";
export const SEND_COMPLETE = "SEND_COMPLETE";

export const CHANGE_FROM_NAME = "CHANGE_FROM_NAME";
export const CHANGE_FROM_EMAIL = "CHANGE_FROM_EMAIL";
export const CHANGE_TO_NAME = "CHANGE_TO_NAME";
export const CHANGE_TO_EMAIL = "CHANGE_TO_EMAIL";
export const CHANGE_SUBJECT = "CHANGE_SUBJECT";
export const CHANGE_TEXT = "CHANGE_TEXT";

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
  changeToName
};
