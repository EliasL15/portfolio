import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaJava } from "react-icons/fa";
import { SiJavascript, SiHaskell, SiPython, SiCss3, SiHtml5, SiMongodb, SiMysql, SiC, SiCplusplus, SiSolidity, SiPhp } from 'react-icons/si';

const skills = [
    { name: 'Python', icon: <SiPython size={60} /> },
    { name: 'Java', icon: <FaJava size={60} /> },
    { name: 'C', icon: <SiC size={60} /> },
    { name: 'C++', icon: <SiCplusplus size={60} /> },
    { name: 'Haskell', icon: <SiHaskell size={60} /> },
    { name: 'Solidity', icon: <SiSolidity size={60} /> },
    { name: 'HTML', icon: <SiHtml5 size={60} /> },
    { name: 'CSS', icon: <SiCss3 size={60} /> },
    { name: 'JavaScript', icon: <SiJavascript size={60} />},
    { name: 'PHP', icon: <SiPhp size={60} /> },
    { name: 'MySQL', icon: <SiMysql size={60} /> },
    { name: 'MongoDB', icon: <SiMongodb size={60} /> }
];

const Skills = () => {
  return (
    <Box 
      sx={{ 
        py: 8, 
        textAlign: 'center',
        backgroundColor: 'background.default',
      }} 
      id="skills"
    >
      <Typography 
        variant="h4" 
        color="primary" 
        gutterBottom 
        sx={{ 
          mb: 6,
          fontWeight: 600
        }}
      >
        Programming Languages / Technologies
      </Typography>

      <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          maxWidth: 1200,
          mx: 'auto',
          px: 3
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <Box
              sx={{
                width: { xs: '140px', sm: '160px' },
                height: { xs: '140px', sm: '160px' },
                padding: 3,
                backgroundColor: 'background.paper',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                boxShadow: (theme) => `0 8px 24px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: (theme) => `0 12px 28px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.2)'}`,
                  '& .skill-icon': {
                    color: 'primary.main',
                  }
                }
              }}
            >
              <Box 
                className="skill-icon"
                sx={{ 
                  color: 'text.primary',
                  transition: 'color 0.3s ease',
                  fontSize: 40 
                }}
              >
                {skill.icon}
              </Box>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 500,
                  color: 'text.primary',
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
