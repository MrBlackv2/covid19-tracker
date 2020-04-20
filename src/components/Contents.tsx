import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import WorldPage from './WorldPage';
import WorldChartsPage from './WorldChartsPage';
import StatesPage from './StatesPage';
import StateChartsPage from './StateChartsPage';

interface ContentsProps {
  drawerWidth: number;
}

export default function Contents({ drawerWidth }: ContentsProps) {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
      flex: '1 1 auto',
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Switch>
        <Redirect exact path="/" to="/states" />
        <Route path="/world" component={WorldPage} />
        <Route path="/worldcharts" component={WorldChartsPage} />
        <Route path="/states" component={StatesPage} />
        <Route path="/statecharts" component={StateChartsPage} />
      </Switch>
    </div>
  );
}
