import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Logo } from "../assets/logo.svg";

import Message from "./Message";
import MessageLog from "./MessageLog";
import WaitingBanner from "./WaitingBanner";
import onStatusUpdate from "../actions/onStatusUpdate";

function App() {
  const isWaitingResponse = useSelector(state => state.isWaitingResponse);
  const dispatch = useDispatch();
  useEffect(() => {
    let timerId = setInterval(() => {
      dispatch(onStatusUpdate());
    }, 15000);
    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
