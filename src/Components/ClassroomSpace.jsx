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
//Student view of the classroom
function ClassroomSpaceStudent() {
  return(
    <div>
      <Sidebar />
      <Typography variant='h1'>Welcome to the classroom students!</Typography>
    </div>
  )
}

//Instructor view of the classroom
function ClassroomSpaceInstructor() {
  <div>
    <Sidebar />
    <Typography variant='h1'>Welcome to the classroom instructors!</Typography>
  </div>
}

//Classroom space where user's are paired into groups
export default function ClassroomSpace() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Sidebar />
      <Typography className={classes.title} variant='h1'>Welcome to the classroom!</Typography>
    </div>
  )
}