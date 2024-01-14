import React, { useState } from 'react';
import { Button, Input } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useAppState } from '../../appContext';

const UploadMap = () => {
  const [file, setFile] = useState(null);
  const [jsonDataProperties, setJsonDataProperties] = useState(null);

  const {mapData, setMapData} = useAppState();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      //TODO: If a map is already loaded, better ask to make sure we can overwrite everything with the new upload
      handleFileUpload(selectedFile);
    }
  };

  const handleFileUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
      
        try {
          // Remove line breaks from the JSON string
          const cleanedContents = contents.replace(/(\r\n|\n|\r)/gm, '');

          // Manually parse JSON step by step
          const jsonData = parseJson(cleanedContents);

          // Display all properties in the JSON
          const properties = getAllProperties(jsonData);

          // Convert properties to a hierarchical tree structure
          const treeStructure = convertToTreeStructure(properties);
          console.log("Loaded map from file.", treeStructure);
          setMapData(treeStructure); // Set the current file
          //setJsonDataProperties(treeStructure);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
      reader.readAsText(file);
    } else {
      console.error('No file selected!');
      //setData('No file selected');
    }
  };

  // Manually parse JSON step by step
  const parseJson = (jsonString) => {
    return new Function(`return ${jsonString}`)();
  };

  // Recursive function to traverse JSON object and collect all properties
  const getAllProperties = (obj) => {
    const properties = [];

    const traverseProperties = (currentObj, path = []) => {
      for (const key in currentObj) {
        if (currentObj.hasOwnProperty(key)) {
          const value = currentObj[key];
          const currentPath = [...path, key];

          if (typeof value === 'object' && value !== null) {
            traverseProperties(value, currentPath);
          } else {
            properties.push({ path: currentPath, value });
          }
        }
      }
    };

    traverseProperties(obj);
    return properties;
  };

  // Convert properties to hierarchical tree structure
  const convertToTreeStructure = (properties) => {
    const treeStructure = {};

    properties.forEach(({ path, value }) => {
      let currentLevel = treeStructure;

      path.forEach((key, index) => {
        if (!currentLevel[key]) {
          currentLevel[key] = {};
        }

        if (index === path.length - 1) {
          currentLevel[key] = value;
        } else {
          currentLevel = currentLevel[key];
        }
      });
    });

    return treeStructure;
  };

  //if(file){handleFileUpload()}

  return (
    <div>
      <Input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button variant="contained" component="span" startIcon={<DriveFolderUploadIcon/>}>
          Upload
        </Button>
      </label>
    </div>
  );
};

export default UploadMap;
