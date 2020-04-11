import React from 'react';

import { Entry } from '../types/Entry';
import { makeStyles } from '@material-ui/core';

const modalStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function CountryDetail({ entry }: { entry: Entry }) {
  const classes = useStyles();

  return (
    <div style={modalStyle} className={classes.paper}>
      <h2>{entry.country} Details</h2>
      <div>
        <div>Cases: {entry.cases}</div>
        <div>Cases (Today): {entry.cases}</div>
        <div>Deaths: {entry.cases}</div>
        <div>Deaths (Today): {entry.cases}</div>
        <div>Recovered: {entry.cases}</div>
        <div>Active: {entry.cases}</div>
        <div>Critical: {entry.cases}</div>
        <div>Cases per Million: {entry.cases}</div>
        <div>Deaths per Million: {entry.cases}</div>
        <div>Tests: {entry.cases}</div>
        <div>Tests per Million: {entry.cases}</div>
      </div>
    </div>
  );
}
