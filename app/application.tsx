import * as React from "react";

export interface ApplicationProps { compiler: string; framework: string; }

export const Application = (props: ApplicationProps) =>
  <h1>Hello from {props.compiler} and {props.framework}!</h1>;