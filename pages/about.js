
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
import Layout from "../src/components/Layout"
//import { makeStyles } from '@mui/material/styles';
import WorkHistory from "../src/components/WorkHistory"
import Services from "../src/components/Services";




export default function Home() {

  return (
    <React.Fragment>
      <Layout>
      <Container maxWidth="md">
        <Typography variant="h2" align="center">
          What I do
        </Typography>
        <Box mt={3}>
          <Container>
            <Services />
            <Typography variant="h2" align="center">
              Resume Stuff Test 2
            </Typography>
            <Typography variant="h6">Education</Typography>
            <List>
              <ListItem>
                Arizona State University, Graphic Information and Technology, BS
              </ListItem>
              <ListItem>
                Pima Community College, Associate of General Studies with
                emphasis in Art and Design, AA
              </ListItem>
            </List>
            <Typography variant="h6">Work History</Typography>
            <br />
            <WorkHistory />
          </Container>
        </Box>
      </Container>
      </Layout>
    </React.Fragment>
  );
}
