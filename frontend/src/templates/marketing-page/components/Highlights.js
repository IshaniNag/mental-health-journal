import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Personalized Insights',
    description:
      'Our analyzer adapts to your unique journaling style, offering tailored reflections that help you better understand your emotions and mental patterns.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Consistent Support',
    description:
      'Built to provide reliable mental health tracking over time, ensuring continuity in your self-care journey.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Intuitive Experience',
    description:
      'Easily integrate journaling into your daily routine with a user-friendly interface designed to reduce friction and encourage consistency.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Smart Innovation',
    description:
      'Leverage advanced AI to uncover trends, moods, and triggers, empowering you with knowledge to take proactive steps for your mental health.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Compassionate Guidance',
    description:
      'Receive thoughtful prompts and recommendations that extend beyond analysis, helping you feel supported every step of the way.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Attention to detail',
    description:
      'Every feature is carefully crafted—from mood tracking to sentiment visualization—ensuring even the smallest detail enhances your self-reflection journey.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Discover why our Mental Health Journal Analyzer stands out: insightful analysis, ease of use, personalized guidance, and innovation. Designed to support your well-being with care and precision.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
