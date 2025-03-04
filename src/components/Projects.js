import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import portfolio_pic from "../assets/dev_portfolio.png";
import outofspace from "../assets/outofspace.gif";
import brick_breaker from "../assets/brick_breaker.png"
import ultra from '../assets/ultra.png'
import shorts from '../assets/shorts.png'
import bakery from '../assets/bakery.png'
import neo_trader from '../assets/neo_trader.png'
import employee from '../assets/employee.png'
import pdf from '../assets/pdf.png'
import basketball from '../assets/basket.png'
import appointment_system from '../assets/appointment_system.png'
import order_book from '../assets/order_book.png'
import audio_to_video from '../assets/audio_to_video.jpg'

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      description: "A full-stack web application for efficient employee management, built with HTML, CSS, JavaScript, PHP, and MySQL.",
      image: employee,
      link: "https://github.com/EliasL15/Employee_Management_System"
    },
    {
      title: "Appointment Management System",
      description: "A full-stack web application for managing appointments, developed with C#, ASP.NET, SQL Server.",
      image: appointment_system,
      link: "https://github.com/EliasL15/Appointment_System"
    },
    {
      title: "Order Book Simulator",
      description: "A Flask real-time market order book simulator, featuring automatic order matching, live order book depth monitoring, and an interactive frontend for placing and managing trades.",
      image: order_book,
      link: "https://github.com/EliasL15/OrderBook_Simulator"

    },
    { 
      title: "Neo_Trader3000",
      description: "NeoTrader 3000 is a futuristic trading simulator featuring real-time stock price updates, interactive stock graphs, market events, and an achievements system, designed to test strategic trading skills in a fast-paced, dynamic environment.",
      image: neo_trader,
      link: "https://eliasl15.github.io/NeoTrader_3000/intro.html"
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
      title: "Shorts Automation in Python",
      description: "​A Python-based tool that automates the creation of YouTube Shorts by splitting videos into clips, generating subtitles using Whisper, and merging them, enhancing content accessibility and engagement.",
      image: shorts,
      link: "https://github.com/EliasL15/Shorts-Automation"
    },
    {
      title: "Audio to Video Generator",
      description: "A Python-based tool that converts audio files into videos, enhancing content creation and accessibility, using LLM to generate keywords used to download relevant videos from pexels and create a video.",
      image: audio_to_video,
      link: "https://github.com/EliasL15/audio_to_video"
    },
    {
      title: "Thermopylae Ultra Marathon Cyprus",
      description: "Co-founded a charity event, developed the official website using HTML and CSS. Also integrated Stripe for donations, and provided live streaming support.",
      image: ultra,
      link: "https://github.com/EliasL15/Ultra-Marathon"
    },
    {
      title: "Cyprus Basketball Division A Live Scores",
      description: "A Flask web application that scrapes and displays live basketball scores for Cyprus Basketball games.",
      image: basketball,
      link: "https://github.com/EliasL15/Cyprus_Basketball_Live_Scores"
    },
    {
      title: "PDF Generator in Java",
      description: "A Java-based PDF generator that converts a text file into PDF, using the iText library and a set of commands for formatting.",
      image: pdf,
      link: "https://github.com/EliasL15/Pdf_Generator"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using the React framework to showcase my skills and projects.",
      image: portfolio_pic,
      link: "https://github.com/EliasL15/portfolio"
    }
  ];

  return (
    <Container id="projects" maxWidth="lg">
      <Typography variant="h4" color="primary" sx={{ my: 4 }} align="center">
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6}  key={index}>
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
