import React from "react";
import { useSelector } from "react-redux";

function WaitingBanner() {
  const msgToEmail = useSelector(state => state.msgToEmail);
  return (
    <div className="WaitingBanner">
      <div className="WaitingBanner-title">
        Сообщение поставлено в очередь на отправку
      </div>
      <div className="WaitingBanner-info">
        Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону
        почты получателя «{msgToEmail}» со скоростью электронов.
      </div>
    </div>
  );
}

export default WaitingBanner;
