import React, { useMemo } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TableChartIcon from '@material-ui/icons/TableChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import PublicIcon from '@material-ui/icons/Public';
import TimelineIcon from '@material-ui/icons/Timeline';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = useMemo(
    () => React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
      <RouterLink to={to} ref={ref} {...itemProps} />
    )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default function AppDrawer() {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar />
      </AppBar>
      <List>
        <ListItemLink to="/states" primary="U.S. Data" icon={<TableChartIcon />} />
        <ListItemLink to="/statecharts" primary="U.S. Charts" icon={<TimelineIcon />} />
        <ListItemLink to="/world" primary="World Data" icon={<PublicIcon />} />
        <ListItemLink to="/worldcharts" primary="World Charts" icon={<BarChartIcon />} />
      </List>
    </div>
  );
}
