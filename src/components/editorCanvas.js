import React from 'react';
import { TextField, Grid, LinearProgress } from '@mui/material';
import { useAppState } from '../appContext';

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

const EditorCanvas = () => {
  const { mapData} = useAppState();
  const hasField = mapData !== null;
  let field = null;
  if(hasField){
      field = Object.values(mapData.field);
  }
  return (
      <>
        {hasField && (
          <div>
            <FieldGridComponent fieldArray={field} mapData={mapData}/>
          </div>
        )}
      </>
  )
};

export default EditorCanvas;
