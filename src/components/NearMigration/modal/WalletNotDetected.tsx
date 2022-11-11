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
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    borderRadius: '8px',
    width: '600px',
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
  detectWallet: Function;
  setOpenWallet: Dispatch<React.SetStateAction<boolean>>;
  setActiveModal: Dispatch<React.SetStateAction<string>>;
}

export const WalletNotDetected: React.FunctionComponent<ModalProps> = ({
  isOpen,
  detectWallet,
  setOpenWallet,
  setActiveModal,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    setOpenWallet(false);
    setActiveModal('');
  };

  const handleWelldone = () => {
    window.open(
      'https://chrome.google.com/webstore/detail/welldone-wallet-for-multi/bmkakpenjmcpfhhjadflneinmhboecjf',
    );
  };

  const handleConfirm = () => {
    window.location.reload();
    setActiveModal('WALLET_NOT_DETECT');
  };

  const handleGuide = () => {
    window.open('https://docs.welldonestudio.io/wallet/manual/how-to-install');
  };

  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Wallet not detected
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
          }}
          dividers
        >
          <Typography
            sx={{
              fontFamily: 'SUIT',
              fontWeight: '600',
              fontSize: '1.0rem',
              lineHeight: '155%',
              marginTop: '32px',
            }}
            gutterBottom
          >
            This Near Migration Service requires WELLDONE Wallet.
            <br /> Make sure to install it via the{' '}
            <button className={styles['welldone-link']} onClick={handleWelldone}>
              Chrome Web Store
            </button>{' '}
          </Typography>
          <div
            className={styles['guideImage']}
            style={{
              width: '520px',
              height: '160px',
              margin: '24px 40px',
            }}
          ></div>
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
            If you feel difficult to install, please{' '}
            <button className={styles['welldone-link']} onClick={handleGuide}>
              refer to our guide
            </button>{' '}
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
              margin: '16px',
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
