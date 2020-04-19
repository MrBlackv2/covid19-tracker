import React, { ChangeEvent } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { FilterProp } from '../types/FilterProp';

interface TableFilterProps {
  activeProps: string[];
  setActiveProps: Function;
  allProps: FilterProp[];
  closeModal: Function;
}

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
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default function TableFilter({ activeProps, setActiveProps, allProps, closeModal }: TableFilterProps) {
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
      <div className={classes.header}>
        <h2>Add/Remove Columns</h2>
        <IconButton onClick={() => closeModal()}>
          <CloseIcon />
        </IconButton>
      </div>
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
