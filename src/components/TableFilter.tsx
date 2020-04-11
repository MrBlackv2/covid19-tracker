import React, { ChangeEvent } from 'react';
import { makeStyles, FormControlLabel, Checkbox } from "@material-ui/core";

import { getEntryProperties } from '../types/Entry';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: 'flex',
    flexDirection: 'column'
  },
}));

const properties = getEntryProperties();

export default function TableFilter({ activeProps, setActiveProps }: { activeProps: string[], setActiveProps: Function }) {
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setActiveProps(activeProps.concat([event.target.name]));
    } else {
      setActiveProps(activeProps.filter(prop => prop !== event.target.name));
    }
  };

  return (
    <div className={classes.paper}>
      <h2>Add/Remove Columns</h2>
      {properties.map(prop => (
        <FormControlLabel
          key={prop.id}
          control={<Checkbox checked={activeProps.includes(prop.id)} onChange={handleChange} name={prop.id} />}
          label={prop.name}
        />
      ))}
    </div>
  );
}
