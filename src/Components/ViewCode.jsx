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

//Students can view all of the code they have worked on
function ViewCodeStudent() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography className={classes.title} variant='h1'>View code you've worked on here!</Typography>
    </div>
  )
}

//Instructor can view code students have previously written
function ViewCodeInstructor() {
  <div>
      <Sidebar />
      <Typography variant='h1'>View the code of your students here!</Typography>
  </div>
}

//Page where users can view previously written code
export default function ViewCode() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Sidebar />
      <Typography className={classes.title} variant='h1'>View code here!</Typography>
    </div>
  )
}