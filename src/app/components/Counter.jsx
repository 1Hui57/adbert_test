"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box, Typography } from "@mui/material";
export default function Counter() {
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
    <Box sx={{
        maxWidth: "800px",
        margin: "0 auto", 
        height: "200px",
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
    }}>
      <Typography variant="h4" component="h4" gutterBottom>
        COUNTER
      </Typography>
      <ButtonGroup variant="outlined" orientation="vertical">
        <Button onClick={handleClick} disabled={isDisabled}>
          CLICK: {count}
        </Button>
        <Button onClick={handleClear}>CLEAR</Button>
        <Button onClick={handleToggleDisable}>
          {isDisabled ? "ABLE" : "DISABLE"}
        </Button>
      </ButtonGroup>
    </Box>
  );
}
