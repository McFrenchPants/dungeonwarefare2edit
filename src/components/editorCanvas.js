import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useAppState } from '../appContext';

const EditorCanvas = () => {
  const { mapData, setMapData, activeTile} = useAppState();
  const hasField = mapData !== null;
  let field = null;
  if(hasField){
      field = Object.values(mapData.field);
  }

  const updateField = (rowIndex, colIndex, value) => {
    const updatedField = [...field];
    console.log("Attempting to update the field with activeTile: "+activeTile+"... ")
    updatedField[rowIndex] = `${updatedField[rowIndex].substring(0, colIndex)}${value}${updatedField[rowIndex].substring(colIndex + 1)}`;
    setMapData({ ...mapData, field: updatedField });
  };

  return (
      <>
        {hasField && (
          <div>
            <Grid container spacing={0}>
              {field.map((row, rowIndex) => (
                <Grid container item key={rowIndex} sx={{justifyContent:'center'}}>
                  {row.split('').map((char, colIndex) => (
                    <Grid item key={colIndex} sx={{maxHeight: '30px', maxWidth: '30px'}}>
                      <img 
                        src={`resources/images/tiles/${mapData.tileset + `-` + charToImage[char]}`}
                        alt={char} 
                        width="30" 
                        height="30"
                        onClick={()=>updateField(rowIndex, colIndex, activeTile)}
                      ></img>
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </>
  )
};

  //assign an image based on the value
  const TileImage = (row, col, val, clickHandler, tileset) => {
    let image = "";
    return(
      <>
      <img 
        src={`resources/images/tiles/${tileset + `-` + charToImage[val]}`}
        alt={val} 
        //pos={pos}
        width="30" 
        height="30"
        onClick={clickHandler}
      ></img>
      </>
    )
  }

  const charToImage = {
    '0': 'floor.jpg',
    '1': 'wall.jpg',
    '2': 'abyss.jpg',
    '5': 'obstacle.jpg',
    '@': 'wall-breakable.jpg',
    '#': 'floor-breakable.jpg',
    '>':'door-right.jpg',
    '<':'door-left.jpg',
    '^':'door-up.jpg',
    'V':'door-down.jpg',
    '}':'spikewall-right.jpg',
    '{':'spikewall-left.jpg',
    'M':'spikewall-up.jpg',
    'W':'spikewall-down.jpg',
    'A':'entrance-small.jpg',
    'B':'entrance-small.jpg',
    'C':'entrance-small.jpg',
    '6':'rail.jpg',
    '7':'portal.jpg',
    '8':'portal.jpg',
    '9':'portal.jpg',
    '3':'portal-outer.jpg'
    // Add more mappings as needed
  };
export default EditorCanvas;
