import React from 'react';
import { Grid } from '@mui/material';
import { useAppState } from '../appContext';
import getTerrainByLocation from '../utils/getTerrainByLocation'

const EditorCanvas = () => {
  const { mapData, setMapData, activeTile, setActiveTile, selectedTile, setSelectedTile, setSelectedTerrain, setHoverTile } = useAppState();
  
  const hasField = mapData !== null;
  let field = null;
  if(hasField){
      field = Object.values(mapData.field);
  }

  const charToImage = {
    '0': mapData.tileset + '-floor.jpg',
    '1': mapData.tileset + '-wall.jpg',
    '2': mapData.tileset + '-abyss.jpg',
    '5': mapData.tileset + '-obstacle.jpg',
    '@': mapData.tileset + '-wall-breakable.jpg',
    '#': mapData.tileset + '-floor-breakable.jpg',
    '>': mapData.tileset + '-door-right.jpg',
    '<': mapData.tileset + '-door-left.jpg',
    '^': mapData.tileset + '-door-up.jpg',
    'V': mapData.tileset + '-door-down.jpg',
    '}':'spikewall-right.jpg',
    '{':'spikewall-left.jpg',
    'M':'spikewall-up.jpg',
    'W':'spikewall-down.jpg',
    'A': mapData.tileset + '-entrance-small.jpg',
    'B': mapData.tileset + '-entrance-small.jpg',
    'C': mapData.tileset + '-entrance-small.jpg',
    '6': mapData.tileset + '-rail.jpg',
    '7':'portal.jpg',
    '8':'portal.jpg',
    '9':'portal.jpg',
    '3':'portal-outer.jpg'
    // Add more mappings as needed
  };

  const unsetActiveTile = (e) => {
    e.preventDefault();
    setActiveTile(null);
  }
  const updateField = (rowIndex, colIndex) => {
    if(activeTile){
      const updatedField = [...field];
      console.log("Attempting to update the field with activeTile: "+activeTile+"... ")
      updatedField[rowIndex] = `${updatedField[rowIndex].substring(0, colIndex)}${activeTile}${updatedField[rowIndex].substring(colIndex + 1)}`;
      setMapData({ ...mapData, field: updatedField });
    } else{
      const terrain = getTerrainByLocation(rowIndex,colIndex, mapData);
      setSelectedTerrain(terrain);
      setSelectedTile([rowIndex,colIndex]);
    }
  };

  return (
      <>
        {hasField && (
          <div>
            <Grid container spacing={0}>
              {field.map((row, rowIndex) => (
                <Grid container item key={rowIndex} sx={{justifyContent:'center'}}>
                  {row.split('').map((char, colIndex) => (
                    <Grid item 
                      key={colIndex} 
                      className={selectedTile && selectedTile[0] === rowIndex && selectedTile[1] === colIndex ? 'selectedTile' : ''}
                      sx={{
                        maxHeight: '30px', 
                        maxWidth: '30px',   
                      }}
                    >
                      <div>
                        <img 
                          src={`resources/images/tiles/${charToImage[char]}`}
                          alt={char} 
                          width="30" 
                          height="30"
                          onContextMenu={(e)=>unsetActiveTile(e)}
                          onClick={()=>updateField(rowIndex, colIndex)}
                          onMouseOver={()=>setHoverTile([rowIndex, colIndex])}
                        ></img>
                      </div>
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

export default EditorCanvas;
