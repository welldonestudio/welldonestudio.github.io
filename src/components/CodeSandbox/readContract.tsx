import React, { useEffect, useRef, useState } from 'react';
import { connect, utils } from 'near-api-js';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import { getConfig } from './config';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface InterfaceProps {
  contractAddress: string;
  schema: Object;
}

const ReadContract = (props) => {

  useEffect(() => {

  })

  const { contractAddress, schema } = props;
  const [val, setVal] = React.useState(0);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = async () => {
    // connect(getConfig() as any).then(async (near: any) => {
    //   const account = await near.account()
    //   console.log(account)
    //   const value = await account.viewFunction(contractAddress, 'get_num', {});
    //   setVal(value)
    //   setExpanded(!expanded);
    // })

  };

  return (
    <Card>
      <CardActions disableSpacing onClick={handleExpandClick}>
        <Typography variant="body2" color="text.primary" sx={{ marginLeft: '10px' }}>
          1. get_num
        </Typography>
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{val}&nbsp;&nbsp;(integer)</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ReadContract
