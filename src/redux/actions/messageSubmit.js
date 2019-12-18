import {
  fromEmailValidate,
  toEmailValidate,
  sendWaiting,
  sendComplete
} from "./actions";

export default function messageSubmit() {
  return (dispatch, getState, Sendsay) => {
    const curState = getState();
    let haveErrors = false;
    if (curState.msgFromEmail === "") {
      dispatch(fromEmailValidate("Email не может быть пустым"));
      haveErrors = true;
    } else dispatch(fromEmailValidate());

    if (curState.msgToEmail === "") {
      dispatch(toEmailValidate("Email не может быть пустым"));
      haveErrors = true;
    } else dispatch(toEmailValidate());

    if (haveErrors) return;
    else {
      dispatch(sendWaiting());
      setTimeout(() => {
        dispatch(sendComplete());
      }, 5000);
    }
  };
}
