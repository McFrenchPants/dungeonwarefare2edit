import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


const MapProperties = ({data}) => {

    const tiles = [{value: "mines", label: "Mines"}];
    const vconditions = [{value: "CollectGold", label: "Collect Gold"}];

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid xs={8}>
                    <TextField
                        label="Map Title"
                        id="map-title"
                        defaultValue={data.title}
                        size="small"
                        variant="standard"
                    />
                </Grid>
                <Grid xs={8}>
                    <TextField
                        id="tileset"
                        select
                        label="Tile Theme"
                        value={data.tileset}
                        size="small"
                        SelectProps={{
                            native: true,
                        }}
                        >
                        {tiles.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid xs={8}>
                    <TextField
                        label="Starting Gold"
                        id="start-gold"
                        defaultValue={data.startGold}
                        size="small"
                        variant="standard"
                    />
                </Grid>
                <Grid xs={8}>
                    <TextField
                        id="victory-condition"
                        select
                        label="Victory Condition"
                        value={data.victoryCondition}
                        size="small"
                        SelectProps={{
                            native: true,
                        }}
                        >
                        {vconditions.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>
                </Grid>
                <Grid xs={8}>
                    <TextField
                        label="Difficulty"
                        id="difficulty"
                        defaultValue={data.difficultyFactor}
                        size="small"
                        variant="standard"
                    />
                </Grid>
                
                <Grid xs={8}>
                    Victory Parameters<br/>
                </Grid>
            </Grid>
        </Box>
    )
}
export default MapProperties;