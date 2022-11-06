import React, { FC } from "react";
import "./style.scss";

const HelloMessage: FC<{ name: string }> = ({ name }) => {
  return <div>Hello {name}</div>;
};

export function App() {
  return <HelloMessage name="Taylor Swift" />;
}
