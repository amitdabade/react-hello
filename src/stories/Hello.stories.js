import React from "react";
import { storiesOf } from "@storybook/react";
import { Hello } from "../components/Hello";
import "./styles.css";

const stories = storiesOf("Hello", module);

stories.add("Hello", () => {
  return (
    <div>
      <Hello name="Amit" />
    </div>
  );
});
