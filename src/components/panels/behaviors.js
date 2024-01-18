import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, TextField, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useAppState } from '../../appContext';

const Behaviors = () => {
    const {mapData, setMapData} = useAppState();
    const [currentPlatform, setCurrentPlatform] = useState(null);
    const [currentPlatformIndex, setCurrentPlatformIndex] = useState(null);

    const movingPlatformExample = {"movingPlatforms" : [
        {
            "row": 16,
            "col": 14,
            "routeH": [0, 0, 1, 1, 0, 0, -1, -1],
            "routeV": [1, 1, 0, 0, -1, -1, 0, 0],
            "isRouteLooped": true,
            "moveSpeed": 0.15,
            "stopTime": 0,
            "terrain": [
                "1",
            ]
        },
        {
            "row": 15,
            "col": 21,
            "routeH": [0, 0, 0],
            "routeV": [1, 1, 1],
            "isRouteLooped": false,
            "moveSpeed": 0.3,
            "stopTime": 3,
            "initialMoveDelay": 5,
            "terrain": [
                "10",
                "10"
            ]
        }
    ]}

    const MovingPlatform = () => {
        const handleEdit = (e) => {
            const { name, value } = e.target;
            if (currentPlatformIndex === null) {
                return;
            }
        
            const updatedPlatform = { ...mapData.movingPlatforms[currentPlatformIndex], [name]: value };
            const updatedMovingPlatforms = [...mapData.movingPlatforms];
        
            updatedMovingPlatforms[currentPlatformIndex] = updatedPlatform;
        
            setMapData({
                ...mapData,
                movingPlatforms: updatedMovingPlatforms,
            });
            setCurrentPlatform(updatedPlatform);
        };

        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid xs={4}>
                        <TextField
                            label="Row"
                            id="platform-row"
                            name="row"
                            defaultValue={currentPlatform.row}
                            onBlur={(e)=>handleEdit(e)}
                            size="small"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid xs={4}>
                        <TextField
                            id="platform-column"
                            label="Column"
                            name="col"
                            defaultValue={currentPlatform.col}
                            onBlur={(e)=>handleEdit(e)}
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
                            name="routeH"
                            defaultValue={currentPlatform.routeH}
                            onBlur={(e)=>handleEdit(e)}
                            size="small"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid xs={4}>
                        <TextField
                            id="platform-routeV"
                            label="Vertical Route"
                            name="routeV"
                            defaultValue={currentPlatform.routeV}
                            onBlur={(e)=>handleEdit(e)}
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
                            name="isRouteLooped"
                            defaultValue={currentPlatform.isRouteLooped}
                            onBlur={(e)=>handleEdit(e)}
                            size="small"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid xs={4}>
                        <TextField
                            id="platform-moveSpeed"
                            label="Movement Speed"
                            name="moveSpeed"
                            defaultValue={currentPlatform.moveSpeed}
                            onBlur={(e)=>handleEdit(e)}
                            size="small"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid xs={4}>
                        <TextField
                            label="Initial Move Delay"
                            id="platform-initial-move-delay"
                            name="initialMoveDelay"
                            defaultValue={currentPlatform.initialMoveDelay}
                            onBlur={(e)=>handleEdit(e)}
                            size="small"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid xs={4}>
                        <TextField
                            label="Stop Time"
                            id="platform-stop-time"
                            name="stopTime"
                            defaultValue={currentPlatform.stopTime}
                            onBlur={(e)=>handleEdit(e)}
                            size="small"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid xs={4}>
                        <TextField
                            label="Terrain"
                            id="platform-terrain"
                            name="terrain"
                            defaultValue={currentPlatform.terrain}
                            onBlur={(e)=>handleEdit(e)}
                            size="small"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                </Grid>
            </Box>
        )
    }

    const ListItems = ({title, items}) => {
        const setSelection = (item, idx) => {
            setCurrentPlatform(item);
            setCurrentPlatformIndex(idx);
        }
        return (
            <Box>
                <Typography variant="h6">{title}</Typography>
                <nav aria-label="list of items">
                    <List>
                        {items.map((item,idx) => (
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => setSelection(item, idx)}>
                                <ListItemText primary={title + " #" + idx} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="contained" size="small" sx={{width: "50px", fontSize: "0.6rem"}}>Add</Button>
                    <Button variant="contained" size="small" sx={{width: "50px", fontSize: "0.6rem"}}>Del</Button>
                </nav>
            </Box>
        )
    };

    return (
        <div>
            <Grid container spacing={0} columns={16} justifyContent="space-between">
                <Grid container spacing={1} columns={4}>                    
                    <ListItems 
                        title="Moving Platforms" 
                        items={mapData.movingPlatforms}
                    />
                </Grid>
                <Grid container spacing={1} columns={4}>
                    {currentPlatform &&
                        <MovingPlatform/>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Behaviors;