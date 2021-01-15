import React from "react";

import { CheckBox } from "./styles";

interface CheckBoxProps {
  value: boolean;
  onChangeValue: any;
}

export default function CheckBox({ value, onChangeValue }: CheckBoxProps) {
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
