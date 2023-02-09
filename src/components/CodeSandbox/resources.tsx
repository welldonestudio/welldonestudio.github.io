import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactJson from 'react-json-view'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
  targetResources: any;
  resourceStatus: string
}

const Resources: React.FunctionComponent<InterfaceProps> = ({
  targetResources,
  resourceStatus
}) => {
  const [expandedStates, setExpandedStates] = React.useState<boolean[]>([]);

  const handleExpandClick = (index: number) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <>
      {
        resourceStatus ?
          <Box sx={{ width: '100%', padding: '10px', backgroundColor: 'rgba(222,68,55,.1)', borderRadius: '10px', marginBottom: '30px', margin: '0 auto' }}>
            <Typography variant="body1" gutterBottom color={'error'} sx={{ fontSize: "15px" }}>
              {resourceStatus}
            </Typography>
          </Box>
          :
          targetResources.map((resource, idx) => (
            <Card sx={{ backgroundColor: "#343844", mb: "10px" }}>
              <CardActions disableSpacing onClick={() => { handleExpandClick(idx) }}>
                <Grid container key={1} sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={3}>
                    <Typography variant="body1" sx={{ color: "rgb(144, 144, 153)", pl: "20px" }}>Type:</Typography>
                  </Grid>
                  <Grid item xs={8.5}>
                    <Typography variant="body2" color="text.primary" sx={{ color: "white" }}>
                      {resource.type}
                    </Typography>
                  </Grid>
                  <Grid item xs={0.5}>
                    <ExpandMore
                      expand={expandedStates[idx]}
                      aria-expanded={expandedStates[idx]}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </Grid>
                </Grid>
              </CardActions>
              <Collapse in={expandedStates[idx]} timeout="auto" unmountOnExit sx={{ backgroundColor: "#2d3345" }}>
                <CardContent>
                  <ReactJson
                    src={resource.data}
                    theme="harmonic"
                    style={{ borderRadius: "10px", padding: "10px" }}
                    name={null}
                    collapseStringsAfterLength={80}
                    displayObjectSize={false}
                    displayDataTypes={false}
                  />
                </CardContent>
              </Collapse>
            </Card>
          ))
      }
    </>
  );
}

export default Resources;
