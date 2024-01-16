import './App.css';
import EditorCanvas from './components/editorCanvas';
import EditorPanels from './components/editorPanels';
import Header from './components/header';
import AlertDialog from './components/alertDialog';
import { useAppState } from './appContext';
import { CssBaseline, LinearProgress, ThemeProvider, createTheme } from '@mui/material';
import dwTheme from './dwTheme';

const theme = createTheme(dwTheme);

function App() {
  console.log('Screen was rendered.');
  const { mapData, loading } = useAppState();
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
        </ThemeProvider>
  );
}
export default App;
