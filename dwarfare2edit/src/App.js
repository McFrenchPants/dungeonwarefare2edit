import React, { useState } from 'react';
import './App.css';
import './components/uploadMap'
import FileInputComponent from './components/uploadMap';
import DisplayDataComponent from './components/renderData';
import EditorCanvas from './components/editorCanvas';
import Header from './components/header';

function App() {
  const [mapData, setMapData] = useState(null);
  console.log('Screen was rendered.');
  return (
    <div className="App">
      <Header data={mapData}/>
      <EditorCanvas data={mapData}/>
      <FileInputComponent setData={setMapData}/>
      <DisplayDataComponent jsonData={mapData}/>
    </div>
  );
}

export default App;
