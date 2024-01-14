import './App.css';
import './components/actions/uploadMap'
import EditorCanvas from './components/editorCanvas';
import EditorPanels from './components/editorPanels';
import Header from './components/header';
import AlertDialog from './components/alertDialog';
import { AppProvider, useAppState } from './appContext';
import { LinearProgress } from '@mui/material';

function App() {
  console.log('Screen was rendered.');
  const { mapData, loading } = useAppState();
  console.log("loading? ", loading);
  return (
    <div className="App">
          <AlertDialog/>
          <Header/>
          {(loading && !mapData) && 
            <LinearProgress /> 
          }
          {mapData &&
            <>
              <EditorCanvas/>
              <EditorPanels/>
            </>
          }
    </div>
  );
}
export default App;
