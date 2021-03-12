import React from 'react';
import {AppBar, Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Home, AccountCircle, Code, Settings} from '@material-ui/icons';
import {useHistory} from 'react-router-dom';

const drawerWidth = 72;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

//Student version of sidebar
function SidebarStudent() {
  const history = useHistory();
  const classes = useStyles();
  return(
<div className={classes.root}>
      {/* Come back and change these all to icons */}
      <Drawer className={classes.drawer} variabt='permanent' color='primary' classes={{paper: classes.drawerPaper}}>
        <Divider />
        <List>
          <ListItem button onClick={() => {history.push('/dashboard');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <Home />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => {history.push('/viewcode');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <Code />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => {history.push('/manageAccount');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <AccountCircle />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

//Instructor version of sidebar
function SidebarInstructor() {
  const history = useHistory();
  const classes = useStyles();
  return(
    <div className={classes.root}>
      {/* Come back and change these all to icons */}
      <Drawer className={classes.drawer} variabt='permanent' color='primary' classes={{paper: classes.drawerPaper}}>
        <Divider />
        <List>
          <ListItem button onClick={() => {history.push('/dashboard');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <Home />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => {history.push('/viewcode');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <Code />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => {history.push('/settings');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <Settings />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => {history.push('/manageAccount');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <AccountCircle />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}



//Navigation Sidebar to navigate through different menus for the user
export default function Sidebar(props) {
  const history = useHistory();
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {/* Come back and change these all to icons */}
      <Drawer className={classes.drawer} variant='permanent' color='primary' classes={{paper: classes.drawerPaper}}>
        <Divider />
        <List>
          <ListItem button onClick={() => {history.push('/dashboard');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <Home />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => {history.push('/viewcode');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <Code />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => {history.push('/settings');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <Settings />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => {history.push('/manageAccount');}} >
            <ListItemIcon classes={{root: classes.icon}} >
              <AccountCircle />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}