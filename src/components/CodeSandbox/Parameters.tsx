import React, { useEffect } from 'react';
// import { Form } from 'react-bootstrap';
import TextField from '@mui/material/TextField';

import { Types } from 'aptos';
import { ArgTypeValuePair, getVectorArgTypeStr } from './aptos-helper';
import VectorArgForm from './VectorArgForm';

interface InterfaceProps {
  func: Types.MoveFunction;
  setGenericParameters: Function;
  setParameters: Function;
  clear: any
}

export const Parameters: React.FunctionComponent<InterfaceProps> = ({
  func,
  setGenericParameters,
  setParameters,
  clear
}) => {
  useEffect(() => {
    if (clear) {
      const parameterBoxes = document.querySelectorAll('.aptos-parameter input');
      for (let i = 0; i < parameterBoxes.length; i++) {
        (parameterBoxes[i] as any).value = '';
      }
    }

  }, [func]);
  const singerRemovedParams = func.params.filter((para, i) => {
    return !(i === 0 && (para === 'signer' || para === '&signer'));
  });

  const updateParam = (value: any, idx: number, parameterType: string) => {
    console.log(`@@@ updateParam`, value, idx, parameterType);
    setParameters((existingParams: ArgTypeValuePair[]) => {
      existingParams[idx] = {
        type: parameterType,
        val: value,
      };
      console.log('existingParams', existingParams);
      return existingParams;
    });
  };

  const updateGenericParam = (e: any, idx: any) => {
    console.log(`@@@ updateGenericParam`, e.target.value, idx);
    setGenericParameters((existingGenericParams: string[]) => {
      existingGenericParams[idx] = e.target.value;
      console.log('existingGenericParams', existingGenericParams);
      return existingGenericParams;
    });
  };

  return (
    <div style={{ width: '100%' }}>
      <div>
        <div>{func.generic_type_params.length > 0 ? <small style={{ color: "#909099" }}>Type Parameters</small> : <></>}</div>
        {func.generic_type_params.map((param: any, idx: number) => {
          return (
            <TextField
              style={{ width: '100%', marginBottom: '5px' }}
              type="text"
              placeholder={`Type Arg ${idx + 1}`}
              onChange={(e) => {
                updateGenericParam(e, idx);
              }}
              key={idx}
              inputProps={{
                style: { padding: 10, backgroundColor: '#343844', color: 'white' }
              }}
            />
          );
        })}
      </div>
      <div>{func.params.length > 0 ? <small style={{ color: "#909099" }}>Parameters</small> : <></>}</div>
      {singerRemovedParams.map((parameterType: string, idx: number) => {
        if (parameterType.startsWith('vector')) {
          return (
            <VectorArgForm
              func={func}
              typeName={parameterType}
              vectorElType={getVectorArgTypeStr(parameterType)}
              updateParam={updateParam}
              parentIdx={idx}
            />
          );
        }
        return (
          <TextField
            className={'aptos-parameter'}
            style={{ width: '100%', marginBottom: '5px' }}
            type="text"
            placeholder={parameterType}
            onChange={(e) => {
              updateParam(e.target.value, idx, parameterType);
            }}
            inputProps={{
              style: { padding: 10, backgroundColor: '#343844', color: 'white' }
            }}
          />
        );
      })}
    </div>
  );
};
