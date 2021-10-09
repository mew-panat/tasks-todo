import React from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';
import { List, ListItem } from '@mui/material';
import { ListItemIcon, ListItemText } from '@mui/material';
import {
  MoveToInbox as InboxIcon,
  CalendarToday as TodayIcon,
  DateRange as NextDaysIcon,
  Work as ProjectIcon,
} from '@mui/icons-material';

const drawerWidth = 300;
const menuItems = [
  { text: 'Inbox', icon: <InboxIcon /> },
  { text: 'Today', icon: <TodayIcon /> },
  { text: 'Next 7 days', icon: <NextDaysIcon /> },
  { text: 'Projects', icon: <ProjectIcon /> },
];

export default function SideBar() {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map(({ text, icon }) => (
            <ListItem button key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
