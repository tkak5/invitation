import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { useSelector, useDispatch } from "react-redux";
import { pushDate, popDate } from "../inputs/inputSlice";
import type { Appstate } from "@/store";

import { DateField } from "@features/inputs";
import React, { useState } from "react";

export const CandidateQuestion = ({}) => {
  const [index, setIndex] = useState(-1);
  const [contents, setContents] = useState<Array<React.ReactNode>>([]);

  const dispatch = useDispatch();
  const dateValue = useSelector((state: Appstate) => state.input.date);

  const addContent = () => {
    const newIndex = index + 1;
    setIndex(newIndex);
    setContents([...contents, <CandidateContent index={newIndex} />]);
    dispatch(pushDate());
  };

  const popContent = () => {
    setIndex((prevIndex) => prevIndex - 1);
    dispatch(popDate());
    setContents(contents.slice(0, -1));
  };

  const isLast = () => {
    if (0 > index) {
      return (
        <Grid
          container
          alignItems={"center"}
          direction={"row"}
          justifyContent={"flex-start"}
        >
          <Grid item xs={10} sm={11}>
            <Typography>候補日を追加する</Typography>
          </Grid>
          <Grid item xs={2} sm={1}>
            <IconButton onClick={addContent}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid
          container
          alignItems={"center"}
          direction={"row"}
          justifyContent={"flex-start"}
        >
          <Grid item xs={8} sm={10}>
            <Typography>候補日を追加する</Typography>
          </Grid>
          <Grid item xs={2} sm={1}>
            <IconButton onClick={addContent}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2} sm={1}>
            <IconButton onClick={popContent}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      );
    }
  };
  return (
    <Card sx={{ maxWidth: "650px", width: "100%" }}>
      {contents}
      <CardActions sx={{ p: 2 }}>{isLast()}</CardActions>
    </Card>
  );
};

type CandidateQuestionProps = {
  index: number;
};

export const CandidateContent = ({ index }: CandidateQuestionProps) => {
  return (
    <>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography>第{index + 1}候補日</Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <DateField index={index} />
      </CardActions>
    </>
  );
};
