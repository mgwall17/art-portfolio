
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
//import { makeStyles } from '@mui/material/styles';
import WorkHistory from "../src/components/about/WorkHistory"
import Services from "../src/components/about/Services";




export default function Home() {

  return (
    <React.Fragment>
      <Layout>
        <Container maxWidth="md">
          <Typography variant="h2" align="center">
            Mariah Wall
          </Typography>
          <Box my={3}>
          <Typography variant="h3" align="left">
            What I do
          </Typography>
          <Box mt={3}>
              <Services />
            </Box>
          </Box>
          <Box my={3}>
              <Typography variant="h3" align="left">
                Background
            </Typography>
          </Box>
          <Box mt={3}>
              <Typography variant="h6">Education</Typography>
              <List>
                <ListItem>
                  Arizona State University, Graphic Information and Technology,
                  BS
                </ListItem>
                <ListItem>
                  Pima Community College, Associate of General Studies with
                  emphasis in Art and Design, AA
                </ListItem>
              </List>
              <Typography variant="h6">Work History</Typography>
              <br />
              <WorkHistory />
              </Box>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
