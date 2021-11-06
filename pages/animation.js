import {
  Container,
  Grid,
  Paper,
  Card,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import React from "react";
import Layout from "../src/components/main/Layout"
import Link from "next/link";

import PortfolioMenu from "../src/components/main/PortfolioMenu";



export default function Animation() {

  return (
    <React.Fragment>
      <Layout>
      <Container maxWidth="lg">
       
          <Typography variant="h2" align="center">Animation</Typography>
      <PortfolioMenu />
        <Box mt={3}>
          <Container>
            <Typography variant="h6" align="center">Various Clients</Typography>
            <Grid
              container
              spacing={3}
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <Card>1</Card>
              </Grid>
              <Grid item>
                <Card>2</Card>
              </Grid>
              <Grid item>
                <Card>3</Card>
              </Grid>
              <Grid item>
                <Card>4</Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
      </Layout>
    </React.Fragment>
  );
}
