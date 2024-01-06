import React, { useState } from 'react';
import { Button, Input, Typography } from '@mui/material';

const FileInputComponent = ({setData}) => {
  const [file, setFile] = useState(null);
  const [displayData, setDisplayData] = useState("{}");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  function escapeNewLineChars(valueToEscape) {
    if (valueToEscape != null && valueToEscape != "") {
      return valueToEscape.replace(/\n/g, " ");
    } else {
      return valueToEscape;
    } 
  }

  const handleFileUpload = () => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        // Assuming contents is a valid JSON string
        setDisplayData(contents);
        setData(contents); // Pass the data to the parent component if needed
      };

      reader.readAsText(file);
    } else {
      console.error('No file selected!');
    }
  };

  return (
    <div>
      <Typography variant="h6">Upload JSON File</Typography>
      <Input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button variant="contained" component="span">
          Choose File
        </Button>
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFileUpload}
        disabled={!file}
      >
        Upload
      </Button>
      <div>
      {"file: " + (file ? file.name : "No file selected")}<br />
        <pre>{displayData}</pre>
      </div>
    </div>
  );
};

export default FileInputComponent;