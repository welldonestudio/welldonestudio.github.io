import React, { Dispatch, useState } from 'react';

interface ConnectWelldoneProps {
  setActiveStep: Dispatch<React.SetStateAction<string>>;
  setError: Dispatch<React.SetStateAction<string>>;
  params: string[];
}

export const ConnectWelldone: React.FunctionComponent<ConnectWelldoneProps> = ({
  setActiveStep,
  setError,
  params,
}) => {
  const handleClick = async () => {
    try {
      const result = await (window as any).dapp.request('near', {
        method: 'experimental:importPrivatekey',
        params: params,
      });
      console.log('result: ', result);
      // if (result === '') {
      //   // 성공 코드 응답되면
      //   setActiveStep('SUCCESS');
      // } else {
      //   setError('WELLDONE Wallet Error: ');
      //   setActiveStep('FAIL');
      // }
    } catch (e) {
      setError(e.toString());
      //   setActiveStep('FAIL');
    }
  };

  return (
    <div>
      <button type="button" onClick={(e) => handleClick()}>
        <small>Connect Wallet</small>
      </button>
      {params}
    </div>
  );
};
