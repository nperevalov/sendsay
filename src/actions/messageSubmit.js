import {
  fromEmailValidate,
  toEmailValidate,
  sendWaiting,
  sendComplete
} from "./actions";

import addNewTrack from "./addNewTrack";

export default function messageSubmit() {
  return (dispatch, getState, sendsay) => {
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
    // https://sendsay.ru/api/api.html#Отправить-тестовый-выпуск
    else {
      let sendRequest = {
        action: "issue.send.test",
        letter: {
          subject: curState.msgSubject,
          "from.name": curState.msgFromName,
          "from.email": curState.msgFromEmail,
          "to.name": curState.msgToName,
          message: { text: curState.msgText }
        },
        sendwhen: "test",
        mca: [curState.msgToEmail]
      };
      sendRequest.letter.attaches = curState.msgAttachments.map(value => {
        return {
          name: value.name,
          data: value.data,
          encoding: "base64"
        };
      });

      sendsay
        .request(sendRequest)
        .then(res => {
          dispatch(sendComplete());
          dispatch(addNewTrack(res["track.id"], curState.msgSubject));
        })
        .catch(error => {
          console.log(error); // Ошибку выводим в консоль, так как другое не определено
          dispatch(sendComplete());
        });
      dispatch(sendWaiting());
    }
  };
}
