"use strict";(self.webpackChunkwelldone_docs=self.webpackChunkwelldone_docs||[]).push([[5661],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(m,".").concat(d)]||c[d]||p[d]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61391:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={title:"Analysis of Latest Arbitrum Stylus SDK Improvements",description:"A comprehensive analysis of Arbitrum Stylus versions, focusing on storage access improvements, caching mechanisms, and performance benchmarks"},m="Analysis of Latest Arbitrum Stylus SDK Improvements",s={unversionedId:"tutorials/arbitrum-stylus-sdk-improvements/index",id:"tutorials/arbitrum-stylus-sdk-improvements/index",title:"Analysis of Latest Arbitrum Stylus SDK Improvements",description:"A comprehensive analysis of Arbitrum Stylus versions, focusing on storage access improvements, caching mechanisms, and performance benchmarks",source:"@site/docs/tutorials/arbitrum-stylus-sdk-improvements/index.md",sourceDirName:"tutorials/arbitrum-stylus-sdk-improvements",slug:"/tutorials/arbitrum-stylus-sdk-improvements/",permalink:"/ko/tutorials/arbitrum-stylus-sdk-improvements/",draft:!1,editUrl:"https://github.com/welldonestudio/welldonestudio.github.io/tree/master/docs/tutorials/arbitrum-stylus-sdk-improvements/index.md",tags:[],version:"current",frontMatter:{title:"Analysis of Latest Arbitrum Stylus SDK Improvements",description:"A comprehensive analysis of Arbitrum Stylus versions, focusing on storage access improvements, caching mechanisms, and performance benchmarks"},sidebar:"tutorialSidebar",previous:{title:"Object Model",permalink:"/ko/tutorials/aptos-account/object-model"},next:{title:"KMS",permalink:"/ko/tutorials/kms/"}},u={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Key Version Differences",id:"key-version-differences",level:2},{value:"1. Storage Access Method Improvements",id:"1-storage-access-method-improvements",level:3},{value:"v0.6.0 Implementation",id:"v060-implementation",level:4},{value:"v0.8.3 Implementation",id:"v083-implementation",level:4},{value:"2. Caching Mechanism Introduction (v0.8.3)",id:"2-caching-mechanism-introduction-v083",level:3},{value:"New Caching Structure",id:"new-caching-structure",level:4},{value:"Performance Comparison Analysis",id:"performance-comparison-analysis",level:2},{value:"Test Case 1",id:"test-case-1",level:3},{value:"v0.6.0 (0xc8ea305a0b398581c86b86b6dae34a1174231e41)",id:"v060-0xc8ea305a0b398581c86b86b6dae34a1174231e41",level:4},{value:"v0.8.3 (0xa6e239120385089595a99dfcbb4a674cfd42ccc3)",id:"v083-0xa6e239120385089595a99dfcbb4a674cfd42ccc3",level:4},{value:"Test Case 2",id:"test-case-2",level:3},{value:"v0.6.0 (0x09c280d33ec019e2b13e29af5a477c69d38ebb53)",id:"v060-0x09c280d33ec019e2b13e29af5a477c69d38ebb53",level:4},{value:"v0.8.3 (0x71f1e0c42428e04786f7a1009367904862a62666)",id:"v083-0x71f1e0c42428e04786f7a1009367904862a62666",level:4},{value:"Performance Improvement Analysis",id:"performance-improvement-analysis",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2},{value:"Official Documentation",id:"official-documentation",level:3},{value:"GitHub Repository",id:"github-repository",level:3}],c={toc:p};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"analysis-of-latest-arbitrum-stylus-sdk-improvements"},"Analysis of Latest Arbitrum Stylus SDK Improvements"),(0,l.kt)("p",null,"Arbitrum Stylus is a programming environment for Arbitrum that enables developers to write smart contracts in various programming languages (Rust, C++, C#, etc.) while maintaining full EVM compatibility. This document provides a detailed comparison between v0.6.0 and v0.8.3 versions, analyzing key differences and performance improvements."),(0,l.kt)("h2",{id:"source-code"},"Source Code"),(0,l.kt)("p",null,"This analysis is based on the benchmark implementation from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dsrvlabs/arbitrum-stylus-advance-feature"},"dsrvlabs/arbitrum-stylus-advance-feature"),", which provides:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Interest calculation smart contract implementations for both v0.6.0 and v0.8.3"),(0,l.kt)("li",{parentName:"ul"},"Performance comparison test cases"),(0,l.kt)("li",{parentName:"ul"},"Detailed benchmark results")),(0,l.kt)("p",null,"The repository contains two main implementations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"counter_v0_6_0/"),": Basic interest calculation functionality"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"counter_v0_8_3/"),": Improved version with cache optimization")),(0,l.kt)("h2",{id:"key-version-differences"},"Key Version Differences"),(0,l.kt)("h3",{id:"1-storage-access-method-improvements"},"1. Storage Access Method Improvements"),(0,l.kt)("h4",{id:"v060-implementation"},"v0.6.0 Implementation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// Storage access method in v0.6.0\nunsafe fn get_word(key: U256) -> B256 {\n    let mut data = B256::ZERO;\n    unsafe { hostio::storage_load_bytes32(B256::from(key).as_ptr(), data.as_mut_ptr()) };\n    data\n}\n")),(0,l.kt)("h4",{id:"v083-implementation"},"v0.8.3 Implementation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'// New storage access method in v0.8.3\nfn get_word(vm: VM, key: U256) -> B256 {\n    cfg_if! {\n        if #[cfg(not(feature = "stylus-test"))] {\n            vm.storage_load_bytes32(key)\n        } else {\n            vm.host.storage_load_bytes32(key)\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Benefits:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improved code stability through VM-based host environment access"),(0,l.kt)("li",{parentName:"ul"},"Consistent storage access method between test and production environments"),(0,l.kt)("li",{parentName:"ul"},"Enhanced type safety and error handling")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Implementation Details:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Access Method Differences")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"v0.6.0: Direct access through global module",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Creates new module instance for each access"),(0,l.kt)("li",{parentName:"ul"},"Higher memory allocation/deallocation overhead"))),(0,l.kt)("li",{parentName:"ul"},"v0.8.3: Access through VM instance",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Reuses existing VM instance"),(0,l.kt)("li",{parentName:"ul"},"Reduced memory allocation/deallocation overhead"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Compilation Optimization")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"v0.6.0: Global module access",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Additional module loading overhead"),(0,l.kt)("li",{parentName:"ul"},"Less efficient compiler optimization"))),(0,l.kt)("li",{parentName:"ul"},"v0.8.3: Direct VM instance access",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Better inline optimization"),(0,l.kt)("li",{parentName:"ul"},"More efficient code generation"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Execution Context")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"v0.6.0: Global context execution",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Potential context switching overhead"),(0,l.kt)("li",{parentName:"ul"},"Less efficient execution environment"))),(0,l.kt)("li",{parentName:"ul"},"v0.8.3: VM context execution",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Direct access without context switching"),(0,l.kt)("li",{parentName:"ul"},"More efficient execution environment"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Gas Cost Impact")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"v0.6.0: Higher gas costs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Additional gas for global module access"),(0,l.kt)("li",{parentName:"ul"},"Increased gas from memory operations"))),(0,l.kt)("li",{parentName:"ul"},"v0.8.3: Optimized gas costs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Gas savings through VM instance reuse"),(0,l.kt)("li",{parentName:"ul"},"Reduced gas from efficient memory usage")))))),(0,l.kt)("h3",{id:"2-caching-mechanism-introduction-v083"},"2. Caching Mechanism Introduction (v0.8.3)"),(0,l.kt)("h4",{id:"new-caching-structure"},"New Caching Structure"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'// Storage access with safety guarantees\npub struct StorageCache;\n\nimpl GlobalStorage for StorageCache {\n    fn get_word(vm: VM, key: U256) -> B256 {\n        cfg_if! {\n            if #[cfg(not(feature = "stylus-test"))] {\n                vm.storage_load_bytes32(key)\n            } else {\n                vm.host.storage_load_bytes32(key)\n            }\n        }\n    }\n}\n\n// Safe storage access with borrow checker\nfn safe_storage_access(vec: &mut StorageVec<StorageU64>) -> U64 {\n    let value = vec.setter(0);  // Returns StorageGuardMut\n    value.set(32.into());\n    value.get()\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Benefits:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reduced gas costs through efficient storage access"),(0,l.kt)("li",{parentName:"ul"},"Improved performance for repeated storage operations"),(0,l.kt)("li",{parentName:"ul"},"Better memory management through VM-based caching"),(0,l.kt)("li",{parentName:"ul"},"Type-safe storage access with Rust borrow checker"),(0,l.kt)("li",{parentName:"ul"},"Prevention of storage aliasing errors")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Implementation Details:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Storage Guards")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"StorageGuard")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"StorageGuardMut")," for safe access"),(0,l.kt)("li",{parentName:"ul"},"Leverages Rust borrow checker for storage safety"),(0,l.kt)("li",{parentName:"ul"},"Prevents concurrent mutable access to same storage location"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Cache Management")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Automatic cache invalidation on contract calls"),(0,l.kt)("li",{parentName:"ul"},"Efficient reuse of cached values"),(0,l.kt)("li",{parentName:"ul"},"Zero-cost abstractions for repeated access"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Safety Features")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Compile-time checks for storage access patterns"),(0,l.kt)("li",{parentName:"ul"},"Prevention of storage aliasing without unsafe code"),(0,l.kt)("li",{parentName:"ul"},"Automatic cache flushing on cross-contract calls")))),(0,l.kt)("h2",{id:"performance-comparison-analysis"},"Performance Comparison Analysis"),(0,l.kt)("h3",{id:"test-case-1"},"Test Case 1"),(0,l.kt)("h4",{id:"v060-0xc8ea305a0b398581c86b86b6dae34a1174231e41"},"v0.6.0 (0xc8ea305a0b398581c86b86b6dae34a1174231e41)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Gas Usage (gwei)"),(0,l.kt)("th",{parentName:"tr",align:null},"Execution Time (ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"Cumulative Interest (ETH)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3237"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"2996"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3434"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3344"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3041"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Average"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3210.40"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")))),(0,l.kt)("h4",{id:"v083-0xa6e239120385089595a99dfcbb4a674cfd42ccc3"},"v0.8.3 (0xa6e239120385089595a99dfcbb4a674cfd42ccc3)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Gas Usage (gwei)"),(0,l.kt)("th",{parentName:"tr",align:null},"Execution Time (ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"Cumulative Interest (ETH)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3297"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3448"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3101"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"2807"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3379"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Average"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000085056"),(0,l.kt)("td",{parentName:"tr",align:null},"3206.40"),(0,l.kt)("td",{parentName:"tr",align:null},"0.055")))),(0,l.kt)("h3",{id:"test-case-2"},"Test Case 2"),(0,l.kt)("h4",{id:"v060-0x09c280d33ec019e2b13e29af5a477c69d38ebb53"},"v0.6.0 (0x09c280d33ec019e2b13e29af5a477c69d38ebb53)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Execution Round"),(0,l.kt)("th",{parentName:"tr",align:null},"Gas Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Execution Time (ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"Calculated Interest (ETH)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"95,127"),(0,l.kt)("td",{parentName:"tr",align:null},"3,458"),(0,l.kt)("td",{parentName:"tr",align:null},"13.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"78,025"),(0,l.kt)("td",{parentName:"tr",align:null},"3,639"),(0,l.kt)("td",{parentName:"tr",align:null},"13.77003645")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"78,025"),(0,l.kt)("td",{parentName:"tr",align:null},"3,068"),(0,l.kt)("td",{parentName:"tr",align:null},"13.770037179098415")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"78,024"),(0,l.kt)("td",{parentName:"tr",align:null},"3,540"),(0,l.kt)("td",{parentName:"tr",align:null},"13.770037179100383565")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"78,024"),(0,l.kt)("td",{parentName:"tr",align:null},"3,524"),(0,l.kt)("td",{parentName:"tr",align:null},"13.770037179100383571")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Average"),(0,l.kt)("td",{parentName:"tr",align:null},"81,445"),(0,l.kt)("td",{parentName:"tr",align:null},"3,445.80"),(0,l.kt)("td",{parentName:"tr",align:null},"13.72")))),(0,l.kt)("h4",{id:"v083-0x71f1e0c42428e04786f7a1009367904862a62666"},"v0.8.3 (0x71f1e0c42428e04786f7a1009367904862a62666)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Execution Round"),(0,l.kt)("th",{parentName:"tr",align:null},"Gas Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Execution Time (ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"Calculated Interest (ETH)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"60,860"),(0,l.kt)("td",{parentName:"tr",align:null},"3,057"),(0,l.kt)("td",{parentName:"tr",align:null},"708.6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"60,860"),(0,l.kt)("td",{parentName:"tr",align:null},"3,600"),(0,l.kt)("td",{parentName:"tr",align:null},"922.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"60,860"),(0,l.kt)("td",{parentName:"tr",align:null},"3,067"),(0,l.kt)("td",{parentName:"tr",align:null},"1,135.6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"60,860"),(0,l.kt)("td",{parentName:"tr",align:null},"3,215"),(0,l.kt)("td",{parentName:"tr",align:null},"1,349.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"60,860"),(0,l.kt)("td",{parentName:"tr",align:null},"3,307"),(0,l.kt)("td",{parentName:"tr",align:null},"1,562.6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Average"),(0,l.kt)("td",{parentName:"tr",align:null},"60,860"),(0,l.kt)("td",{parentName:"tr",align:null},"3,249.20"),(0,l.kt)("td",{parentName:"tr",align:null},"1,135.60")))),(0,l.kt)("h2",{id:"performance-improvement-analysis"},"Performance Improvement Analysis"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Gas Usage")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"22-25% reduction in v0.8.3"),(0,l.kt)("li",{parentName:"ul"},"Enhanced efficiency through caching mechanism"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Execution Time")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"0.12% improvement in v0.8.3"),(0,l.kt)("li",{parentName:"ul"},"Enhanced operation speed through binary exponentiation"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Interest Calculation")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Higher interest calculation in v0.8.3"),(0,l.kt)("li",{parentName:"ul"},"Utilization of accumulated calculation results through caching system"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Stability")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"More consistent gas usage in v0.8.3"),(0,l.kt)("li",{parentName:"ul"},"Improved stability through enhanced state management")))),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"Arbitrum Stylus v0.8.3 shows significant improvements over v0.6.0:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"22-25% improvement in gas efficiency"),(0,l.kt)("li",{parentName:"ol"},"Slight improvement in execution time"),(0,l.kt)("li",{parentName:"ol"},"More accurate interest calculation"),(0,l.kt)("li",{parentName:"ol"},"Enhanced stability")),(0,l.kt)("p",null,"These improvements are particularly pronounced in scenarios involving complex logic and large state changes, where the new caching mechanism and optimized storage access methods can provide even greater efficiency gains. The VM-based approach and improved memory management make it especially effective for handling large-scale operations and complex contract interactions."),(0,l.kt)("p",null,"These improvements are primarily attributed to the introduction of caching mechanisms and algorithm optimizations, providing developers with a more efficient and stable development environment."),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("h3",{id:"official-documentation"},"Official Documentation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.arbitrum.io/stylus/reference/rust-sdk-guide"},"Arbitrum Stylus Rust SDK Guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WASM Documentation"))),(0,l.kt)("h3",{id:"github-repository"},"GitHub Repository"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/OffchainLabs/stylus-sdk-rs"},"Stylus SDK Rust"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/OffchainLabs/stylus-sdk-rs/blob/v0.8.3/stylus-sdk/src/storage/mod.rs"},"storage/mod.rs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/OffchainLabs/stylus-sdk-rs/blob/v0.8.3/stylus-sdk/src/storage/traits.rs"},"storage/traits.rs"))))))}d.isMDXComponent=!0}}]);