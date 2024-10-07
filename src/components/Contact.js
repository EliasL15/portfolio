import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 0px 8px rgb(255, 64, 129)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

const MotionButton = motion(Button);

const Contact = ({ darkMode }) => {
  return (
    <Container id="contact" maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.primary" paragraph>
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out via email:
        </Typography>

        {/* Use MotionButton directly instead of wrapping with motion.div */}
        <MotionButton
          variant="contained"
          color="secondary"
          href="mailto:elias2.liassides@gmail.com"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          sx={{
            mt: 3,
            backgroundColor: darkMode
              ? 'rgba(255, 64, 129, 1)'
              : 'rgba(245, 0, 87, 1)', // Default color (before hover)
            transition: 'background-color 0.3s ease',
            outline: 'none', // Remove default outline
            border: 'none', // Remove any borders
            boxShadow: 'none', // No shadow unless hovered
            '&:hover': {
              background: 'linear-gradient(90deg, #f50057, #ff4081)', // Gradient on hover
              boxShadow: '0 6px 15px rgba(0,0,0,0.2)', // Shadow on hover
            },
            '&:focus': {
              outline: 'none', // Remove focus outline
            },
            padding: '12px 24px',
            borderRadius: '50px',
            textTransform: 'none',
          }}
        >
          Contact Me
        </MotionButton>
      </Box>
    </Container>
  );
};

export default Contact;
