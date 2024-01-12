import { createContext } from 'react';

const mapStructure = {
    "title": "New Dungeon",
    "startGold": 10000,
    "tileset": "mines",
    "weatherEffectType": "Rain",
    "difficultyFactor": 5,
    "route": [
        [ "A", "9" ],
        [ "B", "8" ],
        [ "C", "7" ],
    ],
    "victoryCondition": "CollectGold",
    "victoryParameters":  {"gold": 20000, "time": 600},
    "field": [ 
        "11111111111111111111111111111",
        "11100010000112222222222222211",
        "11100010000112222222222222211",
        "11100010000112222222222222211",
        "11100010000112222222222222211",
        "11100010000112222222222222211",
        "11110110000112222222222222211",
        "11110110000111111111111111111",
        "11A002225501WWW10000000013331",
        "11A00000000000000000@@00>3731",
        "11A002225501MMM10000000013331",
        "11111111111111111111000011111",
        "11B000006666000#####0000{1111",
        "11B00000600600000000000011111",
        "11111111611611111111000013811",
        "11C000006006000000000000>3311",
        "11111111611611101111010011111",
        "1111111161166110111101VV13331",
        "11111166611161111111110003931",
        "11111111111111111111111113331",
        "11111111111111111111111111111",
        
    ],
    "movingPlatforms": [
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
    ],
    "rails": [
        { "startRow": 2, "startCol": 6, "endRow": 2, "endCol": 12, "interval": 3.5 },
        { "type": "Bison", "startRow": 3, "startCol": 15, "endRow": 3, "endCol": 20, "interval": 0.3, "duration": 5 },
    ],
    "decorations": [
        { "type": "Torch", "row": 6, "col": 8, "rotation": 270 },
        
        { "type": "Boulder", "row": 12, "col": 23, "rotation": 0 },

        { "type": "Totem", "row": 7, "col": 4, "rotation": 0, "totemType": "Haste" }, 

        { "type": "Treasure", "row": 9, "col": 21, "rotation": 0 },

        { "type": "Orb", "row": 6, "col": 21, "rotation": 0 },

        { "type": "DemonSquad", "row": 5, "col": 5, "count": 3 },

        { "type": "Vault", "row": 18, "col": 8 },

        { "type": "Tomb", "row": 15, "col": 8, 
        "spawnerUnitType": "Warrior", 
        "spawnerRouteIndex": 0, 
        "spawnerInterval": 0.1, 
        "spawnerUnitCount": 50 
        },

        { "type": "Spawner", "row": 16, "col": 4, "rotation": 0, "spawnerUnitType": "Warrior", "spawnerRouteIndex": 0, "spawnerInterval": 3 },
        { "type": "Spawner", "row": 18, "col": 4, "rotation": 0, "spawnerUnitType": "Digger", "spawnerRouteIndex": 1, "spawnerInterval": 5 },
    ],
    "prebuiltTraps": [
        { "row": 0, "col": 0, "fieldIndex": 1, "type": "Dart", "tier": 0, "direction": "Right" }, 
        { "row": 0, "col": 1, "fieldIndex": 2, "type": "Spike", "tier": 0, "direction": "Down" },
        { "row": 6, "col": 6, "fieldIndex": 0, "type": "Harpoon", "tier": 0, "direction": "Up" },
    ],
    "allowedUnitTypes": [
        "Peasant",
        "King",
        "Adventurer",
        "Warrior",
        "Knight",
        "Priest",
        "Thief",
        "Wizard",
        "Golem",
        "Copter",
        "Dwarf",
        "Marksman",
        "Warrior_Veteran",
        "Horseman",
        "Druid",
        "Journeyman",
        "Brute",
        "Drummer",
        "Bloon",
        "Midasman",
        "Digger",
        "BridgeSquad",
        "JungleWarrior",
        "Berserker",
        "Bandit",
        "MasterThief",
        "BlackKnight",
        "Vanguard",
        "HeavyArmor"
    ],
    "waves": [
        {
            "wave": 1, 
            "replaceGeneratedWave": false,
            "appendToGeneratedWave": true,
            "spawn": [
                { "interval": 0.2, "types": [ "Dwarf" ], "typeInterval": 0.1, "count": 3, "routes": [ 0 ] },
                { "interval": 2.0, "types": [ "Warrior", "Peasant" ], "typeInterval": 1.0, "count": 3, "routes": [ 0, 1 ] }
            ]
        },
        {
            "wave": 2,
            "replaceGeneratedWave": true,
            "appendToGeneratedWave": false,
            "spawn": [
                { "interval": 1, "types": [ "Vanguard" ], "typeInterval": 0.1, "count": 3, "routes": [ 0 ] }
            ]
        }
    ]
};
export const DataContext = createContext({
    mapData: mapStructure,
    setMapData: () => {}
});

const DataProvider = ({ children }) => {
    const [mapData, setMapData] = useState();
    return (
      <DataContext.Provider value={{ mapData, setMapData }}>
        {withData(children)}
      </DataContext.Provider>
    );
  };
  const withData = (Child) => (props) => (
    <DataContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </DataContext.Consumer>
  );
  export {DataProvider, withData};