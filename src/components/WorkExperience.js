import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  CardMedia,
  Tooltip,
} from '@mui/material';
import { motion } from 'framer-motion';
import eyLogo from '../assets/ey.png';
import logicomLogo from '../assets/logicom.jpg';
import modLogo from '../assets/mod.png';

const experiences = [
  {
    title: 'Technology Consulting Intern',
    company: 'EY Nicosia, Cyprus',
    date: 'July 2024 - August 2024',
    logo: eyLogo,
    description:
      'Designed and implemented automation solutions to streamline processes and reduce manual tasks for internal teams. Collaborated with cross-functional teams to address client needs through technology integration.',
    link: 'https://www.ey.com',
  },
  {
    title: 'Software Development Intern',
    company: 'Logicom NewCyTech, Nicosia, Cyprus',
    date: 'June 2024 - July 2024',
    logo: logicomLogo,
    description:
      'Worked on automating business operations by creating custom workflows and providing technical support. Assisted in launching new digital platforms by managing support tasks and resolving issues during the development process.',
    link: 'https://newcytech.logicom.net/',
  },
  {
    title: 'Etiquette and Protocol',
    company: 'Ministry of Defence, Nicosia, Cyprus',
    date: 'July 2022 - September 2023',
    logo: modLogo,
    description:
      'Oversaw the coordination of events and ensured the adherence to protocol during official ceremonies. Facilitated smooth interactions between delegations and local teams, promoting a respectful and inclusive environment.',
    link: 'https://www.gov.cy/mod/en/',
  },
  {
    title: 'Technology Consulting Intern',
    company: 'EY Nicosia, Cyprus',
    date: 'July 2021 - August 2021',
    logo: eyLogo,
    description:
      'Supported consulting projects by implementing technology-driven solutions to optimize data management and operational workflows. Provided training and guidance on the use of new tools and platforms for team members.',
    link: 'https://www.ey.com',
  },
];

const WorkExperience = () => {
  return (
    <Container id="experience" maxWidth="lg" sx={{ my: 6, position: 'relative' }}>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        sx={{ mb: 4, fontWeight: 'bold' }}
      >
        Work Experience
      </Typography>

      <Box sx={{ position: 'relative', width: '100%', mx: 'auto' }}>
        {/* Timeline Vertical Line */}
        <Box
          sx={{
            position: 'absolute',
            top: '60px', // Adjusted for title space
            bottom: 0,
            left: '50%',
            width: '2px',
            backgroundColor: 'grey',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}
        />

        <Grid container spacing={6}>
          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0; // Alternate between left and right
            return (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: isLeft ? 'flex-end' : 'flex-start',
                      position: 'relative',
                    }}
                  >
                    {/* Experience Card with Hover Effects */}
                    <Card
                      sx={{
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                        borderRadius: '8px',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        width: '40%',
                        ml: isLeft ? 'auto' : '0',
                        mr: isLeft ? '0' : 'auto',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h6"
                          color="text.primary"
                          sx={{ fontWeight: 'bold' }}
                        >
                          {experience.company}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {experience.title} | {experience.date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                          {experience.description}
                        </Typography>
                      </CardContent>
                    </Card>

                    {/* Logo on the timeline with Tooltip and Clickable Link */}
                    <Tooltip title={experience.company} placement="top">
                      <Box
                        component="a"
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: '#fff',
                          border: '2px solid grey',
                          position: 'absolute',
                          left: '50%',
                          zIndex: 1,
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'transform 0.3s',
                          '&:hover': {
                            transform: 'translate(-50%, -50%) scale(1.1)',
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{ width: '80%', height: '80%', objectFit: 'contain', padding: 1 }}
                          image={experience.logo}
                          alt={`${experience.company} logo`}
                        />
                      </Box>
                    </Tooltip>
                  </Box>
                </motion.div>

                {/* Divider between items (line continuation) */}
                {index < experiences.length - 1 && (
                  <Divider sx={{ my: 3 }} />
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default WorkExperience;
