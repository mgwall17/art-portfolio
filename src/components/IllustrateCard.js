import React from "react";

import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardActionArea
} from "@mui/material/";


export default function GraphicCard() {

  return (
    <CardActionArea>
      <Card  variant="outlined">
        <CardHeader title="Illustration" />
      </Card>
    </CardActionArea>
  );
}
