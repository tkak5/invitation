import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import type { Appstate } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../inputSlice";
import { useState, useEffect } from "react";

export const NameTextField = ({}) => {
  const dispatch = useDispatch();
  return (
    <TextField
      id="standard-basic"
      label="Required*"
      variant="standard"
      onChange={(e) => dispatch(changeName(e.target.value))}
    />
  );
};
