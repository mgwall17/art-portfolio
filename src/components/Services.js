import React from "react";

import {Accordion, Box, Button, Link, AccordionDetails, AccordionSummary, Typography, CardActionArea} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function Services() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography >Illustration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I produce digital art that looks like it was painted in watercolor
            or oils. It adds a more organic touch to content. I have also worked
            on comic book projects such as interior pages and covers. Whether
            you want an artistic piece for your website or social media
            campaign, or just a group portrait of your DnD crew; I'm here for
            you.
            <Box mt={2}>
              <Typography>
                Tools I use include Adobe Creative Suite, Rebelle Stuido and
                Clip Paint Studio
              </Typography>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography >Graphic Design</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Branding is important. It lets your customers know how passionate
            you are about your product. I can help you convey your passion with
            logos, brochures, websites and social media.
            <Box m={2} component="span">
              <Button href="/graphic-design" variant="text" size="small">
                View in Portfolio
              </Button>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>
            Web and UX Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I can help you design an entire web experience for your customers.
            This website was developed with a Material Design system, NextJS,
            and then deployed through GitHub and Vercel, for example.
            <Box mt={2}>
              <Typography>
                Technologies I use include Adobe XD, HTML/CSS, Bootstrap, React
                and NextJS. I have experience with Wix and Drupal sites as well.
              </Typography>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>Animation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I can make logo stings and moving title slides for videos using
            Adobe After Effects. I also have experience with Storyboard Pro if
            you have need for stroyboarding your ad campaigns or movie.
            <Box m={2} component="span">
              <Button href="/animation" variant="text" size="small">
                View in Portfolio
              </Button>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography>
            Video and Audio Editing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you have raw footage and audio that needs editing, I can do that
            with Adobe Premiere Pro, Adobe Audition and After Effects.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
