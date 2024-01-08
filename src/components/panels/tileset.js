import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography} from '@mui/material';

const TileSelector = () => {

    const terrainTiles = [
        {value: "0", label: "Floor"},
        {value: "1", label: "Wall"},
        {value: "2", label: "Abyss"},
        {value: "5", label: "Obstacle"},
        {value: "@", label: "Floor"},
        {value: "#", label: "Floor"},
        {value: ">", label: "Door(right)"},
        {value: "<", label: "Door(left)"},
        {value: "^", label: "Door(up)"},
        {value: "v", label: "Door(down)"},
        {value: "}", label: "Spiked Wall(right)"},
        {value: "{", label: "Spiked Wall(left)"},
        {value: "M", label: "Spiked Wall(up)"},
        {value: "W", label: "Spiked Wall(down)"},
        {value: "A", label: "Entrance(small)"},
        {value: "AA", label: "Entrance(medium)"},
        {value: "AAA", label: "Entrance(large)"}
    ];
    const decorations = [
        {value: "Torch", label: "Decorative Torch"},
        {value: "Boulder", label: "Boulder"},
        {value: "Haste", label: "Totem (Haste)"},
        {value: "Rejuvenation", label: "Totem (Rejuvenation)"},
        {value: "Emboldening", label: "Totem (Emboldening)"},
        {value: "Stability", label: "Totem (Stability)"},
        {value: "Immortality", label: "Totem (Immortality)"},
        {value: "Shielding", label: "Totem (Shielding)"},
        {value: "Treasure", label: "Treasure"},
        {value: "Orb", label: "Orb of Experience"},
        {value: "DemonSquad", label: "DemonSquad"},
        {value: "Vault", label: "Vault (2x2)"},
        {value: "Tomb", label: "Tomb (2x2)"},
        {value: "Spawner", label: "Spawner"}
    ];
    const traps = [
        {value: "Spike", label: "Spike"},
        {value: "Push", label: "Push"},
        {value: "Barricade", label: "Barricade"},
        {value: "Wind", label: "Wind"},
        {value: "Grind", label: "Grind"},
        {value: "Bolt", label: "Bolt"},
        {value: "Lightning", label: "Lightning"},
        {value: "Dart", label: "Dart"},
        {value: "Inferno", label: "Inferno"},
        {value: "Spring", label: "Spring"},
        {value: "Tar", label: "Tar"},
        {value: "Slot", label: "Slot"},
        {value: "Spawner_Demon", label: "Demon Spawner"},
        {value: "Spawner_Necromancer", label: "Necromancer Spawner"},
        {value: "Spin", label: "Spin"},
        {value: "Harpoon", label: "Harpoon"},
        {value: "Harvester", label: "Harvester"},
        {value: "Blackhole", label: "Blackhole"},
        {value: "Tar", label: "Tar"},
        {value: "Hex", label: "Hex"},
        {value: "Teleporter", label: "Teleporter"},
        {value: "Bola", label: "Bola"},
        {value: "Chakram", label: "Chakram"},
        {value: "Rocket", label: "Rocket"},
        {value: "Shockwave", label: "Shockwave"}
    ];
    const rails = [];

    return (
        <div>
            <Grid container spacing={0} columns={16}>
                <Typography variant="h6">Terrain Tiles</Typography>
                <Grid container spacing={1} columns={10}>                    
                    {terrainTiles.map((option) =>(
                        <Grid xs={1}>
                            <Button variant="contained" size="small" sx={{width: "50px", fontSize: "0.6rem"}}>
                                {option.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h6">Decorations</Typography>
                <Grid container spacing={1} columns={10}>
                    {decorations.map((option) =>(
                        <Grid xs={1}>
                            <Button variant="contained" size="small" sx={{width: "50px", fontSize: "0.6rem"}}>
                                {option.value}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h6">Traps</Typography>
                <Grid container spacing={1} columns={10}>
                    {traps.map((option) =>(
                        <Grid xs={1}>
                            <Button variant="contained" size="small" sx={{width: "50px", fontSize: "0.6rem"}}>
                                {option.value}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}
export default TileSelector;