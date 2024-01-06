import React, { useState } from 'react';
import './App.css';
import './components/uploadMap'
import FileInputComponent from './components/uploadMap';
import DisplayDataComponent from './components/renderData';

function App() {
  const [mapData, setMapData] = useState(null);
  console.log('Screen was rendered.');
  return (
    <div className="App">
      <header className="App-header">
        Map Editor
      </header>
      <FileInputComponent setData={setMapData}/>
      <DisplayDataComponent jsonData={mapData}/>
    </div>
  );
}

export default App;
