import { addTrack } from "./actions";

export default function addNewTrack(id, subject) {
  return (dispatch, getState, sendsay) => {
    // https://sendsay.ru/api/api.html#Состояние-асинхронного-запроса
    let sendRequest = {
      action: "track.get",
      id: id
    };
    sendsay.request(sendRequest).then(
      res => {
        dispatch(
          addTrack({
            id: id,
            date: res.obj.dt,
            subject: subject,
            status: res.obj.status
          })
        );
      },
      error => {
        console.log(error); // Ошибку выводим в консоль, так как другое не определено
      }
    );
  };
}
