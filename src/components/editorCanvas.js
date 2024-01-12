import React, { useContext } from 'react';
import { TextField, Grid } from '@mui/material';
import { DataContext } from '../dataContext';

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
  const {mapData, setMapData} = useContext(DataContext);
  console.log(mapData);
  const hasField = mapData !== null;
  let field = null;
  if(hasField){
      field = Object.values(mapData.field);
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
