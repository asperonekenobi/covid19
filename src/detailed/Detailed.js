import React, { useEffect, useState } from 'react';
import api from '../api';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chart from './Chart';

function Detailed() {
  const [ countries, setCountries ] = useState( [] );
  const [ countryCode, setCountryCode ] = useState( 'belarus' );
  const [ countryData, setCountryData ] = useState( null );

  useEffect( () => {
    api.get( '/countries' ).then( res => setCountries( res.data ) )
  }, [] );

  useEffect( () => {
    api.get( '/total/country/' + countryCode ).then( res => setCountryData( prepareData( res.data ) ) )
  }, [ countryCode ] );

  function handleChange(e) {
    setCountryCode( e.target.value );
  }

  return (
        <div>
          <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ countryCode }
                onChange={ handleChange }
          >
            { countries.map( country => <MenuItem value={ country.Slug }
                                                  key={ country.Slug }>{ country.Country }</MenuItem> ) }

          </Select>
          { countryData ?
                <Chart data={ countryData } />
                : null }
        </div>
  );
}

export default Detailed;

function prepareData(data) {
  const chartData = {
    labels: [],
    confirmed: [],
    deaths: [],
    recovered: [],
  };

  data.forEach( d => {
    chartData.labels.push( d.Date.replace( /T.*$/, '' ) );
    chartData.confirmed.push( d.Confirmed );
    chartData.deaths.push( d.Deaths );
    chartData.recovered.push( d.Recovered );
  } )

  return chartData;
}
