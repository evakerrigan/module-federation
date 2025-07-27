import React from "react";

function RemoteProps({ count }) {
  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          padding: "15px",
          backgroundColor: count !== undefined ? "#008080" : "#dc3545",
          borderRadius: "4px",
          fontSize: "16px",
          color: "white",
          borderRadius: "8px",
        }}
      >
        {count !== undefined
          ? `Получен count от Host: ${count}`
          : "Работает в изоляции (без данных от Host)"}
      </div>
    </div>
  );
}

export default RemoteProps;
