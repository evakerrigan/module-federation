import React from "react";
import "./RemoteProps.css";

function RemoteProps({ count }) {
  return (
    <div className="remote-component">
      <div className="remote-title">Remote Props Component</div>

      <div className="remote-counter dark-green">{count}</div>

      <div className="remote-content">
        Нажато {count} раз из host
      </div>
    </div>
  );
}

export default RemoteProps;
