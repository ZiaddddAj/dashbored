import * as React from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import TopBar from './components/TopBar';
import SideBar from './components/SideBar'; // Importing SideBar component
import { getDesignTokens } from './theme';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = React.useState(localStorage.getItem("currentMode")? localStorage.getItem("currentMode"): "light");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    
    <ThemeProvider theme={theme}>

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* TopBar component */}
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />

      {/* SideBar component */}
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography>
          This is your main content area. Add whatever you need here.
        </Typography>
      </Box>
    </Box>
    </ThemeProvider>
  );
}
