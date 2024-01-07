import React, { useState } from 'react';
import { ButtonGroup, Typography} from '@mui/material';
import UploadMap from './uploadMap';
import SaveMap from './saveMap';

const Header = ({ setData, data }) => {
  let title = 'No map loaded.';

  if(data !== null){
    title=data.title;
  }
  return (
    <header className="App-header">
        <Typography variant="h6">{title}</Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <UploadMap setData={setData}/>
          <SaveMap data={data}/>
        </ButtonGroup>
      </header>
  );
};

export default Header;