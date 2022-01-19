import React from "react";

import {
  Button,
  Typography,
  CardActionArea,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Box
} from "@mui/material/";
import Link from "next/link";
import Image from "next/image"

export default function GraphicDesignCard() {
  return (
    <Link href="/graphic-design">
      <Box
        sx={{
          width: 423,
          height: 209,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box sx={{padding:'5px'}}>
          <Typography align="center">Coffee & Code Event Logo</Typography>
        </Box>
        <Image src="/images/1.png" width={423} height={209} />
      </Box>
    </Link>
  );
}

