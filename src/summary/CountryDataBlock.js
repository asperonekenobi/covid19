import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function CountryDataBlock(props) {
  return (
        <Paper style={ infoBlockStyle }>
          <Typography variant='h6'> {props.data.Country} </Typography>
          <Typography variant='subtitle1'>Confirmed: {props.data.TotalConfirmed}</Typography>
          <Typography variant='subtitle1'>Deaths: {props.data.TotalDeaths}</Typography>
          <Typography variant='subtitle1'>Recovered: {props.data.TotalRecovered}</Typography>
        </Paper>
  );
}

export default CountryDataBlock;

const infoBlockStyle = {
  padding: '10px',
}
