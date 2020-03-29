import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface IInput {
  name: string;
}

type InputType = JSX.IntrinsicElements["input"] & IInput;

const Input: React.FC<InputType> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);
  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default Input;
