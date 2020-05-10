import React from 'react';
import { Line } from 'react-chartjs-2';

function Chart(props) {
  const chartData = {
          labels: props.data.labels,
          datasets: [
            {
              label: 'Confirmed',
              backgroundColor: 'rgba(0,0,255,0.2)',
              borderColor: 'rgba(0,0,255,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(0,0,255,0.4)',
              hoverBorderColor: 'rgba(0,0,255,1)',
              data: props.data.confirmed,
            },
            {
              label: 'Deaths',
              backgroundColor: 'rgba(255,0,0,0.2)',
              borderColor: 'rgba(255,0,0,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,0,0,0.4)',
              hoverBorderColor: 'rgba(255,0,0,1)',
              data: props.data.deaths,
            },
            {
              label: 'Recovered',
              backgroundColor: 'rgba(0,255,0,0.2)',
              borderColor: 'rgba(0,255,0,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(0,255,0,0.4)',
              hoverBorderColor: 'rgba(0,255,0,1)',
              data: props.data.recovered,
            },
          ]
        }
  ;

  return (
        <div>
          <h2>Line Example</h2>
          <Line data={ chartData } />
        </div>
  );

}

export default Chart;
