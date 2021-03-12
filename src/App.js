import logo from './logo.svg';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TitleBar from './Components/TitleBar';
import TitleBar2 from './Components/TitleBar2';
import Dashboard from './Components/Dashboard';
import ClassroomSpace from './Components/ClassroomSpace';
import ViewCode from './Components/ViewCode';
import Account from './Components/Account';
import Settings from './Components/Settings';

import { makeStyles, useTheme } from '@material-ui/core/styles';
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

function Welcome() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography className={classes.title} variant='h1'>
        Hello there!
      </Typography>
    </div>
  )
}

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Allows for switching routes to different pages */}
      <Router>
        <Switch>
          <Route exact path='/'>
            <TitleBar />
            <Welcome />
          </Route>
          <Route path='/dashboard'>
            <TitleBar2 />
            <Dashboard />
          </Route>
          <Route path='/classroom'>
            <TitleBar2 />
            <ClassroomSpace />
          </Route>
          <Route path='/viewCode'>
            <TitleBar2 />
            <ViewCode />
          </Route>
          <Route exact path='/manageAccount'>
            <TitleBar2 />
            <Account />
          </Route>
          <Route>
            <TitleBar2 />
            <Settings exact path='/settings'/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
