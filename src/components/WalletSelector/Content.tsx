import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { providers, utils } from 'near-api-js';
import { AccountView, CodeResult } from 'near-api-js/lib/providers/provider';
import { useWalletSelector } from './WalletSelectorContext';
import styles from './index.module.css';

type Account = AccountView & {
  account_id: string;
};

const BOATLOAD_OF_GAS = utils.format.parseNearAmount('0.00000000003')!;

const Button = (props) => {
  return (
    <button
      {...props}
      style={{
        borderRadius: '8px',
        padding: '10px 16px',
        color: 'white',
        background: '#009400',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        marginBottom: '4px',
        ...props.style,
      }}
    />
  );
};

const ResultTooltip = (props) => {
  return (
    <div
      {...props}
      className={styles.fadeMeAnimation}
      style={{
        width: '100%',
        borderRadius: '8px',
        padding: '16px',
        color: 'white',
        marginTop: '8px',
        ...props.style,
      }}
    />
  );
};

const Content: React.FC = () => {
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [txHash, setTxHash] = useState<string>('');
  const [count, setCount] = useState<Number>();
  const [error, setError] = useState<string>();

  const getAccount = useCallback(async (): Promise<Account | null> => {
    if (!accountId) {
      return null;
    }

    const { network } = selector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    return provider
      .query<AccountView>({
        request_type: 'view_account',
        finality: 'final',
        account_id: accountId,
      })
      .then((data) => ({
        ...data,
        account_id: accountId,
      }));
  }, [accountId, selector.options]);

  useEffect(() => {
    if (!accountId) {
      return setAccount(null);
    }

    setLoading(true);

    getAccount().then((nextAccount) => {
      setAccount(nextAccount);
      setLoading(false);
    });
  }, [accountId, getAccount]);

  const handleSignIn = () => {
    modal.show();
  };

  const handleSignOut = async () => {
    const wallet = await selector.wallet();

    wallet.signOut().catch((err) => {
      console.log('Failed to sign out');
      console.error(err);
    });
  };

  const handleSwitchWallet = () => {
    modal.show();
  };

  const handleSwitchAccount = () => {
    const currentIndex = accounts.findIndex((x) => x.accountId === accountId);
    const nextIndex = currentIndex < accounts.length - 1 ? currentIndex + 1 : 0;

    const nextAccountId = accounts[nextIndex].accountId;

    selector.setActiveAccount(nextAccountId);

    alert('Switched account to ' + nextAccountId);
  };

  const getCount = async () => {
    const { network } = selector.options;
    const { contract } = selector.store.getState();
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    const rawResult = await provider.query<CodeResult>({
      request_type: 'call_function',
      account_id: contract!.contractId,
      method_name: 'get_num',
      args_base64: 'e30=',
      finality: 'optimistic',
    });
    const res = JSON.parse(Buffer.from(rawResult.result).toString());
    setCount(res);
  };

  const sendTx = useCallback(async () => {
    const { contract } = selector.store.getState();
    const wallet = await selector.wallet();

    const receipt = await wallet
      .signAndSendTransaction({
        signerId: accountId!,
        receiverId: contract!.contractId,
        actions: [
          {
            type: 'FunctionCall',
            params: {
              methodName: 'increment',
              args: { count: 1 },
              gas: BOATLOAD_OF_GAS,
              deposit: utils.format.parseNearAmount('0')!,
            },
          },
        ],
      })
      .catch((err) => {
        alert('Failed to sending transaction');
        console.log('Failed to sending transaction');

        throw err;
      });
    setTxHash((receipt as any).transaction.hash);
  }, [selector, accountId]);

  if (loading) {
    return null;
  }

  if (!account) {
    return (
      <Fragment>
        <div>
          <Button onClick={handleSignIn}>Log in</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div>
        <ResultTooltip style={{ background: '#3B48DF', margin: '10px' }}>
          <b>Account:</b> {accountId}
        </ResultTooltip>
        {count && (
          <ResultTooltip style={{ background: '#F08080', margin: '10px' }}>
            <b>Count:</b> {count}
          </ResultTooltip>
        )}
        {txHash && (
          <ResultTooltip style={{ background: '#F4F4F4', color: 'black', margin: '10px' }}>
            <b>Transaction Hash:</b> {txHash}
          </ResultTooltip>
        )}
        <Button style={{ margin: '10px' }} onClick={handleSignOut}>
          Log out
        </Button>
        <Button style={{ marginRight: '10px' }} onClick={handleSwitchWallet}>
          Switch Wallet
        </Button>
        {accounts.length > 1 && <Button onClick={handleSwitchAccount}>Switch Account</Button>}
        <Button style={{ marginRight: '10px' }} onClick={getCount}>
          Get Count
        </Button>
        <Button style={{ background: '#009400' }} onClick={sendTx}>
          Send a Transaction
        </Button>
      </div>
    </Fragment>
  );
};

export default Content;
