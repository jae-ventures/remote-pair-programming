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
function DashboardStudent() {
  return(
    <div>
      <Sidebar />
      <Typography variant='h1'>
      The Dashboard.
      Join a classroom from here.
    </Typography>
    </div>
  )
}

//Dashboard for instructor user
function DashboardInstructor() {
  return(
    <div>
    <Sidebar />
    <Typography variant='h1'>
      The Dashboard.
      Open or create a classroom from here.
    </Typography>
    </div>
  )
}

//The user's dashboard where they see the main things they need
export default function Dashboard(props) {
  const classes = useStyles();
  return(
    <div className={classes.root} >
      <Sidebar />
      <Typography className={classes.title} variant='h1'>
        The Dashboard.
      </Typography>
    </div>
  )
}