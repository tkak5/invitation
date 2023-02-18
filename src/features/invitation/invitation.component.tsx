import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";

import type { Appstate } from "@/store";
import { useSelector, useDispatch } from "react-redux";

import { DateQuestion, NameQuestion } from "@features/question";

export const Invitation = ({}) => {
  const formValue = useSelector((state: Appstate) => state.input.name);
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: blue[50],
          position: "absolute",
          zIndex: -1,
          height: "100vh",
          width: "100%",
        }}
      />
      <AppBar>
        <Toolbar>日程調整</Toolbar>
      </AppBar>
      <Toolbar />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          my: "20px",
        }}
      >
        <NameQuestion />
        <div>chane: {formValue}</div>
        <DateQuestion />
      </Box>
    </Box>
  );
};
