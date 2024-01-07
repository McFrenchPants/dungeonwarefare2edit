import React, { useState } from 'react';
import { Button, ButtonGroup, Typography} from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import SaveIcon from '@mui/icons-material/Save';

const Header = ({ data }) => {
  let title = 'No map loaded.';

  if(data !== null){
    title=data.title;
  }
  return (
    <header className="App-header">
        <Typography variant="h6">{title}</Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button startIcon={<DriveFolderUploadIcon/>}>Upload</Button>
          <Button startIcon={<SaveIcon/>}>Save</Button>
        </ButtonGroup>
      </header>
  );
};

export default Header;