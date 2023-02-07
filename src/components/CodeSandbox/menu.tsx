import React, { useEffect, useRef, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ReadContract from './readContract';
import WriteContract from './writeContract';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const Menu = () => {

  const network = 'testnet'
  const contractAddress = 'kms.testnet'

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [verified, setVerified] = React.useState(true);
  const [compilerType, setCompilerType] = React.useState('');
  const [contractLanguage, setContractLanguage] = React.useState('');
  const [schema, setSchema] = React.useState({})

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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

  return (
    <>

      <Container disableGutters maxWidth="lg" component="main"
        sx={{ pt: 8, pb: 6, border: (theme) => `1px solid ${theme.palette.divider}`, borderRadius: '10px', padding: '20px' }}
      >
        <Box>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Contract Source Code" {...a11yProps(0)} />
              {
                verified ? <Tab label="Read Contract" {...a11yProps(1)} /> : false
              }
              {
                verified ? <Tab label="Write Contract" {...a11yProps(2)} /> : false
              }
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <>test</>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ReadContract
              contractAddress={contractAddress}
              schema={schema}
            />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <WriteContract
              contractAddress={contractAddress}
              schema={schema}
            />
          </TabPanel>
        </Box>
      </Container>
    </>
  )
}

export default Menu
