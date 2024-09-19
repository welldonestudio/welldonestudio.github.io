"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[3504],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"Injective Atomic Order",description:"Example contract on how to do atomic market orders on Injective incl handling the response",sidebar_position:6},s="Injective Atomic Order Example Contract",l={unversionedId:"tutorials/injective-atomic-order/index",id:"tutorials/injective-atomic-order/index",title:"Injective Atomic Order",description:"Example contract on how to do atomic market orders on Injective incl handling the response",source:"@site/docs/tutorials/injective-atomic-order/index.md",sourceDirName:"tutorials/injective-atomic-order",slug:"/tutorials/injective-atomic-order/",permalink:"/ko/tutorials/injective-atomic-order/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/injective-atomic-order/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Injective Atomic Order",description:"Example contract on how to do atomic market orders on Injective incl handling the response",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"APTOS Coin Deployment",permalink:"/ko/tutorials/aptos-move-coin/"},next:{title:"SUI Coin Deployment",permalink:"/ko/tutorials/sui-move-coin/"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"About Spot Market",id:"about-spot-market",level:2},{value:"About Atomic Order",id:"about-atomic-order",level:2},{value:"Order Types",id:"order-types",level:2},{value:"Function of this contract",id:"function-of-this-contract",level:2},{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Create Template",id:"create-template",level:2},{value:"Source Code",id:"source-code",level:3},{value:"Compile the Source Code",id:"compile-the-source-code",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Store Code",id:"store-code",level:3},{value:"Instantiate",id:"instantiate",level:3},{value:"Execute Contract",id:"execute-contract",level:3},{value:"Checking out the result after atomic order was completed",id:"checking-out-the-result-after-atomic-order-was-completed",level:2},{value:"Reference",id:"reference",level:3}],u={toc:d};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"injective-atomic-order-example-contract"},"Injective Atomic Order Example Contract"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"author-sm"},"Sep 19, 2024"),(0,a.kt)("div",{className:"author-div"},(0,a.kt)("div",{className:"author-avatars"},(0,a.kt)("a",{href:"https://github.com/altpd13",target:"_blank"},(0,a.kt)("img",{src:"https://avatars.githubusercontent.com/u/69383768?v=4"}))),(0,a.kt)("div",null,(0,a.kt)("span",{className:"author-name"},"Minseok Kim"),(0,a.kt)("br",null),(0,a.kt)("span",{className:"author-sm"},"Software Engineer, DSRV ")))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Injective is Sector Specific Block Chain built for next-gen Defi. Atomic Order is one of the feature injective presents.\nIn this tutorial We will go through how to use Atomic Order using CosmWasm Contract with WELLDONE Studio Code Remix Plugin."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/code/getting-started"},"here")," to get started.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you want to learn the tutorial about CosmWasm Smart Contract You can get started from ",(0,a.kt)("a",{parentName:"p",href:"https://book.cosmwasm.com/"},"CosmWasmBook"))),(0,a.kt)("h2",{id:"about-spot-market"},"About Spot Market"),(0,a.kt)("p",null,"This Atomic Order will execute on ",(0,a.kt)("inlineCode",{parentName:"p"},"Spot Market"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Spot Market")," is fully decentralized Spot Exchange which is enabled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"exchange")," module.\nIn a Spot Market with ticker AAA/BBB, AAA is the base asset, BBB is the quote asset.\nIn this example we will be exchanging at INJ/USDT Spot Market. So INJ is the base asset and USDT is the quote asset.\nThe spot market's price refers to how much USDT (the quote asset) is required for one unit of INJ (the base asset). For all spot markets, fees are always paid in the quote asset, e.g. USDT.\nIn this contract, market buy order will be made when executed. A market buy order will look for a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Quantity"),"ETH (",(0,a.kt)("strong",{parentName:"p"},"base asset"),") at a specific worst price. The price could be near or at the current ask using the respective contract fund balance (USDT) as collateral (including fees)"),(0,a.kt)("h2",{id:"about-atomic-order"},"About Atomic Order"),(0,a.kt)("p",null,"This Smart Contract interact with Injective Chain by using atomic mode of execution for market orders in Injective Exchange.\nThe basic feature of atomic order is that it is notified upon the execution of an order.\nRegular order placed were matched only at the EndBlocker, smart contracts did not have ability to use market orders as an atomic primitive for token swaps."),(0,a.kt)("h2",{id:"order-types"},"Order Types"),(0,a.kt)("p",null,"When making a spot order. We have to set the order type. There are 10 types of orders"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BUY (1): A standard buy order to purchase an asset at either the current market price or a set limit price."),(0,a.kt)("li",{parentName:"ul"},"SELL (2): A standard sell order to sell an asset at either the current market price or a set limit price."),(0,a.kt)("li",{parentName:"ul"},"STOP_BUY (3): This order type is not supported for spot markets."),(0,a.kt)("li",{parentName:"ul"},"STOP_SELL (4): This order type is not supported for spot markets."),(0,a.kt)("li",{parentName:"ul"},"TAKE_BUY (5): This order type is not supported for spot markets."),(0,a.kt)("li",{parentName:"ul"},"TAKE_SELL (6): This order type is not supported for spot markets."),(0,a.kt)("li",{parentName:"ul"},'BUY_PO (7): Post-Only Buy. This order type ensures that the order will only be added to the order book and not match with a pre-existing order. It guarantees that you will be the market "maker" and not the "taker".'),(0,a.kt)("li",{parentName:"ul"},"SELL_PO (8): Post-Only Sell. Similar to BUY_PO, this ensures that your sell order will only add liquidity to the order book and not match with a pre-existing order."),(0,a.kt)("li",{parentName:"ul"},"BUY_ATOMIC (9): An atomic buy order is a market order that gets executed instantly, bypassing the Frequent Batch Auctions (FBA). It's intended for smart contracts that need to execute a trade instantly. A higher fee is paid defined in the global exchange parameters."),(0,a.kt)("li",{parentName:"ul"},"SELL_ATOMIC (10): An atomic sell order is similar to a BUY_ATOMIC, and it gets executed instantly at the current market price, bypassing the FBA.")),(0,a.kt)("h2",{id:"function-of-this-contract"},"Function of this contract"),(0,a.kt)("p",null,"User can trigger the contract by sending swap_spot message(using ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgExecuteContract"),") with max price and quantity. When Instantiating the contract, User have to include funds for exchange regarding the worst agreed price.\nThan smart contract will do the swap(using atomic order execution) after everything is done, smart contract will send back newly obtained coins and leftover funds."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For the privilege of executing such an atomic market order instantly, an additional trading fee is imposed.")),(0,a.kt)("h2",{id:"before-getting-started"},"Before Getting Started"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"atomic-order-example")," is initially set to buy ",(0,a.kt)("inlineCode",{parentName:"p"},"inj"),". To buy ",(0,a.kt)("inlineCode",{parentName:"p"},"inj")," We first need to get Testnet USDT using ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.helixapp.com/"},"helix"),".\nWe get it by selling ",(0,a.kt)("inlineCode",{parentName:"p"},"inj"),"."),(0,a.kt)("img",{src:n(74584).Z,alt:"injective-sell-inj",style:{width:"480px"}}),(0,a.kt)("h2",{id:"create-template"},"Create Template"),(0,a.kt)("p",null,"Create a Atomic Order Example Contract by selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic-order-example")," at the template option\nand clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," button."),(0,a.kt)("img",{src:n(44262).Z,alt:"injective-create-template",style:{width:"480px"}}),(0,a.kt)("h3",{id:"source-code"},"Source Code"),(0,a.kt)("p",null,"The major function inside the contract is ",(0,a.kt)("inlineCode",{parentName:"p"},"try_swap")," which will create Spot Market Order Message upon receiving Execute Contract Message.\n",(0,a.kt)("inlineCode",{parentName:"p"},"try_swap")," is inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"pub fn execute"),".\nYou can check out the structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecuteMsg::SwapSpot")," by checking the ",(0,a.kt)("inlineCode",{parentName:"p"},"msg.rs")," or through compilation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="contract.rs"',title:'"contract.rs"'},'pub fn try_swap(\n    deps: DepsMut<InjectiveQueryWrapper>,\n    env: Env,\n    info: MessageInfo,\n    quantity: FPDecimal,\n    price: FPDecimal,\n) -> Result<Response<InjectiveMsgWrapper>, ContractError> {\n    let config = STATE.load(deps.storage)?;\n    let contract = env.contract.address;\n    let subaccount_id = config.contract_subaccount_id;\n    let min_deposit = price * quantity;\n    if info.funds.is_empty() {\n        return Err(ContractError::CustomError {\n            val: "No funds deposited!".to_string(),\n        });\n    }\n    let message_deposit = FPDecimal::from(info.funds[0].amount.u128());\n    if message_deposit < min_deposit {\n        return Err(ContractError::CustomError {\n            val: format!("Deposit: {message_deposit} below min_deposit: {min_deposit}"),\n        });\n    }\n    let order = SpotOrder::new(\n        price,\n        quantity,\n        OrderType::BuyAtomic,\n        &config.market_id,\n        subaccount_id,\n        Some(contract.to_owned()),\n        None,\n    );\n\n    let coins = &info.funds[0];\n    let order_message = SubMsg::reply_on_success(\n        create_spot_market_order_msg(contract, order),\n        ATOMIC_ORDER_REPLY_ID,\n    );\n    let response = Response::new().add_submessage(order_message);\n\n    let cache = SwapCacheState {\n        sender_address: info.sender.to_string(),\n        deposited_amount: coins.clone(),\n    };\n    SWAP_OPERATION_STATE.save(deps.storage, &cache)?;\n\n    Ok(response)\n}\n')),(0,a.kt)("h2",{id:"compile-the-source-code"},"Compile the Source Code"),(0,a.kt)("p",null,"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"injective/atomic-order-example")," to compile and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Compile")," button."),(0,a.kt)("img",{src:n(25025).Z,alt:"injective-create-template",style:{width:"480px"}}),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"You need to go through two steps in order to deploy the contract on Injective."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It may take a few minute to compile the contract.")),(0,a.kt)("h3",{id:"store-code"},"Store Code"),(0,a.kt)("p",null,"After Compile is done. ",(0,a.kt)("inlineCode",{parentName:"p"},"Store Code")," button will appear.\nWe need to set the fund for executing the contract.\nSet the fund more than 50 INJ. (We are currently on Testnet which means we are using Testnet INJ)"),(0,a.kt)("img",{src:n(57453).Z,alt:"injective-create-template",style:{width:"480px"}}),(0,a.kt)("p",null,"You can click on Approve."),(0,a.kt)("img",{src:n(34791).Z,alt:"injective-create-template",style:{width:"480px"}}),(0,a.kt)("h3",{id:"instantiate"},"Instantiate"),(0,a.kt)("p",null,"When Store Code is finished We now can instantiate the contract using the Code ID.\nWe need to set the Market ID. Currently on Injective Testnet there are Spot Market and Derivative Market.\nWe will use the Spot Market ID which is ",(0,a.kt)("inlineCode",{parentName:"p"},"0x0611780ba69656949525013d947713300f56c37b6175e02f26bffa495c3208fe"),".\n(You can find it ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.explorer.injective.network/markets/?includeLowVolumeMarkets=false&selectedMarketType=all"},"here"),")"),(0,a.kt)("h3",{id:"execute-contract"},"Execute Contract"),(0,a.kt)("p",null,"Since this smart contract doesn't have query.(You can add the custom query entry point if you want to query the state of the contract).\nWe will go through Executing the contract in other words triggering the contract.\nAs mentioned above by triggering this contract contract will perform swap on their behalf."),(0,a.kt)("p",null,"First before setting the price and quantity. We will check out some information about the spot market.\n(You can find it ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.explorer.injective.network/markets/spot/0x0611780ba69656949525013d947713300f56c37b6175e02f26bffa495c3208fe/"},"here"),")\nWe found out that it is a Spot Market INJ/USDT.\nAfter that We need to see the orderbook for the price and quantity We want to put."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X 'GET' \\\n  'https://testnet.sentry.exchange.grpc-web.injective.network/api/exchange/spot/v2/orderbook/0x0611780ba69656949525013d947713300f56c37b6175e02f26bffa495c3208fe' \\\n  -H 'accept: application/json'\n")),(0,a.kt)("p",null,"We will get the response of the current orderbook on the market."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "orderbook": {\n        "buys": [{\n            "price": "0.000000000018334",\n            "quantity": "385800000000000000000",\n            "timestamp": 1724945320948\n        }, {\n            "price": "0.000000000018",\n            "quantity": "3300000000000000000",\n            "timestamp": 1724941544242\n        }, {\n            "price": "0.000000000017948",\n            "quantity": "716000000000000000000",\n            "timestamp": 1724945320948\n        },\n        ...\n        ],\n        "sells": [{\n            "price": "0.000000000020001",\n            "quantity": "4968877000000000000000",\n            "timestamp": 1725241473004\n        }, {\n            "price": "0.000000000020051",\n            "quantity": "4956487000000000000000",\n            "timestamp": 1725241473004\n        }, {\n            "price": "0.000000000020101",\n            "quantity": "4944158000000000000000",\n            "timestamp": 1725241473004\n        },\n        ...\n        ],\n        "sequence": 22482495,\n        "timestamp": 1725241473004\n    }\n}\n')),(0,a.kt)("p",null,"Since we are buying Injective. We will get the worst price from ",(0,a.kt)("inlineCode",{parentName:"p"},"sells"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The worst price differs between markets and may change. Please check the orderbook when executing the contract.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Price")," is how much the buyer would pay for 1 INJ in USDT. So We will send the message with ",(0,a.kt)("inlineCode",{parentName:"p"},"0.000000000020101")," which is ",(0,a.kt)("inlineCode",{parentName:"p"},"20.101 USDT"),". And ",(0,a.kt)("inlineCode",{parentName:"p"},"Quantity")," means how many INJ you would like to buy.\nWe will send the message with funds. since we are buying with worst price of 20 USDT, set the fund to 30 USDT.\nAfter Everything is set, hit the execute button."),(0,a.kt)("h2",{id:"checking-out-the-result-after-atomic-order-was-completed"},"Checking out the result after atomic order was completed"),(0,a.kt)("p",null,"After you got the txHash you can check the result at ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.explorer.injective.network/transaction/0x1d4b9869f9304cf1d13f156a0affcdc2803e5a034f3a09fa4e28db69d06b65da/"},"Injective Explorer"),".\nAdditionally using ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.helixapp.com/portfolio/balances"},"Helix")," you can check your balance.\nOr using the Curl below you can check your orderHistory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X 'GET' \\\n  https://testnet.sentry.exchange.grpc-web.injective.network/api/exchange/spot/v1/ordersHistory?subaccountId=<Contract's subaccountId>&marketId=&activeMarketsOnly=false&skip=0&limit=100&orderTypes=buy&direction=&startTime=&endTime=&state=filled&executionTypes=market&executionTypes=market&tradeId=&cid=\\\n  -H 'accept: application/json'\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Make sure the sub-account is Instantiated Contract's subAccountID.")),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/InjectiveLabs/cw-injective/tree/docs/contracts/atomic-order-example"},"atomic-order-example")))}m.isMDXComponent=!0},74584:function(e,t,n){t.Z=n.p+"assets/images/HelixSell-c1d2fa2756bfc87cd6683c1a1f359287.png"},44262:function(e,t,n){t.Z=n.p+"assets/images/SelectTemplate-8a3874d2236657a88bdd4d4fa87c3535.png"},57453:function(e,t,n){t.Z=n.p+"assets/images/StoreCode-9087bd46647f5079784e3f1bb5459eea.png"},34791:function(e,t,n){t.Z=n.p+"assets/images/StoreCodeApprove-fa4e550bcd22023fafe541436e0926c6.png"},25025:function(e,t,n){t.Z=n.p+"assets/images/TargetProject-14c355975fd597cf8e2321f5a68c117a.png"}}]);