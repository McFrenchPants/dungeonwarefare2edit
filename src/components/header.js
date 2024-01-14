import React from 'react';
import { ButtonGroup, Typography} from '@mui/material';
import UploadMap from './actions/uploadMap';
import SaveMap from './actions/saveMap';
import NewMap from './actions/newMap';
import { useAppState } from '../appContext';

const Header = () => {
  const {mapData} = useAppState();
  let title = 'No map loaded.';

  if(!mapData == null){
    title=mapData.title;
  }
  return (
    <header className="App-header">
        <Typography variant="h6">{title}</Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <NewMap/>
          <UploadMap/>
          <SaveMap/>
        </ButtonGroup>
      </header>
  );
};

export default Header;