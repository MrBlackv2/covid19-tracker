import React from 'react';

import { makeStyles } from '@material-ui/core';

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
}));

export default function Detail({ data, allProps, idKey }: { data: any, allProps: { id: string, name: string }[], idKey: string }) {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <h2>{data[idKey]} Details</h2>
      <div>
        {allProps.map(prop =>
          <div key={prop.id}>{prop.name}: {(data as any)[prop.id]}</div>
        )}
      </div>
    </div>
  );
}
