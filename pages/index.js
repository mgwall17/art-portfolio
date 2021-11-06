import { Container, Grid, Paper, Card, Typography, Button, Box } from "@mui/material"
import React from "react"
import { makeStyles } from '@mui/material/styles';
import Link from "next/link"
import GraphicCard from "../src/components/home/GraphicCard"
import UICard from "../src/components/home/UICard";
import IllustrateCard from "../src/components/home/IllustrateCard"
import AnimationCard from "../src/components/home/AnimationCard";
import Layout from "../src/components/main/Layout"
export default function Home() {

  return (
    <React.Fragment>
      <Layout>
      <Container maxWidth="md">
        <Typography variant="h1" align="center">
          Mariah Wall
        </Typography>
        <Typography variant="body1" align="center">
          <Box mb={2}>
            <Button
              variant="outlined"
              size="small"
              style={{color:'#00ff00'}}
            >
              Available for freelance
            </Button>
          </Box>
        </Typography>
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <GraphicCard />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
             <UICard />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <IllustrateCard />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <AnimationCard />
            </Grid>
            </Grid>
        </Box>
      </Container>
      </Layout>
    </React.Fragment>
  );
}
