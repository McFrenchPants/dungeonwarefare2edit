import React from 'react';
import { TextField, Grid, Typography } from '@mui/material';

const FieldGridComponent = ({ fieldArray }) => {
  return (
    <div>
      <Grid container spacing={1}>
        {fieldArray.map((row, rowIndex) => (
          <Grid container item key={rowIndex}>
            {row.split('').map((char, colIndex) => (
              <Grid item key={colIndex}>
                <TextField
                  size="small"
                  variant="outlined"
                  defaultValue={char}
                  inputProps={{ style: { textAlign: 'center', padding: '8px 5px' } }}
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

const EditorCanvas = ({data}) => {
    const hasField = data !== null;
    let field = null;
    if(hasField){
        field = Object.values(data.field);
    }
    return (
        <>
        {hasField && (
            <FieldGridComponent fieldArray={field}/>
        )}
        </>
    )
};

export default EditorCanvas;
