import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Sidebar from './Sidebar';

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
//Instructor can change pair programming settings from here
export default function Settings() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Sidebar />
      <Typography className={classes.title} variant='h1'>
         Modify pair programming settings here!
      </Typography>
    </div>
  )
}