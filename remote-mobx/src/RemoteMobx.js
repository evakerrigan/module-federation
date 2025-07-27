import React from "react";
import { observer } from "mobx-react";
import "./RemoteMobx.css";

const RemoteMobx = observer(() => {
  const { counter } = window.globalStore;

  return (
    <div className="remote-component">
      <div className="remote-title">Remote MobX Component</div>

      <div className="remote-counter">{counter}</div>

      <div className="remote-content">
        Нажато: {counter} раз из host или другого микрофронтенда
      </div>
    </div>
  );
});

export default RemoteMobx;
