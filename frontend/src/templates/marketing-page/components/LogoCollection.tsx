import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/material/styles';

const darkModeLogos = [
  'https://www.torxmedia.com/wp-content/uploads/2022/11/logoipsum-600x600.png',
  'https://uploads-ssl.webflow.com/5c3a510a91db03828e568da1/5c3a6a8c652ba077e9640881_Logo%205%20Copy%209.svg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMF3JIzEUr2XSCY1lJwfQfIZY2G4G-wom4Q&s',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const lightModeLogos = [
  'https://www.torxmedia.com/wp-content/uploads/2022/11/logoipsum-600x600.png',
  'https://uploads-ssl.webflow.com/5c3a510a91db03828e568da1/5c3a6a8c652ba077e9640881_Logo%205%20Copy%209.svg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMF3JIzEUr2XSCY1lJwfQfIZY2G4G-wom4Q&s',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};

export default function LogoCollection() {
  const { mode, systemMode } = useColorScheme();
  let logos;
  if (mode === 'system') {
    if (systemMode === 'light') {
      logos = lightModeLogos;
    } else {
      logos = darkModeLogos;
    }
  } else if (mode === 'light') {
    logos = lightModeLogos;
  } else {
    logos = darkModeLogos;
  }

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Trusted by the best companies
      </Typography>
      <Grid container sx={{ justifyContent: 'center', mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
