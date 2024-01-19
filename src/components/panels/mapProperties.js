import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useAppState } from '../../appContext';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PaidIcon from '@mui/icons-material/Paid';
import { InputAdornment, Slider, Stack } from '@mui/material';

const MapProperties = () => {
    const { mapData, setMapData } = useAppState();
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
    const difficultySettings = [
        {
            value: 1,
            label: 'Easy'
        },
        {
            value: 2,
            label: ''
        },
        {
            value: 3,
            label: ''
        },
        {
            value: 4,
            label: ''
        },
        {
            value: 5,
            label: 'Normal'
        },
        {
            value: 6,
            label: ''
        },
        {
            value: 7,
            label: ''
        },
        {
            value: 8,
            label: ''
        },
        {
            value: 9,
            label: ''
        },
        {
            value: 10,
            label: 'Hard'
        }
    ]
    
    const updateMapProperty = (property, value) => {
        const updatedMapData = { ...mapData };
        const keys = property.split('.'); // In case we got an object
    
        if (keys.length === 2) { 
            const [parentKey, childKey] = keys;
    
            // Ensure the parent key exists or create new object
            if (!updatedMapData[parentKey]) {
                updatedMapData[parentKey] = {};
            }
    
            updatedMapData[parentKey][childKey] = value; // Update the nested property
        } else {
            updatedMapData[property] = value;
        }
    
        console.log('saving update: ', updatedMapData);
        setMapData(updatedMapData);
    };

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6} columns={16}>
                <Grid xs={12}>
                    <TextField
                        label="Map Title"
                        id="map-title"
                        defaultValue={mapData.title}
                        onBlur={(e) => updateMapProperty('title', e.target.value)}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={4}>
                    <TextField
                        id="tileset"
                        select
                        label="Map Theme"
                        value={mapData.tileset}
                        onChange={(e) => updateMapProperty('tileset', e.target.value)}
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
                <Grid xs={4}>
                    <TextField
                        label="Starting Gold"
                        id="start-gold"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PaidIcon color="primary"/>
                              </InputAdornment>
                            ),
                          }}
                        defaultValue={mapData.startGold}
                        onBlur={(e) => updateMapProperty('startGold', e.target.value)}
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid xs={4}>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <AssistWalkerIcon />
                        <Slider aria-label="Difficulty" 
                            value={mapData.difficultyFactor} 
                            valueLabelDisplay="on"
                            marks={difficultySettings}
                            step={1}
                            min={1}
                            max={10}
                            onChange={(e, newValue) => updateMapProperty('difficultyFactor', newValue)} 
                        />
                        <DirectionsRunIcon />
                    </Stack>
                </Grid>
                <Grid xs={4}>
                    <TextField
                        id="victory-condition"
                        select
                        label="Victory Condition"
                        value={mapData.victoryCondition}
                        onChange={(e) => updateMapProperty('victoryCondition', e.target.value)}
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
                <Grid xs={4}>
                    <TextField
                        id="weather-effect-type"
                        select
                        label="Weather Effect"
                        value={mapData.weatherEffectType}
                        onChange={(e) => updateMapProperty('weatherEffectType', e.target.value)}
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
                            onBlur={(e) => updateMapProperty('victoryParameters.gold', e.target.value)}
                            size="small"
                            variant="standard"
                        />
                        <Grid xs={8}>
                            <TextField
                                label="Time"
                                id="victory-time"
                                defaultValue={mapData.victoryParameters.time}
                                onBlur={(e) => updateMapProperty('victoryParameters.time', e.target.value)}
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