import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextInput from "./TextInput";
import MultiLineInput from "./MultiLineInput";
import NameEmailInput from "./NameEmailInput";
import Button from "./Button";
import Attachments from "./Attachments";

import {
  changeFromEmail,
  changeFromName,
  changeSubject,
  changeText,
  changeToEmail,
  changeToName
} from "../actions/actions";

import messageSubmit from "../actions/messageSubmit";
import addAttachments from "../actions/addAttachments";

function Message() {
  const [isDragActive, setIsDragActive] = useState(false);
  const dispatch = useDispatch();

  const onDragOver = event => {
    event.preventDefault();
    setIsDragActive(true);
  };
  const onDragLeave = event => {
    event.preventDefault();
    setIsDragActive(false);
  };

  function fileListToArray(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  const onDrop = event => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    dispatch(addAttachments(fileListToArray(files)));
    setIsDragActive(false);
  };

  return (
    <div
      className="Message"
      onDragOver={event => {
        onDragOver(event);
      }}
    >
      {isDragActive ? (
        <div
          className="Message-dragOverlay"
          onDragLeave={event => {
            onDragLeave(event);
          }}
          onDrop={event => {
            onDrop(event);
          }}
        >
          <div className="Message-dragOverlay-title">
            Бросайте файлы сюда, я ловлю
          </div>
          <div className="Message-dragOverlay-info">
            Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf)
            и zip-архивы.
            <br />
            Размеры файла до 5 МБ
          </div>
        </div>
      ) : null}
      <div className="Message-title">Отправлялка сообщений</div>
      <NameEmailInput
        title="От кого"
        name={useSelector(state => state.msgFromName)}
        email={useSelector(state => state.msgFromEmail)}
        onNameChange={value => dispatch(changeFromName(value))}
        onEmailChange={value => dispatch(changeFromEmail(value))}
        emailNotValidText={useSelector(state => state.msgFromEmailNotValid)}
      ></NameEmailInput>
      <NameEmailInput
        title="Кому"
        name={useSelector(state => state.msgToName)}
        email={useSelector(state => state.msgToEmail)}
        onNameChange={value => dispatch(changeToName(value))}
        onEmailChange={value => dispatch(changeToEmail(value))}
        emailNotValidText={useSelector(state => state.msgToEmailNotValid)}
      ></NameEmailInput>
      <TextInput
        title="Тема письма"
        value={useSelector(state => state.msgSubject)}
        onChange={value => dispatch(changeSubject(value))}
      ></TextInput>
      <MultiLineInput
        title="Сообщение"
        value={useSelector(state => state.msgText)}
        onChange={value => dispatch(changeText(value))}
      ></MultiLineInput>
      <Attachments></Attachments>
      <Button
        className="Button"
        title="Отправить"
        onClick={() => {
          dispatch(messageSubmit());
        }}
      ></Button>
    </div>
  );
}

export default Message;
