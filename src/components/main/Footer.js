import { Typography, Box,Grid, Container } from '@mui/material'
import React from "react"

import Image from 'next/link'
  

function Footer() {

    return (
      <React.Fragment>
          <Box mb={3} mx={2} mt={4}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item md={12} align="center">
                <Typography variant="body2" color="inherit" align="center">
                  {"Copyright © "}
                  Mariah Wall {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Grid>
            </Grid>
          </Box>
      </React.Fragment>
    );
}
export default Footer