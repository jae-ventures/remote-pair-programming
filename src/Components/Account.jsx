import React from 'react';
import {AppBar, Button, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';

import {Home, AccountCircle, Code, Settings} from '@material-ui/icons';
import Sidebar from './Sidebar';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    // color: "#f30c0c",
  },
  title: {
    flexGrow: 1,
    marginTop: 70 
  }
}));

//Dashboard for student user
function AccountStudent() {
  return(
   <div>
    <Typography variant='h1'>
    Manage account settings here!
    </Typography>
   </div> 
  );
}

//Dashboard for instructor user
function AccountInstructor() {
  return(
    <Typography variant='h1'>
        Manage account settings here!
  </Typography>
  );
}

//The user's dashboard where they see the main things they need
export default function Account(props) {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Sidebar />
      <Typography className={classes.title} variant='h1'>
        Manage account settings here!
      </Typography>
    </div>
  );
}