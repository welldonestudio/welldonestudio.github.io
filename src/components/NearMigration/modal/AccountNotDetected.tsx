import React, { Dispatch, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: '0',
  },
  '& .MuiDialogActions-root': {
    padding: '16px',
  },
  '& .MuiPaper-root': {
    borderRadius: '8px',
    minWidth: '752px',
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        fontFamily: 'SUIT',
        fontWeight: '700',
        fontSize: '1.125rem',
        lineHeight: '155%',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#20222A',
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface ModalProps {
  isOpen: boolean;
  setOpenAccount: Dispatch<React.SetStateAction<boolean>>;
  setActiveModal: Dispatch<React.SetStateAction<string>>;
}

export const AccountNotDetected: React.FunctionComponent<ModalProps> = ({
  isOpen,
  setOpenAccount,
  setActiveModal,
}) => {
  const [open, setOpen] = React.useState(false);
  const Image = require('@site/static/img/2_1_1.svg').default;

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    setOpenAccount(false);
    setActiveModal('');
  };
  const handleWelldone = () => {
    window.open(
      'https://chrome.google.com/webstore/detail/welldone-wallet-for-multi/bmkakpenjmcpfhhjadflneinmhboecjf',
    );
  };

  const handleGuide = () => {
    window.open('https://docs.welldonestudio.io/wallet/manual/how-to-create-a-wallet');
  };

  const handleConfirm = () => {
    window.location.reload();
  };

  return (
    <div>
      {open}
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {/* Wallet account not detected */}
          Create a Wallet
        </BootstrapDialogTitle>
        <DialogContent
          sx={{
            fontFamily: 'SUIT',
            fontWeight: '600',
            fontSize: '1.0rem',
            lineHeight: '155%',
            backgroundColor: '#131417',
            color: 'white',
            textAlign: 'center',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          dividers
        >
          <Typography
            sx={{
              fontFamily: 'SUIT',
              fontWeight: '600',
              fontSize: '1.0rem',
              lineHeight: '155%',
              margin: '32px 0px 0px 0px',
            }}
            gutterBottom
          >
            This NEAR Migration Service requires WELLDONE Wallet.
            <br /> Make sure to register it on{' '}
            <button className={styles['welldone-link']} onClick={handleWelldone}>
              WELLDONE wallet
            </button>{' '}
          </Typography>
          <div
            style={{
              width: '638px',
              height: '300px',
              margin: '24px 56.5px',
              display: 'flex',
            }}
          >
            <Image role="img" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '24px',
              }}
            >
              <div
                style={{
                  textAlign: 'left',
                  fontSize: '0.875rem',
                  fontFamily: 'SUIT',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '155%',
                }}
              >
                1. Want to use a new wallet to migrate?
                <br /> {'->'} Click 'Create a New Wallet' Button.
                <br />
                <br />
                2. Want to use an existing wallet?
                <br /> {'->'} Click 'Import Wallet' Button.
                <br />
                <br />
                3. You don't need to make a new NEAR Account! <br />
                Just create a wallet with mnemonics and click 'Confirm' button.
              </div>
            </div>
          </div>
          <Typography
            sx={{
              fontFamily: 'SUIT',
              fontWeight: '600',
              fontSize: '1.0rem',
              lineHeight: '155%',
              marginBottom: '32px',
            }}
            gutterBottom
          >
            If you feel difficult to follow, please{' '}
            <button className={styles['welldone-link']} onClick={handleGuide}>
              refer to our guide
            </button>{' '}
            <br /> If you already have wallet, please unlock your wallet.
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: '#131417',
          }}
        >
          <Button
            sx={{
              width: '100%',
              height: '44px',
              backgroundColor: '#3B72F2',
              color: 'white',
              fontFamily: 'SUIT',
              fontSize: '0.9375rem',
              fontWeight: '600',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#3B72F2',
              },
            }}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
