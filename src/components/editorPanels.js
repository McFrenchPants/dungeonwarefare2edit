import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MapProperties from './panels/mapProperties';
import TileSelector from './panels/tileset';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function EditorPanels({data}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Map Properties" {...a11yProps(0)} />
          <Tab label="Tiles" {...a11yProps(1)} />
          <Tab label="Behaviors" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MapProperties data={data}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TileSelector data={data}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Moving Platforms<br/>
        Rails<br/>
        Decorations<br/>
        Pre-Built Traps<br/>
        Allowed Enemies<br/>
        Waves<br/>
        Route
      </CustomTabPanel>
    </Box>
  );
}