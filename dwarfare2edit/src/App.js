import React, { useState } from 'react';
import './App.css';
import './components/uploadMap'
import FileInputComponent from './components/uploadMap';
import DisplayDataComponent from './components/renderData';
import FieldGridComponent from './components/editorCanvas';

function App() {
  const [mapData, setMapData] = useState(null);
  console.log('Screen was rendered.');
  return (
    <div className="App">
      <header className="App-header">
        Map Editor
        <div>[ Upload ] [ Save ]</div>
      </header>
      
      <FieldGridComponent fieldArray={mapData.field}/>
      <FileInputComponent setData={setMapData}/>
      <DisplayDataComponent jsonData={mapData}/>
    </div>
  );
}

export default App;
