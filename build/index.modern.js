import e from"jszip";import"tweetnacl";import"tweetnacl-util";import t from"web3";import n from"@metamask/detect-provider";import r from"protons";import o from"multihashing";import a from"cids";import i from"libp2p";import s from"libp2p-websockets";import c from"libp2p-webrtc-direct";import{NOISE as u}from"libp2p-noise";import d from"libp2p-mplex";import p from"libp2p-kad-dht";import l from"peer-id";import"multiaddr";import y from"libp2p-bootstrap";import m from"it-pipe";import"it-length-prefixed";import"it-pushable";import h from"secrets.js-lit";import g from"uint8arrays/from-string";import f from"uint8arrays/to-string";import w from"it-all";!function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=Object.create((t&&t.prototype instanceof g?t:g).prototype),a=new R(r||[]);return o._invoke=function(e,t,n){var r=p;return function(o,a){if(r===y)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw a;return N()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=A(i,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=y;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?m:l,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p="suspendedStart",l="suspendedYield",y="executing",m="completed",h={};function g(){}function f(){}function w(){}var b={};b[a]=function(){return this};var v=Object.getPrototypeOf,T=v&&v(v(K([])));T&&T!==n&&r.call(T,a)&&(b=T);var S=w.prototype=g.prototype=Object.create(b);function k(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){function n(o,a,i,s){var c=d(e[o],e,a);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then(function(e){n("next",e,i,s)},function(e){n("throw",e,i,s)}):t.resolve(p).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,s)})}s(c.arg)}var o;this._invoke=function(e,r){function a(){return new t(function(t,o){n(e,r,t,o)})}return o=o?o.then(a,a):a()}}function A(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,A(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=d(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function K(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:N}}function N(){return{value:t,done:!0}}return f.prototype=S.constructor=w,w.constructor=f,f.displayName=c(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,s,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},k(E.prototype),E.prototype[i]=function(){return this},e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(S),c(S,s,"Generator"),S[a]=function(){return this},S.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=K,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:K(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}({});try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}();const b={name:"AES-CBC",length:256};var v=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"address payable",name:"relayerAddress",type:"address"},{indexed:!1,internalType:"bytes",name:"functionSignature",type:"bytes"}],name:"MetaTransactionExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"ERC712_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"bytes",name:"functionSignature",type:"bytes"},{internalType:"bytes32",name:"sigR",type:"bytes32"},{internalType:"bytes32",name:"sigS",type:"bytes32"},{internalType:"uint8",name:"sigV",type:"uint8"}],name:"executeMetaTransaction",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"getChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function",constant:!0},{inputs:[],name:"getDomainSeperator",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"nonce",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"isOperator",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setOpenseaProxyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}];const T=r("\nmessage Request {\n  enum Type {\n    HANDSHAKE = 0;\n    GET_KEY_FRAGMENT = 1;\n    STORE_KEY_FRAGMENT = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragment getKeyFragment = 2;\n  optional StoreKeyFragment storeKeyFragment = 3;\n  optional bytes authSig = 4;\n  optional TokenParams tokenParams = 5;\n  optional bytes clientPubKey = 6;\n}\nmessage Response {\n  enum Type {\n    HANDSHAKE_RESPONSE = 0;\n    GET_KEY_FRAGMENT_RESPONSE = 1;\n    STORE_KEY_FRAGMENT_RESPONSE = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragmentResponse getKeyFragmentResponse = 2;\n  optional StoreKeyFragmentResponse storeKeyFragmentResponse = 3;\n  optional bytes serverPubKey = 4;\n}\nmessage GetKeyFragment {\n  required bytes keyId = 1;\n}\nmessage GetKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    NOT_FOUND = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes keyId = 2;\n  optional bytes fragmentValue = 3;\n}\nmessage StoreKeyFragment {\n  required bytes fragmentValue = 1;\n}\nmessage StoreKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    AUTH_FAILURE = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes errorMessage = 2;\n}\nmessage TokenParams {\n  required bytes tokenAddress = 1;\n  required bytes tokenId = 2;\n  required bytes chain = 3;\n}\n"),S={polygon:{contractAddress:"0xb9A323711528D0c5a70df790929f4739f1cDd7fD",chainId:137},ethereum:{contractAddress:"0x55485885e82E25446DEC314Ccb810Bda06B9e01B",chainId:1}};async function k(){if(void 0===window.ethereum)throw new Error({errorCode:"no_wallet",message:"No web3 wallet was found"});const e=await n(),r=(await e.request({method:"eth_requestAccounts"}))[0].toLowerCase();return{web3:new t(e),account:r}}async function E(){let e=localStorage.getItem("lit-auth-signature");e||(await A(),e=localStorage.getItem("lit-auth-signature")),e=JSON.parse(e);const{account:t}=await k();return t!==e.address&&(await A(),e=localStorage.getItem("lit-auth-signature"),e=JSON.parse(e)),e}async function A(){const e=(new Date).toISOString(),t="I am creating an account to use LITs at {{timestamp}}".replace("{{timestamp}}",e),n=await async function({body:e}){const{web3:t,account:n}=await k();console.log("signing with ",n);const r=await t.eth.personal.sign(e,n),o=t.eth.accounts.recover(e,r).toLowerCase();if(console.log("Signature: ",r),console.log("recovered address: ",o),o!==n){const e=`ruh roh, the user signed with a different address (${o}) then they're using with web3 (${n}).  this will lead to confusion.`;throw console.error(e),alert("something seems to be wrong with your wallets message signing.  maybe restart your browser or your wallet.  your recovered sig address does not match your web3 account address"),new Error(e)}return{signature:r,address:o}}({body:t});localStorage.setItem("lit-auth-signature",JSON.stringify({sig:n.signature,derivedVia:"web3.eth.personal.sign",signedMessage:t,address:n.address}))}const x={};async function I(t,n){const r=await async function(e){return await crypto.subtle.importKey("jwk",JSON.parse(e),b,!0,["encrypt","decrypt"])}(n),o=await async function(e,t){const n=await e.slice(0,16).arrayBuffer(),r=await e.slice(16).arrayBuffer();return await crypto.subtle.decrypt({name:"AES-CBC",iv:n},t,r)}(t,r),a=new e;return(await a.loadAsync(o)).files}async function R(e){const t=await e.generateAsync({type:"blob"}),n=await t.arrayBuffer();console.log("blob",t);const r=await async function(){return await crypto.subtle.generateKey(b,!0,["encrypt","decrypt"])}(),o=await async function(e,t){const n=window.crypto.getRandomValues(new Uint8Array(16)),r=await crypto.subtle.encrypt({name:"AES-CBC",iv:n},e,t);return new Blob([n,new Uint8Array(r)],{type:"application/octet-stream"})}(r,n),a=await crypto.subtle.exportKey("jwk",r);return console.log("exportedSymmKey",a),{symmetricKey:JSON.stringify(a),encryptedZip:o}}async function K(e){if(x[e])return x[e];const t=await fetch("https://unpkg.com/"+e);if(!t.ok)throw console.log("error with response: ",t),Error(t.statusText);const n=await t.blob(),r=await(o=n,new Promise((e,t)=>{const n=new FileReader;n.onloadend=()=>{e(n.result)},n.readAsDataURL(o)}));var o;return x[e]=r,r}const N=({tokenAddress:e,tokenId:t,chain:n})=>{const r=e.toLowerCase(),i=t.toString(16).padStart(64,"0"),s=o(Buffer.from(`${r}|${i}|${n}`),"sha2-256");return new a(s).toString()},{Request:F,Response:L,StoreKeyFragmentResponse:_,GetKeyFragmentResponse:C}=T,O={zipAndEncryptString:async function(t){const n=new e;return n.file("string.txt",t),R(n)},zipAndEncryptFiles:async function(t){const n=new e;for(let e=0;e<t.length;e++)n.folder("encryptedAssets").file(t[e].name,t[e]);return R(n)},encryptZip:R,decryptZip:I,connectWeb3:k,checkAndSignAuthMessage:E,createHtmlLIT:async function({title:e,htmlBody:t,css:n,encryptedZipDataUrl:r,tokenAddress:o,tokenId:a,chain:i,npmPackages:s=[]}){let c="";for(let e=0;e<s.length;e++)c+=`<script src="${await K(s[e])}"><\/script>\n`;return`\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>${e}</title>\n    <style id="jss-server-side">${n}</style>\n    ${c}\n    <script>\n      var encryptedZipDataUrl = "${r}"\n      var tokenAddress = "${o}"\n      var tokenId = "${a}"\n      var chain = "${i}"\n      var locked = true\n\n      function litJsSdkLoaded(){\n         var litNodeClient = new LitJsSdk.default.LitNodeClient()\n        litNodeClient.connect()\n        window.litNodeClient = litNodeClient\n      }\n    <\/script>\n    <script onload='litJsSdkLoaded()' src="https://unpkg.com/lit-js-sdk/build/index.web.js"><\/script>\n  </head>\n  <body>\n    <div id="root">${t}</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  `},mintLIT:async function({chain:e,quantity:t}){console.log(`minting ${t} tokens on ${e}`);const n=await E(),{web3:r,account:o}=await k();if(await r.eth.getChainId()!==S[e].chainId)return{errorCode:"wrong_chain"};const a=S[e].contractAddress,i=new r.eth.Contract(v,a);console.log("sending to chain...");try{const e=await i.methods.mint(t).send({from:o});return console.log("txReceipt: ",e),{txHash:e.transactionHash,tokenId:e.events.TransferSingle.returnValues.id,tokenAddress:a,mintingAddress:o,authSig:n}}catch(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})}},toggleLock:async function(){const e=document.getElementById("mediaGridHolder"),t=document.getElementById("lockedHeader");if(window.locked){window.publicContent=e.innerHTML;const n=await E(),r=await window.litNodeClient.getEncryptionKey({tokenAddress:window.tokenAddress,tokenId:window.tokenId,authSig:n,chain:window.chain}),o=await(await fetch(window.encryptedZipDataUrl)).blob(),a=await I(o,r),i=await a["string.txt"].async("text");e.innerHTML=i,t.innerText="UNLOCKED",window.locked=!1}else e.innerHTML=window.publicContent,t.innerText="LOCKED",window.locked=!0},LIT_CHAINS:S,LitNodeClient:class{constructor(e){this.libp2p=null,this.connectedNodes=new Set,this.serverPubKeys={}}async getEncryptionKey({tokenAddress:e,tokenId:t,authSig:n,chain:r}){const o=await this.getEncryptionKeyFragments({tokenAddress:e,tokenId:t,authSig:n,chain:r}),a=h.combine(o),i=Buffer.from(a,"hex").toString();return console.log("recombined symmetric key: "+i),i}async saveEncryptionKey({tokenAddress:e,tokenId:t,symmetricKey:n,authSig:r,chain:o}){console.log(`saveEncryptionKey with tokenAddress ${e} and tokenId ${t} and symmetricKey ${n} and authSig ${r} and chain ${o}`);const a=Array.from(this.connectedNodes),i=a.length,s=Math.floor(i/2),c=Buffer.from(n).toString("hex");console.debug(`splitting up into ${i} shares with a threshold of ${s}`);const u=h.share(c,i,s);if(u.length!==a.length)throw new Error(`kFrags.length (${u.length}) !== nodes.length (${a.length})`);const d=[],p=e.toLowerCase();for(let e=0;e<a.length;e++)console.debug(`storing kFrag in node ${e+1} of ${a.length}`),d.push(this.storeDataWithNode({peerId:a[e],tokenAddress:p,tokenId:t,val:u[e],authSig:r,chain:o}));return await Promise.all(d),console.log("all stored"),{success:!0}}async getEncryptionKeyFragments({tokenAddress:e,tokenId:t,authSig:n,chain:r}){const o=e.toLowerCase(),i=N({tokenAddress:e,tokenId:t,chain:r}),s=new a(i),c=await w(this.libp2p.contentRouting.findProviders(s,{timeout:3e3}));console.log(`Found ${c.length} providers`);const u=[];for(let e=0;e<c.length;e++){const a=c[e].id.toB58String();console.debug(`Getting ${i} from ${a}`),u.push(this.getDataFromNode({peerId:a,tokenAddress:o,tokenId:t,authSig:n,keyId:i,chain:r}))}return await Promise.all(u)}async storeDataWithNode({peerId:e,tokenAddress:t,tokenId:n,val:r,authSig:o,chain:a}){console.debug(`storing data with node ${e} with tokenAddress ${t} and tokenId ${n}`);const i=F.encode({type:F.Type.STORE_KEY_FRAGMENT,storeKeyFragment:{fragmentValue:g(r)},authSig:g(JSON.stringify(o)),tokenParams:{tokenAddress:g(t),tokenId:g(n.toString()),chain:g(a)}});return await this.sendCommandToPeer({peerId:e,data:i})}async getDataFromNode({peerId:e,tokenAddress:t,tokenId:n,keyId:r,authSig:o,chain:a}){console.debug(`getDataFromNode ${e} with keyId ${r}`);const i=F.encode({type:F.Type.GET_KEY_FRAGMENT,getKeyFragment:{keyId:g(r)},authSig:g(JSON.stringify(o)),tokenParams:{tokenAddress:g(t),tokenId:g(n.toString()),chain:g(a)}});return await this.sendCommandToPeer({peerId:e,data:i})}async handshakeWithSgx({peerId:e}){console.debug(`handshakeWithSgx ${e}`);const t=F.encode({type:F.Type.HANDSHAKE});return await this.sendCommandToPeer({peerId:e,data:t})}async sendCommandToPeer({peerId:e,data:t}){var n=this;const r=this.libp2p.connectionManager.get(l.createFromB58String(e)),{stream:o}=await r.newStream(["/lit/1.0.0"]);console.debug(`sendCommandToPeer ${e}`);let a=null;return await m([t],o,async function(t){console.debug("in sendCommandToPeer callback");const{value:r}=await t.next();console.debug("got value from source.next()",r);const o=L.decode(r.slice());o.type===L.Type.HANDSHAKE_RESPONSE?(n.serverPubKeys[e]=o.serverPubKey,console.log("handshake success, got server pub key ",o.serverPubKey),a=!0):o.type===L.Type.STORE_KEY_FRAGMENT_RESPONSE?o.storeKeyFragmentResponse.result===_.Result.SUCCESS?(console.log("success storing key fragment"),a=!0):(console.log("error storing key fragment: "),console.log(f(o.storeKeyFragmentResponse.errorMessage)),a=!1):o.type===L.Type.GET_KEY_FRAGMENT_RESPONSE?o.getKeyFragmentResponse.result===C.Result.SUCCESS?(console.log("success getting key fragment"),a=f(o.getKeyFragmentResponse.fragmentValue)):o.getKeyFragmentResponse.result===C.Result.NOT_FOUND?(console.log("key fragment not found"),a=!1):(console.log("unknown error getting key fragment"),a=!1):console.log("unknown response type")}),a}async connect(){var e=this;this.libp2p=await i.create({modules:{transport:[s,c],connEncryption:[u],streamMuxer:[d],dht:p,peerDiscovery:[y]},config:{dht:{enabled:!0},peerDiscovery:{[y.tag]:{enabled:!0,list:["/ip4/51.222.108.215/tcp/9090/http/p2p-webrtc-direct/p2p/12D3KooWK1KtaAV5rWjbAmZcd62VYSmEz1k81jzr87JAcSS7rKdQ"]}}}}),this.libp2p.on("peer:discovery",e=>{console.debug(`Found peer ${e.toB58String()}`)}),this.libp2p.connectionManager.on("peer:connect",async function(t){const n=t.remotePeer.toB58String();console.debug(`Connected to ${n}`),e.connectedNodes.has(n)||(e.connectedNodes.add(n),setTimeout(async function(){await e.handshakeWithSgx({peerId:n})},1e3))}),this.libp2p.connectionManager.on("peer:disconnect",e=>{const t=e.remotePeer.toB58String();console.debug(`Disconnected from ${t}`),this.connectedNodes.delete(t)}),await this.libp2p.start(),console.debug(`libp2p id is ${this.libp2p.peerId.toB58String()}`),this.libp2p.multiaddrs.forEach(e=>console.debug(`${e.toString()}/p2p/${this.libp2p.peerId.toB58String()}`)),window.libp2p=this.libp2p,window.PeerId=l}},protobufs:T,kFragKey:N};export default O;
//# sourceMappingURL=index.modern.js.map
