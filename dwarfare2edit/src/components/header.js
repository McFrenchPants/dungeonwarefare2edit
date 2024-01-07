import React, { useState } from 'react';
import { Button, Typography, Card, CardContent } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import SaveIcon from '@mui/icons-material/Save';

const Header = ({ data }) => {
  const [displayedValue, setDisplayedValue] = useState('');
  let title = 'No map loaded.';

  if(data !== null){
    title=data.title;
  }
  return (
    <header className="App-header">
        <Typography variant="h6">{title}</Typography>
        <div><DriveFolderUploadIcon/><SaveIcon/></div>
      </header>
  );
};

export default Header;