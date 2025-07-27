import React, { useState, useEffect } from "react";

function RemoteEvents() {
  const [eventCount, setEventCount] = useState(0);

  const fn = (event) => {
    console.log("Получены данные:", event.detail);

    setEventCount(event.detail.payload.countEvents);
  };

  useEffect(() => {
    document.addEventListener("EventCount", fn);

    return () => document.removeEventListener("EventCount", fn);
  }, []);

  return (
    <div
      style={{
        padding: "12px 24px",
        fontSize: "16px",
        backgroundColor: "#ff6b6b",
        color: "white",
        borderRadius: "8px",
      }}
    >
      Нажато: {JSON.stringify(eventCount)} раз из host или другого
      микрофронтенда
    </div>
  );
}

export default RemoteEvents;
