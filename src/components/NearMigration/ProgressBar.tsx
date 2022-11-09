import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#3B72F2',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#3B72F2',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#6E7891',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: '#6E7891',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#D0D5E2',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#3B72F2',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ['Wellcome!', 'Import Account', 'Connect Wallet', 'Well Done!'];

export default function CustomizedSteppers(props) {
  return (
    <Stack sx={{ width: '720px', margin: '0 auto', marginBottom: '182px' }} spacing={4}>
      <Stepper alternativeLabel activeStep={props.step} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              '& .MuiStepLabel-label.Mui-completed': {
                color: '#7AA2FF',
              },
              '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
                color: '#D0D5E2', // Just text label (ACTIVE)
              },
              '& .MuiStepLabel-label.Mui-disabled': {
                color: '#6E7891',
              },
            }}
          >
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
