import React from "react";

import { CheckBox } from "./styles";

interface CheckBoxInputProps {
  value: boolean;
  onChangeValue: any;
}

export default function CheckBoxInput({
  value,
  onChangeValue
}: CheckBoxInputProps) {
  return (
    <CheckBox>
      <input
        type="checkbox"
        id="check"
        checked={value}
        onChange={onChangeValue}
      />
      <label htmlFor="check" />
    </CheckBox>
  );
}
