import React, { useState, useEffect } from "react";
import "./RemoteEvents.css";

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
    <div className="remote-component">
      <div className="remote-title">Remote Events Component</div>

      <div className="remote-counter">{eventCount}</div>

      <div className="remote-content">
        Нажато: {eventCount} раз из host или другого микрофронтенда
      </div>
    </div>
  );
}

export default RemoteEvents;
