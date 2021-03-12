import React from 'react';
import {AppBar, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 72;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    // color: "#f30c0c",
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  paper: {
    backgroundColor: 'steelblue'
  }
}));

//TitleBar that lets user go home and displays title at top
export default function TitleBar2(props) {
  const classes = useStyles();
  const history = useHistory();
  //Return statement for component
  return(
    <div className={classes.root}>
      <AppBar className={classes.appbar} position='fixed' style={{ background: '#2E3B55'}}>
        <Toolbar >
          <Button
            edge="start"
            onClick={() => {history.push('/');}}
          >
           <Typography variant='h6' style={{ color: 'aliceblue' }}>
              Title
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}