import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import nanoid from "nanoid";

import "./Message.scss";
import TextInput from "../TextInput/TextInput";
import MultiLineInput from "../MultiLineInput/MultiLineInput";
import NameEmailInput from "../NameEmailInput/NameEmailInput";
import Button from "../Button/Button";
import Attachments from "../Attachments/Attachments";

import {
  addAttachment,
  changeFromEmail,
  changeFromName,
  changeSubject,
  changeText,
  changeToEmail,
  changeToName
} from "../../redux/actions/actions";
import messageSubmit from "../../redux/actions/messageSubmit";

function Message() {
  const dispatch = useDispatch();
  const isDragActive = false;
  // const onDrop = useCallback(acceptedFiles => {
  //   const allowedExt = ["jpg", "gif", "jpeg", "doc", "xls", "pdf", "zip"];
  //   acceptedFiles.forEach(file => {
  //     if (
  //       allowedExt.includes(file.name.split(".").pop()) &&
  //       file.size < 5 * 1024 * 1024
  //     )
  //       dispatch(addAttachment({ id: nanoid(), file: file }));
  //   });
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="Message">
      {isDragActive ? (
        <div className="Message-dragOverlay">
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
        title="Отправить"
        onClick={() => {
          dispatch(messageSubmit());
        }}
      ></Button>
    </div>
  );
}

export default Message;
