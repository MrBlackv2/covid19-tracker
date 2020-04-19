import React from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core';

interface DetailProps {
  data: any;
  allProps: {
    id: string,
    name: string
  }[];
  idKey: string;
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
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default function Detail({ data, allProps, idKey, closeModal }: DetailProps) {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <h2>{data[idKey]} Details</h2>
        <IconButton onClick={() => closeModal()}>
          <CloseIcon />
        </IconButton>
      </div>
      <div>
        {allProps.map(prop =>
          <div key={prop.id}>{prop.name}: {(data as any)[prop.id]}</div>
        )}
      </div>
    </div>
  );
}
