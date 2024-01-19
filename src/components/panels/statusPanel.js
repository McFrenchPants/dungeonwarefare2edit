import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { useAppState } from '../../appContext';
import getTerrainByTile from '../../utils/getTerrainBySymbol' 

const StatusPanel = () => {
    const theme = useTheme();
    const { mapData, hoverTile, selectedTile, selectedTrap, selectedDecor, selectedTerrain, activeTile } = useAppState();
    
    const getHoverTile = () => {
        if(hoverTile){return hoverTile.toString()} else {return '-,-'}
    }
    const getSelectedTile = () => {
        if(selectedTile){return selectedTile.toString()} else {return '-,-'}
    }
    const getSelectedTerrain = () => {
        if(selectedTile){return selectedTerrain;} else {return 'none'}
    }
    const getActiveTile = () => {
        if(activeTile){return activeTile} else {return 'none'}
    }
    const StatusItem = ({label, value, separator}) => {
        const itemContainer = {
            maxHeight: '50px',
            width: '100%',
            padding: '0px 3px',
            textTransform: 'uppercase',
            lineHeight: '0.7rem',
            backgroundColor: theme.palette.primary
        }
        
        return (
            <Paper sx={itemContainer} elevation={3}>
                <Box sx={{paddingTop: '4px', backgroundColor: theme.background, margin: '1px'}}>
                    <Typography variant="body" color="primary" sx={{fontSize: '0.75rem'}}>{value}</Typography>
                    <br/>
                    <Typography variant="subtitle2" component="span" sx={{fontSize: '0.675rem'}}>{label}</Typography>
                </Box>
            </Paper>
        )
    }
    return(
        <Box sx={{ flexGrow: 1, borderTop: 'solid 1px grey', borderBottom: 'solid 1px grey' }}>
            <Stack xs={16} direction="row" sx={{width:'100%', backgroundColor: theme.background}}>
                <Stack xs={8} direction="row" sx={{width: '50%'}}>
                    <StatusItem label="Coords" value={getHoverTile()} separator=": "/>
                    <StatusItem label="Selected" value={getSelectedTile()} separator=": "/>
                    <StatusItem label="Terrain" value={getSelectedTerrain()} separator=" " />
                    <StatusItem label="Active Brush" value={getActiveTile()} separator=": "/>
                </Stack>
                <Stack xs={8} direction="row" sx={{width: '50%'}}>
                    <StatusItem label="Decor" value={selectedDecor} separator=": "/>
                    <StatusItem label="Trap" value={selectedTrap} separator=": "/>
                    <StatusItem label="Terrain" value={selectedTerrain}/>
                </Stack>
            </Stack>

        </Box>
    )
}
export default StatusPanel;