import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { DataContext } from '../../dataContext';

const MapProperties = () => {
    const {mapData, setMapData} = useContext(DataContext);
    const tiles = [
        {value:"stone", label:"Stone"},
        {value:"mines", label:"Mines"},
        {value:"dungeon", label:"Dungeon"},
        {value:"prison", label:"Prison"},
        {value:"ash", label:"Ash"},
        {value:"ice", label:"Ice"},
        {value:"castle", label:"Castle"},
        {value:"jungle", label:"Jungle"},
        {value:"desert", label:"Desert"}
    ];
    const vconditions = [
        {value: "CollectGold", label: "Collect Gold"},
        {value: "Defense", label: "Defense (Normal)"}
    ];
    const weatherEffects = [
        {value: "Rain", label: "Rain"},
        {value: "DustStorm", label: "Dust Storm"},
        {value: "Snow", label: "Snow"}
    ];
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid xs={8}>
                    <TextField
                        label="Map Title"
                        id="map-title"
                        defaultValue={mapData.title}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={8}>
                    <TextField
                        id="tileset"
                        select
                        label="Tile Theme"
                        value={mapData.tileset}
                        size="small"
                        fullWidth
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
                        defaultValue={mapData.startGold}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={8}>
                    <TextField
                        id="victory-condition"
                        select
                        label="Victory Condition"
                        value={mapData.victoryCondition}
                        size="small"
                        fullWidth
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
                        defaultValue={mapData.difficultyFactor}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                
                <Grid xs={8}>
                    <TextField
                        id="weather-effect-type"
                        select
                        label="Weather Effect"
                        value={mapData.weatherEffectType}
                        size="small"
                        fullWidth
                        SelectProps={{
                            native: true,
                        }}
                        >
                        {weatherEffects.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                {mapData.victoryCondition === "CollectGold" && (
                <Grid xs={16}>
                    Victory Parameters<br/>
                    <Grid xs={8}>
                        <TextField
                            label="Gold"
                            id="victory-gold"
                            defaultValue={mapData.victoryParameters.gold}
                            size="small"
                            variant="standard"
                        />
                        <Grid xs={8}>
                            <TextField
                                label="Time"
                                id="victory-time"
                                defaultValue={mapData.victoryParameters.time}
                                size="small"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                )}
            </Grid>
        </Box>
    )
}
export default MapProperties;