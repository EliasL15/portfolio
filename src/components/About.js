// src/components/About.js
import React from 'react';
import { Container, Typography, Box, Paper, Grid, IconButton, Avatar } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Email} from '@mui/icons-material';
import { motion } from 'framer-motion';
import profilePic from '../assets/prof.png'; // Replace with your profile picture path

const About = () => {
  return (
    <Container id="about" maxWidth="lg">
      <Box sx={{ my: 8 }}>
        <Paper elevation={3} sx={{ padding: { xs: 3, md: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            {/* Profile Image */}
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Avatar
                  alt="Your Name"
                  src={profilePic}
                  sx={{
                    width: { xs: 150, md: 200 },
                    height: { xs: 150, md: 200 },
                    border: '4px solid',
                    borderColor: 'primary.main',
                    margin: '0 auto',
                  }}
                />
              </motion.div>
            </Grid>

            {/* About Text */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" gutterBottom>
                  About Me
                </Typography>
                <Typography variant="body1" paragraph>
                  I am a second-year Computer Science student at the University of Manchester, where I have developed a strong foundation in software development and problem-solving. I have a passion for building projects that challenge my technical abilities and allow me to explore new tools and technologies. Whether it's working on automation, creating dynamic web applications, or improving algorithms, I enjoy the process of designing and coding solutions. I'm always looking for opportunities to expand my knowledge and collaborate with others to bring innovative ideas to life.
                </Typography>
                <Typography variant="body1" paragraph>
                Beyond academics, I stay engaged with the developer community and continuously seek to learn about the latest industry trends. My goal is to leverage my skills to create impactful software solutions that make a difference.                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          {/* Social Media Links */}
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Connect with me
            </Typography>
            <Box>
              <IconButton
                component="a"
                href="https://github.com/EliasL15"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{
                  color: 'text.primary',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',

                  },
                }}
              >
                <GitHub fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/elias-liassides"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  color: 'text.primary',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              >
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/elias_liassides"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{
                  color: 'text.primary',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              >
                <Instagram fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:elias2.liassides@gmail.com"
                aria-label="Email"
                sx={{
                  color: 'text.primary',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              >
                <Email fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
