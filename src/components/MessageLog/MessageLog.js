import React from "react";

import "./MessageLog.scss";

function MessageLog() {
  const data = [
    {
      date: "30 сентября",
      subject:
        "Тема письма, которая не поместитсdddddddddddddddddddddddddddddddddddddddя в эту строку, потому ч...",
      status: -2
    },
    {
      date: "30 сентября",
      subject: "Тема письма, которая не поместится в эту строку, потому ч...",
      status: -1
    },
    {
      date: "30 сентября",
      subject: "Тема письма, которая не поместится в эту строку, потому ч...",
      status: 0
    }
  ];

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
      <div className="MessageLog-data">
        <div className="MessageLog-data-header">
          <div className="MessageLog-data-header-date">Дата</div>
          <div className="MessageLog-data-header-subject">Тема</div>
          <div className="MessageLog-data-header-status">Статус</div>
        </div>
        {data.map((item, i) => {
          const itemStatus = explainStatus(item.status);
          return (
            <div key={i} className="MessageLog-data-values">
              <div className="MessageLog-data-date">{item.date}</div>
              <div className="MessageLog-data-subject">{item.subject}</div>
              <div
                className={
                  "MessageLog-data-status" + " " + itemStatus.className
                }
              >
                {itemStatus.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageLog;
