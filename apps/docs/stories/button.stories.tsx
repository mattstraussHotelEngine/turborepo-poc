import React  from "react";
import { Button } from "@motelengine-ui";

export default {
  title: "Components/Button",
  component: Button
}

export function Default(args) {
  return <Button {...args} />
}

Default.args = {
  label: "Book your stay"
}

export function Test(args) {
  return <Button {...args} />
}