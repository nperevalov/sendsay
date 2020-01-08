import { updateTrackStatus } from "./actions";
export default function onStatusUpdate() {
  return (dispatch, getState, sendsay) => {
    // https://sendsay.ru/api/api.html#Несколько-запросов-за-один-вызов
    let req = {
      action: "batch",
      do: []
    };

    // https://sendsay.ru/api/api.html#Состояние-асинхронного-запроса
    const curState = getState();
    curState.msgHistory.forEach(value => {
      req.do.push({
        action: "track.get",
        id: value.id
      });
    });

    sendsay
      .request(req)
      .then(res => {
        res.result.forEach(value => {
          dispatch(
            updateTrackStatus({ id: value.obj.id, status: value.obj.status })
          );
        });
      })
      .catch(error => {
        console.log(error); // Ошибку выводим в консоль, так как другое не определено
      });
  };
}
