import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function GlobalDataBlock(props) {
  return (
        <Paper style={ infoBlockStyle }>
          <Grid container>
            <Grid item xs={ 3 }>
              <Typography variant='h4'>Global</Typography>
            </Grid>
            <Grid item xs={ 3 }>
              <Typography variant='h6'>Confirmed: {props.data.TotalConfirmed} </Typography>
            </Grid>
            <Grid item xs={ 3 }>
              <Typography variant='h6'>Deaths: {props.data.TotalDeaths}</Typography>
            </Grid>
            <Grid item xs={ 3 }>
              <Typography variant='h6'>Recovered: {props.data.TotalRecovered} </Typography>
            </Grid>
          </Grid>
        </Paper>
  );
}

export default GlobalDataBlock;

const infoBlockStyle = {
  padding: '10px',
}
