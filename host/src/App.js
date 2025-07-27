import React, { useState, Suspense, useEffect } from "react";
import "./main.css";

const RemoteProps = React.lazy(() => import("remoteProps/RemoteProps"));
const RemoteEvents = React.lazy(() => import("remoteEvents/RemoteEvents"));
const RemoteMobx = React.lazy(() => import("remoteMobx/RemoteMobx"));

function App() {
  const [countProps, setCountProps] = useState(0);
  const [countEvents, setCountEvents] = useState(0);
  const [countMobx, setCountMobx] = useState(0);

  useEffect(() => {
    console.log(
      "Host App перерендерился! countProps: ",
      countProps,
      "countEvent: ",
      countEvents,
      "countMobx: ",
      countMobx
    );
  });

  const handleSendCountEvents = () => {
    const newCount = countEvents + 1;
    setCountEvents(newCount);

    const event = new CustomEvent("EventCount", {
      detail: {
        message: "Данные для передачи",
        payload: {
          countEvents: newCount,
        },
      },
      bubbles: true, // Событие всплывает по DOM
      composed: true, // Преодолевает границы Shadow DOM
    });

    document.dispatchEvent(event);
  };

  const handleSendCountMobx = () => {
    const newCountMobx = countMobx + 1;
    setCountMobx(newCountMobx);

    window.globalStore.setCounter(newCountMobx);
  };

  return (
    <div className="host-container">
      <h2>Host приложение</h2>

      <ul>
        <li>
          <button
            onClick={() => setCountProps(countProps + 1)}
            className="button dark-green"
          >
            Пропсы. <br />Нажато: {countProps} раз
          </button>
        </li>
        <li>
          <button
            onClick={() => handleSendCountEvents()}
            className="button dark-pink"
          >
            Событийная модель.<br />Нажато: {countEvents} раз
          </button>
        </li>
        <li>
          <button
            onClick={() => handleSendCountMobx()}
            className="button dark-blue"
          >
            Mobx.<br />Нажато: {countMobx} раз
          </button>
        </li>
      </ul>

      <h2>Remote приложения</h2>

      <ul>
        <li className="green">
          <h3>С передачей данных через пропсы:</h3>
          <Suspense fallback={<div>Загружаем компонент...</div>}>
            <RemoteProps count={countProps} />
          </Suspense>
        </li>
        <li className="pink">
          <h3>С передачей данных через событийную модель:</h3>

          <Suspense fallback={<div>Загружаем компонент...</div>}>
            <RemoteEvents />
          </Suspense>
        </li>
        <li className="blue">
          <h3>С передачей данных через mobx:</h3>

          <Suspense fallback={<div>Загружаем компонент...</div>}>
            <RemoteMobx />
          </Suspense>
        </li>
      </ul>
    </div>
  );
}

export default App;
