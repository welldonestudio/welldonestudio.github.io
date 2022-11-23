import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { WalletSelectorContextProvider } from './WalletSelectorContext';
import Content from './Content';

export const WalletSelector = () => {
  return (
    <WalletSelectorContextProvider>
      <Content />
    </WalletSelectorContextProvider>
  );
};
