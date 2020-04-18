import React, { ChangeEvent } from 'react';
import { makeStyles, FormControlLabel, Checkbox, Divider } from "@material-ui/core";

import { FilterProp } from '../types/FilterProp';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    minWidth: 300,
    maxWidth: '95%',
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

export default function TableFilter({ activeProps, setActiveProps, allProps }: { activeProps: string[], setActiveProps: Function, allProps: FilterProp[] }) {
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setActiveProps(activeProps.concat([event.target.name]));
    } else {
      setActiveProps(activeProps.filter(prop => prop !== event.target.name));
    }
  };

  const handleSelectAllChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setActiveProps(allProps.map(prop => prop.id));
    } else {
      setActiveProps([]);
    }
  };

  return (
    <div className={classes.paper}>
      <h2>Add/Remove Columns</h2>
      <FormControlLabel
        control={<Checkbox checked={activeProps.length === allProps.length} onChange={handleSelectAllChange} name="all" />}
        label="All"
      />
      <Divider />
      {allProps.map(prop => (
        <FormControlLabel
          key={prop.id}
          control={<Checkbox checked={activeProps.includes(prop.id)} onChange={handleChange} name={prop.id} />}
          label={prop.name}
        />
      ))}
    </div>
  );
}
