import React from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
} from "@mui/material/";
import Link from "next/link";



export default function AnimationCard() {
  
  const bull = <span>•</span>;

  return (
    <Link href="/animation">
      <CardActionArea>
        <Card variant="outlined">
          <CardHeader title="Animation" />
        </Card>
      </CardActionArea>
    </Link>
  );
}
