import React from "react";
import { useSelector } from "react-redux";

import "./App.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import Message from "../Message/Message";
import MessageLog from "../MessageLog/MessageLog";
import WaitingBanner from "../WaitingBanner/WaitingBanner";
// выровнять текст в линке посредине
// Пофиксить добавление файлов
// Работа с API
// История (обновление)
// Пофиксить таблицу
// Пофиксить стили кнопок и ссылок
// Глобальные стили
// Отрефакторить компонеты

function App() {
  const isWaitingResponse = useSelector(state => state.isWaitingResponse);

  return (
    <div className="App">
      <Logo className="Logo" />
      {isWaitingResponse ? (
        <WaitingBanner></WaitingBanner>
      ) : (
        <Message></Message>
      )}

      <MessageLog></MessageLog>
    </div>
  );
}

export default App;
