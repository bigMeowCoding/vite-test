import classNames from "classnames";
import React, { FC, useEffect } from "react";
import "./hello-message.scss";
const HelloMessage: FC<{ name: string }> = ({ name }) => {
  useEffect(() => {
    fetch("/api/test")
      .then((d) => {
        console.log("data=====", d);
      })
      .catch((e) => {
        console.error("error======", e);
      });
  }, []);
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
