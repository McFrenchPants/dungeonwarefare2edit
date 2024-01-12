import React, { useContext } from 'react';
import { DataContext } from '../dataContext';
import { ButtonGroup, Typography} from '@mui/material';
import UploadMap from './uploadMap';
import SaveMap from './saveMap';

const Header = () => {
  let title = 'No map loaded.';
  const {mapData, setMapData} = useContext(DataContext);

  if(!mapData == null){
    title=mapData.title;
  }
  return (
    <header className="App-header">
        <Typography variant="h6">{title}</Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <UploadMap/>
          <SaveMap/>
        </ButtonGroup>
      </header>
  );
};

export default Header;