import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useAppState } from '../../appContext';
import { Paper, Typography } from '@mui/material';

const Inspector = () => {
    const { mapData, selectedTile } = useAppState();
 
    const decorations = mapData.decorations;
    const field = mapData.field;
    const traps = mapData.prebuiltTraps;
    let tile = [{'row':0,'col':0}];

    if(selectedTile){
        tile = selectedTile;
    }

    const getDecoration = decorations.find(
        item => item.row === tile.row && item.col === tile.col
    );
    const matchingDecoration = getDecoration ? getDecoration.type : 'none';
    

    function getTerrainAt(row, column) {
        if (field[row] && field[row][column]) {
          return field[row][column];
        } else {
          // Handle the case when the specified row or column is out of bounds
          return "unknown"; // or some default value
        }
    };

    function getTrapAt(row, column) {
        const matchingTraps = traps.filter(trap => trap.row === row && trap.col === column);
    
        if (matchingTraps.length > 0) {
            return matchingTraps.map((trap, index) => (
                <div key={index}>{trap.type}</div>
            ));
        } else {
            return "none"; // or some default value
        }
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4">Selected Tile Properties:</Typography>
            {tile &&
                <Grid container spacing={4} columns={4} sx={{justifyContent:'center', margin: '10px'}}>
                    <Grid item>
                        <PropDisplay title="Coordinates">
                            <>{tile.row},{tile.col}</>
                        </PropDisplay>
                    </Grid>
                    <Grid item>
                        <PropDisplay title="Terrain type:">
                            {getTerrainAt(tile.row, tile.col)}
                        </PropDisplay>
                    </Grid>
                    <Grid item>
                        <PropDisplay title="Decorations:">
                            {matchingDecoration && <div>{matchingDecoration}</div>}
                        </PropDisplay>
                    </Grid>
                    <Grid item>
                        <PropDisplay title="Traps:">
                            {getTrapAt(tile.row, tile.col)}
                        </PropDisplay>
                    </Grid>
                </Grid>
            }
        </Box>
    )
}

const PropDisplay = ({title, children}) => {

    return(
        <Paper sx={{padding: '16px', borderRadius: '5px'}}> 
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body" color="primary">{children}</Typography>
        </Paper>
    )
}
export default Inspector;