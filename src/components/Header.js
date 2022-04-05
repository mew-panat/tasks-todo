import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

export default function Header() {
  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar color='primary'>todo lists</Toolbar>
    </AppBar>
  );
}
