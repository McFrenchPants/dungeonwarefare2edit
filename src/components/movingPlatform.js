import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const MovingPlatform = ({data}) => {
    const [platformProperties, setPlatformProperties] = useState({
        "row": 0,
        "col": 0,
        "routeH": [0, -1],
        "routeV": [1, 0],
        "isRouteLooped": true,
        "moveSpeed": 0,
        "initialMoveDelay": 0,
        "stopTime": 0,
        "terrain": ["0"]
    });

    useEffect(() => {
        setPlatformProperties({
            "row": data.row,
            "col": data.col,
            "routeH": Object.values(data.routeH),
            "routeV": Object.values(data.routeV),
            "isRouteLooped": data.isRouteLooped,
            "moveSpeed": data.moveSpeed,
            "stopTime": data.stopTime,
            "initialMoveDelay": data.initialMoveDelay,
            "terrain": Object.values(data.terrain)
        })
      },[data]);

    const handleEdit = (e) =>{
        const {name, value} = e.target;
        setPlatformProperties({ ...platformProperties, [name]: value});
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid xs={4}>
                    <TextField
                        label="Row"
                        id="platform-row"
                        name="row"
                        value={platformProperties.row}
                        onChange={handleEdit}
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
                        onChange={handleEdit}
                        size="small"
                        fullWidth
                        variant="standard"
                        >
                    </TextField>
                </Grid>
                <Grid xs={4}>
                    <TextField
                        label="Horizontal Route"
                        id="platform-routeH"
                        value={platformProperties.routeH}
                        onChange={handleEdit}
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
                        onChange={handleEdit}
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
                        onChange={handleEdit}
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
                        onChange={handleEdit}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                        label="Initial Move Delay"
                        id="platform-initial-move-delay"
                        value={platformProperties.initialMoveDelay}
                        onChange={handleEdit}
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
                        onChange={handleEdit}
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
                        onChange={handleEdit}
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