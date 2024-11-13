import React from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { FaJava } from "react-icons/fa";
import { SiJavascript, SiReact, SiPython, SiCss3, SiHtml5, SiGit, SiGodotengine, SiMysql, SiC, SiCplusplus, SiLatex } from 'react-icons/si';

const skills = [
    { name: 'Python', level: 100, icon: <SiPython size={40} /> },
    { name: 'Java', level: 80, icon: <FaJava size={40} /> },
    { name: 'React', level: 70, icon: <SiReact size={40} /> },
    { name: 'HTML', level: 90, icon: <SiHtml5 size={40} /> },
    { name: 'CSS', level: 70, icon: <SiCss3 size={40} /> },
    { name: 'JavaScript', level:70, icon: <SiJavascript size={40} />},
    { name: 'Git', level: 75, icon: <SiGit size={40} /> },
    { name: 'MySQL', level: 70, icon: <SiMysql size={40} /> },
    { name: 'C', level: 60, icon: <SiC size={40} /> },
    { name: 'C++', level: 60, icon: <SiCplusplus size={40} /> },
    { name: 'Latex', level: 80, icon: <SiLatex size={40} /> },
    { name: 'Godot - GDScript', level: 80, icon: <SiGodotengine size={40} /> },




];

const Skills = () => {
  return (
    <Box sx={{ py: 6, textAlign: 'center' }} id="skills">
      <Typography variant="h4" color="primary" gutterBottom>
        Skills & Expertise
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: index % 2 === 0 ? 5 : -5,
                boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CircularProgress
                  variant="determinate"
                  value={skill.level}
                  size={100}
                  thickness={5}
                  sx={{
                    color: '#1A73E8',
                    '& .MuiCircularProgress-circle': {
                      strokeLinecap: 'round',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {skill.icon}
                </Box>

                <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}%
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
