import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

export const LanguageToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  background: '#343844',
  border: '1px solid rgba(145, 158, 171, 0.12)',
  borderRadius: '8px',
  padding: '4px',
  gap: '4px',
  '& .MuiToggleButtonGroup-grouped': {
    border: 0,
    borderRadius: '8px',
    background: 'transparent',
    '&.Mui-selected': {
      background: 'rgba(59, 114, 242, 0.08)',
    },
    '&.Mui-disabled': {
      border: 0,
    },
  },
  '& .MuiToggleButton-root': {
    color: '#8F98AE',
    fontFamily: 'SUIT',
    fontStyle: 'normal',
    fontSize: '0.9375rem',
    fontWeight: '600',
    lineHeight: '170%',
    letterSpacing: '0.01em',
    textTransform: 'none',
    '&.Mui-selected': {
      color: 'white',
      borderRadius: '8px',
    },
  },
}));

export const NetworkToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  background: 'rgba(143, 152, 174, 0.16)',
  border: '0',
  borderRadius: '50px',
  padding: '4px 6px',
  gap: '4px',
  '& .MuiToggleButtonGroup-grouped': {
    border: 0,
    borderRadius: '8px',
    background: 'transparent',
    '&.Mui-selected': {
      borderRadius: '50px',
      background: 'rgba(143, 152, 174, 0.24)',
      gap: '8px',
    },
    '&.Mui-disabled': {
      border: 0,
    },
  },
  '& .MuiToggleButton-root': {
    color: '#D0D5E2',
    fontFamily: 'SUIT',
    fontStyle: 'normal',
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '170%',
    letterSpacing: '0.005em',
    textTransform: 'none',
    padding: '5px 12px',
    '&.Mui-selected': {
      color: 'white',
    },
  },
}));
