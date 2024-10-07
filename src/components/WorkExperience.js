import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import eyLogo from '../assets/ey.png';
import logicomLogo from '../assets/logicom.jpg';
import modLogo from '../assets/mod.png';


const experiences = [
  {
    title: 'Technology Consulting Intern',
    company: 'EY Nicosia, Cyprus',
    date: 'July 2024 - August 2024',
    logo: eyLogo, // Use imported image
  },
  {
    title: 'Software Development Intern',
    company: 'Logicom NewCyTech, Nicosia, Cyprus',
    date: 'June 2024 - July 2024',
    logo: logicomLogo, // Use imported image
  },
  {
    title: 'Etiquette and Protocol',
    company: 'Ministry of Defence, Nicosia, Cyprus',
    date: 'July 2022 - September 2023',
    logo: modLogo, // Use imported image
  },
  {
    title: 'Technology Consulting Intern',
    company: 'EY Nicosia, Cyprus',
    date: 'July 2021 - August 2021',
    logo: eyLogo, // Use imported image
  },
];


const WorkExperience = () => {
    return (
      <Container id="experience" maxWidth="lg" sx={{ my: 6 }}>
        <Typography variant="h4" color="primary" align="center" sx={{ mb: 4 }}>
          Work Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                    borderRadius: '8px',
                    transition: 'box-shadow 0.3s ease-in-out',
                  }}
                >
                  {/* Wrapper for logo and text */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 2 }}>
                    {/* Image Section - Top */}
                    <CardMedia
                      component="img"
                      sx={{ width: 100, height: 100, objectFit: 'contain', marginBottom: 2 }} // Adjust size as needed
                      image={experience.logo}
                      alt={`${experience.company} logo`}
                    />
                    
                    {/* Text Section - Below Image */}
                    <CardContent sx={{ paddingLeft: 0 }}> {/* Remove default padding to align text */}
                      <Typography variant="h6" color="text.primary">
                        {experience.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {experience.title} | {experience.date}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
  
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant="contained"
            color="secondary"
            href="https://eliasl15.github.io/portfolio/Liassides.pdf"
            download="EliasLiassides_CV.pdf"
            sx={{
              mt: 3,
              background: 'linear-gradient(90deg, #ff4081, #f50057)',
              transition: 'background 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #f50057, #ff4081)',
                boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
              },
            }}
          >
            Download My CV
          </Button>
        </Box>
      </Container>
    );
  };
  
  export default WorkExperience;