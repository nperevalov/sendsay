import {
  BEGIN_FILE_DRAG,
  END_FILE_DRAG,
  ADD_ATTACHMENT,
  REMOVE_ATTACHMENT,
  TO_EMAIL_VALIDATE,
  FROM_EMAIL_VALIDATE,
  SEND_COMPLETE,
  SEND_WAITING,
  CHANGE_FROM_EMAIL,
  CHANGE_FROM_NAME,
  CHANGE_SUBJECT,
  CHANGE_TEXT,
  CHANGE_TO_EMAIL,
  CHANGE_TO_NAME,
  CHANGE_TOTAL_ATTACHMENTS_SIZE,
  ADD_TRACK,
  UPDATE_TRACK_STATUS
} from "../constants/ActionTypes";

const initialState = {
  isDragActive: false,
  isWaitingResponse: false,
  msgAttachments: [],
  msgAttachTotalSize: 0,
  msgFromName: "",
  msgFromEmail: "9059494@urhen.com",
  msgFromEmailNotValid: "",
  msgToName: "",
  msgToEmail: "9059494@urhen.com",
  msgToEmailNotValid: "",
  msgSubject: "",
  msgText: "",
  msgHistory: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TRACK_STATUS:
      return {
        ...state,
        msgHistory: state.msgHistory.map(item => {
          if (item.id !== action.value.id) return item;
          else return { ...item, status: action.value.status };
        })
      };
    case ADD_TRACK:
      return { ...state, msgHistory: [action.value, ...state.msgHistory] }; //FIXIT: feel some shit here
    case CHANGE_TOTAL_ATTACHMENTS_SIZE:
      return {
        ...state,
        msgAttachTotalSize: action.value
      };
    case CHANGE_FROM_EMAIL:
      return { ...state, msgFromEmail: action.value };
    case CHANGE_FROM_NAME:
      return { ...state, msgFromName: action.value };
    case CHANGE_SUBJECT:
      return { ...state, msgSubject: action.value };
    case CHANGE_TEXT:
      return { ...state, msgText: action.value };
    case CHANGE_TO_EMAIL:
      return { ...state, msgToEmail: action.value };
    case CHANGE_TO_NAME:
      return { ...state, msgToName: action.value };

    case SEND_WAITING:
      return { ...state, isWaitingResponse: true };
    case SEND_COMPLETE:
      return { ...state, isWaitingResponse: false };
    case TO_EMAIL_VALIDATE:
      return { ...state, msgToEmailNotValid: action.error };
    case FROM_EMAIL_VALIDATE:
      return { ...state, msgFromEmailNotValid: action.error };
    case BEGIN_FILE_DRAG:
      return { ...state, isDragActive: true };
    case END_FILE_DRAG:
      return { ...state, isDragActive: false };
    case ADD_ATTACHMENT:
      return {
        ...state,
        msgAttachments: [...state.msgAttachments, action.file]
      };
    case REMOVE_ATTACHMENT:
      return {
        ...state,
        msgAttachments: state.msgAttachments.filter(file => {
          return file.id !== action.id;
        })
      };
    default:
      return state;
  }
}
