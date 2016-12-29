import * as React from "react";
import * as ReactDOM from "react-dom";

import { Application } from "./application";

ReactDOM.render(
  <Application compiler="TypeScript" framework="React" />,
  document.getElementById("my-app")
);