import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import portfolio_pic from "../assets/dev_portfolio.png";
import outofspace from "../assets/outofspace.gif";
import brick_breaker from "../assets/brick_breaker.png"
import ultra from '../assets/ultra.png'
import ytube from '../assets/Youtube-Shorts-Logo.png'
import bakery from '../assets/bakery.png'

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using the React framework to showcase my skills and projects.",
      image: portfolio_pic,
      link: "https://github.com/EliasL15/portfolio"
    },
    {
      title: "Ouf of Space Multiplayer Game",
      description: "Team Project multiplayer Game built using Godot Engine for the front-end and Go for the back-end",
      image: outofspace,
      link: "https://github.com/EliasL15/Out-of-Space-Multiplayer-Game"
    },
    {
      title: "BrickBreaker Game in Python",
      description: "A Python-based BrickBreaker game implementing object-oriented programming principles for interactive gameplay.",
      image: brick_breaker,
      link: "https://github.com/EliasL15/Brick-Breaker-Game"
    },
    {
      title: "Thermopylae Ultra Marathon Cyprus",
      description: "Co-founded a charity event, developed the official website using HTML and CSS. Also integrated Stripe for donations, and provided live streaming support.",
      image: ultra,
      link: "https://github.com/EliasL15/Ultra-Marathon"
    },
    {
      title: "YouTube Shorts Automation in Python",
      description: "Automated uploading of YouTube Shorts using Python and APIs, streamlining content creation for a more efficient workflow.",
      image: ytube,
      link: "https://github.com/EliasL15/Youtube-Shorts-Automation"
    },
    {
      title: "Java-Based Board Game",
      description: "Developed a Java-based board game using OOP for a maintainable codebase, featuring a JavaFX GUI, turn-based logic, and dynamic UI updates.",
      image: bakery,
      link: "https://www.youtube.com/watch?v=lFiKO4R4vOs"
    }
  ];

  return (
    <Container id="projects" maxWidth="lg">
      <Typography variant="h4" color="primary" sx={{ my: 4 }} align="center">
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia component="img" alt={project.title} height="200" image={project.image} />
                <CardContent>
                  <Typography variant="h6" color="text.primary">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    sx={{ mt: 2 }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
