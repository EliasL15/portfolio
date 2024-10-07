import { SiJavascript, SiReact, SiNodedotjs, SiPython } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Python', icon: <SiPython /> }
];

{/* Replace the skill mapping with: */}
{skills.map((skill, index) => (
  <Grid item key={index}>
    <motion.div whileHover={{ scale: 1.1 }}>
      <Chip
        icon={skill.icon}  // Use the icon here
        label={skill.name}
        color="secondary"
        sx={{
          fontSize: '1rem',
          padding: '10px',
          borderRadius: '5px',
        }}
      />
    </motion.div>
  </Grid>
))}
