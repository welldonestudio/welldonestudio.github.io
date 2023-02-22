
import React from "react";

import { WelldoneWallet } from "@welldone-studio/aptos-wallet-adapter";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import CodeSandbox from './CodeSandbox';

export const WalletSelector = () => {
  const wallets = [new WelldoneWallet(), new PetraWallet()];
  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={false}>
      <CodeSandbox />
    </AptosWalletAdapterProvider>
  );
};