import {useState} from 'react';
import './App.css';
import './components/uploadMap'
import EditorCanvas from './components/editorCanvas';
import EditorPanels from './components/editorPanels';
import Header from './components/header';
import { DataContext } from './dataContext';

function App() {
    const [mapData, setMapData] = useState();
    const mapState = {mapData, setMapData};

  console.log('Screen was rendered.');
  return (
    <div className="App">
        <DataContext.Provider value={mapState}>
            <Header/>
            {mapData &&
                <>
                    <EditorCanvas/>
                    <EditorPanels/>
                </>
            }
        </DataContext.Provider>
    </div>
  );
}
export default App;
