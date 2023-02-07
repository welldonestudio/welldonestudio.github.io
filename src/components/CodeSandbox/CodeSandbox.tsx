import React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import useIsBrowser from '@docusaurus/useIsBrowser';

import Menu from './menu'



export const CodeSandbox = () => {

  const [open, setOpen] = React.useState(false);
  const isBrowser = useIsBrowser();
  console.log(window);
  console.log(window.Buffer);
  // window.Buffer = window.Buffer || require('buffer').Buffer;

  if (isBrowser) {
    window.global = window;
    window.Buffer = window.Buffer || require('buffer').Buffer;
  }

  return (
    <>
      <Container disableGutters maxWidth="lg" component="main">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          gutterBottom
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          Code Sandbox makes it easy to explore contracts on Blockchain.
        </Typography>
        <Typography align="center" component="p">
          Enter a contract account below (i.e. 0x...)
        </Typography>
      </Container>
      {
        open ? <Menu /> :
          <Container maxWidth="md" component="main">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                id="search-bar"
                className={''}
                label="Search by Address"
                variant="outlined"
                placeholder="Search..."
                size="medium"
                fullWidth
                color='info'
                focused
                InputProps={{
                  style: {
                    color: 'var(--input-color)',
                  },
                }}
              />
              <IconButton type="submit" aria-label="search" color='info' onClick={() => { setOpen(!open) }}>
                <SearchIcon style={{ fill: "" }} />
              </IconButton>
            </div>
          </Container>
      }

    </>
  )
}

