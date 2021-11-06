import React from "react";
import {
  Button,
  Typography,
  Card,
  Grid,
Box,
} from "@mui/material/";
import Link from "next/link"


function PortfolioMenu() {
  
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item align="center">
          <Link href="/graphic-design">
            <Button>Graphic Design</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/graphic-design">
            <Button>UI/UX</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/graphic-design">
            <Button>Illustration</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
          export default PortfolioMenu