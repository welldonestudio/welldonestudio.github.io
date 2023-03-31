import React, { ChangeEvent, useEffect, useState } from 'react';
import { parseArgVal, extractVectorElementTypeTag } from './aptos-helper';
import { Types } from 'aptos';
import TextField from '@mui/material/TextField';

interface Props {
  func: Types.MoveFunction;
  typeName: string;
  vectorElType: string;
  parentIdx: number;
  updateParam: (value: any, idx: number, parameterType: string) => void;
}

type Arg = string | Arg[];

const VectorArgForm: React.FunctionComponent<Props> = ({
  func,
  typeName,
  vectorElType,
  parentIdx,
  updateParam,
}) => {
  useEffect(() => {
    const parameterBoxes = document.getElementsByClassName('aptos-parameter');
    for (let i = 0; i < parameterBoxes.length; i++) {
      (parameterBoxes[i] as any).value = '';
    }
    setArgs([]);
  }, [func]);
  const [args, setArgs] = useState<any[]>([]);
  // const [args, setArgs] = useState<Arg[]>([[['a', 'b'], []], [], [['c']]]);
  // const [args, setArgs] = useState<Arg[]>(["a", "b", "c"]);
  const indexMemo: number[] = [];

  const toIndices = (id: string) => {
    if (id.startsWith('vec-arg-input-bool')) {
      // "vec-arg-input-bool-0-true-0"
      return id
        .split('-')
        .filter((str) => str.trim() !== '')
        .filter((str, idx) => idx > 6)
        .map((i) => Number(i));
    }
    return id
      .slice('vec-arg-input-'.length)
      .split('-')
      .filter((str) => str.trim() !== '')
      .map((i) => Number(i));
  };

  const counterBoolElementId = (id: string) => {
    if (id.includes('true')) {
      return id.replace('true', 'false');
    } else {
      return id.replace('false', 'true');
    }
  };
  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const depth = wordCount(typeName, 'vector');
    const id = event.target.id;

    const indices = toIndices(id);
    console.log('depth', depth);
    console.log('indices', indices);

    const data = [...args];
    if (indices.length === 1) {
      if (id.includes('bool')) {
        const el: any = document.getElementById(counterBoolElementId(id));
        el.checked = !el.checked;
        data[indices[0]] = parseArgVal(id.includes('true'), extractVectorElementTypeTag(typeName));
      } else if (event.target.value === '') {
        data[indices[0]] = '';
      } else {
        data[indices[0]] = parseArgVal(event.target.value, extractVectorElementTypeTag(typeName));
      }

      setArgs(data);
      updateParam(data, parentIdx, typeName);
      return;
    }

    let el: any;
    for (let i = 0; i < indices.length - 1; i++) {
      const idx = indices[i];
      if (!el) {
        el = data[idx];
      } else if (Array.isArray(el)) {
        el = el[idx];
      }
    }

    if (event.target.value === '') {
      el[indices[indices.length - 1]] = '';
    } else {
      el[indices[indices.length - 1]] = parseArgVal(
        event.target.value,
        extractVectorElementTypeTag(typeName),
      );
    }
    setArgs([...data]);
    updateParam(data, parentIdx, typeName);
  };

  function wordCount(str: string, word: string): number {
    let depth = 0;
    let curIdx = -1;
    while (curIdx < str.length) {
      curIdx = str.indexOf(word, curIdx);
      if (curIdx === -1) {
        break;
      }
      depth++;
      curIdx = curIdx + word.length;
    }
    return depth;
  }

  const addRow = (event: any, vectorElType: string) => {
    const depth = wordCount(typeName, 'vector');
    const id = event.target.id as string;
    console.log(`id`, id);

    const indices = id
      .slice('vec-arg-add-'.length)
      .split('-')
      .filter((str) => str.trim() !== '')
      .map((i) => Number(i));
    console.log('depth', depth);
    console.log('indices', indices);

    const data = [...args];
    console.log(`data_1`, data);
    if (depth === 1) {
      if (vectorElType === 'bool') {
        data.push(true);
      } else {
        data.push('');
      }
      setArgs([...data]);
      updateParam(data, parentIdx, typeName);
      console.log(`data_2`, data);
      return;
    }

    if (indices.length === 0) {
      data.push([]);
      setArgs([...data]);
      updateParam(data, parentIdx, typeName);
      return;
    }

    let el = data as any[];
    for (let i = 0; i < indices.length; i++) {
      const idx = indices[i];
      el = el[idx];
    }
    console.log(`el`, el);

    if (indices.length === depth - 1) {
      if (vectorElType === 'bool') {
        el.push(true);
      } else {
        el.push('');
      }
    } else {
      el.push([]);
    }

    console.log(`data_2`, data);
    setArgs(data);
    updateParam(data, parentIdx, typeName);
  };

  const removeRow = (event: any) => {
    const id = event.target.id as string;
    const indices = id
      .slice('vec-arg-remove-'.length)
      .split('-')
      .filter((str) => str.trim() !== '')
      .map((i) => Number(i));

    const data = [...args];
    let el;
    if (indices.length === 1) {
      data.splice(indices[0], 1);
      setArgs(data);
      updateParam(data, parentIdx, typeName);
      console.log(`data_2`, data);
      return;
    }

    for (let i = 0; i < indices.length - 1; i++) {
      const idx = indices[i];
      if (!el) {
        el = data[idx];
      } else if (Array.isArray(el)) {
        el = el[idx];
      }
    }
    (el as string[]).splice(indices[indices.length - 1], 1);
    console.log(`data_2`, data);
    setArgs([...data]);
    updateParam(data, parentIdx, typeName);
  };

  const render: (val: any, i: number) => any = (val: any, i: number) => {
    if (!Array.isArray(val)) {
      if (vectorElType === 'bool' && val === '') {
        val = true;
      }
      return vectorElType === 'bool' ? (
        <div
          id={`vec-arg-input-bool-${parentIdx}-${i}`}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', height: '1em' }}>
            <input
              className={'aptos-parameter'}
              id={`vec-arg-input-bool-${parentIdx}-${i}-true-${indexMemo.join('-')}`}
              type="radio"
              name={`vec-arg-input-bool-${parentIdx}-${i}-true-${indexMemo.join('-')}`}
              placeholder={vectorElType}
              defaultChecked={true}
              onChange={(event) => handleFormChange(event)}
            />
            <div style={{ marginLeft: '0.5em', marginRight: '0.5em' }}>
              <label style={{ color: "#909099" }}>True</label>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              className={'aptos-parameter'}
              id={`vec-arg-input-bool-${parentIdx}-${i}-false-${indexMemo.join('-')}`}
              type="radio"
              name={`vec-arg-input-bool-${parentIdx}-${i}-false-${indexMemo.join('-')}`}
              placeholder={vectorElType}
              onChange={(event) => handleFormChange(event)}
            />
            <div style={{ marginLeft: '0.5em', marginRight: '0.5em' }}>
              <label style={{ color: "#909099" }}>False</label>
            </div>
          </div>

          <br></br>
        </div>
      ) : (
        <div style={{ width: '100%' }}>
          <TextField
            className={'aptos-parameter'}
            type="text"
            id={`vec-arg-input-${indexMemo.join('-')}`}
            name="val"
            placeholder={vectorElType}
            value={val}
            onChange={(event: any) => handleFormChange(event)}
            inputProps={{
              style: { width: '100%', padding: 10, backgroundColor: '#343844', color: 'white' }
            }}
            sx={{ width: '100%' }}
          />
          <br></br>
        </div>
      );
    }

    return val.map((v, i) => {
      indexMemo.push(i);
      // console.log(indexMemo);
      const b = (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '2em', color: "#909099" }}>[{i}]</div>
            </div>
            <div
              key={i}
              style={
                Array.isArray(v)
                  ? {
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0.5em',
                    border: '0.1px solid',
                    width: '80%',
                  }
                  : { width: '100%', }
              }
            >
              {render(v, i)}
              {Array.isArray(v) ? (
                <button
                  className='btn btn-info btn-sm'
                  key={`button-${i}`}
                  id={`vec-arg-add-${indexMemo.join('-')}`}
                  onClick={(e: any) => addRow(e, vectorElType)}
                >
                  +
                </button>
              ) : (
                <></>
              )}
            </div>
            <button
              className='btn btn-info btn-sm'
              id={`vec-arg-remove-${indexMemo.join('-')}`}
              onClick={(e) => removeRow(e)}
            >
              -
            </button>
          </div>
          <div style={{ height: '0.5em' }}></div>
          {indexMemo.length === 0 ? (
            <button
              className='btn btn-info btn-sm'
              key={`button-${i}`}
              id={`vec-arg-add-${indexMemo.join('-')}`}
              onClick={(e) => addRow(e, vectorElType)}
              style={{ backgroundColor: 'lightgrey', border: 'none', outline: 'none' }}
            >
              +
            </button>
          ) : (
            <></>
          )}
        </div>
      );
      indexMemo.pop();
      return b;
    });
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ color: "#909099" }}>{typeName}</div>
      <div style={{ border: '0.1px solid', padding: '0.5em' }}>
        {args.length === 0 ? (
          <button
            className='btn btn-info btn-sm'
            key={`button-${0}`}
            id={`add-btn-${0}`}
            onClick={(e) => addRow(e, vectorElType)}
          >
            +
          </button>
        ) : (
          <div>
            {render(args, -1)}
            <button
              className='btn btn-info btn-sm'
              id={`vec-arg-add-${indexMemo.join('-')}`}
              onClick={(e) => addRow(e, vectorElType)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VectorArgForm;
