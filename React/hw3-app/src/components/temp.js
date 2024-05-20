import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit(celsiusToFahrenheit(value).toFixed(2));
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(fahrenheitToCelsius(value).toFixed(2));
  };

  return (
    <Grid container alignItems="center" justify="center" spacing={2}>
      <Grid item>
        <TextField
          label="°C"
          value={celsius}
          onChange={handleCelsiusChange}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={() => console.log('Convert')}>
          Convert
        </Button>
      </Grid>
      <Grid item>
        <TextField
          label="°F"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          variant="outlined"
          disabled
        />
      </Grid>
    </Grid>
  );
};

export default TemperatureConverter;