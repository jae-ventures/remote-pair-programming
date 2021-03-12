import React from 'react';
import {AppBar, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    // color: "#f30c0c",
  },
  title: {
    flexGrow: 1,
    display: 'flex',
  }
}));

//TitleBar that lets user go home and displays title at top
export default function TitleBar(props) {
  const classes = useStyles();
  const history = useHistory();
  //Return statement for component
  return(
    <div className={classes.root}>
      <AppBar position='fixed' color='primary'>
        <Toolbar className={classes.title}>
          <Button
            edge="start"
            onClick={() => {history.push('/dashboard');}}
          >
           <Typography variant='h6'>
              Dashboard
            </Typography>
          </Button>
          <Button onClick={() => {history.push('/classroom');}}>
            <Typography variant='h6'>
              Classroom
            </Typography>
          </Button>
          <Button onClick={() => {history.push('/viewcode');}}>
            <Typography variant='h6'>
              ViewCode
            </Typography>
          </Button>
          <Button onClick={() => {history.push('/settings');}}>
            <Typography variant='h6'>
              Settings
            </Typography>
          </Button>
          <Button onClick={() => {history.push('/manageAccount');}}>
            <Typography variant='h6'>
              Manage_Account
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}