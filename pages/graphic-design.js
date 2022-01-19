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
import Layout from "../src/components/main/Layout";
import GraphicDesignCard from "../src/components/graphic-design/GraphicDesignCard";
import images from "../public/images"

export function GraphicDesign() {

  return (
    <React.Fragment>
      <Layout>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center">
            Graphic Design
          </Typography>
          <Box mt={3}>
            <Container>
              <Typography variant="h6" align="center">
                Various Clients
              </Typography>
              <Grid container spacing={3}>
                <Grid item md={6} s={12} xs={12} lg={3} xl={3}>
                  <GraphicDesignCard />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export default GraphicDesign
