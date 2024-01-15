import './App.css';
import EditorCanvas from './components/editorCanvas';
import EditorPanels from './components/editorPanels';
import Header from './components/header';
import AlertDialog from './components/alertDialog';
import { useAppState } from './appContext';
import { LinearProgress, ThemeProvider, createTheme } from '@mui/material';
import dwTheme from './dwTheme';
//import { createMuiTheme } from '@mui/material/styles';

const theme = createTheme({dwTheme});

function App() {
  console.log('Screen was rendered.');
  const { mapData, loading } = useAppState();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    </div>
  );
}
export default App;
