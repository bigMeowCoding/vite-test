import React, { FC } from "react";
import "./style.scss";
import classNames from "classnames";

const HelloMessage: FC<{ name: string }> = ({ name }) => {
  return (
    <div
      className={classNames(
        "bg-red-50",
        "font-bold",
        "bg-p",
        "text-r",
        "font-bold",
        "text-2xl",
        "p-3"
      )}
    >
      Hello {name}
    </div>
  );
};

export function App() {
  return <HelloMessage name="Taylor Swift" />;
}
