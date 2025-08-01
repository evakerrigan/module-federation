import React from "react";
import { createRoot } from "react-dom/client";
import RemoteProps from "./RemoteProps";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RemoteProps />);
