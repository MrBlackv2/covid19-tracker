import React, { useMemo } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar } from '@material-ui/core';
import TableChartIcon from '@material-ui/icons/TableChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import PublicIcon from '@material-ui/icons/Public';

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
        <ListItemLink to="/world" primary="World Data" icon={<PublicIcon />} />
        <ListItemLink to="/charts" primary="World Charts" icon={<BarChartIcon />} />
      </List>
    </div>
  );
}
