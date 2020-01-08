import React from "react";
import { useSelector } from "react-redux";

function MessageLog() {
  const msgHistory = useSelector(state => state.msgHistory);

  const explainStatus = status => {
    if (status < -1) {
      return { className: "MessageLog-data-status--error", text: "Ошибка" };
    }
    if (status > -1) {
      return {
        className: "MessageLog-data-status--pending",
        text: "В очереди"
      };
    }
    return {
      className: "MessageLog-data-status--success",
      text: "Отправлено"
    };
  };

  return (
    <div className="MessageLog">
      <div className="MessageLog-title">Отправленные сообщения</div>
      {msgHistory.length ? (
        <table className="MessageLog-table">
          <colgroup>
            <col className=".MessageLog-data-header-date" />
            <col className="MessageLog-data-header-subject" />
            <col className="MessageLog-data-header-status" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Дата</th>
              <th scope="col">Тема</th>
              <th scope="col" className="MessageLog-data-header-status">
                Статус
              </th>
            </tr>
          </thead>
          <tbody>
            {msgHistory.map((item, i) => {
              const itemStatus = explainStatus(item.status);
              return (
                <tr key={i}>
                  <td>
                    {new Date(item.date).toLocaleString("ru", {
                      month: "long",
                      day: "numeric"
                    })}
                  </td>
                  <td>{item.subject}</td>
                  <td
                    className={"MessageLog-data-status " + itemStatus.className}
                  >
                    {itemStatus.text}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="MessageLog-noting">Сообщения ещё не отправлялись</div>
      )}
    </div>
  );
}

export default MessageLog;
