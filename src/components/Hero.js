// src/components/Hero.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { keyframes, Global, css } from '@emotion/react';
import YourSVG from '../assets/your-illustration.svg'; // Ensure this path is correct

// Define keyframes for background gradient animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Define motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger the appearance of child elements
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 0px 8px rgb(255, 64, 129)',
    transition: {
      duration: 0.3,
      yoyo: Infinity, // Repeats the hover animation infinitely
    },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

// Particle variants for floating elements
const particleVariants = {
  animate: {
    y: [0, 20, 0],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Define a subtle floating animation for the SVG
const floatingAnimation = {
  hover: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Parallax rotation based on scroll (optional)
const Parallax = ({ darkMode }) => {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '10%',
        left: '80%',
        width: '100px',
        height: '100px',
        backgroundColor: darkMode ? 'rgba(255, 64, 129, 0.2)' : 'rgba(245, 0, 87, 0.2)',
        borderRadius: '50%',
        rotate: rotate,
        zIndex: 0,
      }}
    />
  );
};

const Hero = ({ darkMode }) => {
  // Initialize the typewriter effect
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Full Stack Developer'],
    loop: 0, // Infinite loop
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  // Motion values for parallax (if implemented)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (clientX - centerX) / 20;
    const deltaY = (clientY - centerY) / 20;

    x.set(deltaX);
    y.set(deltaY);
  };

  return (
    <>
      {/* Global CSS for Blinking Cursor */}
      <Global
        styles={css`
          @keyframes blink {
            from, to {
              border-color: transparent;
            }
            50% {
              border-color: currentColor;
            }
          }
          .cursor {
            display: inline-block;
            margin-left: 2px;
            width: 2px;
            height: 24px;
            background-color: currentColor;
            animation: blink 1s step-start infinite;
          }
        `}
      />
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onMouseMove={handleMouseMove}
        sx={{
          position: 'relative',
          color: darkMode ? '#ffffff' : '#333333', // Text color based on mode
          py: 10,
          textAlign: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: darkMode 
            ? 'linear-gradient(-45deg, #121212, #1d1d1d, #121212, #1d1d1d)' 
            : 'linear-gradient(-45deg, #f5f5f5, #e0e0e0, #f5f5f5, #e0e0e0)',
          backgroundSize: '400% 400%',
          animation: `${gradientAnimation} 15s ease infinite`, // Apply gradient animation
          overflow: 'hidden', // Prevent overflow
          padding: { xs: '2rem', sm: '4rem' }, // Responsive padding
        }}
      >
        {/* Parallax Rotating Shape */}
        {/* <Parallax darkMode={darkMode} /> */} {/* Optional: Uncomment if Parallax is desired */}

        {/* Floating Background Elements */}
        <motion.div
          variants={particleVariants}
          animate="animate"
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: darkMode ? 'rgba(255, 64, 129, 0.3)' : 'rgba(245, 0, 87, 0.3)',
            zIndex: 0,
          }}
        />
        <motion.div
          variants={particleVariants}
          animate="animate"
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: darkMode ? 'rgba(255, 64, 129, 0.3)' : 'rgba(245, 0, 87, 0.3)',
            zIndex: 0,
          }}
        />
        <motion.div
          variants={particleVariants}
          animate="animate"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: darkMode ? 'rgba(255, 64, 129, 0.2)' : 'rgba(245, 0, 87, 0.2)',
            zIndex: 0,
          }}
        />

        {/* Main Content */}
        <Container maxWidth="md">
          <Box
            component={motion.div}
            variants={containerVariants}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
              perspective: '1000px', // For 3D effect if needed
              
            }}
          >
            {/* Animated SVG Illustration with Parallax Effect */}
            <motion.img
              src={YourSVG} // Ensure the SVG path is correct
              alt="Illustration representing my skills"
              variants={floatingAnimation}
              whileHover="hover"
              whileTap="tap"
              style={{
                width: '200px',
                height: '200px',
                marginBottom: '2rem',
                translateX: x, // Use translateX instead of x directly
                translateY: y, // Apply y motion value here
                zIndex: 1,
              }}
            />

            {/* Name */}
            <Typography
              component={motion.h1}
              variants={titleVariants}
              sx={{
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                fontWeight: 'bold',
                color: darkMode ? '#ffffff' : '#333333',
              }}
            >
              Elias Liassides
            </Typography>

            {/* Subtitle */}
            <Typography
              component={motion.h2}
              variants={subtitleVariants}
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem' },
                color: darkMode ? '#bbbbbb' : '#666666',
                mt: 2,
              }}
            >
              Crafting Seamless User Experiences with Code.
            </Typography>

            {/* Typewriter effect below the subtitle */}
            <Typography
              component={motion.h3}
              variants={subtitleVariants}
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                color: darkMode ? '#bbbbbb' : '#666666',
                mt: 4,
              }}
            >
              {text}
              <Cursor cursorStyle="|" />
            </Typography>

            {/* Call to Action Button */}
            
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
