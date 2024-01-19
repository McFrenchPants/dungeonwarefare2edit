const getTerrainBySymbol = (symbol) => {
    const terrainLabel = {
        0: 'Floor',
        1: 'Wall',
        2: 'Abyss',
        5: 'Obstacle',
        6: 'Rails',
        '@': 'Destroyable Wall',
        '#': 'Destroyable Floor',
        '>': 'Door (Left)',
        '<': 'Door (Right)',
        '^': 'Door (Up)',
        'V': 'Door (Down)',
        '}': 'Spiked Wall (Right)',
        '{': 'Spiked Wall (Left)',
        'M': 'Spiked Wall (Up)',
        'W': 'Spiked Wall (Down)',
        'A': 'Small Entrance',
        'AA': 'Medium Entrance',
        'AAA': 'Large Entrance',
        '3': 'Portal Outer',
        '7': 'Portal Inner',
        '8': 'Portal Inner',
        '9': 'Portal Inner',
    };
    console.log("Looking up terrain label for code: ", symbol);
    console.log("Terrain Label: ", terrainLabel[symbol]);
    return terrainLabel[symbol] || 'Unknown';
};
export default getTerrainBySymbol;