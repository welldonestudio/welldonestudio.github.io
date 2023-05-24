import { HexString, TxnBuilderTypes, TypeTagParser, BCS, AptosClient } from 'aptos';
import { ensureBigInt, ensureNumber, serializeArg } from './transaction_builder/builder_utils';
import { sha3_256 } from 'js-sha3';

export interface ArgTypeValuePair {
  type: string;
  val: any;
}

export async function dappTxn(
  accountId: string,
  chainId: string,
  module: string,
  func: string,
  type_args: BCS.Seq<TxnBuilderTypes.TypeTag>,
  args: BCS.Seq<BCS.Bytes>,
) {
  const aptosClient = new AptosClient(aptosNodeUrl(chainId));
  const rawTransaction = await aptosClient.generateRawTransaction(
    new HexString(accountId),
    genPayload(module, func, type_args, args),
  );
  // log.info(`raw args`, JSON.stringify((rawTransaction as any).payload.value.args, null, 2));

  const header = Buffer.from(sha3_256(Buffer.from('APTOS::RawTransaction', 'ascii')), 'hex');
  return (
    '0x' + header.toString('hex') + Buffer.from(BCS.bcsToBytes(rawTransaction)).toString('hex')
  );
}

export function genPayload(
  module: string,
  func: string,
  type_args: BCS.Seq<TxnBuilderTypes.TypeTag>,
  args: BCS.Seq<BCS.Bytes>,
) {
  return new TxnBuilderTypes.TransactionPayloadEntryFunction(
    TxnBuilderTypes.EntryFunction.natural(module, func, type_args, args),
  );
}

export function getVectorArgTypeStr(vectorTypeFullName: string): string {
  const argType = extractVectorElementTypeTag(vectorTypeFullName);
  if (argType instanceof TxnBuilderTypes.TypeTagBool) {
    return 'bool';
  }
  if (argType instanceof TxnBuilderTypes.TypeTagU8) {
    return 'u8';
  }
  if (argType instanceof TxnBuilderTypes.TypeTagU16) {
    return 'u16';
  }
  if (argType instanceof TxnBuilderTypes.TypeTagU32) {
    return 'u32';
  }
  if (argType instanceof TxnBuilderTypes.TypeTagU64) {
    return 'u64';
  }
  if (argType instanceof TxnBuilderTypes.TypeTagU128) {
    return 'u128';
  }
  if (argType instanceof TxnBuilderTypes.TypeTagU256) {
    return 'u256';
  }
  if (argType instanceof TxnBuilderTypes.TypeTagAddress) {
    return 'address';
  }

  if (argType instanceof TxnBuilderTypes.TypeTagStruct) {
    const {
      address,
      module_name: moduleName,
      name,
    } = (argType as TxnBuilderTypes.TypeTagStruct).value;
    if (
      `${HexString.fromUint8Array(address.address).toShortString()}::${moduleName.value}::${name.value
      }` !== '0x1::string::String'
    ) {
      throw new Error('The only supported struct arg is of type 0x1::string::String');
    }
    return '0x1::string::String';
  }
  throw new Error('Unsupported arg type.');
}

export function extractVectorElementTypeTag(vectorType: string): TxnBuilderTypes.TypeTag {
  const depth = wordCount(vectorType, 'vector');
  const parser = new TypeTagParser(vectorType);
  let curTypeTag: TxnBuilderTypes.TypeTag = parser.parseTypeTag();
  for (let i = 0; i < depth; i++) {
    if (curTypeTag instanceof TxnBuilderTypes.TypeTagVector) {
      curTypeTag = curTypeTag.value;
    }
  }

  return curTypeTag;
}

