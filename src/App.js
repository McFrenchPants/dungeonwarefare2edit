import React, { useState } from 'react';
import './App.css';
import './components/uploadMap'
import EditorCanvas from './components/editorCanvas';
import EditorPanels from './components/editorPanels';
import Header from './components/header';

function App() {
  const [mapData, setMapData] = useState(null);
  console.log('Screen was rendered.');
  return (
    <div className="App">
      <Header setData={setMapData} data={mapData}/>
      {mapData && (
        <>
          <EditorCanvas data={mapData}/>
          <EditorPanels data={mapData}/>
        </>
      )}
    </div>
  );
}

export default App;
