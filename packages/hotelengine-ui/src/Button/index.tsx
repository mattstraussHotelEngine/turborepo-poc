import * as React from "react";
import { IButton } from '../../../hotelengine-types/src';


export const Button = ({label}: IButton)  => {
  return <button>{label}</button>;
}

Button.displayName = "Button";
