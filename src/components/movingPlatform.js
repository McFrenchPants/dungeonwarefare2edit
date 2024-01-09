import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const MovingPlatform = ({data}) => {
    const [platformProperties, setPlatformProperties] = useState({
        "row": 0,
            "col": 0,
            "routeH": [0],
            "routeV": [0],
            "isRouteLooped": false,
            "moveSpeed": 0.0,
            "initialMoveDelay": 0,
            "terrain": ["10, 10"]
    });

    useEffect(() => {
        setPlatformProperties({
            "row": data.row,
            "col": data.col,
            "routeH": Object.entries(data.routeH),
            "routeV": Object.entries(data.routeV),
            "isRouteLooped": data.isRouteLooped,
            "moveSpeed": data.moveSpeed,
            "initialMoveDelay": data.initialMoveDelay,
            "terrain": Object.entries(data.terrain)
        })
      },[]);

    const handleEdit = (e) =>{

    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid xs={4}>
                    <TextField
                        label="Row"
                        id="platform-row"
                        value={platformProperties.row}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                        id="platform-column"
                        label="Column"
                        value={platformProperties.col}
                        size="small"
                        fullWidth
                        variant="standard"
                        >0
                    </TextField>
                </Grid>
                <Grid xs={4}>
                    <TextField
                        label="Horizontal Route"
                        id="platform-routeH"
                        value={platformProperties.routeH}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                        id="platform-routeV"
                        label="Vertical Route"
                        value={platformProperties.routeV}
                        size="small"
                        fullWidth
                        variant="standard"
                    >
                    </TextField>
                </Grid>
                <Grid xs={4}>
                    <TextField
                        label="Loop this Route"
                        id="platform-looped"
                        value={platformProperties.isRouteLooped}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                        id="platform-moveSpeed"
                        label="Movement Speed"
                        value={platformProperties.moveSpeed}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                        label="Stop Time"
                        id="platform-stop-time"
                        value={platformProperties.stopTime}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                        label="Terrain"
                        id="platform-terrain"
                        value={platformProperties.terrain}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
export default MovingPlatform;