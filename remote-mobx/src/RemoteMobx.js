import React from "react";
import { observer } from "mobx-react";

const RemoteMobx = observer(() => {
  const { counter } = window.globalStore;

  return (
    <div
      style={{
        padding: "12px 24px",
        fontSize: "16px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "8px",
      }}
    >
      Нажато: {counter} раз из host или другого микрофронтенда
    </div>
  );
});

export default RemoteMobx;
