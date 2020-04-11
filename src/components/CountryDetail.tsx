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
    color: theme.palette.text.primary,
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
        <div>Cases (Today): {entry.todayCases}</div>
        <div>Deaths: {entry.deaths}</div>
        <div>Deaths (Today): {entry.todayDeaths}</div>
        <div>Recovered: {entry.recovered}</div>
        <div>Active: {entry.active}</div>
        <div>Critical: {entry.critical}</div>
        <div>Cases per Million: {entry.casesPerOneMillion}</div>
        <div>Deaths per Million: {entry.deathsPerOneMillion}</div>
        <div>Tests: {entry.tests}</div>
        <div>Tests per Million: {entry.testsPerOneMillion}</div>
      </div>
    </div>
  );
}
