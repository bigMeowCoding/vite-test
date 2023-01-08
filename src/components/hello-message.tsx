import classNames from "classnames";
import React, { FC } from "react";
import "./hello-message.scss";
const HelloMessage: FC<{ name: string }> = ({ name }) => {
  return (
    <div
      className={classNames(
        "div",
        "hello",
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
export default HelloMessage;
