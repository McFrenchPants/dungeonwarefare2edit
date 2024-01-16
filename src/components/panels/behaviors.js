import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MovingPlatform from '../movingPlatform';
import { useAppState } from '../../appContext';

const Behaviors = () => {
    const {mapData, setMapData} = useAppState();

    const platform = mapData.movingPlatforms !== undefined ? mapData.movingPlatforms[0] : [{
        "row": 0,
        "col": 0,
        "routeH": [0, -1],
        "routeV": [1, 0],
        "isRouteLooped": true,
        "moveSpeed": 0,
        "initialMoveDelay": 0,
        "stopTime": 0,
        "terrain": ["0"]
    }];
    const [currentPlatform, setCurrentPlatform] = useState(platform); 

    const ListItems = ({title, items, setCurrentItem}) => {

        return (
            <Box>
                <Typography variant="h6">{title}</Typography>
                <nav aria-label="list of items">
                    <List>
                        {Object.entries(items).map((item,idx) => (
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => setCurrentItem(items[idx])}>
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
                        setCurrentItem={setCurrentPlatform}
                    />
                    
                </Grid>
                <Grid container spacing={1} columns={4}>
                    <MovingPlatform data={currentPlatform}/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Behaviors;