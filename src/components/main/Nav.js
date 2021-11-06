import React from "react";
import {
  Container,
  Grid,
  Paper,
  Card,
  Typography,
  Button,
  Box,
  MenuItem,
} from "@mui/material";
import Link from "next/link";

function Nav() {
  return (
    <Container>
      <Box>
        <Link href="/">
          <Button>MW</Button>
        </Link>
        <Button>Github</Button>
        <Button>Linked In</Button>
        <Link href="/about">
          <Button>About</Button>
        </Link>
      </Box>
    </Container>
  );
}
export default Nav
