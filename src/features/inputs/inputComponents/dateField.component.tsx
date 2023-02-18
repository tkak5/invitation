import Box from "@mui/material/Box";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import type { Appstate } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../inputSlice";
import { useState, useEffect } from "react";

type InputListProps = {
  unit: string;
  min: number;
  max: number;
  defaultValue: number;
};

const InputList = ({ unit, min, max, defaultValue }: InputListProps) => {
  const [value, setValue] = useState<number | string | Array<number | string>>(
    defaultValue
  );
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={3} alignItems={"center"} sx={{ width: "100%" }}>
        <Grid item xs={3} md={2} sx={{ minWidth: "55px", px: 0 }}>
          <Typography gutterBottom sx={{ textAlign: "right" }}>
            {value}
            {unit}
          </Typography>
        </Grid>
        <Grid item xs={9} md={10}>
          <Slider
            min={min}
            max={max}
            defaultValue={defaultValue}
            onChange={handleSliderChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export const DateField = ({}) => {
  const [date, setDate] = useState([]);
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "100%" }}>
      <InputList unit="年" min={1501} max={3000} defaultValue={2000} />
      <InputList unit="月" min={1} max={30} defaultValue={1} />
      <InputList unit="日" min={1} max={100} defaultValue={1} />
    </Box>
  );
};
