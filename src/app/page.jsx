"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
export default function Home() {
  const [count, setCount] = React.useState(0);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleClear = () => {
    setCount(0);
  };

  const handleToggleDisable = () => {
    setIsDisabled((prev) => !prev);
  };

  return (
    <ButtonGroup variant="outlined" orientation="vertical">
      <Button onClick={handleClick} disabled={isDisabled}>
        CLICK: {count}
      </Button>
      <Button onClick={handleClear}>CLEAR</Button>
      <Button onClick={handleToggleDisable}>
        {isDisabled ? "ABLE" : "DISABLE"}
      </Button>
    </ButtonGroup>
  );
}
