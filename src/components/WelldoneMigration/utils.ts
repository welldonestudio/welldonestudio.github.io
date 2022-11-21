import * as nearAPI from 'near-api-js';

declare global {
  interface Window {
    walletConnection: nearAPI.WalletConnection;
    accountId: string;
  }
}

export const getConfig = (environment: string): nearAPI.ConnectConfig => {
  switch (environment) {
    case 'mainnet':
      return {
        networkId: 'mainnet',
        keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.mainnet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
      };
    case 'betanet':
      return {
        networkId: 'betanet',
        keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: 'https://rpc.betanet.near.org',
        walletUrl: 'https://wallet.betanet.near.org',
        helperUrl: 'https://helper.betanet.near.org',
      };
    case 'testnet':
    default:
      return {
        networkId: 'testnet',
        keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
      };
  }
};

export const initConnect = async (network: string) => {
  const near = await nearAPI.connect(getConfig(network));
  window.walletConnection = new nearAPI.WalletConnection(near, '');
  window.accountId = window.walletConnection.getAccountId();
};

export function login() {
  window.walletConnection.requestSignIn({});
}

export function logout() {
  window.walletConnection.signOut();
  // window.location.reload();
}
