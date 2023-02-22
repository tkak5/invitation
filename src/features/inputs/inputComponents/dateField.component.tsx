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
import { changeDate } from "../inputSlice";
import { useState, useEffect } from "react";

type InputListProps = {
  unit: string;
  min: number;
  max: number;
  index: number;
};

const InputList = ({ unit, min, max, index }: InputListProps) => {
  const [value, setValue] = useState<number | string | Array<number | string>>(
    min
  );
  const dispatch = useDispatch();

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    dispatch(changeDate({ index: index, unit: unit, value: newValue }));
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
            defaultValue={min}
            onChange={handleSliderChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

type DateFieldProps = {
  index: number;
};

export const DateField = ({ index }: DateFieldProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <InputList unit="年" min={1} max={3000} index={index} />
      <InputList unit="月" min={1} max={30} index={index} />
      <InputList unit="日" min={1} max={100} index={index} />
    </Box>
  );
};
