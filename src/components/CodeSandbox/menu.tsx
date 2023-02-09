import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Info from './info';
import Resources from './resources';
import Modules from './modules';

import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ExtensionIcon from '@mui/icons-material/Extension';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

interface InterfaceProps {
  targetAccount: any;
  targetResources: any;
  targetModules: any;
  resourceStatus: string;
  moduleStatus: string;
  balance: string
}

const Menu: React.FunctionComponent<InterfaceProps> = ({
  targetAccount,
  targetResources,
  targetModules,
  resourceStatus,
  moduleStatus,
  balance
}) => {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

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
              // indicatorColor=""
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              sx={{ backgroundColor: "#343844" }}
            >
              <Tab label="Info" {...a11yProps(0)} icon={<TextSnippetIcon />} iconPosition="start" sx={{ minHeight: '48px' }} />
              <Tab label="Resources" {...a11yProps(1)} icon={<AutoAwesomeMotionIcon />} iconPosition="start" sx={{ minHeight: '48px' }} />
              <Tab label="Modules" {...a11yProps(2)} icon={<ExtensionIcon />} iconPosition="start" sx={{ minHeight: '48px' }} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Info targetAccount={targetAccount} balance={balance} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Resources targetResources={targetResources} resourceStatus={resourceStatus} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Modules targetModules={targetModules} moduleStatus={moduleStatus} />
          </TabPanel>
        </Box>
      </Container>
    </>
  )
}

export default Menu
