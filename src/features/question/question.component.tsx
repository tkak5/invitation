import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import { NameTextField } from "@features/inputs";
import { DateField } from "@features/inputs";

type Props = {
  question: String;
  input: React.ReactNode;
};

export const Question = ({ question, input }: Props) => {
  return (
    <Card sx={{ maxWidth: "650px", width: "100%" }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography>{question}</Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>{input}</CardActions>
    </Card>
  );
};

export const NameQuestion = ({}) => {
  return (
    <Question question={"氏名を入力してください"} input={<NameTextField />} />
  );
};

export const DateQuestion = ({}) => {
  return (
    <Question question={"候補日を入力してください"} input={<DateField />} />
  );
};
