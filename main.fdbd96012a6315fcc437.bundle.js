!function(e){function t(t){for(var a,_,s=t[0],i=t[1],l=t[2],c=0,p=[];c<s.length;c++)_=s[c],Object.prototype.hasOwnProperty.call(r,_)&&r[_]&&p.push(r[_][0]),r[_]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=_(_.s=n[0]))}return e}var a={},r={0:0},o=[];function _(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,_),n.l=!0,n.exports}_.m=e,_.c=a,_.d=function(e,t,n){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(_.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)_.d(n,a,function(t){return e[t]}.bind(null,a));return n},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;o.push([295,1]),n()}({15:function(e,t,n){"use strict";(function(e){var a,r=n(286),o=n.n(r);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var _,s,i="https://api.cypress.klaytn.net:8651/",l=new o.a(i),u=l;t.a=u,(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register("https://api.baobab.klaytn.net:8651/","BAOBAB_TESTNET_RPC_URL","C:\\Users\\Admin\\FrontEnd\\src\\klaytn\\caver.js"),_.register("https://api.cypress.klaytn.net:8651/","CYPRESS_MAINNET_RPC_URL","C:\\Users\\Admin\\FrontEnd\\src\\klaytn\\caver.js"),_.register(i,"rpcURL","C:\\Users\\Admin\\FrontEnd\\src\\klaytn\\caver.js"),_.register(l,"caver","C:\\Users\\Admin\\FrontEnd\\src\\klaytn\\caver.js"),_.register(u,"default","C:\\Users\\Admin\\FrontEnd\\src\\klaytn\\caver.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,n(71)(e))},285:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),klaytn_caver__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_App_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(636),_App_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},App=function(_Component){function App(){return _classCallCheck(this,App),_possibleConstructorReturn(this,_getPrototypeOf(App).apply(this,arguments))}return _inherits(App,_Component),_createClass(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"App"},this.props.children)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=App,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(App,"App","C:\\Users\\Admin\\FrontEnd\\src\\App.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\FrontEnd\\src\\App.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(71)(module))},287:function(e,t,n){"use strict";(function(e){var a,r=n(1),o=n.n(r),_=n(292),s=n(33),i=n(288),l=n(289);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,c,p=function(e){return o.a.createElement(_.a,null,o.a.createElement(s.a,{component:e},o.a.createElement("div",null,o.a.createElement(s.a,{exact:!0,path:"/",component:l.a}),o.a.createElement(s.a,{path:"/game",component:i.a}))))},d=p;t.a=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(p,"renderRoutes","C:\\Users\\Admin\\FrontEnd\\src\\routes.js"),u.register(d,"default","C:\\Users\\Admin\\FrontEnd\\src\\routes.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,n(71)(e))},288:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_unity_webgl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(171),react_unity_webgl__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_unity_webgl__WEBPACK_IMPORTED_MODULE_1__),klaytn_caver__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),socket_io_client__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(172),socket_io_client__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__),_Game_scss__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(665),_Game_scss__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_Game_scss__WEBPACK_IMPORTED_MODULE_4__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _readOnlyError(e){throw new Error('"'+e+'" is read-only')}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},client=new socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a("https://blocknation.herokuapp.com/"),Game=function(_React$Component){function Game(e){var t;_classCallCheck(this,Game),(t=_possibleConstructorReturn(this,_getPrototypeOf(Game).call(this,e))).state={progression:0,loaded:!1},t.unityContent=new react_unity_webgl__WEBPACK_IMPORTED_MODULE_1__.UnityContent("/Build/Build.json","/Build/UnityLoader.js"),window.unityContent=t.unityContent,t.unityContent.on("progress",function(e){t.setState({progression:e})}),t.unityContent.on("loaded",function(){setTimeout(function(){var e=sessionStorage.getItem("walletInstance");if(e){window.unityContent.send("GameFather","SetLoginAdress",JSON.parse(e).address);var n={title:"Welcome",message:"Hi "+JSON.parse(e).address,type:"Success",time:2};window.unityContent.send("GameFather","ShowAlert",JSON.stringify(n))}t.setState({loaded:!0})},3e3)}),client.on("buyResult",function(e){var t;t="Error"==e.result?{title:"Error",message:"Error when buy! "+e.message,type:"Error",time:2}:{title:"Success",message:"You own this land. Tx: "+e.message,type:"Success",time:2},window.unityContent.send("GameFather","ShowAlert",JSON.stringify(t)),window.unityContent.send("GameFather","ListenReCheckLandOwner"),console.log("Received data from server: "+JSON.stringify(data))}),client.on("close",function(){console.log("Connection closed! Try to connect"),client=new socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a("https://blocknation.herokuapp.com/")}),t.landContract=new klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.Contract([{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"withdraw",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"mint",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"}],name:"burn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"},{name:"_uri",type:"string"}],name:"setContentURI",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"exists",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"getPlaceInfo",outputs:[{name:"",type:"string"},{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"takeOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newPrice",type:"uint256"}],name:"setTokenPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"contentURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenPrice",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contractBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newRootDataUri",type:"string"}],name:"setRootDataUri",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenId",type:"uint256"}],name:"buy",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_approved",type:"address"},{indexed:!1,name:"_tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_operator",type:"address"},{indexed:!1,name:"_approved",type:"bool"}],name:"ApprovalForAll",type:"event"}],"0xdD25db9C68E98BDAE714Ee7A51f8383B7466fc88");var n=_assertThisInitialized(t);return window.SetFullScreen=function(){console.log("Fullscreen clicked"),n.unityContent.setFullscreen(!0)},window.RequestSignText=function(e){var t=sessionStorage.getItem("walletInstance");if(t){var a=klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.wallet&&klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.wallet[0];a||(_readOnlyError("walletInstance"),a=klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.wallet.add(JSON.parse(t))),klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.sign(e,a.address).then(function(t){var a={raw:e,signed:t};console.log(JSON.stringify(a)),n.unityContent.send("GameFather","ListenTextSigned",JSON.stringify(a))})}else{n.unityContent.send("GameFather","ShowAlert",JSON.stringify({title:"Error",message:"You must login to save work",type:"Error",time:2}))}},window.RequestPasteText=function(e){var t={id:e,text:prompt(e+"\nBlockNation.xyz\nPlease paste here:","")};n.unityContent.send("PasteHelper","GetPastedText",JSON.stringify(t))},window.LandBuyFromUnity=function(e){var t,a,r,o,_;return regeneratorRuntime.async(function(s){for(;;)switch(s.prev=s.next){case 0:if(t=klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.wallet&&klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.wallet[0],console.log("Buy clicked "+e),t){s.next=6;break}return a={title:"Error",message:"You must login to buy land",type:"Error",time:2},n.unityContent.send("GameFather","ShowAlert",JSON.stringify(a)),s.abrupt("return");case 6:return e.indexOf("0x")>=0&&(e=e.substr(2)),r=klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.utils.sha3("buy(uint256)").substr(0,10)+e,s.next=10,regeneratorRuntime.awrap(klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.signTransaction({type:"FEE_DELEGATED_SMART_CONTRACT_EXECUTION",from:t.address,to:"0xdD25db9C68E98BDAE714Ee7A51f8383B7466fc88",data:r,gas:"300000",value:klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.utils.toPeb("0","KLAY")},t.privateKey));case 10:o=s.sent,_=o.rawTransaction,client.emit("rawTransaction",_);case 13:case"end":return s.stop()}})},t}return _inherits(Game,_React$Component),_createClass(Game,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,!this.state.loaded&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"loading"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"".concat(Math.floor(100*this.state.progression),"%")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{height:"200px",width:"200px",src:"/images/loading.svg"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_unity_webgl__WEBPACK_IMPORTED_MODULE_1___default.a,{unityContent:this.unityContent}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Game}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_default=Game,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(client,"client","C:\\Users\\Admin\\FrontEnd\\src\\components\\Game.js"),reactHotLoader.register(Game,"Game","C:\\Users\\Admin\\FrontEnd\\src\\components\\Game.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\FrontEnd\\src\\components\\Game.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(71)(module))},289:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Auth__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(290),_Home_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(667),_Home_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_Home_scss__WEBPACK_IMPORTED_MODULE_2__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Home=function(_React$Component){function Home(){return _classCallCheck(this,Home),_possibleConstructorReturn(this,_getPrototypeOf(Home).apply(this,arguments))}return _inherits(Home,_React$Component),_createClass(Home,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Auth__WEBPACK_IMPORTED_MODULE_1__.a,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe",{src:"#/game"}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Home}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_default=Home,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Home,"Home","C:\\Users\\Admin\\FrontEnd\\src\\components\\Home.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\FrontEnd\\src\\components\\Home.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(71)(module))},290:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(291),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),klaytn_caver__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_Auth_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(666),_Auth_scss__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_Auth_scss__WEBPACK_IMPORTED_MODULE_3__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Auth=function(_Component){function Auth(){var e;return _classCallCheck(this,Auth),_defineProperty(_assertThisInitialized(e=_possibleConstructorReturn(this,_getPrototypeOf(Auth).call(this))),"handleChange",function(t){e.setState(_defineProperty({},t.target.name,t.target.value))}),_defineProperty(_assertThisInitialized(e),"reset",function(){e.setState({keystore:"",privateKey:"",password:"",keystoreMsg:""})}),_defineProperty(_assertThisInitialized(e),"handleImport",function(t){var n=t.target.files[0],a=new FileReader;a.onload=function(t){try{if(!e.checkValidKeystore(t.target.result))return void e.setState({keystoreMsg:"Invalid keystore file."});e.setState({keystore:t.target.result,keystoreMsg:"It is valid keystore. input your password.",keystoreName:n.name},function(){return document.querySelector("#input-password").focus()})}catch(t){return void e.setState({keystoreMsg:"Invalid keystore file."})}},a.readAsText(n)}),_defineProperty(_assertThisInitialized(e),"checkValidKeystore",function(e){var t=JSON.parse(e);return t.version&&t.id&&t.address&&t.crypto}),_defineProperty(_assertThisInitialized(e),"handleLogin",function(){var t=e.state,n=t.accessType,a=t.keystore,r=t.password,o=t.privateKey;if("privateKey"!=n)try{var _=klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.decrypt(a,r).privateKey;e.integrateWallet(_)}catch(t){e.setState({keystoreMsg:"Password doesn't match."})}else e.integrateWallet(o)}),_defineProperty(_assertThisInitialized(e),"getWallet",function(){if(klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.wallet.length)return klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.wallet[0]}),_defineProperty(_assertThisInitialized(e),"integrateWallet",function(t){var n=klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.privateKeyToAccount(t);sessionStorage.setItem("walletInstance",JSON.stringify(n)),location.reload(),e.reset()}),_defineProperty(_assertThisInitialized(e),"removeWallet",function(){klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.wallet.clear(),sessionStorage.removeItem("walletInstance"),location.reload(),e.reset()}),_defineProperty(_assertThisInitialized(e),"toggleAccessType",function(){var t=e.state.accessType;e.setState({accessType:"privateKey"===t?"keystore":"privateKey"},e.reset)}),_defineProperty(_assertThisInitialized(e),"renderAuth",function(){var t=e.state,n=(t.keystore,t.keystoreMsg),a=t.keystoreName,r=t.accessType,o=e.getWallet();return o?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"Auth__label"},"Integrated: "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"Auth__address"},o.address),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"Auth__logout",onClick:e.removeWallet},"Logout")):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"keystore"===r?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"Auth__keystore"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"Auth__label",htmlFor:"keystore"},"Keystore:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"Auth__button",htmlFor:"keystore"},"Upload"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:"Auth__file",id:"keystore",type:"file",onChange:e.handleImport,accept:".json"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"Auth__fileName"},a||"No keystore file...")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"Auth__label",htmlFor:"password"},"Password:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{id:"input-password",className:"Auth__passwordInput",name:"password",type:"password",onChange:e.handleChange})):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"Auth__label"},"Private Key:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:"Auth__input",name:"privateKey",onChange:e.handleChange})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"Auth__button",onClick:e.handleLogin},"Login"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"Auth__keystoreMsg"},n),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"Auth__toggleAccessButton",onClick:e.toggleAccessType},"privateKey"===r?"Want to login with keystore? (click)":"Want to login with privatekey? (click)"))}),e.state={accessType:"keystore",keystore:"",keystoreMsg:"",password:"",privateKey:""},e}return _inherits(Auth,_Component),_createClass(Auth,[{key:"componentWillMount",value:function(){window.caver=klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a;var e=sessionStorage.getItem("walletInstance");if(e)try{klaytn_caver__WEBPACK_IMPORTED_MODULE_2__.a.klay.accounts.wallet.add(JSON.parse(e))}catch(e){sessionStorage.removeItem("walletInstance")}}}]),_createClass(Auth,[{key:"render",value:function(){var e=this.state.keystore;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("Auth",{"Auth--active":!!e})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"Auth__flag"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"Auth__content"},this.renderAuth()))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Auth}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=Auth,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Auth,"Auth","C:\\Users\\Admin\\FrontEnd\\src\\components\\Auth.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\FrontEnd\\src\\components\\Auth.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(71)(module))},295:function(e,t,n){n(296),e.exports=n(482)},482:function(e,t,n){"use strict";n.r(t);var a=n(284),r=n.n(a),o=n(285),_=n(287);n(672),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;r.a.render(Object(_.a)(o.a),document.getElementById("root"))},487:function(e,t,n){var a={"./caver-core-helpers/src/index.js":9,"./caver-core-method/src/index.js":47,"./caver-core-requestmanager/caver-providers-http/src/index.js":251,"./caver-core-requestmanager/caver-providers-ipc/src/index.js":255,"./caver-core-requestmanager/caver-providers-ws/src/index.js":256,"./caver-core-requestmanager/src/index.js":257,"./caver-core-subscriptions/src/index.js":112,"./caver-core/src/index.js":63,"./caver-klay/caver-klay-abi/src/index.js":167,"./caver-klay/caver-klay-accounts/src/index.js":262,"./caver-klay/caver-klay-contract/src/index.js":264,"./caver-klay/caver-klay-personal/src/index.js":265,"./caver-klay/src/index.js":266,"./caver-middleware/src/index.js":166,"./caver-net/src/index.js":113,"./caver-rtm/src/index.js":91,"./caver-utils/iban/src/index.js":249,"./caver-utils/promievent/src/index.js":247,"./caver-utils/src/index.js":18};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=487},499:function(e,t){},501:function(e,t){},535:function(e,t){},536:function(e,t){},579:function(e,t){},636:function(e,t,n){},662:function(e,t){},665:function(e,t,n){},666:function(e,t,n){},667:function(e,t,n){},672:function(e,t,n){}});