import React, { useState } from 'react';
import { Button, Typography, Card, CardContent } from '@mui/material';

const DisplayDataComponent = ({ jsonData }) => {
  const [displayedValue, setDisplayedValue] = useState('');

  const handleDisplayValue = () => {
    // Replace this with your logic to extract and display specific values
    // For now, let's just display the entire JSON for demonstration purposes
    setDisplayedValue(JSON.stringify(jsonData, null, 2));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Display Data</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDisplayValue}
          disabled={!jsonData}
        >
          Display Values
        </Button>
        {displayedValue && (
          <div>
            <Typography variant="subtitle1">Displayed Values:</Typography>
            <pre>{displayedValue}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DisplayDataComponent;