---
title: Injective Atomic Order
description: Example contract on how to do atomic market orders on Injective incl handling the response
sidebar_position: 6
---

# Injective Atomic Order Example Contract

<div>
  <span className='author-sm'>May 23, 2023</span>
  <div className='author-div'>
    <div className='author-avatars'>
      <a href='https://github.com/altpd13' target='_blank'><img src='https://avatars.githubusercontent.com/u/69383768?v=4' /></a>
    </div>
    <div>
      <span className='author-name'>Minseok Kim</span><br/>
      <span className='author-sm'>Software Engineer, DSRV </span>
    </div>
  </div>
</div>

## Introduction

Injective is Sector Specific Block Chain built for next-gen Defi. Atomic Order is one of the feature injective presents.
In this tutorial We will go through how to use Atomic Order using CosmWasm Contract with WELLDONE Studio Code Remix Plugin.

:::info
Please refer to [here](https://docs.welldonestudio.io/code/getting-started) to get started.
:::
:::info
If you want to learn the tutorial about CosmWasm Smart Contract You can get started from [CosmWasmBook](https://book.cosmwasm.com/)
:::

## About Spot Market

This Atomic Order will execute on `Spot Market`. `Spot Market` is fully decentralized Spot Exchange which is enabled by the `exchange` module.
In a Spot Market with ticker AAA/BBB, AAA is the base asset, BBB is the quote asset.
In this example we will be exchanging at INJ/USDT Spot Market. So INJ is the base asset and USDT is the quote asset.
The spot market's price refers to how much USDT (the quote asset) is required for one unit of INJ (the base asset). For all spot markets, fees are always paid in the quote asset, e.g. USDT.
In this contract, market buy order will be made when executed. A market buy order will look for a specific `Quantity`ETH (**base asset**) at a specific worst price. The price could be near or at the current ask using the respective contract fund balance (USDT) as collateral (including fees)

## About Atomic Order

This Smart Contract interact with Injective Chain by using atomic mode of execution for market orders in Injective Exchange.
The basic feature of atomic order is that it is notified upon the execution of an order.
Regular order placed were matched only at the EndBlocker, smart contracts did not have ability to use market orders as an atomic primitive for token swaps.

## Order Types

When making a spot order. We have to set the order type. There are 10 types of orders

- BUY (1): A standard buy order to purchase an asset at either the current market price or a set limit price.
- SELL (2): A standard sell order to sell an asset at either the current market price or a set limit price.
- STOP_BUY (3): This order type is not supported for spot markets.
- STOP_SELL (4): This order type is not supported for spot markets.
- TAKE_BUY (5): This order type is not supported for spot markets.
- TAKE_SELL (6): This order type is not supported for spot markets.
- BUY_PO (7): Post-Only Buy. This order type ensures that the order will only be added to the order book and not match with a pre-existing order. It guarantees that you will be the market "maker" and not the "taker".
- SELL_PO (8): Post-Only Sell. Similar to BUY_PO, this ensures that your sell order will only add liquidity to the order book and not match with a pre-existing order.
- BUY_ATOMIC (9): An atomic buy order is a market order that gets executed instantly, bypassing the Frequent Batch Auctions (FBA). It's intended for smart contracts that need to execute a trade instantly. A higher fee is paid defined in the global exchange parameters.
- SELL_ATOMIC (10): An atomic sell order is similar to a BUY_ATOMIC, and it gets executed instantly at the current market price, bypassing the FBA.

## Function of this contract

User can trigger the contract by sending swap_spot message(using `MsgExecuteContract`) with max price and quantity. When Instantiating the contract, User have to include funds for exchange regarding the worst agreed price.
Than smart contract will do the swap(using atomic order execution) after everything is okay smart contract will send back newly obtained coins and leftover funds.

:::info
For the privilege of executing such an atomic market order instantly, an additional trading fee is imposed.
:::

## Before Getting Started

`atomic-order-example` is initially set to buy `inj`. To buy `inj` We first need to get Testnet USDT using [helix](https://testnet.helixapp.com/).
We get it by selling `inj`.
<img src={require('./img/HelixSell.png').default} alt = 'injective-sell-inj' style={{width:'480px'}} />

## Create Template

Create a Atomic Order Example Contract by selecting `atomic-order-example` at the template option
and clicking `Create` button.
<img src={require('./img/SelectTemplate.png').default} alt='injective-create-template' style={{width: '480px'}}/>

### Source Code

The major function inside the contract is `try_swap` which will create Spot Market Order Message upon receiving Execute Contract Message.
`try_swap` is inside the `pub fn execute`.
You can check out the structure of the `ExecuteMsg::SwapSpot` by checking the `msg.rs` or through compilation.

```rust title="contract.rs"
pub fn try_swap(
    deps: DepsMut<InjectiveQueryWrapper>,
    env: Env,
    info: MessageInfo,
    quantity: FPDecimal,
    price: FPDecimal,
) -> Result<Response<InjectiveMsgWrapper>, ContractError> {
    let config = STATE.load(deps.storage)?;
    let contract = env.contract.address;
    let subaccount_id = config.contract_subaccount_id;
    let min_deposit = price * quantity;
    if info.funds.is_empty() {
        return Err(ContractError::CustomError {
            val: "No funds deposited!".to_string(),
        });
    }
    let message_deposit = FPDecimal::from(info.funds[0].amount.u128());
    if message_deposit < min_deposit {
        return Err(ContractError::CustomError {
            val: format!("Deposit: {message_deposit} below min_deposit: {min_deposit}"),
        });
    }
    let order = SpotOrder::new(
        price,
        quantity,
        OrderType::BuyAtomic,
        &config.market_id,
        subaccount_id,
        Some(contract.to_owned()),
        None,
    );

    let coins = &info.funds[0];
    let order_message = SubMsg::reply_on_success(
        create_spot_market_order_msg(contract, order),
        ATOMIC_ORDER_REPLY_ID,
    );
    let response = Response::new().add_submessage(order_message);

    let cache = SwapCacheState {
        sender_address: info.sender.to_string(),
        deposited_amount: coins.clone(),
    };
    SWAP_OPERATION_STATE.save(deps.storage, &cache)?;

    Ok(response)
}
```

## Compile the Source Code

Select the `injective/atomic-order-example` to compile and click `Compile` button.
<img src={require('./img/TargetProject.png').default} alt='injective-create-template' style={{width: '480px'}}/>

## Deployment

You need to go through two steps in order to deploy the contract on Injective.

:::info
It may take a few minute to compile the contract.
:::

### Store Code

After Compile is done. `Store Code` button will appear.
We need to set the fund for executing the contract.
Set the fund more than 50 INJ. (We are currently on Testnet which means we are using Testnet INJ)
<img src={require('./img/StoreCode.png').default} alt='injective-create-template' style={{width: '480px'}}/>

You can click on Approve.
<img src={require('./img/StoreCodeApprove.png').default} alt='injective-create-template' style={{width: '480px'}}/>

### Instantiate

When Store Code is finished We now can instantiate the contract using the Code ID.
We need to set the Market ID. Currently on Injective Testnet there are Spot Market and Derivative Market.
We will use the Spot Market ID which is `0x0611780ba69656949525013d947713300f56c37b6175e02f26bffa495c3208fe`.
(You can find it [here](https://testnet.explorer.injective.network/markets/?includeLowVolumeMarkets=false&selectedMarketType=all))

### Execute Contract

Since this smart contract doesn't have query.(You can add the custom query entry point if you want to query the state of the contract).
We will go through Executing the contract in other words triggering the contract.
As mentioned above by triggering this contract contract will perform swap on their behalf.

First before setting the price and quantity. We will check out some information about the spot market.
(You can find it [here](https://testnet.explorer.injective.network/markets/spot/0x0611780ba69656949525013d947713300f56c37b6175e02f26bffa495c3208fe/))
We found out that it is a Spot Market INJ/USDT.
After that We need to see the orderbook for the price and quantity We want to put.
Using this

```
curl -X 'GET' \
  'https://testnet.sentry.exchange.grpc-web.injective.network/api/exchange/spot/v2/orderbook/0x0611780ba69656949525013d947713300f56c37b6175e02f26bffa495c3208fe' \
  -H 'accept: application/json'
```

We will get the response of the current orderbook on the market.

```
{
	"orderbook": {
		"buys": [{
			"price": "0.000000000018334",
			"quantity": "385800000000000000000",
			"timestamp": 1724945320948
		}, {
			"price": "0.000000000018",
			"quantity": "3300000000000000000",
			"timestamp": 1724941544242
		}, {
			"price": "0.000000000017948",
			"quantity": "716000000000000000000",
			"timestamp": 1724945320948
		},
		...
		],
		"sells": [{
			"price": "0.000000000020001",
			"quantity": "4968877000000000000000",
			"timestamp": 1725241473004
		}, {
			"price": "0.000000000020051",
			"quantity": "4956487000000000000000",
			"timestamp": 1725241473004
		}, {
			"price": "0.000000000020101",
			"quantity": "4944158000000000000000",
			"timestamp": 1725241473004
		},
		...
		],
		"sequence": 22482495,
		"timestamp": 1725241473004
	}
}
```

Since we are buying Injective. We will get the worst price from `sells`.

:::info
The worst price differs between markets and may change. Please check the orderbook when executing the contract.
:::

`Price` is how much the buyer would pay for 1 INJ in USDT. So We will send the message with `0.000000000020101` which is `20.101 USDT`. And `Quantity` means how many INJ you would like to buy.
We will send the message with funds. since we are buying with worst price of 20 USDT, set the fund to 30 USDT.
After Everything is set, hit the execute button.

## Checking out the result after atomic order was completed

After you got the txHash you can check the result at [Injective Explorer](https://testnet.explorer.injective.network/transaction/0x1d4b9869f9304cf1d13f156a0affcdc2803e5a034f3a09fa4e28db69d06b65da/).
Additionally using [Helix](https://testnet.helixapp.com/portfolio/balances) you can check your balance.
Or using the Curl below you can check your orderHistory.

```
curl -X 'GET' \
  https://testnet.sentry.exchange.grpc-web.injective.network/api/exchange/spot/v1/ordersHistory?subaccountId=<Contract's subaccountId>&marketId=&activeMarketsOnly=false&skip=0&limit=100&orderTypes=buy&direction=&startTime=&endTime=&state=filled&executionTypes=market&executionTypes=market&tradeId=&cid=\
  -H 'accept: application/json'
```

:::info
Make sure the sub-account is Instantiated Contract's subAccountID.
:::

### Reference

[atomic-order-example](https://github.com/InjectiveLabs/cw-injective/tree/docs/contracts/atomic-order-example)
