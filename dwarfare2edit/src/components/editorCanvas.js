import React from 'react';
import { TextField, Grid, Typography } from '@mui/material';

const FieldGridComponent = ({ fieldArray }) => {
    console.log(fieldArray);
  return (
    <div>
      <Typography variant="h6">Field Grid</Typography>
      <Grid container spacing={1}>
        {fieldArray.map((row, rowIndex) => (
          <Grid container item key={rowIndex}>
            {row.split('').map((char, colIndex) => (
              <Grid item key={colIndex}>
                <TextField
                  size="small"
                  variant="outlined"
                  defaultValue={char}
                  inputProps={{ style: { textAlign: 'center' } }}
                  style={{ width: '2rem' }}
                  disabled
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FieldGridComponent;
