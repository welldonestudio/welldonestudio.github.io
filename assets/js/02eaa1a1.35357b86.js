"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d}});var i=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],r={title:"Challenges and Limitations of Sui Move Decompiler in Smart Contract Verification",description:"Why Decompiler Alone Might Not Be Sufficient for Contract Verification?",sidebar_position:6},c="Challenges and Limitations of Sui Move Decompiler in Smart Contract Verification",s={unversionedId:"tutorials/sui-decompiler/index",id:"tutorials/sui-decompiler/index",title:"Challenges and Limitations of Sui Move Decompiler in Smart Contract Verification",description:"Why Decompiler Alone Might Not Be Sufficient for Contract Verification?",source:"@site/docs/tutorials/sui-decompiler/index.md",sourceDirName:"tutorials/sui-decompiler",slug:"/tutorials/sui-decompiler/",permalink:"/tutorials/sui-decompiler/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/sui-decompiler/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Challenges and Limitations of Sui Move Decompiler in Smart Contract Verification",description:"Why Decompiler Alone Might Not Be Sufficient for Contract Verification?",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Injective Atomic Order",permalink:"/tutorials/injective-atomic-order/"},next:{title:"SUI Coin Deployment",permalink:"/tutorials/sui-move-coin/"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Decompiler Benefits and Limitations",id:"understanding-decompiler-benefits-and-limitations",level:2},{value:"Decompiler&#39;s Limitations",id:"decompilers-limitations",level:2},{value:"Enhancing Smart Contract Transparency",id:"enhancing-smart-contract-transparency",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"challenges-and-limitations-of-sui-move-decompiler-in-smart-contract-verification"},"Challenges and Limitations of Sui Move Decompiler in Smart Contract Verification"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"author-sm"},"Oct 24, 2024"),(0,a.kt)("div",{className:"author-div"},(0,a.kt)("div",{className:"author-avatars"},(0,a.kt)("a",{href:"https://github.com/altpd13",target:"_blank"},(0,a.kt)("img",{src:"https://avatars.githubusercontent.com/u/69383768?v=4"}))),(0,a.kt)("div",null,(0,a.kt)("span",{className:"author-name"},"Minseok Kim"),(0,a.kt)("br",null),(0,a.kt)("span",{className:"author-sm"},"Software Engineer, DSRV ")))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Disclaimer: This article is intended solely for educational purposes to understand the potential limitations of decompilation tools, such as Revela, when auditing Sui Move contracts. The information provided is not intended to encourage, condone, or support any misuse of decompilation software or methods for unauthorized purposes. Always consult legal and security experts when working with or auditing smart contracts.")),(0,a.kt)("p",null,"Move on Sui is a powerful programming language that enables developers to create secure and efficient smart contracts with reduced concerns over security risks and resource management. As DApps, DeFi protocols, NFTs, and tokens continue to expand on the Sui blockchain, Move on Sui helps reduce vulnerabilities that might otherwise compromise these projects. However, there remains a notable shortage of open-source projects within this ecosystem."),(0,a.kt)("p",null,"Open-source projects bring transparency, allowing developers and users to publicly audit smart contracts and verify their integrity. Yet, an analysis on DefiLlama of the top ten projects by total value locked (TVL) shows that only four of these are open-source. NFTs and tokens also demonstrate similarly low levels of open-source adoption, limiting transparency across the space."),(0,a.kt)("p",null,"To solve this issue, ",(0,a.kt)("a",{parentName:"p",href:"https://revela.verichains.io/"},"Revela Decompiler"),", developed by ",(0,a.kt)("a",{parentName:"p",href:"https://verichains.io/"},"veriChains"),", provides the ability to decompile Move bytecode, enabling users to inspect the code of non-open-source smart contracts. By examining decompiled code, Users can assess the legitimacy and functionality of non-open-source contracts."),(0,a.kt)("h2",{id:"understanding-decompiler-benefits-and-limitations"},"Understanding Decompiler Benefits and Limitations"),(0,a.kt)("p",null,"Using a decompiler offers several advantages when auditing code, especially within the Sui blockchain ecosystem. The primary benefit is that with only on-chain data, users can effectively audit smart contracts. This means that even closed-source contracts can be analyzed for security, integrity, and functionality. In this way, no contract can completely hide its code from the public."),(0,a.kt)("p",null,"However, there are important limitations to consider with Revela Decompiler:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("b",null,"Original Variable Names Are Lost"),": Decompiled code cannot restore the original names of variables, which often makes understanding specific functions and logic more challenging."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("b",null,"Unused Variables Are Omitted"),": If variables are initialized but never used, they do not appear in the decompiled output, which can obscure certain aspects of the original code structure and intent."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("b",null,"Package Naming Is Obscured"),": Package names are displayed as generic `packageIds`, making it difficult to discern specific packages and resulting in less comprehensible code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("b",null,"Decompiled Code Is Not Directly Recompilable"),": Unlike source code, decompiled code cannot be directly recompiled due to structural and syntactical discrepancies introduced during the decompilation process.")),(0,a.kt)("p",null,"Let\u2019s look at some example code to illustrate these limitations in practice."),(0,a.kt)("h2",{id:"decompilers-limitations"},"Decompiler's Limitations"),(0,a.kt)("p",null,'The Party contract is a simple smart contract that includes a shared object called Balloon. The primary functionality of this contract is straightforward: users can "pop" the balloon, changing its state to signify that it has been interacted with. However, several additional, unusual functions add unexpected behaviors to the contract.'),(0,a.kt)("p",null,"This is the original source code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'module exploit_final::exploits {\n    \n    const HelloWorld:u256 = 0;\n    \n    const HELLO_WORLD: vector<u8> = b"Hello, World!";\n    \n    public struct Balloon has key {\n        id: UID,\n        popped: bool\n    }\n    \n    public struct FakeBalloon has key {\n        id: UID,\n        popped: bool\n    }\n    \n    fun init(ctx: &mut TxContext) {\n        let iamnumber: u8 = 0;\n        make_new_balloon(ctx);\n    }\n    \n    public entry fun fill_up_balloon (ctx: &mut TxContext) {\n        make_new_balloon(ctx);\n    }\n    \n    public entry fun fill_up_balloon_with_malicious_action(ctx: &mut TxContext) {\n        make_new_balloon(ctx);\n        let malicious_stuff = malicious_action(ctx) + 1;\n    }\n\n    public entry fun fill_up_balloon_with_hidden_code(ctx: &mut TxContext) {\n        if(false){\n            malicious_action(ctx);\n        } else {\n            make_new_balloon(ctx);\n        }\n    }\n    \n    fun make_new_balloon(ctx: &mut TxContext) {\n        let balloon = Balloon {\n            id: object::new(ctx),\n            popped:false\n        };\n        transfer::share_object(balloon);\n    }\n    \n    fun malicious_action(ctx: &mut TxContext):u8 {\n        let fake_balloon = FakeBalloon {\n            id: object::new(ctx),\n            popped: false\n        };\n        transfer::share_object(fake_balloon);\n        1\n    }\n}\n')),(0,a.kt)("p",null,"The code below is decompiled code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"module 0xdee46963f2881139948931c1152dde50589a780120ba8c9bf9536ea6cb871569::exploits {\n    struct Balloon has key {\n        id: 0x2::object::UID,\n        popped: bool,\n    }\n    \n    struct FakeBalloon has key {\n        id: 0x2::object::UID,\n        popped: bool,\n    }\n    \n    public entry fun fill_up_balloon(arg0: &mut 0x2::tx_context::TxContext) {\n        make_new_balloon(arg0);\n    }\n    \n    public entry fun fill_up_balloon_with_hidden_code(arg0: &mut 0x2::tx_context::TxContext) {\n        make_new_balloon(arg0);\n    }\n    \n    public entry fun fill_up_balloon_with_malicious_action(arg0: &mut 0x2::tx_context::TxContext) {\n        make_new_balloon(arg0);\n    }\n    \n    fun init(arg0: &mut 0x2::tx_context::TxContext) {\n        make_new_balloon(arg0);\n    }\n    \n    fun make_new_balloon(arg0: &mut 0x2::tx_context::TxContext) {\n        let v0 = Balloon{\n            id     : 0x2::object::new(arg0), \n            popped : false,\n        };\n        0x2::transfer::share_object<Balloon>(v0);\n    }\n    \n    fun malicious_action(arg0: &mut 0x2::tx_context::TxContext) : u8 {\n        let v0 = FakeBalloon{\n            id     : 0x2::object::new(arg0), \n            popped : false,\n        };\n        0x2::transfer::share_object<FakeBalloon>(v0);\n        1\n    }\n    \n    // decompiled from Move bytecode v6\n}\n")),(0,a.kt)("p",null,"Using a decompiler to audit Sui Move contracts has several limitations that can impact code readability, usability, and accuracy:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("b",null,"Variable and Module Renaming"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As mentioned, decompilers tend to replace original variable names with generic identifiers like ",(0,a.kt)("inlineCode",{parentName:"li"},"v0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"v1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"arg0"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"arg1"),". Additionally, modules may appear with generic labels such as ",(0,a.kt)("inlineCode",{parentName:"li"},"packageID"),", which significantly reduces code readability and makes it challenging for auditors to understand the exact functionality.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("b",null,"Inability to Directly Recompile Decompiled Code"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Decompiled code cannot be directly recompiled due to the complexity of the Move compiler\u2019s rules, which a decompiler might struggle to handle. This is a critical issue because it indicates that the decompilation is incomplete or inaccurate. If users cannot recompile the decompiled code and verify its functionality, they risk overlooking potential vulnerabilities.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("b",null,"MisMatch with Original Source Code"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The most significant limitation is that decompiled code cannot be a 100% replica of the original source code. Certain aspects, such as function names, comments, and inline documentation, are lost in decompilation. This mismatch prevents the decompiled version from providing a fully transparent view of the original contract\u2019s behavior.")),(0,a.kt)("p",null,"Through code obfuscation, smart contract developers can intentionally hide some parts of the original source code, further complicating the decompiler\u2019s task. Obfuscation techniques can include renaming functions to confusing identifiers, adding dead code, or using complex control flow, all of which can make the decompiled output even harder to interpret."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can read more about ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Obfuscation_(software)"},"Code Obfuscation here"))),(0,a.kt)("p",null,"And here is the examples of using code obfuscation."),(0,a.kt)("p",null,"This is the orignal code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public entry fun fill_up_balloon_with_hidden_code(ctx: &mut TxContext) {\n        if(false){\n            // this part will never be executed\n            malicious_action(ctx);\n        } else {\n            make_new_balloon(ctx);\n        }\n    }\n")),(0,a.kt)("p",null,"And this is the decompiled code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public entry fun fill_up_balloon_with_hidden_code(arg0: &mut 0x2::tx_context::TxContext) {\n  make_new_balloon(arg0);\n}\n")),(0,a.kt)("p",null,"As you can see ",(0,a.kt)("inlineCode",{parentName:"p"},"malicious_action")," part is stripped(if else is gone too) because that part will never be executed.\nBut this only strips the part of the original code which has no function at all."),(0,a.kt)("b",null,"This code obfuscation could be really exploited."),"`fill_up_balloon_with_malicious_action` has `malicious_action` as well.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public entry fun fill_up_balloon_with_malicious_action(ctx: &mut TxContext) {\n    make_new_balloon(ctx);\n    let malicious_stuff = malicious_action(ctx) + 1;\n}\n")),(0,a.kt)("p",null,"but this time when it's decompiled"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public entry fun fill_up_balloon_with_malicious_action(arg0: &mut 0x2::tx_context::TxContext) {\n    make_new_balloon(arg0);\n}\n")),(0,a.kt)("p",null,"Whole ",(0,a.kt)("inlineCode",{parentName:"p"},"malicious_action")," is gone. And what is more terrible is that when this function is called."),(0,a.kt)("img",{src:n(22215).Z,alt:"execute-sui-decompiler",style:{width:"960px"}}),(0,a.kt)("p",null,"When user can only audit the contract through decompile they will probably think ",(0,a.kt)("inlineCode",{parentName:"p"},"fill_up_balloon_with_malicious_action")," will only execute ",(0,a.kt)("inlineCode",{parentName:"p"},"make_new_balloon")," but ",(0,a.kt)("inlineCode",{parentName:"p"},"FakeBalloon")," have been created by ",(0,a.kt)("inlineCode",{parentName:"p"},"malicious_action"),".\nThough the ",(0,a.kt)("inlineCode",{parentName:"p"},"malicious_action")," is a example function and present inside the module. But hackers can use code obfuscation to make function unreadable when decompiled."),(0,a.kt)("p",null,"The most important thing is that decompiled code is different from orignal source code."),(0,a.kt)("h2",{id:"enhancing-smart-contract-transparency"},"Enhancing Smart Contract Transparency"),(0,a.kt)("p",null,"Scams and phishing attacks can happen in various forms, including malicious URLs, fake websites, and scam contracts. While users can protect themselves against phishing links and fake websites with caution,but avoiding scams embedded within smart contracts requires more robust methods than caution alone."),(0,a.kt)("p",null,"Using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.welldonestudio.io/code/verification-api/suimove"},"WELLDONE Studio Verification API"),", contract deployers can verify their smart contracts to ensure the deployed bytecode is an exact match to the source code. This means that the source code and the deployed contract are 100% identical, allowing users to trust that the contract\u2019s behavior matches the developer's intent."),(0,a.kt)("p",null,"Users and developers can verify it with the API or verify contracts directly on SuiScan to confirm the integrity and authenticity of smart contracts before interaction."),(0,a.kt)("img",{src:n(70485).Z,alt:"verify-sui-decompiler",style:{width:"960px"}}))}m.isMDXComponent=!0},22215:function(e,t,n){t.Z=n.p+"assets/images/Execute-c45df50c084a6233bd84a9a10a8b31af.png"},70485:function(e,t,n){t.Z=n.p+"assets/images/Verify-fda94d1f8d32d2a70ccf5ab787072a62.png"}}]);