import getTerrainBySymbol from './getTerrainBySymbol'

const getTerrainByLocation = (row, column, mapData) => {
    const field = mapData.field;
    if (field[row] && field[row][column]) {
        console.log("Selected Terrain: ", field[row][column]);
        const terrainSymbol = field[row][column];
        const terrainObject = getTerrainBySymbol(terrainSymbol);
      return terrainObject || 'none';
    } else {
      // Handle the case when the specified row or column is out of bounds
      return "unknown"; 
    }
};
export default getTerrainByLocation;