export function parseArgVal(argVal: any, argType: TxnBuilderTypes.TypeTag) {
  if (argType instanceof TxnBuilderTypes.TypeTagBool) {
    return argVal;
  }

  if (
    argType instanceof TxnBuilderTypes.TypeTagU8 ||
    argType instanceof TxnBuilderTypes.TypeTagU16 ||
    argType instanceof TxnBuilderTypes.TypeTagU32
  ) {
    return ensureNumber(argVal);
  }

  if (
    argType instanceof TxnBuilderTypes.TypeTagU64 ||
    argType instanceof TxnBuilderTypes.TypeTagU128 ||
    argType instanceof TxnBuilderTypes.TypeTagU256
  ) {
    return ensureBigInt(argVal);
  }

  if (argType instanceof TxnBuilderTypes.TypeTagAddress) {
    return TxnBuilderTypes.AccountAddress.fromHex(argVal);
  }

  if (argType instanceof TxnBuilderTypes.TypeTagStruct) {
    const {
      address,
      module_name: moduleName,
      name,
    } = (argType as TxnBuilderTypes.TypeTagStruct).value;
    if (
      `${HexString.fromUint8Array(address.address).toShortString()}::${moduleName.value}::${name.value
      }` !== '0x1::string::String'
    ) {
      throw new Error('The only supported struct arg is of type 0x1::string::String');
    }
    return argVal;
  }

  throw new Error(`Unsupported Type. ${argType}`);
}

export function wordCount(str: string, word: string): number {
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

export function serializedArgs(args_: ArgTypeValuePair[]) {
  return args_.map((arg, idx) => {
    if (arg.type === 'bool') {
      return BCS.bcsSerializeBool(arg.val === 'true');
    } else if (arg.type === 'u8') {
      return BCS.bcsSerializeU8(Number(arg.val));
    } else if (arg.type === 'u16') {
      return BCS.bcsSerializeU16(Number(arg.val));
    } else if (arg.type === 'u32') {
      return BCS.bcsSerializeU32(Number(arg.val));
    } else if (arg.type === 'u64') {
      return BCS.bcsSerializeUint64(Number(arg.val));
    } else if (arg.type === 'u128') {
      return BCS.bcsSerializeU128(Number(arg.val));
    } else if (arg.type === 'u256') {
      const serializer = new BCS.Serializer();
      serializer.serializeU256(Number(arg.val));
      return serializer.getBytes();
    } else if (arg.type === 'address') {
      const address = TxnBuilderTypes.AccountAddress.fromHex(arg.val);
      return BCS.bcsToBytes(address);
    } else if (arg.type === '0x1::string::String') {
      const ser = new BCS.Serializer();
      ser.serializeStr(arg.val);
      return ser.getBytes();
    } else if (arg.type.startsWith('vector')) {
      const ser = new BCS.Serializer();
      const parser = new TypeTagParser(arg.type);
      const typeTag = parser.parseTypeTag();
      serializeArg(arg.val, typeTag, ser);
      return ser.getBytes();
    }
    // else if (arg.type === 'vector<0x1::string::String>') {
    //   const strs = arg.val.split(',');
    //   return BCS.serializeVectorWithFunc(strs, 'serializeStr');
    // } else if (arg.type === 'vector<vector<u8>>') {
    //   const hexStrs = arg.val.split(',');
    //   const serializer = new BCS.Serializer();
    //   serializer.serializeU32AsUleb128(hexStrs.length);
    //   hexStrs.forEach((hexStr) => {
    //     const uint8Arr = new HexString(hexStr).toUint8Array();
    //     serializer.serializeBytes(uint8Arr);
    //   });
    //   return serializer.getBytes();
    // } else if (arg.type === 'vector<bool>') {
    //   const strs = arg.val.split(',').map((v) => v === 'true');
    //   return BCS.serializeVectorWithFunc(strs, 'serializeBool');
    // }
    else {
      const ser = new BCS.Serializer();
      ser.serializeBytes(new HexString(arg.val).toUint8Array());
      return ser.getBytes();
    }
  });
}

export function aptosNodeUrl(chainId: string) {
  if (chainId === 'mainnet') {
    return 'https://fullnode.mainnet.aptoslabs.com';
  }

  if (chainId === 'testnet') {
    return 'https://fullnode.testnet.aptoslabs.com';
  }

  if (chainId === 'devnet') {
    return 'https://fullnode.devnet.aptoslabs.com';
  }

  throw new Error(`Invalid chainId=${chainId}`);
}
