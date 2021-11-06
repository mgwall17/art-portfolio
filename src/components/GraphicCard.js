import React from "react";

import {
  Button,
  Typography,
  CardActionArea, Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material/";
import Link from "next/link"


export default function GraphicCard() {

 
  return (
    <Link href="/graphic-design">
      <CardActionArea>
      <Card variant="outlined" raised="true">
        <CardHeader title="Graphic Design" />
      </Card>
      </CardActionArea>
    </Link>
  );
}
