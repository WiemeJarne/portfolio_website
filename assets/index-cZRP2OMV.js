(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Wv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Gf={exports:{}},yo={};var ig;function qv(){if(ig)return yo;ig=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return yo.Fragment=t,yo.jsx=i,yo.jsxs=i,yo}var ag;function jv(){return ag||(ag=1,Gf.exports=qv()),Gf.exports}var Ee=jv(),Hf={exports:{}},lt={};var rg;function Yv(){if(rg)return lt;rg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function M(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(D,K,me){this.props=D,this.context=K,this.refs=y,this.updater=me||A}v.prototype.isReactComponent={},v.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function z(){}z.prototype=v.prototype;function L(D,K,me){this.props=D,this.context=K,this.refs=y,this.updater=me||A}var B=L.prototype=new z;B.constructor=L,C(B,v.prototype),B.isPureReactComponent=!0;var k=Array.isArray;function O(){}var P={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(D,K,me){var Se=me.ref;return{$$typeof:o,type:D,key:K,ref:Se!==void 0?Se:null,props:me}}function R(D,K){return w(D.type,K,D.props)}function H(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function Y(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(me){return K[me]})}var le=/\/+/g;function pe(D,K){return typeof D=="object"&&D!==null&&D.key!=null?Y(""+D.key):K.toString(36)}function fe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(K){D.status==="pending"&&(D.status="fulfilled",D.value=K)},function(K){D.status==="pending"&&(D.status="rejected",D.reason=K)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function N(D,K,me,Se,De){var J=typeof D;(J==="undefined"||J==="boolean")&&(D=null);var se=!1;if(D===null)se=!0;else switch(J){case"bigint":case"string":case"number":se=!0;break;case"object":switch(D.$$typeof){case o:case t:se=!0;break;case _:return se=D._init,N(se(D._payload),K,me,Se,De)}}if(se)return De=De(D),se=Se===""?"."+pe(D,0):Se,k(De)?(me="",se!=null&&(me=se.replace(le,"$&/")+"/"),N(De,K,me,"",function(Fe){return Fe})):De!=null&&(H(De)&&(De=R(De,me+(De.key==null||D&&D.key===De.key?"":(""+De.key).replace(le,"$&/")+"/")+se)),K.push(De)),1;se=0;var Ae=Se===""?".":Se+":";if(k(D))for(var Ue=0;Ue<D.length;Ue++)Se=D[Ue],J=Ae+pe(Se,Ue),se+=N(Se,K,me,J,De);else if(Ue=M(D),typeof Ue=="function")for(D=Ue.call(D),Ue=0;!(Se=D.next()).done;)Se=Se.value,J=Ae+pe(Se,Ue++),se+=N(Se,K,me,J,De);else if(J==="object"){if(typeof D.then=="function")return N(fe(D),K,me,Se,De);throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return se}function X(D,K,me){if(D==null)return D;var Se=[],De=0;return N(D,Se,"","",function(J){return K.call(me,J,De++)}),Se}function j(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(me){(D._status===0||D._status===-1)&&(D._status=1,D._result=me)},function(me){(D._status===0||D._status===-1)&&(D._status=2,D._result=me)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var re=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},ce={map:X,forEach:function(D,K,me){X(D,function(){K.apply(this,arguments)},me)},count:function(D){var K=0;return X(D,function(){K++}),K},toArray:function(D){return X(D,function(K){return K})||[]},only:function(D){if(!H(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return lt.Activity=x,lt.Children=ce,lt.Component=v,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=L,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,lt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return P.H.useMemoCache(D)}},lt.cache=function(D){return function(){return D.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(D,K,me){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Se=C({},D.props),De=D.key;if(K!=null)for(J in K.key!==void 0&&(De=""+K.key),K)!ne.call(K,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&K.ref===void 0||(Se[J]=K[J]);var J=arguments.length-2;if(J===1)Se.children=me;else if(1<J){for(var se=Array(J),Ae=0;Ae<J;Ae++)se[Ae]=arguments[Ae+2];Se.children=se}return w(D.type,De,Se)},lt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},lt.createElement=function(D,K,me){var Se,De={},J=null;if(K!=null)for(Se in K.key!==void 0&&(J=""+K.key),K)ne.call(K,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(De[Se]=K[Se]);var se=arguments.length-2;if(se===1)De.children=me;else if(1<se){for(var Ae=Array(se),Ue=0;Ue<se;Ue++)Ae[Ue]=arguments[Ue+2];De.children=Ae}if(D&&D.defaultProps)for(Se in se=D.defaultProps,se)De[Se]===void 0&&(De[Se]=se[Se]);return w(D,J,De)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(D){return{$$typeof:h,render:D}},lt.isValidElement=H,lt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:j}},lt.memo=function(D,K){return{$$typeof:p,type:D,compare:K===void 0?null:K}},lt.startTransition=function(D){var K=P.T,me={};P.T=me;try{var Se=D(),De=P.S;De!==null&&De(me,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(O,re)}catch(J){re(J)}finally{K!==null&&me.types!==null&&(K.types=me.types),P.T=K}},lt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},lt.use=function(D){return P.H.use(D)},lt.useActionState=function(D,K,me){return P.H.useActionState(D,K,me)},lt.useCallback=function(D,K){return P.H.useCallback(D,K)},lt.useContext=function(D){return P.H.useContext(D)},lt.useDebugValue=function(){},lt.useDeferredValue=function(D,K){return P.H.useDeferredValue(D,K)},lt.useEffect=function(D,K){return P.H.useEffect(D,K)},lt.useEffectEvent=function(D){return P.H.useEffectEvent(D)},lt.useId=function(){return P.H.useId()},lt.useImperativeHandle=function(D,K,me){return P.H.useImperativeHandle(D,K,me)},lt.useInsertionEffect=function(D,K){return P.H.useInsertionEffect(D,K)},lt.useLayoutEffect=function(D,K){return P.H.useLayoutEffect(D,K)},lt.useMemo=function(D,K){return P.H.useMemo(D,K)},lt.useOptimistic=function(D,K){return P.H.useOptimistic(D,K)},lt.useReducer=function(D,K,me){return P.H.useReducer(D,K,me)},lt.useRef=function(D){return P.H.useRef(D)},lt.useState=function(D){return P.H.useState(D)},lt.useSyncExternalStore=function(D,K,me){return P.H.useSyncExternalStore(D,K,me)},lt.useTransition=function(){return P.H.useTransition()},lt.version="19.2.0",lt}var sg;function dh(){return sg||(sg=1,Hf.exports=Yv()),Hf.exports}var Jt=dh();const Zv=Wv(Jt);var Vf={exports:{}},Mo={},kf={exports:{}},Xf={};var og;function Kv(){return og||(og=1,(function(o){function t(N,X){var j=N.length;N.push(X);e:for(;0<j;){var re=j-1>>>1,ce=N[re];if(0<l(ce,X))N[re]=X,N[j]=ce,j=re;else break e}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var X=N[0],j=N.pop();if(j!==X){N[0]=j;e:for(var re=0,ce=N.length,D=ce>>>1;re<D;){var K=2*(re+1)-1,me=N[K],Se=K+1,De=N[Se];if(0>l(me,j))Se<ce&&0>l(De,me)?(N[re]=De,N[Se]=j,re=Se):(N[re]=me,N[K]=j,re=K);else if(Se<ce&&0>l(De,j))N[re]=De,N[Se]=j,re=Se;else break e}}return X}function l(N,X){var j=N.sortIndex-X.sortIndex;return j!==0?j:N.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,x=null,S=3,M=!1,A=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function B(N){for(var X=i(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=N)r(p),X.sortIndex=X.expirationTime,t(m,X);else break;X=i(p)}}function k(N){if(C=!1,B(N),!A)if(i(m)!==null)A=!0,O||(O=!0,Y());else{var X=i(p);X!==null&&fe(k,X.startTime-N)}}var O=!1,P=-1,ne=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<ne)}function H(){if(y=!1,O){var N=o.unstable_now();w=N;var X=!0;try{e:{A=!1,C&&(C=!1,z(P),P=-1),M=!0;var j=S;try{t:{for(B(N),x=i(m);x!==null&&!(x.expirationTime>N&&R());){var re=x.callback;if(typeof re=="function"){x.callback=null,S=x.priorityLevel;var ce=re(x.expirationTime<=N);if(N=o.unstable_now(),typeof ce=="function"){x.callback=ce,B(N),X=!0;break t}x===i(m)&&r(m),B(N)}else r(m);x=i(m)}if(x!==null)X=!0;else{var D=i(p);D!==null&&fe(k,D.startTime-N),X=!1}}break e}finally{x=null,S=j,M=!1}X=void 0}}finally{X?Y():O=!1}}}var Y;if(typeof L=="function")Y=function(){L(H)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,pe=le.port2;le.port1.onmessage=H,Y=function(){pe.postMessage(null)}}else Y=function(){v(H,0)};function fe(N,X){P=v(function(){N(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(N){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var j=S;S=X;try{return N()}finally{S=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=S;S=N;try{return X()}finally{S=j}},o.unstable_scheduleCallback=function(N,X,j){var re=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?re+j:re):j=re,N){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=j+ce,N={id:_++,callback:X,priorityLevel:N,startTime:j,expirationTime:ce,sortIndex:-1},j>re?(N.sortIndex=j,t(p,N),i(m)===null&&N===i(p)&&(C?(z(P),P=-1):C=!0,fe(k,j-re))):(N.sortIndex=ce,t(m,N),A||M||(A=!0,O||(O=!0,Y()))),N},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(N){var X=S;return function(){var j=S;S=X;try{return N.apply(this,arguments)}finally{S=j}}}})(Xf)),Xf}var lg;function Qv(){return lg||(lg=1,kf.exports=Kv()),kf.exports}var Wf={exports:{}},wn={};var cg;function Jv(){if(cg)return wn;cg=1;var o=dh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},wn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var ug;function $v(){if(ug)return Wf.exports;ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Wf.exports=Jv(),Wf.exports}var fg;function eS(){if(fg)return Mo;fg=1;var o=Qv(),t=dh(),i=$v();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,s=f;break}if(E===s){g=!0,s=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=c;break}if(E===s){g=!0,s=f,a=c;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case O:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case L:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case B:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case ne:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var fe=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},re=[],ce=-1;function D(e){return{current:e}}function K(e){0>ce||(e.current=re[ce],re[ce]=null,ce--)}function me(e,n){ce++,re[ce]=e.current,e.current=n}var Se=D(null),De=D(null),J=D(null),se=D(null);function Ae(e,n){switch(me(J,n),me(De,e),me(Se,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?A0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=A0(n),e=R0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Se),me(Se,e)}function Ue(){K(Se),K(De),K(J)}function Fe(e){e.memoizedState!==null&&me(se,e);var n=Se.current,a=R0(n,e.type);n!==a&&(me(De,e),me(Se,a))}function Qe(e){De.current===e&&(K(Se),K(De)),se.current===e&&(K(se),xo._currentValue=j)}var ct,nt;function mt(e){if(ct===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ct=n&&n[1]||"",nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+e+nt}var F=!1;function ot(e,n){if(!e||F)return"";F=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(oe){var ie=oe}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(oe){ie=oe}e.call(_e.prototype)}}else{try{throw Error()}catch(oe){ie=oe}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(oe){if(oe&&ie&&typeof oe.stack=="string")return[oe.stack,ie.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var I=g.split(`
`),ee=E.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<ee.length&&!ee[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===ee.length)for(s=I.length-1,c=ee.length-1;1<=s&&0<=c&&I[s]!==ee[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==ee[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==ee[c]){var he=`
`+I[s].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=s&&0<=c);break}}}finally{F=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mt(a):""}function gt(e,n){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return mt("Activity");default:return""}}function Mt(e){try{var n="",a=null;do n+=gt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ie=Object.prototype.hasOwnProperty,It=o.unstable_scheduleCallback,qe=o.unstable_cancelCallback,rt=o.unstable_shouldYield,U=o.unstable_requestPaint,b=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,xe=o.unstable_ImmediatePriority,ye=o.unstable_UserBlockingPriority,de=o.unstable_NormalPriority,je=o.unstable_LowPriority,Oe=o.unstable_IdlePriority,Je=o.log,We=o.unstable_setDisableYieldValue,Me=null,Te=null;function Ye(e){if(typeof Je=="function"&&We(e),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Me,e)}catch{}}var ke=Math.clz32?Math.clz32:G,ze=Math.log,at=Math.LN2;function G(e){return e>>>=0,e===0?32:31-(ze(e)/at|0)|0}var Le=256,Ce=262144,we=4194304;function be(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=be(s):(g&=E,g!==0?c=be(g):a||(a=E&~e,a!==0&&(c=be(a))))):(E=s&~f,E!==0?c=be(E):g!==0?c=be(g):a||(a=s&~e,a!==0&&(c=be(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ge(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function st(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=we;return we<<=1,(we&62914560)===0&&(we=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kn(e,n,a,s,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,I=e.expirationTimes,ee=e.hiddenUpdates;for(a=g&~a;0<a;){var he=31-ke(a),_e=1<<he;E[he]=0,I[he]=-1;var ie=ee[he];if(ie!==null)for(ee[he]=null,he=0;he<ie.length;he++){var oe=ie[he];oe!==null&&(oe.lane&=-536870913)}a&=~_e}s!==0&&ko(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function ko(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-ke(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Cs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-ke(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ws(e,n){var a=n&-n;return a=(a&42)!==0?1:hi(a),(a&(e.suspendedLanes|n))!==0?0:a}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Za(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ds(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:K0(e.type))}function Us(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var Xn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Xn,dn="__reactProps$"+Xn,Li="__reactContainer$"+Xn,Ar="__reactEvents$"+Xn,Nc="__reactListeners$"+Xn,Oc="__reactHandles$"+Xn,Xo="__reactResources$"+Xn,Ka="__reactMarker$"+Xn;function Ls(e){delete e[sn],delete e[dn],delete e[Ar],delete e[Nc],delete e[Oc]}function ha(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Li]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=O0(e);e!==null;){if(a=e[sn])return a;e=O0(e)}return n}e=a,a=e.parentNode}return null}function T(e){if(e=e[sn]||e[Li]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ae(e){var n=e[Xo];return n||(n=e[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function te(e){e[Ka]=!0}var Z=new Set,Re={};function Ne(e,n){Be(e,n),Be(e+"Capture",n)}function Be(e,n){for(Re[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},it={};function Ze(e){return Ie.call(it,e)?!0:Ie.call(et,e)?!1:He.test(e)?it[e]=!0:(et[e]=!0,!1)}function dt(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Dt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){if(!e._valueTracker){var n=Pt(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function Et(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Pt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pa=/[\n"\\]/g;function jt(e){return e.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ni(e,n,a,s,c,f,g,E){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+bt(n)):e.value!==""+bt(n)&&(e.value=""+bt(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?vn(e,g,bt(n)):a!=null?vn(e,g,bt(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+bt(E):e.removeAttribute("name")}function Yt(e,n,a,s,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(e);return}a=a!=null?""+bt(a):"",n=n!=null?""+bt(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Wt(e)}function vn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+bt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+bt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+bt(a):""}function bn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(fe(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=bt(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Wt(e)}function bi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Eh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&bh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&bh(e,f,n[f])}function Pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(e){return Vx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var Ic=null;function zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rr=null,Cr=null;function Th(e){var n=T(e);if(n&&(e=n.stateNode)){var a=e[dn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ni(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[dn]||null;if(!c)throw Error(r(90));Ni(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Et(s)}break e;case"textarea":Sn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&hn(e,!!a.multiple,n,!1)}}}var Fc=!1;function Ah(e,n,a){if(Fc)return e(n,a);Fc=!0;try{var s=e(n);return s}finally{if(Fc=!1,(Rr!==null||Cr!==null)&&(Ll(),Rr&&(n=Rr,e=Cr,Cr=Rr=null,Th(n),e)))for(n=0;n<e.length;n++)Th(e[n])}}function Ns(e,n){var a=e.stateNode;if(a===null)return null;var s=a[dn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(Ii)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Bc=!1}var ma=null,Gc=null,qo=null;function Rh(){if(qo)return qo;var e,n=Gc,a=n.length,s,c="value"in ma?ma.value:ma.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return qo=c.slice(e,1<s?1-s:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function Ch(){return!1}function Pn(e){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Ch,this.isPropagationStopped=Ch,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Pn(Qa),Ps=x({},Qa,{view:0,detail:0}),kx=Pn(Ps),Hc,Vc,Is,Ko=x({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(Hc=e.screenX-Is.screenX,Vc=e.screenY-Is.screenY):Vc=Hc=0,Is=e),Hc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),wh=Pn(Ko),Xx=x({},Ko,{dataTransfer:0}),Wx=Pn(Xx),qx=x({},Ps,{relatedTarget:0}),kc=Pn(qx),jx=x({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Yx=Pn(jx),Zx=x({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kx=Pn(Zx),Qx=x({},Qa,{data:0}),Dh=Pn(Qx),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=e_[e])?!!n[e]:!1}function Xc(){return t_}var n_=x({},Ps,{key:function(e){if(e.key){var n=Jx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$x[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),i_=Pn(n_),a_=x({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=Pn(a_),r_=x({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),s_=Pn(r_),o_=x({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),l_=Pn(o_),c_=x({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u_=Pn(c_),f_=x({},Qa,{newState:0,oldState:0}),d_=Pn(f_),h_=[9,13,27,32],Wc=Ii&&"CompositionEvent"in window,zs=null;Ii&&"documentMode"in document&&(zs=document.documentMode);var p_=Ii&&"TextEvent"in window&&!zs,Lh=Ii&&(!Wc||zs&&8<zs&&11>=zs),Nh=" ",Oh=!1;function Ph(e,n){switch(e){case"keyup":return h_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function m_(e,n){switch(e){case"compositionend":return Ih(n);case"keypress":return n.which!==32?null:(Oh=!0,Nh);case"textInput":return e=n.data,e===Nh&&Oh?null:e;default:return null}}function g_(e,n){if(wr)return e==="compositionend"||!Wc&&Ph(e,n)?(e=Rh(),qo=Gc=ma=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lh&&n.locale!=="ko"?null:n.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!x_[e.type]:n==="textarea"}function Fh(e,n,a,s){Rr?Cr?Cr.push(s):Cr=[s]:Rr=s,n=Bl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Fs=null,Bs=null;function __(e){S0(e,0)}function Qo(e){var n=W(e);if(Et(n))return e}function Bh(e,n){if(e==="change")return n}var Gh=!1;if(Ii){var qc;if(Ii){var jc="oninput"in document;if(!jc){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),jc=typeof Hh.oninput=="function"}qc=jc}else qc=!1;Gh=qc&&(!document.documentMode||9<document.documentMode)}function Vh(){Fs&&(Fs.detachEvent("onpropertychange",kh),Bs=Fs=null)}function kh(e){if(e.propertyName==="value"&&Qo(Bs)){var n=[];Fh(n,Bs,e,zc(e)),Ah(__,n)}}function v_(e,n,a){e==="focusin"?(Vh(),Fs=n,Bs=a,Fs.attachEvent("onpropertychange",kh)):e==="focusout"&&Vh()}function S_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Bs)}function y_(e,n){if(e==="click")return Qo(n)}function M_(e,n){if(e==="input"||e==="change")return Qo(n)}function b_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:b_;function Gs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ie.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Xh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wh(e,n){var a=Xh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xh(a)}}function qh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function jh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function Yc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var E_=Ii&&"documentMode"in document&&11>=document.documentMode,Dr=null,Zc=null,Hs=null,Kc=!1;function Yh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Dr==null||Dr!==_n(s)||(s=Dr,"selectionStart"in s&&Yc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Hs&&Gs(Hs,s)||(Hs=s,s=Bl(Zc,"onSelect"),0<s.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Dr)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ur={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Qc={},Zh={};Ii&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function $a(e){if(Qc[e])return Qc[e];if(!Ur[e])return e;var n=Ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zh)return Qc[e]=n[a];return e}var Kh=$a("animationend"),Qh=$a("animationiteration"),Jh=$a("animationstart"),T_=$a("transitionrun"),A_=$a("transitionstart"),R_=$a("transitioncancel"),$h=$a("transitionend"),ep=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function pi(e,n){ep.set(e,n),Ne(n,[e])}var Jo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Lr=0,$c=0;function $o(){for(var e=Lr,n=$c=Lr=0;n<e;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&tp(a,c,f)}}function el(e,n,a,s){ni[Lr++]=e,ni[Lr++]=n,ni[Lr++]=a,ni[Lr++]=s,$c|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function eu(e,n,a,s){return el(e,n,a,s),tl(e)}function er(e,n){return el(e,null,null,n),tl(e)}function tp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ke(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function tl(e){if(50<co)throw co=0,uf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Nr={};function C_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,s){return new C_(e,n,a,s)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function np(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,s,c,f){var g=0;if(s=e,typeof e=="function")tu(e)&&(g=1);else if(typeof e=="string")g=Nv(e,a,Se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=qn(31,a,n,c),e.elementType=w,e.lanes=f,e;case C:return tr(a.children,c,f,n);case y:g=8,c|=24;break;case v:return e=qn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case k:return e=qn(13,a,n,c),e.elementType=k,e.lanes=f,e;case O:return e=qn(19,a,n,c),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:g=10;break e;case z:g=9;break e;case B:g=11;break e;case P:g=14;break e;case ne:g=16,s=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=qn(g,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function tr(e,n,a,s){return e=qn(7,e,s,n),e.lanes=a,e}function nu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function ip(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function iu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ap=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=ap.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Mt(n)},ap.set(e,n),n)}return{value:e,source:n,stack:Mt(n)}}var Or=[],Pr=0,il=null,Vs=0,ai=[],ri=0,ga=null,Ei=1,Ti="";function Fi(e,n){Or[Pr++]=Vs,Or[Pr++]=il,il=e,Vs=n}function rp(e,n,a){ai[ri++]=Ei,ai[ri++]=Ti,ai[ri++]=ga,ga=e;var s=Ei;e=Ti;var c=32-ke(s)-1;s&=~(1<<c),a+=1;var f=32-ke(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ei=1<<32-ke(n)+c|a<<c|s,Ti=f+e}else Ei=1<<f|a<<c|s,Ti=e}function au(e){e.return!==null&&(Fi(e,1),rp(e,1,0))}function ru(e){for(;e===il;)il=Or[--Pr],Or[Pr]=null,Vs=Or[--Pr],Or[Pr]=null;for(;e===ga;)ga=ai[--ri],ai[ri]=null,Ti=ai[--ri],ai[ri]=null,Ei=ai[--ri],ai[ri]=null}function sp(e,n){ai[ri++]=Ei,ai[ri++]=Ti,ai[ri++]=ga,Ei=n.id,Ti=n.overflow,ga=e}var En=null,Zt=null,Tt=!1,xa=null,si=!1,su=Error(r(519));function _a(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ks(ii(n,e)),su}function op(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[sn]=e,n[dn]=s,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)vt(fo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Yt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),bn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||E0(n.textContent,a)?(s.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),s.onScroll!=null&&vt("scroll",n),s.onScrollEnd!=null&&vt("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||_a(e,!0)}function lp(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:En=En.return}}function Ir(e){if(e!==En)return!1;if(!Tt)return lp(e),Tt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Tf(e.type,e.memoizedProps)),a=!a),a&&Zt&&_a(e),lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=N0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=N0(e)}else n===27?(n=Zt,La(e.type)?(e=Df,Df=null,Zt=e):Zt=n):Zt=En?li(e.stateNode.nextSibling):null;return!0}function nr(){Zt=En=null,Tt=!1}function ou(){var e=xa;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),xa=null),e}function ks(e){xa===null?xa=[e]:xa.push(e)}var lu=D(null),ir=null,Bi=null;function va(e,n,a){me(lu,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=lu.current,K(lu)}function cu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function uu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var I=0;I<n.length;I++)if(E.context===n[I]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),cu(f.return,a,e),s||(g=null);break e}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),cu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function zr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=c.type;Wn(c.pendingProps.value,g.value)||(e!==null?e.push(E):e=[E])}}else if(c===se.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&uu(n,e,a,s),n.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){ir=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return cp(ir,e)}function rl(e,n){return ir===null&&ar(e),cp(e,n)}function cp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(e===null)throw Error(r(308));Bi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Bi=Bi.next=n;return a}var w_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},D_=o.unstable_scheduleCallback,U_=o.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new w_,data:new Map,refCount:0}}function Xs(e){e.refCount--,e.refCount===0&&D_(U_,function(){e.controller.abort()})}var Ws=null,du=0,Fr=0,Br=null;function L_(e,n){if(Ws===null){var a=Ws=[];du=0,Fr=gf(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return du++,n.then(up,up),n}function up(){if(--du===0&&Ws!==null){Br!==null&&(Br.status="fulfilled");var e=Ws;Ws=null,Fr=0,Br=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function N_(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var fp=N.S;N.S=function(e,n){Ym=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&L_(e,n),fp!==null&&fp(e,n)};var rr=D(null);function hu(){var e=rr.current;return e!==null?e:qt.pooledCache}function sl(e,n){n===null?me(rr,rr.current):me(rr,n.pool)}function dp(){var e=hu();return e===null?null:{parent:on._currentValue,pool:e}}var Gr=Error(r(460)),pu=Error(r(474)),ol=Error(r(542)),ll={then:function(){}};function hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gp(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=qt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gp(e),e}throw or=n,Gr}}function sr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,Gr):a}}var or=null;function mp(){if(or===null)throw Error(r(459));var e=or;return or=null,e}function gp(e){if(e===Gr||e===ol)throw Error(r(483))}var Hr=null,qs=0;function cl(e){var n=qs;return qs+=1,Hr===null&&(Hr=[]),pp(Hr,e,n)}function js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ul(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function xp(e){function n(q,V){if(e){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function c(q,V){return q=zi(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function g(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function E(q,V,Q,ge){return V===null||V.tag!==6?(V=nu(Q,q.mode,ge),V.return=q,V):(V=c(V,Q),V.return=q,V)}function I(q,V,Q,ge){var Ke=Q.type;return Ke===C?he(q,V,Q.props.children,ge,Q.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ne&&sr(Ke)===V.type)?(V=c(V,Q.props),js(V,Q),V.return=q,V):(V=nl(Q.type,Q.key,Q.props,null,q.mode,ge),js(V,Q),V.return=q,V)}function ee(q,V,Q,ge){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=iu(Q,q.mode,ge),V.return=q,V):(V=c(V,Q.children||[]),V.return=q,V)}function he(q,V,Q,ge,Ke){return V===null||V.tag!==7?(V=tr(Q,q.mode,ge,Ke),V.return=q,V):(V=c(V,Q),V.return=q,V)}function _e(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=nu(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return Q=nl(V.type,V.key,V.props,null,q.mode,Q),js(Q,V),Q.return=q,Q;case A:return V=iu(V,q.mode,Q),V.return=q,V;case ne:return V=sr(V),_e(q,V,Q)}if(fe(V)||Y(V))return V=tr(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return _e(q,cl(V),Q);if(V.$$typeof===L)return _e(q,rl(q,V),Q);ul(q,V)}return null}function ie(q,V,Q,ge){var Ke=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ke!==null?null:E(q,V,""+Q,ge);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Ke?I(q,V,Q,ge):null;case A:return Q.key===Ke?ee(q,V,Q,ge):null;case ne:return Q=sr(Q),ie(q,V,Q,ge)}if(fe(Q)||Y(Q))return Ke!==null?null:he(q,V,Q,ge,null);if(typeof Q.then=="function")return ie(q,V,cl(Q),ge);if(Q.$$typeof===L)return ie(q,V,rl(q,Q),ge);ul(q,Q)}return null}function oe(q,V,Q,ge,Ke){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return q=q.get(Q)||null,E(V,q,""+ge,Ke);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return q=q.get(ge.key===null?Q:ge.key)||null,I(V,q,ge,Ke);case A:return q=q.get(ge.key===null?Q:ge.key)||null,ee(V,q,ge,Ke);case ne:return ge=sr(ge),oe(q,V,Q,ge,Ke)}if(fe(ge)||Y(ge))return q=q.get(Q)||null,he(V,q,ge,Ke,null);if(typeof ge.then=="function")return oe(q,V,Q,cl(ge),Ke);if(ge.$$typeof===L)return oe(q,V,Q,rl(V,ge),Ke);ul(V,ge)}return null}function Ve(q,V,Q,ge){for(var Ke=null,Ut=null,Xe=V,ht=V=0,yt=null;Xe!==null&&ht<Q.length;ht++){Xe.index>ht?(yt=Xe,Xe=null):yt=Xe.sibling;var Lt=ie(q,Xe,Q[ht],ge);if(Lt===null){Xe===null&&(Xe=yt);break}e&&Xe&&Lt.alternate===null&&n(q,Xe),V=f(Lt,V,ht),Ut===null?Ke=Lt:Ut.sibling=Lt,Ut=Lt,Xe=yt}if(ht===Q.length)return a(q,Xe),Tt&&Fi(q,ht),Ke;if(Xe===null){for(;ht<Q.length;ht++)Xe=_e(q,Q[ht],ge),Xe!==null&&(V=f(Xe,V,ht),Ut===null?Ke=Xe:Ut.sibling=Xe,Ut=Xe);return Tt&&Fi(q,ht),Ke}for(Xe=s(Xe);ht<Q.length;ht++)yt=oe(Xe,q,ht,Q[ht],ge),yt!==null&&(e&&yt.alternate!==null&&Xe.delete(yt.key===null?ht:yt.key),V=f(yt,V,ht),Ut===null?Ke=yt:Ut.sibling=yt,Ut=yt);return e&&Xe.forEach(function(za){return n(q,za)}),Tt&&Fi(q,ht),Ke}function tt(q,V,Q,ge){if(Q==null)throw Error(r(151));for(var Ke=null,Ut=null,Xe=V,ht=V=0,yt=null,Lt=Q.next();Xe!==null&&!Lt.done;ht++,Lt=Q.next()){Xe.index>ht?(yt=Xe,Xe=null):yt=Xe.sibling;var za=ie(q,Xe,Lt.value,ge);if(za===null){Xe===null&&(Xe=yt);break}e&&Xe&&za.alternate===null&&n(q,Xe),V=f(za,V,ht),Ut===null?Ke=za:Ut.sibling=za,Ut=za,Xe=yt}if(Lt.done)return a(q,Xe),Tt&&Fi(q,ht),Ke;if(Xe===null){for(;!Lt.done;ht++,Lt=Q.next())Lt=_e(q,Lt.value,ge),Lt!==null&&(V=f(Lt,V,ht),Ut===null?Ke=Lt:Ut.sibling=Lt,Ut=Lt);return Tt&&Fi(q,ht),Ke}for(Xe=s(Xe);!Lt.done;ht++,Lt=Q.next())Lt=oe(Xe,q,ht,Lt.value,ge),Lt!==null&&(e&&Lt.alternate!==null&&Xe.delete(Lt.key===null?ht:Lt.key),V=f(Lt,V,ht),Ut===null?Ke=Lt:Ut.sibling=Lt,Ut=Lt);return e&&Xe.forEach(function(Xv){return n(q,Xv)}),Tt&&Fi(q,ht),Ke}function Vt(q,V,Q,ge){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:e:{for(var Ke=Q.key;V!==null;){if(V.key===Ke){if(Ke=Q.type,Ke===C){if(V.tag===7){a(q,V.sibling),ge=c(V,Q.props.children),ge.return=q,q=ge;break e}}else if(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ne&&sr(Ke)===V.type){a(q,V.sibling),ge=c(V,Q.props),js(ge,Q),ge.return=q,q=ge;break e}a(q,V);break}else n(q,V);V=V.sibling}Q.type===C?(ge=tr(Q.props.children,q.mode,ge,Q.key),ge.return=q,q=ge):(ge=nl(Q.type,Q.key,Q.props,null,q.mode,ge),js(ge,Q),ge.return=q,q=ge)}return g(q);case A:e:{for(Ke=Q.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),ge=c(V,Q.children||[]),ge.return=q,q=ge;break e}else{a(q,V);break}else n(q,V);V=V.sibling}ge=iu(Q,q.mode,ge),ge.return=q,q=ge}return g(q);case ne:return Q=sr(Q),Vt(q,V,Q,ge)}if(fe(Q))return Ve(q,V,Q,ge);if(Y(Q)){if(Ke=Y(Q),typeof Ke!="function")throw Error(r(150));return Q=Ke.call(Q),tt(q,V,Q,ge)}if(typeof Q.then=="function")return Vt(q,V,cl(Q),ge);if(Q.$$typeof===L)return Vt(q,V,rl(q,Q),ge);ul(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),ge=c(V,Q),ge.return=q,q=ge):(a(q,V),ge=nu(Q,q.mode,ge),ge.return=q,q=ge),g(q)):a(q,V)}return function(q,V,Q,ge){try{qs=0;var Ke=Vt(q,V,Q,ge);return Hr=null,Ke}catch(Xe){if(Xe===Gr||Xe===ol)throw Xe;var Ut=qn(29,Xe,null,q.mode);return Ut.lanes=ge,Ut.return=q,Ut}finally{}}}var lr=xp(!0),_p=xp(!1),Sa=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ot&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=tl(e),tp(e,null,a),n}return el(e,s,n,a),tl(e)}function Ys(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Cs(e,a)}}function xu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var _u=!1;function Zs(){if(_u){var e=Br;if(e!==null)throw e}}function Ks(e,n,a,s){_u=!1;var c=e.updateQueue;Sa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var I=E,ee=I.next;I.next=null,g===null?f=ee:g.next=ee,g=I;var he=e.alternate;he!==null&&(he=he.updateQueue,E=he.lastBaseUpdate,E!==g&&(E===null?he.firstBaseUpdate=ee:E.next=ee,he.lastBaseUpdate=I))}if(f!==null){var _e=c.baseState;g=0,he=ee=I=null,E=f;do{var ie=E.lane&-536870913,oe=ie!==E.lane;if(oe?(St&ie)===ie:(s&ie)===ie){ie!==0&&ie===Fr&&(_u=!0),he!==null&&(he=he.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Ve=e,tt=E;ie=n;var Vt=a;switch(tt.tag){case 1:if(Ve=tt.payload,typeof Ve=="function"){_e=Ve.call(Vt,_e,ie);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=tt.payload,ie=typeof Ve=="function"?Ve.call(Vt,_e,ie):Ve,ie==null)break e;_e=x({},_e,ie);break e;case 2:Sa=!0}}ie=E.callback,ie!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=c.callbacks,oe===null?c.callbacks=[ie]:oe.push(ie))}else oe={lane:ie,tag:E.tag,payload:E.payload,callback:E.callback,next:null},he===null?(ee=he=oe,I=_e):he=he.next=oe,g|=ie;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;oe=E,E=oe.next,oe.next=null,c.lastBaseUpdate=oe,c.shared.pending=null}}while(!0);he===null&&(I=_e),c.baseState=I,c.firstBaseUpdate=ee,c.lastBaseUpdate=he,f===null&&(c.shared.lanes=0),Ra|=g,e.lanes=g,e.memoizedState=_e}}function vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Sp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vp(a[e],n)}var Vr=D(null),fl=D(0);function yp(e,n){e=Zi,me(fl,e),me(Vr,n),Zi=e|n.baseLanes}function vu(){me(fl,Zi),me(Vr,Vr.current)}function Su(){Zi=fl.current,K(Vr),K(fl)}var jn=D(null),oi=null;function ba(e){var n=e.alternate;me(tn,tn.current&1),me(jn,e),oi===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(oi=e)}function yu(e){me(tn,tn.current),me(jn,e),oi===null&&(oi=e)}function Mp(e){e.tag===22?(me(tn,tn.current),me(jn,e),oi===null&&(oi=e)):Ea()}function Ea(){me(tn,tn.current),me(jn,jn.current)}function Yn(e){K(jn),oi===e&&(oi=null),K(tn)}var tn=D(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cf(a)||wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hi=0,ut=null,Gt=null,ln=null,hl=!1,kr=!1,cr=!1,pl=0,Qs=0,Xr=null,O_=0;function $t(){throw Error(r(321))}function Mu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function bu(e,n,a,s,c,f){return Hi=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?rm:Fu,cr=!1,f=a(s,c),cr=!1,kr&&(f=Ep(n,a,s,c)),bp(e),f}function bp(e){N.H=eo;var n=Gt!==null&&Gt.next!==null;if(Hi=0,ln=Gt=ut=null,hl=!1,Qs=0,Xr=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&al(e)&&(cn=!0))}function Ep(e,n,a,s){ut=e;var c=0;do{if(kr&&(Xr=null),Qs=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,ln=Gt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=sm,f=n(a,s)}while(kr);return f}function P_(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Js(n):n,e=e.useState()[0],(Gt!==null?Gt.memoizedState:null)!==e&&(ut.flags|=1024),n}function Eu(){var e=pl!==0;return pl=0,e}function Tu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Au(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}Hi=0,ln=Gt=ut=null,kr=!1,Qs=pl=0,Xr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ut.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(Gt===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=Gt.next;var n=ln===null?ut.memoizedState:ln.next;if(n!==null)ln=n,Gt=e;else{if(e===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Gt=e,e={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},ln===null?ut.memoizedState=ln=e:ln=ln.next=e}return ln}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Js(e){var n=Qs;return Qs+=1,Xr===null&&(Xr=[]),e=pp(Xr,e,n),n=ut,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?rm:Fu),e}function gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Js(e);if(e.$$typeof===L)return Tn(e)}throw Error(r(438,String(e)))}function Ru(e){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ut.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=R;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=nn();return Cu(n,Gt,e)}function Cu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=g=null,I=null,ee=n,he=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(St&_e)===_e:(Hi&_e)===_e){var ie=ee.revertLane;if(ie===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===Fr&&(he=!0);else if((Hi&ie)===ie){ee=ee.next,ie===Fr&&(he=!0);continue}else _e={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(E=I=_e,g=f):I=I.next=_e,ut.lanes|=ie,Ra|=ie;_e=ee.action,cr&&a(f,_e),f=ee.hasEagerState?ee.eagerState:a(f,_e)}else ie={lane:_e,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(E=I=ie,g=f):I=I.next=ie,ut.lanes|=_e,Ra|=_e;ee=ee.next}while(ee!==null&&ee!==n);if(I===null?g=f:I.next=E,!Wn(f,e.memoizedState)&&(cn=!0,he&&(a=Br,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function wu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Tp(e,n,a){var s=ut,c=nn(),f=Tt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Wn((Gt||c).memoizedState,a);if(g&&(c.memoizedState=a,cn=!0),c=c.queue,Lu(Cp.bind(null,s,c,e),[e]),c.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,Wr(9,{destroy:void 0},Rp.bind(null,s,c,a,n),null),qt===null)throw Error(r(349));f||(Hi&127)!==0||Ap(s,n,a)}return a}function Ap(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=ml(),ut.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Rp(e,n,a,s){n.value=a,n.getSnapshot=s,wp(n)&&Dp(e)}function Cp(e,n,a){return a(function(){wp(n)&&Dp(e)})}function wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Dp(e){var n=er(e,2);n!==null&&Gn(n,e,2)}function Du(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),cr){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function Up(e,n,a,s){return e.baseState=a,Cu(e,Gt,typeof s=="function"?s:Vi)}function I_(e,n,a,s,c){if(Sl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Lp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var E=a(c,s),I=N.S;I!==null&&I(g,E),Np(e,n,E)}catch(ee){Uu(e,n,ee)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(c,s),Np(e,n,f)}catch(ee){Uu(e,n,ee)}}function Np(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Op(e,n,s)},function(s){return Uu(e,n,s)}):Op(e,n,a)}function Op(e,n,a){n.status="fulfilled",n.value=a,Pp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lp(e,a)))}function Uu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Pp(n),n=n.next;while(n!==s)}e.action=null}function Pp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ip(e,n){return n}function zp(e,n){if(Tt){var a=qt.formState;if(a!==null){e:{var s=ut;if(Tt){if(Zt){t:{for(var c=Zt,f=si;c.nodeType!==8;){if(!f){c=null;break t}if(c=li(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=li(c.nextSibling),s=c.data==="F!";break e}}_a(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:n},a.queue=s,a=nm.bind(null,ut,s),s.dispatch=a,s=Du(!1),f=zu.bind(null,ut,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=I_.bind(null,ut,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Fp(e){var n=nn();return Bp(n,Gt,e)}function Bp(e,n,a){if(n=Cu(e,n,Ip)[0],e=xl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Js(n)}catch(g){throw g===Gr?ol:g}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,Wr(9,{destroy:void 0},z_.bind(null,c,a),null)),[s,f,e]}function z_(e,n){e.action=n}function Gp(e){var n=nn(),a=Gt;if(a!==null)return Bp(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Wr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ut.updateQueue,n===null&&(n=ml(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Hp(){return nn().memoizedState}function _l(e,n,a,s){var c=Ln();ut.flags|=e,c.memoizedState=Wr(1|n,{destroy:void 0},a,s===void 0?null:s)}function vl(e,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Gt!==null&&s!==null&&Mu(s,Gt.memoizedState.deps)?c.memoizedState=Wr(n,f,a,s):(ut.flags|=e,c.memoizedState=Wr(1|n,f,a,s))}function Vp(e,n){_l(8390656,8,e,n)}function Lu(e,n){vl(2048,8,e,n)}function F_(e){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=ml(),ut.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function kp(e){var n=nn().memoizedState;return F_({ref:n,nextImpl:e}),function(){if((Ot&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xp(e,n){return vl(4,2,e,n)}function Wp(e,n){return vl(4,4,e,n)}function qp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jp(e,n,a){a=a!=null?a.concat([e]):null,vl(4,4,qp.bind(null,n,e),a)}function Nu(){}function Yp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Mu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Zp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Mu(n,s[1]))return s[0];if(s=e(),cr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[s,n],s}function Ou(e,n,a){return a===void 0||(Hi&1073741824)!==0&&(St&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Km(),ut.lanes|=e,Ra|=e,a)}function Kp(e,n,a,s){return Wn(a,n)?a:Vr.current!==null?(e=Ou(e,a,s),Wn(e,n)||(cn=!0),e):(Hi&42)===0||(Hi&1073741824)!==0&&(St&261930)===0?(cn=!0,e.memoizedState=a):(e=Km(),ut.lanes|=e,Ra|=e,n)}function Qp(e,n,a,s,c){var f=X.p;X.p=f!==0&&8>f?f:8;var g=N.T,E={};N.T=E,zu(e,!1,n,a);try{var I=c(),ee=N.S;if(ee!==null&&ee(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var he=N_(I,s);$s(e,n,he,Qn(e))}else $s(e,n,s,Qn(e))}catch(_e){$s(e,n,{then:function(){},status:"rejected",reason:_e},Qn())}finally{X.p=f,g!==null&&E.types!==null&&(g.types=E.types),N.T=g}}function B_(){}function Pu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Jp(e).queue;Qp(e,c,n,j,a===null?B_:function(){return $p(e),a(s)})}function Jp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $p(e){var n=Jp(e);n.next===null&&(n=e.alternate.memoizedState),$s(e,n.next.queue,{},Qn())}function Iu(){return Tn(xo)}function em(){return nn().memoizedState}function tm(){return nn().memoizedState}function G_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=ya(a);var s=Ma(n,e,a);s!==null&&(Gn(s,n,a),Ys(s,n,a)),n={cache:fu()},e.payload=n;return}n=n.return}}function H_(e,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(e)?im(n,a):(a=eu(e,n,a,s),a!==null&&(Gn(a,e,s),am(a,n,s)))}function nm(e,n,a){var s=Qn();$s(e,n,a,s)}function $s(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(e))im(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,g))return el(e,n,c,0),qt===null&&$o(),!1}catch{}finally{}if(a=eu(e,n,c,s),a!==null)return Gn(a,e,s),am(a,n,s),!0}return!1}function zu(e,n,a,s){if(s={lane:2,revertLane:gf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Sl(e)){if(n)throw Error(r(479))}else n=eu(e,a,s,2),n!==null&&Gn(n,e,2)}function Sl(e){var n=e.alternate;return e===ut||n!==null&&n===ut}function im(e,n){kr=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function am(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Cs(e,a)}}var eo={readContext:Tn,use:gl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};eo.useEffectEvent=$t;var rm={readContext:Tn,use:gl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Vp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,qp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var s=e();if(cr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(cr){Ye(!0);try{a(n)}finally{Ye(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=H_.bind(null,ut,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Du(e);var n=e.queue,a=nm.bind(null,ut,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Nu,useDeferredValue:function(e,n){var a=Ln();return Ou(a,e,n)},useTransition:function(){var e=Du(!1);return e=Qp.bind(null,ut,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ut,c=Ln();if(Tt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(St&127)!==0||Ap(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Vp(Cp.bind(null,s,f,e),[e]),s.flags|=2048,Wr(9,{destroy:void 0},Rp.bind(null,s,f,a,n),null),a},useId:function(){var e=Ln(),n=qt.identifierPrefix;if(Tt){var a=Ti,s=Ei;a=(s&~(1<<32-ke(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=O_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Iu,useFormState:zp,useActionState:zp,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zu.bind(null,ut,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ru,useCacheRefresh:function(){return Ln().memoizedState=G_.bind(null,ut)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Fu={readContext:Tn,use:gl,useCallback:Yp,useContext:Tn,useEffect:Lu,useImperativeHandle:jp,useInsertionEffect:Xp,useLayoutEffect:Wp,useMemo:Zp,useReducer:xl,useRef:Hp,useState:function(){return xl(Vi)},useDebugValue:Nu,useDeferredValue:function(e,n){var a=nn();return Kp(a,Gt.memoizedState,e,n)},useTransition:function(){var e=xl(Vi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Js(e),n]},useSyncExternalStore:Tp,useId:em,useHostTransitionStatus:Iu,useFormState:Fp,useActionState:Fp,useOptimistic:function(e,n){var a=nn();return Up(a,Gt,e,n)},useMemoCache:Ru,useCacheRefresh:tm};Fu.useEffectEvent=kp;var sm={readContext:Tn,use:gl,useCallback:Yp,useContext:Tn,useEffect:Lu,useImperativeHandle:jp,useInsertionEffect:Xp,useLayoutEffect:Wp,useMemo:Zp,useReducer:wu,useRef:Hp,useState:function(){return wu(Vi)},useDebugValue:Nu,useDeferredValue:function(e,n){var a=nn();return Gt===null?Ou(a,e,n):Kp(a,Gt.memoizedState,e,n)},useTransition:function(){var e=wu(Vi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Js(e),n]},useSyncExternalStore:Tp,useId:em,useHostTransitionStatus:Iu,useFormState:Gp,useActionState:Gp,useOptimistic:function(e,n){var a=nn();return Gt!==null?Up(a,Gt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:tm};sm.useEffectEvent=kp;function Bu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Qn(),c=ya(s);c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(Gn(n,e,s),Ys(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Qn(),c=ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(Gn(n,e,s),Ys(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),s=ya(a);s.tag=2,n!=null&&(s.callback=n),n=Ma(e,s,a),n!==null&&(Gn(n,e,a),Ys(n,e,a))}};function om(e,n,a,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,s)||!Gs(c,f):!0}function lm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function ur(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function cm(e){Jo(e)}function um(e){console.error(e)}function fm(e){Jo(e)}function yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function dm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(e,n)},a}function hm(e){return e=ya(e),e.tag=3,e}function pm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){dm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){dm(n,a,s),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function V_(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zr(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Nl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),hf(e,s,c)),!1;case 22:return a.flags|=65536,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),hf(e,s,c)),!1}throw Error(r(435,a.tag))}return hf(e,s,c),Nl(),!1}if(Tt)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==su&&(e=Error(r(422),{cause:s}),ks(ii(e,a)))):(s!==su&&(n=Error(r(423),{cause:s}),ks(ii(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ii(s,a),c=Hu(e.stateNode,s,c),xu(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),lo===null?lo=[f]:lo.push(f),en!==4&&(en=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Hu(a.stateNode,s,e),xu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=hm(c),pm(c,e,a,s),xu(a,c),!1}a=a.return}while(a!==null);return!1}var Vu=Error(r(461)),cn=!1;function An(e,n,a,s){n.child=e===null?_p(n,null,a,s):lr(n,e.child,a,s)}function mm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return ar(n),s=bu(e,n,a,g,f,c),E=Eu(),e!==null&&!cn?(Tu(e,n,c),ki(e,n,c)):(Tt&&E&&au(n),n.flags|=1,An(e,n,s,c),n.child)}function gm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xm(e,n,f,s,c)):(e=nl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ku(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(g,s)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=zi(f,s),e.ref=n.ref,e.return=n,n.child=e}function xm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Gs(f,s)&&e.ref===n.ref)if(cn=!1,n.pendingProps=s=f,Ku(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,ki(e,n,c)}return ku(e,n,a,s,c)}function _m(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return vm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,f!==null?f.cachePool:null),f!==null?yp(n,f):vu(),Mp(n);else return s=n.lanes=536870912,vm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(sl(n,f.cachePool),yp(n,f),Ea(),n.memoizedState=null):(e!==null&&sl(n,null),vu(),Ea());return An(e,n,c,a),n.child}function to(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vm(e,n,a,s,c){var f=hu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&sl(n,null),vu(),Mp(n),e!==null&&zr(e,n,s,!0),n.childLanes=c,null}function Ml(e,n){return n=El({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Sm(e,n,a){return lr(n,e.child,null,a),e=Ml(n,n.pendingProps),e.flags|=2,Yn(n),n.memoizedState=null,e}function k_(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Tt){if(s.mode==="hidden")return e=Ml(n,s),n.lanes=536870912,to(null,e);if(yu(n),(e=Zt)?(e=L0(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=ip(e),a.return=n,n.child=a,En=n,Zt=null)):e=null,e===null)throw _a(n);return n.lanes=536870912,null}return Ml(n,s)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(yu(n),c)if(n.flags&256)n.flags&=-257,n=Sm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||zr(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(s=qt,s!==null&&(g=ws(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,er(e,g),Gn(s,e,g),Vu;Nl(),n=Sm(e,n,a)}else e=f.treeContext,Zt=li(g.nextSibling),En=n,Tt=!0,xa=null,si=!1,e!==null&&sp(n,e),n=Ml(n,s),n.flags|=4096;return n}return e=zi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ku(e,n,a,s,c){return ar(n),a=bu(e,n,a,s,void 0,c),s=Eu(),e!==null&&!cn?(Tu(e,n,c),ki(e,n,c)):(Tt&&s&&au(n),n.flags|=1,An(e,n,a,c),n.child)}function ym(e,n,a,s,c,f){return ar(n),n.updateQueue=null,a=Ep(n,s,a,c),bp(e),s=Eu(),e!==null&&!cn?(Tu(e,n,f),ki(e,n,f)):(Tt&&s&&au(n),n.flags|=1,An(e,n,a,f),n.child)}function Mm(e,n,a,s,c){if(ar(n),n.stateNode===null){var f=Nr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},mu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Nr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Bu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Gu.enqueueReplaceState(f,f.state,null),Ks(n,s,f,c),Zs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,I=ur(a,E);f.props=I;var ee=f.context,he=a.contextType;g=Nr,typeof he=="object"&&he!==null&&(g=Tn(he));var _e=a.getDerivedStateFromProps;he=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||ee!==g)&&lm(n,f,s,g),Sa=!1;var ie=n.memoizedState;f.state=ie,Ks(n,s,f,c),Zs(),ee=n.memoizedState,E||ie!==ee||Sa?(typeof _e=="function"&&(Bu(n,a,_e,s),ee=n.memoizedState),(I=Sa||om(n,a,I,s,ie,ee,g))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ee),f.props=s,f.state=ee,f.context=g,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,gu(e,n),g=n.memoizedProps,he=ur(a,g),f.props=he,_e=n.pendingProps,ie=f.context,ee=a.contextType,I=Nr,typeof ee=="object"&&ee!==null&&(I=Tn(ee)),E=a.getDerivedStateFromProps,(ee=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_e||ie!==I)&&lm(n,f,s,I),Sa=!1,ie=n.memoizedState,f.state=ie,Ks(n,s,f,c),Zs();var oe=n.memoizedState;g!==_e||ie!==oe||Sa||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof E=="function"&&(Bu(n,a,E,s),oe=n.memoizedState),(he=Sa||om(n,a,he,s,ie,oe,I)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,oe,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,oe,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=oe),f.props=s,f.state=oe,f.context=I,s=he):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,bl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=lr(n,e.child,null,c),n.child=lr(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function bm(e,n,a,s){return nr(),n.flags|=256,An(e,n,a,s),n.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(e){return{baseLanes:e,cachePool:dp()}}function qu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function Em(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Tt){if(c?ba(n):Ea(),(e=Zt)?(e=L0(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=ip(e),a.return=n,n.child=a,En=n,Zt=null)):e=null,e===null)throw _a(n);return wf(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ea(),c=n.mode,E=El({mode:"hidden",children:E},c),s=tr(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Wu(a),s.childLanes=qu(e,g,a),n.memoizedState=Xu,to(null,s)):(ba(n),ju(n,E))}var I=e.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=Yu(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),E=s.fallback,c=n.mode,s=El({mode:"visible",children:s.children},c),E=tr(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,lr(n,e.child,null,a),s=n.child,s.memoizedState=Wu(a),s.childLanes=qu(e,g,a),n.memoizedState=Xu,n=to(null,s));else if(ba(n),wf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var ee=g.dgst;g=ee,s=Error(r(419)),s.stack="",s.digest=g,ks({value:s,source:null,stack:null}),n=Yu(e,n,a)}else if(cn||zr(e,n,a,!1),g=(a&e.childLanes)!==0,cn||g){if(g=qt,g!==null&&(s=ws(g,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,er(e,s),Gn(g,e,s),Vu;Cf(E)||Nl(),n=Yu(e,n,a)}else Cf(E)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Zt=li(E.nextSibling),En=n,Tt=!0,xa=null,si=!1,e!==null&&sp(n,e),n=ju(n,s.children),n.flags|=4096);return n}return c?(Ea(),E=s.fallback,c=n.mode,I=e.child,ee=I.sibling,s=zi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,ee!==null?E=zi(ee,E):(E=tr(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,to(null,s),s=n.child,E=e.child.memoizedState,E===null?E=Wu(a):(c=E.cachePool,c!==null?(I=on._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=dp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=qu(e,g,a),n.memoizedState=Xu,to(e.child,s)):(ba(n),a=e.child,e=a.sibling,a=zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function ju(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function Yu(e,n,a){return lr(n,e.child,null,a),e=ju(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),cu(e.return,n,a)}function Zu(e,n,a,s,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Am(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,me(tn,g),An(e,n,s,a),s=Tt?Vs:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tm(e,a,n);else if(e.tag===19)Tm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Zu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&dl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Zu(n,!0,a,null,f,s);break;case"together":Zu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(zr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ku(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function X_(e,n,a){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),va(n,on,e.memoizedState.cache),nr();break;case 27:case 5:Fe(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Em(e,n,a):(ba(n),e=ki(e,n,a),e!==null?e.sibling:null);ba(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Am(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),me(tn,tn.current),s)break;return null;case 22:return n.lanes=0,_m(e,n,a,n.pendingProps);case 24:va(n,on,e.memoizedState.cache)}return ki(e,n,a)}function Rm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ku(e,a)&&(n.flags&128)===0)return cn=!1,X_(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Tt&&(n.flags&1048576)!==0&&rp(n,Vs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=sr(n.elementType),n.type=e,typeof e=="function")tu(e)?(s=ur(e,s),n.tag=1,n=Mm(null,n,e,s,a)):(n.tag=0,n=ku(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===B){n.tag=11,n=mm(null,n,e,s,a);break e}else if(c===P){n.tag=14,n=gm(null,n,e,s,a);break e}}throw n=pe(e)||e,Error(r(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ur(s,n.pendingProps),Mm(e,n,s,c,a);case 3:e:{if(Ae(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,gu(e,n),Ks(n,s,null,a);var g=n.memoizedState;if(s=g.cache,va(n,on,s),s!==f.cache&&uu(n,[on],a,!0),Zs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bm(e,n,s,a);break e}else if(s!==c){c=ii(Error(r(424)),n),ks(c),n=bm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Zt=li(e.firstChild),En=n,Tt=!0,xa=null,si=!0,a=_p(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(nr(),s===c){n=ki(e,n,a);break e}An(e,n,s,a)}n=n.child}return n;case 26:return bl(e,n),e===null?(a=F0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,e=n.pendingProps,s=Gl(J.current).createElement(a),s[sn]=n,s[dn]=e,Rn(s,a,e),te(s),n.stateNode=s):n.memoizedState=F0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Fe(n),e===null&&Tt&&(s=n.stateNode=P0(n.type,n.pendingProps,J.current),En=n,si=!0,c=Zt,La(n.type)?(Df=c,Zt=li(s.firstChild)):Zt=c),An(e,n,n.pendingProps.children,a),bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Tt&&((c=s=Zt)&&(s=Sv(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,En=n,Zt=li(s.firstChild),si=!1,c=!0):c=!1),c||_a(n)),Fe(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,s=f.children,Tf(c,f)?s=null:g!==null&&Tf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=bu(e,n,P_,null,null,a),xo._currentValue=c),bl(e,n),An(e,n,s,a),n.child;case 6:return e===null&&Tt&&((e=a=Zt)&&(a=yv(a,n.pendingProps,si),a!==null?(n.stateNode=a,En=n,Zt=null,e=!0):e=!1),e||_a(n)),null;case 13:return Em(e,n,a);case 4:return Ae(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=lr(n,null,s,a):An(e,n,s,a),n.child;case 11:return mm(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,va(n,n.type,s.value),An(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ar(n),c=Tn(c),s=s(c),n.flags|=1,An(e,n,s,a),n.child;case 14:return gm(e,n,n.type,n.pendingProps,a);case 15:return xm(e,n,n.type,n.pendingProps,a);case 19:return Am(e,n,a);case 31:return k_(e,n,a);case 22:return _m(e,n,a,n.pendingProps);case 24:return ar(n),s=Tn(on),e===null?(c=hu(),c===null&&(c=qt,f=fu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},mu(n),va(n,on,c)):((e.lanes&a)!==0&&(gu(e,n),Ks(n,null,null,a),Zs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,on,s)):(s=f.cache,va(n,on,s),s!==c.cache&&uu(n,[on],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(e){e.flags|=4}function Qu(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(e0())e.flags|=8192;else throw or=ll,pu}else e.flags&=-16777217}function Cm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k0(n))if(e0())e.flags|=8192;else throw or=ll,pu}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bt():536870912,e.lanes|=n,Zr|=n)}function no(e,n){if(!Tt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function W_(e,n,a){var s=n.pendingProps;switch(ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(on),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ou())),Kt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Xi(n),f!==null?(Kt(n),Cm(n,f)):(Kt(n),Qu(n,c,null,s,a))):f?f!==e.memoizedState?(Xi(n),Kt(n),Cm(n,f)):(Kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Xi(n),Kt(n),Qu(n,c,e,s,a)),null;case 27:if(Qe(n),a=J.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}e=Se.current,Ir(n)?op(n):(e=P0(c,s,a),n.stateNode=e,Xi(n))}return Kt(n),null;case 5:if(Qe(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}if(f=Se.current,Ir(n))op(n);else{var g=Gl(J.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[sn]=n,f[dn]=s;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Xi(n)}}return Kt(n),Qu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=J.current,Ir(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||E0(e.nodeValue,a)),e||_a(n,!0)}else e=Gl(e).createTextNode(s),e[sn]=n,n.stateNode=e}return Kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Ir(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),e=!1}else a=ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Kt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ir(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),c=!1}else c=ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),Kt(n),null);case 4:return Ue(),e===null&&Sf(n.stateNode.containerInfo),Kt(n),null;case 10:return Gi(n.type),Kt(n),null;case 19:if(K(tn),s=n.memoizedState,s===null)return Kt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)no(s,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dl(e),f!==null){for(n.flags|=128,no(s,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)np(a,e),a=a.sibling;return me(tn,tn.current&1|2),Tt&&Fi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&b()>Dl&&(n.flags|=128,c=!0,no(s,!1),n.lanes=4194304)}else{if(!c)if(e=dl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Tt)return Kt(n),null}else 2*b()-s.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,c=!0,no(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=b(),e.sibling=null,a=tn.current,me(tn,c?a&1|2:a&1),Tt&&Fi(n,s.treeForkCount),e):(Kt(n),null);case 22:case 23:return Yn(n),Su(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&K(rr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(on),Kt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function q_(e,n){switch(ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(on),Ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Yn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(tn),null;case 4:return Ue(),null;case 10:return Gi(n.type),null;case 22:case 23:return Yn(n),Su(),e!==null&&K(rr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(on),null;case 25:return null;default:return null}}function wm(e,n){switch(ru(n),n.tag){case 3:Gi(on),Ue();break;case 26:case 27:case 5:Qe(n);break;case 4:Ue();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:K(tn);break;case 10:Gi(n.type);break;case 22:case 23:Yn(n),Su(),e!==null&&K(rr);break;case 24:Gi(on)}}function io(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(E){Ft(n,n.return,E)}}function Ta(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var I=a,ee=E;try{ee()}catch(he){Ft(c,I,he)}}}s=s.next}while(s!==f)}}catch(he){Ft(n,n.return,he)}}function Dm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Sp(n,a)}catch(s){Ft(e,e.return,s)}}}function Um(e,n,a){a.props=ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ft(e,n,s)}}function ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Ft(e,n,c)}}function Ai(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ft(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(e,n,c)}else a.current=null}function Lm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ft(e,e.return,c)}}function Ju(e,n,a){try{var s=e.stateNode;pv(s,e.type,a,n),s[dn]=n}catch(c){Ft(e,e.return,c)}}function Nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ef(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ef(e,n,a),e=e.sibling;e!==null;)ef(e,n,a),e=e.sibling}function Al(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Al(e,n,a),e=e.sibling;e!==null;)Al(e,n,a),e=e.sibling}function Om(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[sn]=e,n[dn]=a}catch(f){Ft(e,e.return,f)}}var Wi=!1,un=!1,tf=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,yn=null;function j_(e,n){if(e=e.containerInfo,bf=jl,e=jh(e),Yc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,E=-1,I=-1,ee=0,he=0,_e=e,ie=null;t:for(;;){for(var oe;_e!==a||c!==0&&_e.nodeType!==3||(E=g+c),_e!==f||s!==0&&_e.nodeType!==3||(I=g+s),_e.nodeType===3&&(g+=_e.nodeValue.length),(oe=_e.firstChild)!==null;)ie=_e,_e=oe;for(;;){if(_e===e)break t;if(ie===a&&++ee===c&&(E=g),ie===f&&++he===s&&(I=g),(oe=_e.nextSibling)!==null)break;_e=ie,ie=_e.parentNode}_e=oe}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:e,selectionRange:a},jl=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ve=ur(a.type,c);e=s.getSnapshotBeforeUpdate(Ve,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(tt){Ft(a,a.return,tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Rf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function Im(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&io(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Ft(a,a.return,g)}else{var c=ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ft(a,a.return,g)}}s&64&&Dm(a),s&512&&ao(a,a.return);break;case 3:if(ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sp(e,n)}catch(g){Ft(a,a.return,g)}}break;case 27:n===null&&s&4&&Om(a);case 26:case 5:ji(e,a),n===null&&s&4&&Lm(a),s&512&&ao(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),s&4&&Bm(e,a);break;case 13:ji(e,a),s&4&&Gm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nv.bind(null,a),Mv(e,a))));break;case 22:if(s=a.memoizedState!==null||Wi,!s){n=n!==null&&n.memoizedState!==null||un,c=Wi;var f=un;Wi=s,(un=n)&&!f?Yi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Wi=c,un=f}break;case 30:break;default:ji(e,a)}}function zm(e){var n=e.alternate;n!==null&&(e.alternate=null,zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ls(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,In=!1;function qi(e,n,a){for(a=a.child;a!==null;)Fm(e,n,a),a=a.sibling}function Fm(e,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:un||Ai(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ai(a,n);var s=Qt,c=In;La(a.type)&&(Qt=a.stateNode,In=!1),qi(e,n,a),po(a.stateNode),Qt=s,In=c;break;case 5:un||Ai(a,n);case 6:if(s=Qt,c=In,Qt=null,qi(e,n,a),Qt=s,In=c,Qt!==null)if(In)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Qt!==null&&(In?(e=Qt,D0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),is(e)):D0(Qt,a.stateNode));break;case 4:s=Qt,c=In,Qt=a.stateNode.containerInfo,In=!0,qi(e,n,a),Qt=s,In=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),un||Ta(4,a,n),qi(e,n,a);break;case 1:un||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Um(a,n,s)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,qi(e,n,a),un=s;break;default:qi(e,n,a)}}function Bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{is(e)}catch(a){Ft(n,n.return,a)}}}function Gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{is(e)}catch(a){Ft(n,n.return,a)}}function Y_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Pm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Pm),n;default:throw Error(r(435,e.tag))}}function Rl(e,n){var a=Y_(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=iv.bind(null,e,s);s.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,g=n,E=g;e:for(;E!==null;){switch(E.tag){case 27:if(La(E.type)){Qt=E.stateNode,In=!1;break e}break;case 5:Qt=E.stateNode,In=!1;break e;case 3:case 4:Qt=E.stateNode.containerInfo,In=!0;break e}E=E.return}if(Qt===null)throw Error(r(160));Fm(f,g,c),Qt=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hm(n,e),n=n.sibling}var mi=null;function Hm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Fn(e),s&4&&(Ta(3,e,e.return),io(3,e),Ta(5,e,e.return));break;case 1:zn(n,e),Fn(e),s&512&&(un||a===null||Ai(a,a.return)),s&64&&Wi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=mi;if(zn(n,e),Fn(e),s&512&&(un||a===null||Ai(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ka]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[sn]=e,te(f),s=f;break e;case"link":var g=H0("link","href",c).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=H0("meta","content",c).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=e,te(f),s=f}e.stateNode=s}else V0(c,e.type,e.stateNode);else e.stateNode=G0(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?V0(c,e.type,e.stateNode):G0(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Fn(e),s&512&&(un||a===null||Ai(a,a.return)),a!==null&&s&4&&Ju(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Fn(e),s&512&&(un||a===null||Ai(a,a.return)),e.flags&32){c=e.stateNode;try{bi(c,"")}catch(Ve){Ft(e,e.return,Ve)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Ju(e,c,a!==null?a.memoizedProps:c)),s&1024&&(tf=!0);break;case 6:if(zn(n,e),Fn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Ve){Ft(e,e.return,Ve)}}break;case 3:if(kl=null,c=mi,mi=Hl(n.containerInfo),zn(n,e),mi=c,Fn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{is(n.containerInfo)}catch(Ve){Ft(e,e.return,Ve)}tf&&(tf=!1,Vm(e));break;case 4:s=mi,mi=Hl(e.stateNode.containerInfo),zn(n,e),Fn(e),mi=s;break;case 12:zn(n,e),Fn(e);break;case 31:zn(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 13:zn(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wl=b()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,ee=Wi,he=un;if(Wi=ee||c,un=he||I,zn(n,e),un=he,Wi=ee,Fn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Wi||un||fr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=I.stateNode;var _e=I.memoizedProps.style,ie=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;E.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===18){if(a===null){I=n;try{var oe=I.stateNode;c?U0(oe,!0):U0(I.stateNode,!1)}catch(Ve){Ft(I,I.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Rl(e,a))));break;case 19:zn(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 30:break;case 21:break;default:zn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Nm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=$u(e);Al(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(bi(g,""),a.flags&=-33);var E=$u(e);Al(e,E,g);break;case 3:case 4:var I=a.stateNode.containerInfo,ee=$u(e);ef(e,ee,I);break;default:throw Error(r(161))}}catch(he){Ft(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Vm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Im(e,n.alternate,n),n=n.sibling}function fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),fr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Um(n,n.return,a),fr(n);break;case 27:po(n.stateNode);case 26:case 5:Ai(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}e=e.sibling}}function Yi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(c,f,a),io(4,f);break;case 1:if(Yi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ee){Ft(s,s.return,ee)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)vp(I[c],E)}catch(ee){Ft(s,s.return,ee)}}a&&g&64&&Dm(f),ao(f,f.return);break;case 27:Om(f);case 26:case 5:Yi(c,f,a),a&&s===null&&g&4&&Lm(f),ao(f,f.return);break;case 12:Yi(c,f,a);break;case 31:Yi(c,f,a),a&&g&4&&Bm(c,f);break;case 13:Yi(c,f,a),a&&g&4&&Gm(c,f);break;case 22:f.memoizedState===null&&Yi(c,f,a),ao(f,f.return);break;case 30:break;default:Yi(c,f,a)}n=n.sibling}}function nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xs(a))}function af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e))}function gi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)km(e,n,a,s),n=n.sibling}function km(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(e,n,a,s),c&2048&&io(9,n);break;case 1:gi(e,n,a,s);break;case 3:gi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e)));break;case 12:if(c&2048){gi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ft(n,n.return,I)}}else gi(e,n,a,s);break;case 31:gi(e,n,a,s);break;case 13:gi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?gi(e,n,a,s):ro(e,n):f._visibility&2?gi(e,n,a,s):(f._visibility|=2,qr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&nf(g,n);break;case 24:gi(e,n,a,s),c&2048&&af(n.alternate,n);break;default:gi(e,n,a,s)}}function qr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,E=a,I=s,ee=g.flags;switch(g.tag){case 0:case 11:case 15:qr(f,g,E,I,c),io(8,g);break;case 23:break;case 22:var he=g.stateNode;g.memoizedState!==null?he._visibility&2?qr(f,g,E,I,c):ro(f,g):(he._visibility|=2,qr(f,g,E,I,c)),c&&ee&2048&&nf(g.alternate,g);break;case 24:qr(f,g,E,I,c),c&&ee&2048&&af(g.alternate,g);break;default:qr(f,g,E,I,c)}n=n.sibling}}function ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:ro(a,s),c&2048&&nf(s.alternate,s);break;case 24:ro(a,s),c&2048&&af(s.alternate,s);break;default:ro(a,s)}n=n.sibling}}var so=8192;function jr(e,n,a){if(e.subtreeFlags&so)for(e=e.child;e!==null;)Xm(e,n,a),e=e.sibling}function Xm(e,n,a){switch(e.tag){case 26:jr(e,n,a),e.flags&so&&e.memoizedState!==null&&Ov(a,mi,e.memoizedState,e.memoizedProps);break;case 5:jr(e,n,a);break;case 3:case 4:var s=mi;mi=Hl(e.stateNode.containerInfo),jr(e,n,a),mi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=so,so=16777216,jr(e,n,a),so=s):jr(e,n,a));break;default:jr(e,n,a)}}function Wm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,jm(s,e)}Wm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 0:case 11:case 15:oo(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:oo(e);break;case 12:oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):oo(e);break;default:oo(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,jm(s,e)}Wm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function jm(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else e:for(a=e;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(zm(s),s===a){yn=null;break e}if(c!==null){c.return=f,yn=c;break e}yn=f}}}var Z_={getCacheForType:function(e){var n=Tn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},K_=typeof WeakMap=="function"?WeakMap:Map,Ot=0,qt=null,_t=null,St=0,zt=0,Zn=null,Aa=!1,Yr=!1,rf=!1,Zi=0,en=0,Ra=0,dr=0,sf=0,Kn=0,Zr=0,lo=null,Bn=null,of=!1,wl=0,Ym=0,Dl=1/0,Ul=null,Ca=null,pn=0,wa=null,Kr=null,Ki=0,lf=0,cf=null,Zm=null,co=0,uf=null;function Qn(){return(Ot&2)!==0&&St!==0?St&-St:N.T!==null?gf():Ds()}function Km(){if(Kn===0)if((St&536870912)===0||Tt){var e=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),Kn=e}else Kn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Kn}function Gn(e,n,a){(e===qt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Da(e,St,Kn,!1)),Cn(e,a),((Ot&2)===0||e!==qt)&&(e===qt&&((Ot&2)===0&&(dr|=a),en===4&&Da(e,St,Kn,!1)),Ri(e))}function Qm(e,n,a){if((Ot&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ge(e,n),c=s?$_(e,n):df(e,n,!0),f=s;do{if(c===0){Yr&&!s&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Q_(a)){c=df(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var E=e;c=lo;var I=E.current.memoizedState.isDehydrated;if(I&&(Qr(E,g).flags|=256),g=df(E,g,!1),g!==2){if(rf&&!I){E.errorRecoveryDisabledLanes|=f,dr|=f,c=4;break e}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Qr(e,0),Da(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(s,n,Kn,!Aa);break e;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=wl+300-b(),10<c)){if(Da(s,n,Kn,!Aa),ve(s,0,!0)!==0)break e;Ki=n,s.timeoutHandle=C0(Jm.bind(null,s,a,Bn,Ul,of,n,Kn,dr,Zr,Aa,f,"Throttled",-0,0),c);break e}Jm(s,a,Bn,Ul,of,n,Kn,dr,Zr,Aa,f,null,-0,0)}}break}while(!0);Ri(e)}function Jm(e,n,a,s,c,f,g,E,I,ee,he,_e,ie,oe){if(e.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},Xm(n,f,_e);var Ve=(f&62914560)===f?wl-b():(f&4194048)===f?Ym-b():0;if(Ve=Pv(_e,Ve),Ve!==null){Ki=f,e.cancelPendingCommit=Ve(s0.bind(null,e,n,f,a,s,c,g,E,I,he,_e,null,ie,oe)),Da(e,f,g,!ee);return}}s0(e,n,f,a,s,c,g,E,I)}function Q_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,s){n&=~sf,n&=~dr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-ke(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&ko(e,a,n)}function Ll(){return(Ot&6)===0?(uo(0),!1):!0}function ff(){if(_t!==null){if(zt===0)var e=_t.return;else e=_t,Bi=ir=null,Au(e),Hr=null,qs=0,e=_t;for(;e!==null;)wm(e.alternate,e),e=e.return;_t=null}}function Qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ki=0,ff(),qt=e,_t=a=zi(e.current,null),St=n,zt=0,Zn=null,Aa=!1,Yr=Ge(e,n),rf=!1,Zr=Kn=sf=dr=Ra=en=0,Bn=lo=null,of=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-ke(s),f=1<<c;n|=e[c],s&=~f}return Zi=n,$o(),a}function $m(e,n){ut=null,N.H=eo,n===Gr||n===ol?(n=mp(),zt=3):n===pu?(n=mp(),zt=4):zt=n===Vu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,_t===null&&(en=1,yl(e,ii(n,e.current)))}function e0(){var e=jn.current;return e===null?!0:(St&4194048)===St?oi===null:(St&62914560)===St||(St&536870912)!==0?e===oi:!1}function t0(){var e=N.H;return N.H=eo,e===null?eo:e}function n0(){var e=N.A;return N.A=Z_,e}function Nl(){en=4,Aa||(St&4194048)!==St&&jn.current!==null||(Yr=!0),(Ra&134217727)===0&&(dr&134217727)===0||qt===null||Da(qt,St,Kn,!1)}function df(e,n,a){var s=Ot;Ot|=2;var c=t0(),f=n0();(qt!==e||St!==n)&&(Ul=null,Qr(e,n)),n=!1;var g=en;e:do try{if(zt!==0&&_t!==null){var E=_t,I=Zn;switch(zt){case 8:ff(),g=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var ee=zt;if(zt=0,Zn=null,Jr(e,E,I,ee),a&&Yr){g=0;break e}break;default:ee=zt,zt=0,Zn=null,Jr(e,E,I,ee)}}J_(),g=en;break}catch(he){$m(e,he)}while(!0);return n&&e.shellSuspendCounter++,Bi=ir=null,Ot=s,N.H=c,N.A=f,_t===null&&(qt=null,St=0,$o()),g}function J_(){for(;_t!==null;)i0(_t)}function $_(e,n){var a=Ot;Ot|=2;var s=t0(),c=n0();qt!==e||St!==n?(Ul=null,Dl=b()+500,Qr(e,n)):Yr=Ge(e,n);e:do try{if(zt!==0&&_t!==null){n=_t;var f=Zn;t:switch(zt){case 1:zt=0,Zn=null,Jr(e,n,f,1);break;case 2:case 9:if(hp(f)){zt=0,Zn=null,a0(n);break}n=function(){zt!==2&&zt!==9||qt!==e||(zt=7),Ri(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:hp(f)?(zt=0,Zn=null,a0(n)):(zt=0,Zn=null,Jr(e,n,f,7));break;case 5:var g=null;switch(_t.tag){case 26:g=_t.memoizedState;case 5:case 27:var E=_t;if(g?k0(g):E.stateNode.complete){zt=0,Zn=null;var I=E.sibling;if(I!==null)_t=I;else{var ee=E.return;ee!==null?(_t=ee,Ol(ee)):_t=null}break t}}zt=0,Zn=null,Jr(e,n,f,5);break;case 6:zt=0,Zn=null,Jr(e,n,f,6);break;case 8:ff(),en=6;break e;default:throw Error(r(462))}}ev();break}catch(he){$m(e,he)}while(!0);return Bi=ir=null,N.H=s,N.A=c,Ot=a,_t!==null?0:(qt=null,St=0,$o(),en)}function ev(){for(;_t!==null&&!rt();)i0(_t)}function i0(e){var n=Rm(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Ol(e):_t=n}function a0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ym(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=ym(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Au(n);default:wm(a,n),n=_t=np(n,Zi),n=Rm(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Ol(e):_t=n}function Jr(e,n,a,s){Bi=ir=null,Au(n),Hr=null,qs=0;var c=n.return;try{if(V_(e,c,n,a,St)){en=1,yl(e,ii(a,e.current)),_t=null;return}}catch(f){if(c!==null)throw _t=c,f;en=1,yl(e,ii(a,e.current)),_t=null;return}n.flags&32768?(Tt||s===1?e=!0:Yr||(St&536870912)!==0?e=!1:(Aa=e=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),r0(n,e)):Ol(n)}function Ol(e){var n=e;do{if((n.flags&32768)!==0){r0(n,Aa);return}e=n.return;var a=W_(n.alternate,n,Zi);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=e}while(n!==null);en===0&&(en=5)}function r0(e,n){do{var a=q_(e.alternate,e);if(a!==null){a.flags&=32767,_t=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_t=e;return}_t=e=a}while(e!==null);en=6,_t=null}function s0(e,n,a,s,c,f,g,E,I){e.cancelPendingCommit=null;do Pl();while(pn!==0);if((Ot&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=$c,kn(e,a,f,g,E,I),e===qt&&(_t=qt=null,St=0),Kr=n,wa=e,Ki=a,lf=f,cf=c,Zm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,av(de,function(){return f0(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,c=X.p,X.p=2,g=Ot,Ot|=4;try{j_(e,n,a)}finally{Ot=g,X.p=c,N.T=s}}pn=1,o0(),l0(),c0()}}function o0(){if(pn===1){pn=0;var e=wa,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=X.p;X.p=2;var c=Ot;Ot|=4;try{Hm(n,e);var f=Ef,g=jh(e.containerInfo),E=f.focusedElem,I=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&qh(E.ownerDocument.documentElement,E)){if(I!==null&&Yc(E)){var ee=I.start,he=I.end;if(he===void 0&&(he=ee),"selectionStart"in E)E.selectionStart=ee,E.selectionEnd=Math.min(he,E.value.length);else{var _e=E.ownerDocument||document,ie=_e&&_e.defaultView||window;if(ie.getSelection){var oe=ie.getSelection(),Ve=E.textContent.length,tt=Math.min(I.start,Ve),Vt=I.end===void 0?tt:Math.min(I.end,Ve);!oe.extend&&tt>Vt&&(g=Vt,Vt=tt,tt=g);var q=Wh(E,tt),V=Wh(E,Vt);if(q&&V&&(oe.rangeCount!==1||oe.anchorNode!==q.node||oe.anchorOffset!==q.offset||oe.focusNode!==V.node||oe.focusOffset!==V.offset)){var Q=_e.createRange();Q.setStart(q.node,q.offset),oe.removeAllRanges(),tt>Vt?(oe.addRange(Q),oe.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),oe.addRange(Q))}}}}for(_e=[],oe=E;oe=oe.parentNode;)oe.nodeType===1&&_e.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_e.length;E++){var ge=_e[E];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}jl=!!bf,Ef=bf=null}finally{Ot=c,X.p=s,N.T=a}}e.current=n,pn=2}}function l0(){if(pn===2){pn=0;var e=wa,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=X.p;X.p=2;var c=Ot;Ot|=4;try{Im(e,n.alternate,n)}finally{Ot=c,X.p=s,N.T=a}}pn=3}}function c0(){if(pn===4||pn===3){pn=0,U();var e=wa,n=Kr,a=Ki,s=Zm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,Kr=wa=null,u0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ca=null),Za(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,c=X.p,X.p=2,N.T=null;try{for(var f=e.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{N.T=n,X.p=c}}(Ki&3)!==0&&Pl(),Ri(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===uf?co++:(co=0,uf=e):co=0,uo(0)}}function u0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xs(n)))}function Pl(){return o0(),l0(),c0(),f0()}function f0(){if(pn!==5)return!1;var e=wa,n=lf;lf=0;var a=Za(Ki),s=N.T,c=X.p;try{X.p=32>a?32:a,N.T=null,a=cf,cf=null;var f=wa,g=Ki;if(pn=0,Kr=wa=null,Ki=0,(Ot&6)!==0)throw Error(r(331));var E=Ot;if(Ot|=4,qm(f.current),km(f,f.current,g,a),Ot=E,uo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{X.p=c,N.T=s,u0(e,n)}}function d0(e,n,a){n=ii(a,n),n=Hu(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(Cn(e,2),Ri(e))}function Ft(e,n,a){if(e.tag===3)d0(e,e,a);else for(;n!==null;){if(n.tag===3){d0(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))){e=ii(a,e),a=hm(2),s=Ma(n,a,2),s!==null&&(pm(a,s,n,e),Cn(s,2),Ri(s));break}}n=n.return}}function hf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new K_;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(rf=!0,c.add(a),e=tv.bind(null,e,n,a),n.then(e,e))}function tv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qt===e&&(St&a)===a&&(en===4||en===3&&(St&62914560)===St&&300>b()-wl?(Ot&2)===0&&Qr(e,0):sf|=a,Zr===St&&(Zr=0)),Ri(e)}function h0(e,n){n===0&&(n=Bt()),e=er(e,n),e!==null&&(Cn(e,n),Ri(e))}function nv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),h0(e,a)}function iv(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),h0(e,a)}function av(e,n){return It(e,n)}var Il=null,$r=null,pf=!1,zl=!1,mf=!1,Ua=0;function Ri(e){e!==$r&&e.next===null&&($r===null?Il=$r=e:$r=$r.next=e),zl=!0,pf||(pf=!0,sv())}function uo(e,n){if(!mf&&zl){mf=!0;do for(var a=!1,s=Il;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-ke(42|e)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,x0(s,f))}else f=St,f=ve(s,s===qt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ge(s,f)||(a=!0,x0(s,f));s=s.next}while(a);mf=!1}}function rv(){p0()}function p0(){zl=pf=!1;var e=0;Ua!==0&&gv()&&(e=Ua);for(var n=b(),a=null,s=Il;s!==null;){var c=s.next,f=m0(s,n);f===0?(s.next=null,a===null?Il=c:a.next=c,c===null&&($r=a)):(a=s,(e!==0||(f&3)!==0)&&(zl=!0)),s=c}pn!==0&&pn!==5||uo(e),Ua!==0&&(Ua=0)}function m0(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-ke(f),E=1<<g,I=c[g];I===-1?((E&a)===0||(E&s)!==0)&&(c[g]=st(E,n)):I<=n&&(e.expiredLanes|=E),f&=~E}if(n=qt,a=St,a=ve(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&qe(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ge(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&qe(s),Za(a)){case 2:case 8:a=ye;break;case 32:a=de;break;case 268435456:a=Oe;break;default:a=de}return s=g0.bind(null,e),a=It(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&qe(s),e.callbackPriority=2,e.callbackNode=null,2}function g0(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pl()&&e.callbackNode!==a)return null;var s=St;return s=ve(e,e===qt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Qm(e,s,n),m0(e,b()),e.callbackNode!=null&&e.callbackNode===a?g0.bind(null,e):null)}function x0(e,n){if(Pl())return null;Qm(e,n,!0)}function sv(){_v(function(){(Ot&6)!==0?It(xe,rv):p0()})}function gf(){if(Ua===0){var e=Fr;e===0&&(e=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Ua=e}return Ua}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wo(""+e)}function v0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ov(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=_0((c[dn]||null).action),g=s.submitter;g&&(n=(n=g[dn]||null)?_0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Zo("action","action",null,s,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ua!==0){var I=g?v0(c,g):new FormData(c);Pu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(E.preventDefault(),I=g?v0(c,g):new FormData(c),Pu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var xf=0;xf<Jc.length;xf++){var _f=Jc[xf],lv=_f.toLowerCase(),cv=_f[0].toUpperCase()+_f.slice(1);pi(lv,"on"+cv)}pi(Kh,"onAnimationEnd"),pi(Qh,"onAnimationIteration"),pi(Jh,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(T_,"onTransitionRun"),pi(A_,"onTransitionStart"),pi(R_,"onTransitionCancel"),pi($h,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function S0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],I=E.instance,ee=E.currentTarget;if(E=E.listener,I!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=ee;try{f(c)}catch(he){Jo(he)}c.currentTarget=null,f=I}else for(g=0;g<s.length;g++){if(E=s[g],I=E.instance,ee=E.currentTarget,E=E.listener,I!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=ee;try{f(c)}catch(he){Jo(he)}c.currentTarget=null,f=I}}}}function vt(e,n){var a=n[Ar];a===void 0&&(a=n[Ar]=new Set);var s=e+"__bubble";a.has(s)||(y0(n,e,2,!1),a.add(s))}function vf(e,n,a){var s=0;n&&(s|=4),y0(a,e,s,n)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function Sf(e){if(!e[Fl]){e[Fl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(uv.has(a)||vf(a,!1,e),vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fl]||(n[Fl]=!0,vf("selectionchange",!1,n))}}function y0(e,n,a,s){switch(K0(n)){case 2:var c=Fv;break;case 8:c=Bv;break;default:c=Pf}a=c.bind(null,n,a,e),c=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function yf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=s.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=ha(E),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){s=f=g;continue e}E=E.parentNode}}s=s.return}Ah(function(){var ee=f,he=zc(a),_e=[];e:{var ie=ep.get(e);if(ie!==void 0){var oe=Zo,Ve=e;switch(e){case"keypress":if(jo(a)===0)break e;case"keydown":case"keyup":oe=i_;break;case"focusin":Ve="focus",oe=kc;break;case"focusout":Ve="blur",oe=kc;break;case"beforeblur":case"afterblur":oe=kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=s_;break;case Kh:case Qh:case Jh:oe=Yx;break;case $h:oe=l_;break;case"scroll":case"scrollend":oe=kx;break;case"wheel":oe=u_;break;case"copy":case"cut":case"paste":oe=Kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Uh;break;case"toggle":case"beforetoggle":oe=d_}var tt=(n&4)!==0,Vt=!tt&&(e==="scroll"||e==="scrollend"),q=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var V=ee,Q;V!==null;){var ge=V;if(Q=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||Q===null||q===null||(ge=Ns(V,q),ge!=null&&tt.push(ho(V,ge,Q))),Vt)break;V=V.return}0<tt.length&&(ie=new oe(ie,Ve,null,a,he),_e.push({event:ie,listeners:tt}))}}if((n&7)===0){e:{if(ie=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",ie&&a!==Ic&&(Ve=a.relatedTarget||a.fromElement)&&(ha(Ve)||Ve[Li]))break e;if((oe||ie)&&(ie=he.window===he?he:(ie=he.ownerDocument)?ie.defaultView||ie.parentWindow:window,oe?(Ve=a.relatedTarget||a.toElement,oe=ee,Ve=Ve?ha(Ve):null,Ve!==null&&(Vt=u(Ve),tt=Ve.tag,Ve!==Vt||tt!==5&&tt!==27&&tt!==6)&&(Ve=null)):(oe=null,Ve=ee),oe!==Ve)){if(tt=wh,ge="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(tt=Uh,ge="onPointerLeave",q="onPointerEnter",V="pointer"),Vt=oe==null?ie:W(oe),Q=Ve==null?ie:W(Ve),ie=new tt(ge,V+"leave",oe,a,he),ie.target=Vt,ie.relatedTarget=Q,ge=null,ha(he)===ee&&(tt=new tt(q,V+"enter",Ve,a,he),tt.target=Q,tt.relatedTarget=Vt,ge=tt),Vt=ge,oe&&Ve)t:{for(tt=fv,q=oe,V=Ve,Q=0,ge=q;ge;ge=tt(ge))Q++;ge=0;for(var Ke=V;Ke;Ke=tt(Ke))ge++;for(;0<Q-ge;)q=tt(q),Q--;for(;0<ge-Q;)V=tt(V),ge--;for(;Q--;){if(q===V||V!==null&&q===V.alternate){tt=q;break t}q=tt(q),V=tt(V)}tt=null}else tt=null;oe!==null&&M0(_e,ie,oe,tt,!1),Ve!==null&&Vt!==null&&M0(_e,Vt,Ve,tt,!0)}}e:{if(ie=ee?W(ee):window,oe=ie.nodeName&&ie.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ie.type==="file")var Ut=Bh;else if(zh(ie))if(Gh)Ut=M_;else{Ut=S_;var Xe=v_}else oe=ie.nodeName,!oe||oe.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&Pc(ee.elementType)&&(Ut=Bh):Ut=y_;if(Ut&&(Ut=Ut(e,ee))){Fh(_e,Ut,a,he);break e}Xe&&Xe(e,ie,ee),e==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&vn(ie,"number",ie.value)}switch(Xe=ee?W(ee):window,e){case"focusin":(zh(Xe)||Xe.contentEditable==="true")&&(Dr=Xe,Zc=ee,Hs=null);break;case"focusout":Hs=Zc=Dr=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Yh(_e,a,he);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":Yh(_e,a,he)}var ht;if(Wc)e:{switch(e){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else wr?Ph(e,a)&&(yt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Lh&&a.locale!=="ko"&&(wr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&wr&&(ht=Rh()):(ma=he,Gc="value"in ma?ma.value:ma.textContent,wr=!0)),Xe=Bl(ee,yt),0<Xe.length&&(yt=new Dh(yt,e,null,a,he),_e.push({event:yt,listeners:Xe}),ht?yt.data=ht:(ht=Ih(a),ht!==null&&(yt.data=ht)))),(ht=p_?m_(e,a):g_(e,a))&&(yt=Bl(ee,"onBeforeInput"),0<yt.length&&(Xe=new Dh("onBeforeInput","beforeinput",null,a,he),_e.push({event:Xe,listeners:yt}),Xe.data=ht)),ov(_e,e,ee,a,he)}S0(_e,n)})}function ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Bl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ns(e,a),c!=null&&s.unshift(ho(e,c,f)),c=Ns(e,n),c!=null&&s.push(ho(e,c,f))),e.tag===3)return s;e=e.return}return[]}function fv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M0(e,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,I=E.alternate,ee=E.stateNode;if(E=E.tag,I!==null&&I===s)break;E!==5&&E!==26&&E!==27||ee===null||(I=ee,c?(ee=Ns(a,f),ee!=null&&g.unshift(ho(a,ee,I))):c||(ee=Ns(a,f),ee!=null&&g.push(ho(a,ee,I)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var dv=/\r\n?/g,hv=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(dv,`
`).replace(hv,"")}function E0(e,n){return n=b0(n),b0(e)===n}function Ht(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||bi(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&bi(e,""+s);break;case"className":Ct(e,"class",s);break;case"tabIndex":Ct(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,s);break;case"style":Eh(e,s,f);break;case"data":if(n!=="object"){Ct(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Wo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",c.name,c,null),Ht(e,n,"formEncType",c.formEncType,c,null),Ht(e,n,"formMethod",c.formMethod,c,null),Ht(e,n,"formTarget",c.formTarget,c,null)):(Ht(e,n,"encType",c.encType,c,null),Ht(e,n,"method",c.method,c,null),Ht(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Wo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Wo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":vt("beforetoggle",e),vt("toggle",e),dt(e,"popover",s);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":dt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hx.get(a)||a,dt(e,a,s))}}function Mf(e,n,a,s,c,f){switch(a){case"style":Eh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?bi(e,s):(typeof s=="number"||typeof s=="bigint")&&bi(e,""+s);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):dt(e,a,s)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,f,g,a,null)}}c&&Ht(e,n,"srcSet",a.srcSet,a,null),s&&Ht(e,n,"src",a.src,a,null);return;case"input":vt("invalid",e);var E=f=g=c=null,I=null,ee=null;for(s in a)if(a.hasOwnProperty(s)){var he=a[s];if(he!=null)switch(s){case"name":c=he;break;case"type":g=he;break;case"checked":I=he;break;case"defaultChecked":ee=he;break;case"value":f=he;break;case"defaultValue":E=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Ht(e,n,s,he,a,null)}}Yt(e,f,E,I,ee,g,c,!1);return;case"select":vt("invalid",e),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:Ht(e,n,c,E,a,null)}n=f,a=g,e.multiple=!!s,n!=null?hn(e,!!s,n,!1):a!=null&&hn(e,!!s,a,!0);return;case"textarea":vt("invalid",e),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ht(e,n,g,E,a,null)}bn(e,s,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ht(e,n,I,s,a,null)}return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(s=0;s<fo.length;s++)vt(fo[s],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(s=a[ee],s!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,ee,s,a,null)}return;default:if(Pc(n)){for(he in a)a.hasOwnProperty(he)&&(s=a[he],s!==void 0&&Mf(e,n,he,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ht(e,n,E,s,a,null))}function pv(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,I=null,ee=null,he=null;for(oe in a){var _e=a[oe];if(a.hasOwnProperty(oe)&&_e!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":I=_e;default:s.hasOwnProperty(oe)||Ht(e,n,oe,null,s,_e)}}for(var ie in s){var oe=s[ie];if(_e=a[ie],s.hasOwnProperty(ie)&&(oe!=null||_e!=null))switch(ie){case"type":f=oe;break;case"name":c=oe;break;case"checked":ee=oe;break;case"defaultChecked":he=oe;break;case"value":g=oe;break;case"defaultValue":E=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==_e&&Ht(e,n,ie,oe,s,_e)}}Ni(e,g,E,I,ee,he,f,c);return;case"select":oe=g=E=ie=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":oe=I;default:s.hasOwnProperty(f)||Ht(e,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":ie=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==I&&Ht(e,n,c,f,s,I)}n=E,a=g,s=oe,ie!=null?hn(e,!!a,ie,!1):!!s!=!!a&&(n!=null?hn(e,!!a,n,!0):hn(e,!!a,a?[]:"",!1));return;case"textarea":oe=ie=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ht(e,n,E,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":ie=c;break;case"defaultValue":oe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ht(e,n,g,c,s,f)}Sn(e,ie,oe);return;case"option":for(var Ve in a)if(ie=a[Ve],a.hasOwnProperty(Ve)&&ie!=null&&!s.hasOwnProperty(Ve))switch(Ve){case"selected":e.selected=!1;break;default:Ht(e,n,Ve,null,s,ie)}for(I in s)if(ie=s[I],oe=a[I],s.hasOwnProperty(I)&&ie!==oe&&(ie!=null||oe!=null))switch(I){case"selected":e.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Ht(e,n,I,ie,s,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ie=a[tt],a.hasOwnProperty(tt)&&ie!=null&&!s.hasOwnProperty(tt)&&Ht(e,n,tt,null,s,ie);for(ee in s)if(ie=s[ee],oe=a[ee],s.hasOwnProperty(ee)&&ie!==oe&&(ie!=null||oe!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Ht(e,n,ee,ie,s,oe)}return;default:if(Pc(n)){for(var Vt in a)ie=a[Vt],a.hasOwnProperty(Vt)&&ie!==void 0&&!s.hasOwnProperty(Vt)&&Mf(e,n,Vt,void 0,s,ie);for(he in s)ie=s[he],oe=a[he],!s.hasOwnProperty(he)||ie===oe||ie===void 0&&oe===void 0||Mf(e,n,he,ie,s,oe);return}}for(var q in a)ie=a[q],a.hasOwnProperty(q)&&ie!=null&&!s.hasOwnProperty(q)&&Ht(e,n,q,null,s,ie);for(_e in s)ie=s[_e],oe=a[_e],!s.hasOwnProperty(_e)||ie===oe||ie==null&&oe==null||Ht(e,n,_e,ie,s,oe)}function T0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&T0(g)){for(g=0,E=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],ee=I.startTime;if(ee>E)break;var he=I.transferSize,_e=I.initiatorType;he&&T0(_e)&&(I=I.responseEnd,g+=he*(I<E?1:(E-ee)/(I-ee)))}if(--s,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bf=null,Ef=null;function Gl(e){return e.nodeType===9?e:e.ownerDocument}function A0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Tf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Af=null;function gv(){var e=window.event;return e&&e.type==="popstate"?e===Af?!1:(Af=e,!0):(Af=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,xv=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,_v=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(e){return w0.resolve(null).then(e).catch(vv)}:C0;function vv(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function D0(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),is(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,po(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[Ka]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&po(e.ownerDocument.body);a=c}while(a);is(n)}function U0(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Rf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rf(a),Ls(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Sv(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function yv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function L0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Cf(e){return e.data==="$?"||e.data==="$~"}function wf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mv(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Df=null;function N0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function O0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function P0(e,n,a){switch(n=Gl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ls(e)}var ci=new Map,I0=new Set;function Hl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=X.d;X.d={f:bv,r:Ev,D:Tv,C:Av,L:Rv,m:Cv,X:Dv,S:wv,M:Uv};function bv(){var e=Qi.f(),n=Ll();return e||n}function Ev(e){var n=T(e);n!==null&&n.tag===5&&n.type==="form"?$p(n):Qi.r(e)}var es=typeof document>"u"?null:document;function z0(e,n,a){var s=es;if(s&&typeof n=="string"&&n){var c=jt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),I0.has(c)||(I0.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",e),te(n),s.head.appendChild(n)))}}function Tv(e){Qi.D(e),z0("dns-prefetch",e,null)}function Av(e,n){Qi.C(e,n),z0("preconnect",e,n)}function Rv(e,n,a){Qi.L(e,n,a);var s=es;if(s&&e&&n){var c='link[rel="preload"][as="'+jt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+jt(a.imageSizes)+'"]')):c+='[href="'+jt(e)+'"]';var f=c;switch(n){case"style":f=ts(e);break;case"script":f=ns(e)}ci.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(mo(f))||n==="script"&&s.querySelector(go(f))||(n=s.createElement("link"),Rn(n,"link",e),te(n),s.head.appendChild(n)))}}function Cv(e,n){Qi.m(e,n);var a=es;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+jt(s)+'"][href="'+jt(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ns(e)}if(!ci.has(f)&&(e=x({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}s=a.createElement("link"),Rn(s,"link",e),te(s),a.head.appendChild(s)}}}function wv(e,n,a){Qi.S(e,n,a);var s=es;if(s&&e){var c=ae(s).hoistableStyles,f=ts(e);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(mo(f)))E.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Uf(e,a);var I=g=s.createElement("link");te(I),Rn(I,"link",e),I._p=new Promise(function(ee,he){I.onload=ee,I.onerror=he}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Vl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function Dv(e,n){Qi.X(e,n);var a=es;if(a&&e){var s=ae(a).hoistableScripts,c=ns(e),f=s.get(c);f||(f=a.querySelector(go(c)),f||(e=x({src:e,async:!0},n),(n=ci.get(c))&&Lf(e,n),f=a.createElement("script"),te(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Uv(e,n){Qi.M(e,n);var a=es;if(a&&e){var s=ae(a).hoistableScripts,c=ns(e),f=s.get(c);f||(f=a.querySelector(go(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&Lf(e,n),f=a.createElement("script"),te(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function F0(e,n,a,s){var c=(c=J.current)?Hl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ts(a.href),a=ae(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ts(a.href);var f=ae(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(mo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||Lv(c,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ns(a),a=ae(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ts(e){return'href="'+jt(e)+'"'}function mo(e){return'link[rel="stylesheet"]['+e+"]"}function B0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Lv(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),te(n),e.head.appendChild(n))}function ns(e){return'[src="'+jt(e)+'"]'}function go(e){return"script[async]"+e}function G0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+jt(a.href)+'"]');if(s)return n.instance=s,te(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),te(s),Rn(s,"style",c),Vl(s,a.precedence,e),n.instance=s;case"stylesheet":c=ts(a.href);var f=e.querySelector(mo(c));if(f)return n.state.loading|=4,n.instance=f,te(f),f;s=B0(a),(c=ci.get(c))&&Uf(s,c),f=(e.ownerDocument||e).createElement("link"),te(f);var g=f;return g._p=new Promise(function(E,I){g.onload=E,g.onerror=I}),Rn(f,"link",s),n.state.loading|=4,Vl(f,a.precedence,e),n.instance=f;case"script":return f=ns(a.src),(c=e.querySelector(go(f)))?(n.instance=c,te(c),c):(s=a,(c=ci.get(f))&&(s=x({},a),Lf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),te(c),Rn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Vl(s,a.precedence,e));return n.instance}function Vl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function H0(e,n,a){if(kl===null){var s=new Map,c=kl=new Map;c.set(a,s)}else c=kl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ka]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function V0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Nv(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ov(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ts(s.href),f=n.querySelector(mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Xl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,te(f);return}f=n.ownerDocument||n,s=B0(s),(c=ci.get(c))&&Uf(s,c),f=f.createElement("link"),te(f);var g=f;g._p=new Promise(function(E,I){g.onload=E,g.onerror=I}),Rn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Nf=0;function Pv(e,n){return e.stylesheets&&e.count===0&&ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Nf===0&&(Nf=62500*mv());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Nf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(Iv,e),Wl=null,Xl.call(e))}function Iv(e,n){if(!(n.state.loading&4)){var a=Wl.get(e);if(a)var s=a.get(null);else{a=new Map,Wl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Xl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function zv(e,n,a,s,c,f,g,E,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function X0(e,n,a,s,c,f,g,E,I,ee,he,_e){return e=new zv(e,n,a,g,I,ee,he,_e,E),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},mu(f),e}function W0(e){return e?(e=Nr,e):Nr}function q0(e,n,a,s,c,f){c=W0(c),s.context===null?s.context=c:s.pendingContext=c,s=ya(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ma(e,s,n),a!==null&&(Gn(a,e,n),Ys(a,e,n))}function j0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Of(e,n){j0(e,n),(e=e.alternate)&&j0(e,n)}function Y0(e){if(e.tag===13||e.tag===31){var n=er(e,67108864);n!==null&&Gn(n,e,67108864),Of(e,67108864)}}function Z0(e){if(e.tag===13||e.tag===31){var n=Qn();n=hi(n);var a=er(e,n);a!==null&&Gn(a,e,n),Of(e,n)}}var jl=!0;function Fv(e,n,a,s){var c=N.T;N.T=null;var f=X.p;try{X.p=2,Pf(e,n,a,s)}finally{X.p=f,N.T=c}}function Bv(e,n,a,s){var c=N.T;N.T=null;var f=X.p;try{X.p=8,Pf(e,n,a,s)}finally{X.p=f,N.T=c}}function Pf(e,n,a,s){if(jl){var c=If(s);if(c===null)yf(e,n,s,Yl,a),Q0(e,s);else if(Hv(c,e,n,a,s))s.stopPropagation();else if(Q0(e,s),n&4&&-1<Gv.indexOf(e)){for(;c!==null;){var f=T(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=be(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var I=1<<31-ke(g);E.entanglements[1]|=I,g&=~I}Ri(f),(Ot&6)===0&&(Dl=b()+500,uo(0))}}break;case 31:case 13:E=er(f,2),E!==null&&Gn(E,f,2),Ll(),Of(f,2)}if(f=If(s),f===null&&yf(e,n,s,Yl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else yf(e,n,s,null,a)}}function If(e){return e=zc(e),zf(e)}var Yl=null;function zf(e){if(Yl=null,e=ha(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function K0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case xe:return 2;case ye:return 8;case de:case je:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Ff=!1,Na=null,Oa=null,Pa=null,_o=new Map,vo=new Map,Ia=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":_o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(n.pointerId)}}function So(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=T(n),n!==null&&Y0(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Hv(e,n,a,s,c){switch(n){case"focusin":return Na=So(Na,e,n,a,s,c),!0;case"dragenter":return Oa=So(Oa,e,n,a,s,c),!0;case"mouseover":return Pa=So(Pa,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return _o.set(f,So(_o.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,vo.set(f,So(vo.get(f)||null,e,n,a,s,c)),!0}return!1}function J0(e){var n=ha(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Us(e.priority,function(){Z0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Us(e.priority,function(){Z0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=If(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Ic=s,a.target.dispatchEvent(s),Ic=null}else return n=T(a),n!==null&&Y0(n),e.blockedOn=a,!1;n.shift()}return!0}function $0(e,n,a){Zl(e)&&a.delete(n)}function Vv(){Ff=!1,Na!==null&&Zl(Na)&&(Na=null),Oa!==null&&Zl(Oa)&&(Oa=null),Pa!==null&&Zl(Pa)&&(Pa=null),_o.forEach($0),vo.forEach($0)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Vv)))}var Ql=null;function eg(e){Ql!==e&&(Ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(zf(s||a)===null)continue;break}var f=T(a);f!==null&&(e.splice(n,3),n-=3,Pu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function is(e){function n(I){return Kl(I,e)}Na!==null&&Kl(Na,e),Oa!==null&&Kl(Oa,e),Pa!==null&&Kl(Pa,e),_o.forEach(n),vo.forEach(n);for(var a=0;a<Ia.length;a++){var s=Ia[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)J0(a),a.blockedOn===null&&Ia.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[dn]||null;if(typeof f=="function")g||eg(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[dn]||null)E=g.formAction;else if(zf(c)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),eg(a)}}}function tg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Bf(e){this._internalRoot=e}Jl.prototype.render=Bf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();q0(a,s,e,n,null,null)},Jl.prototype.unmount=Bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;q0(e.current,2,null,e,null,null),Ll(),n[Li]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ds();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,e),a===0&&J0(e)}};var ng=t.version;if(ng!=="19.2.0")throw Error(r(527,ng,"19.2.0"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var kv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Me=$l.inject(kv),Te=$l}catch{}}return Mo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=cm,f=um,g=fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=X0(e,1,!1,null,null,a,s,null,c,f,g,tg),e[Li]=n.current,Sf(e),new Bf(n)},Mo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=cm,g=um,E=fm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=X0(e,1,!0,n,a??null,s,c,I,f,g,E,tg),n.context=W0(null),a=n.current,s=Qn(),s=hi(s),c=ya(s),c.callback=null,Ma(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ri(n),e[Li]=n.current,Sf(e),new Jl(n)},Mo.version="19.2.0",Mo}var dg;function tS(){if(dg)return Vf.exports;dg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vf.exports=eS(),Vf.exports}var nS=tS();const iS=JSON.parse(`[{"folderName":"Fijit","title":"Fijit","videoSrc":"videos/Fijit.mp4","technologies":[{"src":"images/logos/csLogo.png","alt":"C#"},{"src":"images/logos/unityLogo.png","alt":"Unity"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"The first project of my Say It Labs internship is a mini-game collection aimed at 6-8 year olds to practice articulation. After each fidget game, the player says a word to improve speech. Some noted it could also help people with Alzheimer's. I focused on implementing the mini-games over a month and a half.","lastUpdate":"March 2024","styleType":1,"images":["images/projects/Fijit/Fijit01.png","images/projects/Fijit/Fijit02.png","images/projects/Fijit/Fijit03.png","images/projects/Fijit/Fijit04.png","images/projects/Fijit/Fijit05.png","images/projects/Fijit/Fijit06.png","images/projects/Fijit/Fijit07.png","images/projects/Fijit/Fijit08.png","images/projects/Fijit/Fijit09.png","images/projects/Fijit/Fijit10.png","images/projects/Fijit/Fijit11.png","images/projects/Fijit/Fijit12.png"]},{"folderName":"TrainGame","title":"Train game","videoSrc":"videos/TrainGame.mp4","technologies":[{"src":"images/logos/csLogo.png","alt":"C#"},{"src":"images/logos/unityLogo.png","alt":"Unity"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"The third project of my Say It Labs internship is a game based on Unrailed. Players gather resources by saying words correctly, use them to complete contracts, and upgrade their train. Bandits try to steal resources, and I built the system that controls their behavior. I also worked on spawning props, resources, and created the sand material. This project took about a month and a half.","lastUpdate":"June 2024","styleType":2,"images":["images/projects/TrainGame/TrainGame01.png","images/projects/TrainGame/TrainGame02.png","images/projects/TrainGame/TrainGame03.png","images/projects/TrainGame/TrainGame04.png"]},{"folderName":"SpeechDash","title":"Speech dash","videoSrc":"videos/SpeechDash.mp4","technologies":[{"src":"images/logos/csLogo.png","alt":"C#"},{"src":"images/logos/unityLogo.png","alt":"Unity"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"The fourth project of my Say It Labs internship is a voice-controlled game based on Geometry Dash. I worked on sound detection, tapping inputs, beat patterns, and progressively harder levels. I worked on it for two weeks.","lastUpdate":"June 2024","codeLink":null,"styleType":1,"images":["images/projects/SpeechDash/SpeechDash01.png","images/projects/SpeechDash/SpeechDash02.png","images/projects/SpeechDash/SpeechDash03.png","images/projects/SpeechDash/SpeechDash04.png","images/projects/SpeechDash/SpeechDash05.png","images/projects/SpeechDash/SpeechDash06.png","images/projects/SpeechDash/SpeechDash07.png"]},{"folderName":"GrappleItOut","title":"Grapple-It Out","videoSrc":"videos/GrappleItOut.mp4","technologies":[{"src":"images/logos/cppLogo.png","alt":"C++"},{"src":"images/logos/unrealLogo.png","alt":"Unreal"},{"src":"images/logos/perforceLogo.png","alt":"Perforce"}],"description":"This was a school project. We where divided in groups with 2 programmers and 3 artists. This was developed over the course of 1 semester. I programmed the menus, the pickUps, the pickUp spawn system and the input.","lastUpdate":"May 2023","codeLink":"https://ozikov.itch.io/grappleitout","styleType":1,"images":["images/projects/GrappleItOut/GrappleItOut.png","images/projects/GrappleItOut/GrappleItOut01.png","images/projects/GrappleItOut/GrappleItOut02.png","images/projects/GrappleItOut/GrappleItOut03.png","images/projects/GrappleItOut/GrappleItOut04.png","images/projects/GrappleItOut/GrappleItOut05.png"]},{"folderName":"VRShopping","title":"VR Shopping","videoSrc":"videos/VRShopping.mp4","technologies":[{"src":"images/logos/csLogo.png","alt":"C#"},{"src":"images/logos/unityLogo.png","alt":"Unity"},{"src":"images/logos/perforceLogo.png","alt":"Perforce"}],"description":"This was a school project made in collaboration with AZ Groeninge Hospital in Kortrijk and Hitlab. The project was developed over the course of one semester. I was responsible for programming the item-grabbing mechanics, teleportation within the aisles, interaction with fridge doors, input handling, the settings menu and the implementation of the settings. I also handled all localization in Dutch, French, English, and German.","lastUpdate":"November 2023","codeLink":null,"styleType":2,"images":["images/projects/VRShopping/VRShopping01.png","images/projects/VRShopping/VRShopping02.png","images/projects/VRShopping/VRShopping03.png","images/projects/VRShopping/VRShopping04.png","images/projects/VRShopping/VRShopping05.png","images/projects/VRShopping/VRShopping06.png","images/projects/VRShopping/VRShopping07.png","images/projects/VRShopping/VRShopping08.png","images/projects/VRShopping/VRShopping09.png","images/projects/VRShopping/VRShopping10.png","images/projects/VRShopping/VRShopping11.png"]},{"folderName":"TeaForTheQueen","title":"Tea for the Queen","videoSrc":"videos/TeaForTheQueen.mp4","technologies":[{"src":"images/logos/unrealLogo.png","alt":"Unreal"}],"description":"This was made in a game jam where we had 3 days the time to make a game in the theme \\"fragile\\". The goal of the game is to bring the tea to the queen by balancing the tea on the table with 2 people. I helped programming how the table works.","lastUpdate":"May 2023","codeLink":"https://ozikov.itch.io/tea-for-the-queen","styleType":1,"images":["images/projects/TeaForTheQueen/TeaForTheQueen.png","images/projects/TeaForTheQueen/TeaForTheQueen01.png","images/projects/TeaForTheQueen/TeaForTheQueen02.png","images/projects/TeaForTheQueen/TeaForTheQueen03.png","images/projects/TeaForTheQueen/TeaForTheQueen04.png","images/projects/TeaForTheQueen/TeaForTheQueen05.png","images/projects/TeaForTheQueen/TeaForTheQueen06.png","images/projects/TeaForTheQueen/TeaForTheQueen07.png"]},{"folderName":"ZombieAIGame","title":"Zombie AI Game","videoSrc":"videos/ZombieAIGame.mp4","technologies":[{"src":"images/logos/cppLogo.png","alt":"C++"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"This is a zombie game that was made by our teachers for the course gameplay programming.We had to create an AI plugin that plays the game with as goal to survive as long as possible. I made the AI using a behavior tree.","lastUpdate":"January 2023","codeLink":"https://github.com/WiemeJarne/ZombieAIGame","styleType":1,"images":["images/projects/ZombieAIGame/ZombieAIGame01.png","images/projects/ZombieAIGame/ZombieAIGame02.png","images/projects/ZombieAIGame/ZombieAIGame03.png"]},{"folderName":"FlowFieldPathfinding","title":"Flow field pathfinding","videoSrc":"videos/FlowFieldPathfinding.mp4","technologies":[{"src":"images/logos/cppLogo.png","alt":"C++"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"This was a small school research project for the course gameplay programming. We had to choose a topic that has something to do with AI. I choose to explore flow fields because I found it interesting how it works and that it can be used in very different fields. For example it can be used for calculating the flow of water, the spread of gas and also for the optimizing the movement of agent who have a specific goal. Due to the limited time I only researched and programmed the latter.","lastUpdate":"January 2023","codeLink":"https://github.com/WiemeJarne/Flow-field-pathfinding","styleType":2,"images":["images/projects/FlowFieldPathfinding/FlowFieldPathfinding01.png","images/projects/FlowFieldPathfinding/FlowFieldPathfinding02.png","images/projects/FlowFieldPathfinding/FlowFieldPathfinding03.png"]},{"folderName":"AISteeringBehaviors","title":"AI steering behaviors","videoSrc":"videos/AISteeringBehaviors.mp4","technologies":[{"src":"images/logos/cppLogo.png","alt":"C++"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"In this project there are various application which I programmed during a school task. It shows the implementation of variours steering behaviors like seek, flee, arrive, wander, evade... One of the tasks was to implement spatial partitioning which you can see in the end of the video.","lastUpdate":"October 2022","codeLink":"https://github.com/WiemeJarne/AISteeringBehaviors","styleType":1,"images":["images/projects/AISteeringBehaviors/AISteeringBehaviors01.png","images/projects/AISteeringBehaviors/AISteeringBehaviors02.png","images/projects/AISteeringBehaviors/AISteeringBehaviors03.png","images/projects/AISteeringBehaviors/AISteeringBehaviors04.png","images/projects/AISteeringBehaviors/AISteeringBehaviors05.png"]},{"folderName":"AIPathfinding","title":"AI pathfinding","videoSrc":"videos/AIPathfinding.mp4","technologies":[{"src":"images/logos/cppLogo.png","alt":"C++"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"This was an assignment for the course gameplay programming where we learned graph theory, pathfinding with the A-star algorithm and how to make an AI navigate a navmesh using a graph. The colored graph was an excercise to learn what an eulerian graph, semi-eulerian graph and none eulerian graph is. The nodes are collored in a way that neighboring nodes can not have the same color.","lastUpdate":"November 2022","codeLink":"https://github.com/WiemeJarne/AIPathfinding","styleType":1,"images":["images/projects/AIPathfinding/AIPathfinding01.png","images/projects/AIPathfinding/AIPathfinding02.png","images/projects/AIPathfinding/AIPathfinding03.png","images/projects/AIPathfinding/AIPathfinding04.png","images/projects/AIPathfinding/AIPathfinding05.png","images/projects/AIPathfinding/AIPathfinding06.png","images/projects/AIPathfinding/AIPathfinding07.png"]},{"folderName":"CheapSharkAPI","title":"CheapShark API","videoSrc":"videos/CheapSharkAPI.mp4","technologies":[{"src":"images/logos/csLogo.png","alt":"C#"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"I have developed an application that utilizes the <a href=\\"https://apidocs.cheapshark.com/\\"> CheapShark API</a> to collect extensive information about games and their sales across various stores. The API also enables users to set up alerts for when a game reaches a specific price or falls below it, triggering an email notification. I chose this API for its comprehensive and up-to-date data. This is a WPF application where I programmed all the C# (in async) and the xaml using the MVVM pattern.","lastUpdate":"April 2023","codeLink":"https://github.com/WiemeJarne/CheapSharkAPI_App","styleType":2,"images":["images/projects/CheapSharkAPI/CheapSharkAPI01.png","images/projects/CheapSharkAPI/CheapSharkAPI02.png","images/projects/CheapSharkAPI/CheapSharkAPI03.png","images/projects/CheapSharkAPI/CheapSharkAPI04.png"]},{"folderName":"GameEngine","title":"2D game engine","videoSrc":null,"technologies":[{"src":"images/logos/cppLogo.png","alt":"C++"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"This was part of a school assignment for the course programming 4. We had to make a simple 2d game engine using the next game programming patterns: Command, Observer, Singelton, Game Loop, Update Method, Component, Event Queue, Service Locator, Dirty Flag.","lastUpdate":"August 2023","codeLink":"https://github.com/WiemeJarne/GameEngine","styleType":1,"images":["images/projects/GameEngine/GameEngine.jpg"]},{"folderName":"BurgerTime","title":"Burger Time","videoSrc":"videos/BurgerTime.mp4","technologies":[{"src":"images/logos/cppLogo.png","alt":"C++"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"This project is to show what is possible with my own 2D game engine. It's a replica of the first tree levels of Burger Time. There are tree game modes: single player, co-op(local) and versus.","lastUpdate":"June 2023","codeLink":"https://github.com/WiemeJarne/BurgerTime","styleType":1,"images":["images/projects/BurgerTime/BurgerTime01.png","images/projects/BurgerTime/BurgerTime02.png","images/projects/BurgerTime/BurgerTime03.png","images/projects/BurgerTime/BurgerTime04.png","images/projects/BurgerTime/BurgerTime05.png","images/projects/BurgerTime/BurgerTime06.png"]},{"folderName":"DualRasterizer","title":"Dual rasterizer","videoSrc":"videos/DualRasterizer.mp4","technologies":[{"src":"images/logos/cppLogo.png","alt":"C++"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"This was a school assignment for the course graphics programming. We had to program a software and a hardware rasterizer and combine the 2 in 1 app so you can switch between software and hardware with the press of a button. As an extra I also implemented transparency and multithreading in the software version.","lastUpdate":"January 2023","codeLink":"https://github.com/WiemeJarne/DualRasterizer","styleType":2,"images":["images/projects/DualRasterizer/DualRasterizer01.png","images/projects/DualRasterizer/DualRasterizer02.png","images/projects/DualRasterizer/DualRasterizer03.png","images/projects/DualRasterizer/DualRasterizer04.png","images/projects/DualRasterizer/DualRasterizer05.png","images/projects/DualRasterizer/DualRasterizer06.png","images/projects/DualRasterizer/DualRasterizer07.png","images/projects/DualRasterizer/DualRasterizer08.png"]},{"folderName":"SoftwareRayTracer","title":"Software ray tracer","videoSrc":"videos/SoftwareRayTracer.mp4","technologies":[{"src":"images/logos/cppLogo.png","alt":"C++"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"This was a school assigment for the course graphics programming. We had to program a software ray tracer and make it have as much fps as possible. To improve the fps I implemented AABB (Axis aligned bounding box) and I added multithreading.","lastUpdate":"November 2022","codeLink":"https://github.com/WiemeJarne/SoftwareRayTracer","styleType":1,"images":["images/projects/SoftwareRayTracer/SoftwareRayTracer01.png","images/projects/SoftwareRayTracer/SoftwareRayTracer02.png"]},{"folderName":"BlockGame","title":"Block game","videoSrc":"videos/BlockGame.mp4","technologies":[{"src":"images/logos/csLogo.png","alt":"C#"},{"src":"images/logos/unityLogo.png","alt":"Unity"},{"src":"images/logos/gitLogo.png","alt":"Git"}],"description":"The second project of my Say It Labs internship is a game where blocks form words. I came up with mini-games for all categories of phonemic awareness and implemented one for the segmentation category, where players separate phonemes. Due to time constraints, I only managed to separate letters. I worked on this for about three days. This was a great excercise for me to get familiar with the codebase of an existing project.","lastUpdate":"March 2024","codeLink":null,"styleType":1,"images":["images/projects/BlockGame/BlockGame01.png","images/projects/BlockGame/BlockGame02.png","images/projects/BlockGame/BlockGame03.png","images/projects/BlockGame/BlockGame04.png","images/projects/BlockGame/BlockGame05.png","images/projects/BlockGame/BlockGame06.png","images/projects/BlockGame/BlockGame07.png","images/projects/BlockGame/BlockGame08.png"]}]`),hg={projects:iS},aS="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",bo={INITIAL_DURATION:1200,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20,ENTER_TRANSITION_MS:180},Eo=(o,t=0,i=100)=>Math.min(Math.max(o,t),i),Md=(o,t=3)=>parseFloat(o.toFixed(t)),pg=(o,t,i,r,l)=>Md(r+(l-r)*(o-t)/(i-t)),rS=({cardPadding:o,cardWith:t="100%",cardHeight:i="80svh",children:r,avatarUrl:l="<Placeholder for avatar URL>",iconUrl:u="<Placeholder for icon URL>",grainUrl:d="<Placeholder for grain URL>",innerGradient:h,behindGlowEnabled:m=!0,behindGlowColor:p,behindGlowSize:_,className:x="",enableTilt:S=!0,enableMobileTilt:M=!1,mobileTiltSensitivity:A=5,miniAvatarUrl:C,name:y="Jarne Wieme",title:v="Software Engineer",aboutText:z="",handle:L="javicodes",status:B="Online",contactText:k="Contact",showUserInfo:O=!0,onContactClick:P})=>{const ne=Jt.useRef(null),w=Jt.useRef(null),R=Jt.useRef(null),H=Jt.useRef(null),Y=Jt.useMemo(()=>{if(!S)return null;let re=null,ce=!1,D=0,K=0,me=0,Se=0,De=0;const J=.14,se=.6;let Ae=0;const Ue=(ct,nt)=>{const mt=w.current,F=ne.current;if(!mt||!F)return;const ot=mt.clientWidth||1,gt=mt.clientHeight||1,Mt=Eo(100/ot*ct),Ie=Eo(100/gt*nt),It=Mt-50,qe=Ie-50,rt={"--pointer-x":`${Mt}%`,"--pointer-y":`${Ie}%`,"--background-x":`${pg(Mt,0,100,35,65)}%`,"--background-y":`${pg(Ie,0,100,35,65)}%`,"--pointer-from-center":`${Eo(Math.hypot(Ie-50,Mt-50)/50,0,1)}`,"--pointer-from-top":`${Ie/100}`,"--pointer-from-left":`${Mt/100}`,"--rotate-x":`${Md(-(It/5))}deg`,"--rotate-y":`${Md(qe/4)}deg`};for(const[U,b]of Object.entries(rt))F.style.setProperty(U,b)},Fe=ct=>{if(!ce)return;D===0&&(D=ct);const nt=(ct-D)/1e3;D=ct;const mt=ct<Ae?se:J,F=1-Math.exp(-nt/mt);K+=(Se-K)*F,me+=(De-me)*F,Ue(K,me),Math.abs(Se-K)>.05||Math.abs(De-me)>.05||document.hasFocus()?re=requestAnimationFrame(Fe):(ce=!1,D=0,re&&(cancelAnimationFrame(re),re=null))},Qe=()=>{ce||(ce=!0,D=0,re=requestAnimationFrame(Fe))};return{setImmediate(ct,nt){K=ct,me=nt,Ue(K,me)},setTarget(ct,nt){Se=ct,De=nt,Qe()},toCenter(){const ct=w.current;ct&&this.setTarget(ct.clientWidth/2,ct.clientHeight/2)},beginInitial(ct){Ae=performance.now()+ct,Qe()},getCurrent(){return{x:K,y:me,tx:Se,ty:De}},cancel(){re&&cancelAnimationFrame(re),re=null,ce=!1,D=0}}},[S]),le=(re,ce)=>{const D=ce.getBoundingClientRect();return{x:re.clientX-D.left,y:re.clientY-D.top}},pe=Jt.useCallback(re=>{const ce=w.current;if(!ce||!Y)return;const{x:D,y:K}=le(re,ce);Y.setTarget(D,K)},[Y]),fe=Jt.useCallback(re=>{const ce=w.current;if(!ce||!Y)return;ce.classList.add("active"),ce.classList.add("entering"),R.current&&window.clearTimeout(R.current),R.current=window.setTimeout(()=>{ce.classList.remove("entering")},bo.ENTER_TRANSITION_MS);const{x:D,y:K}=le(re,ce);Y.setTarget(D,K)},[Y]),N=Jt.useCallback(()=>{const re=w.current;if(!re||!Y)return;Y.toCenter();const ce=()=>{const{x:D,y:K,tx:me,ty:Se}=Y.getCurrent();Math.hypot(me-D,Se-K)<.6?(re.classList.remove("active"),H.current=null):H.current=requestAnimationFrame(ce)};H.current&&cancelAnimationFrame(H.current),H.current=requestAnimationFrame(ce)},[Y]),X=Jt.useCallback(re=>{const ce=w.current;if(!ce||!Y)return;const{beta:D,gamma:K}=re;if(D==null||K==null)return;const me=ce.clientWidth/2,Se=ce.clientHeight/2,De=Eo(me+K*A,0,ce.clientWidth),J=Eo(Se+(D-bo.DEVICE_BETA_OFFSET)*A,0,ce.clientHeight);Y.setTarget(De,J)},[Y,A]);Jt.useEffect(()=>{if(!S||!Y)return;const re=w.current;if(!re)return;const ce=pe,D=fe,K=N,me=X;re.addEventListener("pointerenter",D),re.addEventListener("pointermove",ce),re.addEventListener("pointerleave",K);const Se=()=>{if(!M||location.protocol!=="https:")return;const se=window.DeviceMotionEvent;se&&typeof se.requestPermission=="function"?se.requestPermission().then(Ae=>{Ae==="granted"&&window.addEventListener("deviceorientation",me)}).catch(console.error):window.addEventListener("deviceorientation",me)};re.addEventListener("click",Se);const De=(re.clientWidth||0)-bo.INITIAL_X_OFFSET,J=bo.INITIAL_Y_OFFSET;return Y.setImmediate(De,J),Y.toCenter(),Y.beginInitial(bo.INITIAL_DURATION),()=>{re.removeEventListener("pointerenter",D),re.removeEventListener("pointermove",ce),re.removeEventListener("pointerleave",K),re.removeEventListener("click",Se),window.removeEventListener("deviceorientation",me),R.current&&window.clearTimeout(R.current),H.current&&cancelAnimationFrame(H.current),Y.cancel(),re.classList.remove("entering")}},[S,M,Y,pe,fe,N,X]);const j=Jt.useMemo(()=>({"--icon":u?`url(${u})`:"none","--grain":d?`url(${d})`:"none","--inner-gradient":h??aS,"--behind-glow-color":p??"rgba(125, 190, 255, 0.67)","--behind-glow-size":_??"50%",width:t,padding:o}),[u,d,h,p,_,t,o]);return Jt.useCallback(()=>{P?.()},[P]),Ee.jsxs("div",{ref:ne,className:`pc-card-wrapper ${x}`.trim(),style:j,children:[m&&Ee.jsx("div",{className:"pc-behind"}),Ee.jsx("div",{ref:w,className:"pc-card-shell",children:Ee.jsx("section",{className:"pc-card",style:{height:i},children:Ee.jsxs("div",{className:"pc-inside",children:[Ee.jsx("div",{className:"pc-shine"}),Ee.jsx("div",{className:"pc-glare"}),r]})})})]})},Lo=Zv.memo(rS);function sS(){const o=Jt.useRef({});return Jt.useEffect(()=>{const t=[];return hg.projects.forEach(i=>{if(i.images?.length>1){let r=0;const l=document.getElementById(`${i.folderName}Image`);if(!l)return;const u=setInterval(()=>{r=(r+1)%i.images.length,l.src=`/${i.images[r]}`},2e3);t.push(u)}}),()=>t.forEach(clearInterval)},[]),Ee.jsxs("section",{className:"projectsSection",children:[Ee.jsx(Lo,{cardHeight:"20svh",cardPadding:"1% 5% 1% 5%",children:Ee.jsx("div",{className:"projectsTitleBanner",children:Ee.jsx("h3",{children:"Projects"})})}),Ee.jsx("div",{className:"projectsGrid",children:hg.projects.map((t,i)=>{const l=i%3;let u;return l===0?u="1% 0% 0% 5%":l===1?u="1% 0% 0% 0%":u="1% 5% 0% 0%",Ee.jsx(Lo,{cardWith:"32%",cardHeight:"80svh",cardPadding:u,children:Ee.jsxs("div",{className:`projectContainer ${t.styleType===2?"style2":""}`,children:[t.styleType===1&&Ee.jsx("h3",{children:Ee.jsx("strong",{children:t.title})}),Ee.jsxs("div",{className:"playVideoOnImageHover",children:[Ee.jsx("video",{ref:d=>o.current[t.folderName]=d,className:"hover-video",muted:!0,loop:!0,preload:"metadata",playsInline:!0,children:Ee.jsx("source",{src:t.videoSrc,type:"video/mp4"})}),Ee.jsx("img",{id:`${t.folderName}Image`,alt:`${t.title} image`,className:"projectVisials",src:`./${t.images[0]}`,onMouseEnter:()=>{const d=o.current[t.folderName];d&&d.play().catch(()=>{})},onMouseLeave:()=>{const d=o.current[t.folderName];d&&(d.pause(),d.currentTime=0)}})]}),Ee.jsx("div",{className:"boxContainerItemsHorizontal",children:t.technologies.map(d=>Ee.jsx("img",{src:d.src,alt:d.alt,className:"smallLogoImage"},d.src))}),t.styleType===2&&Ee.jsx("h3",{children:Ee.jsx("strong",{children:t.title})}),Ee.jsxs("div",{className:"boxContainerItemsVertical transparentBackground",style:t.styleType===2?{margin:"2%"}:{},children:[Ee.jsx("p",{children:t.description}),Ee.jsxs("span",{children:["Last update: ",t.lastUpdate]}),t.codeLink&&Ee.jsx("a",{href:t.codeLink,target:"_blank",className:"projectCodeLink",children:"View Code"})]})]})},`grid1-${t.folderName}`)})})]})}function oS(){return Ee.jsxs("div",{children:[Ee.jsx(Lo,{cardHeight:"58svh",name:"Jarne Wieme",title:"Software Engineer",aboutText:` Hello! My name is Jarne Wieme, I graduated in DAE game development in June 2024 at Howest University in Kortrijk.\r
                  During my time at Howest I learned to work with commonly used tools that are being used by game developments companies today. This includes C++, C#, Unity, Unreal Engine 4 and 5... There were also two group projects where we learned to work with source control and communicate with each other. We learned different categories of programming for a game studio like graphics programming, gameplay programming, game engine programming and AI programming.`,avatarUrl:"./images/Me.png",showUserInfo:!1,enableTilt:!1,enableMobileTilt:!1,cardPadding:"1% 5% 1% 5%",children:Ee.jsxs("div",{className:"pc-content",children:[Ee.jsxs("div",{className:"pc-avatar-content",children:[Ee.jsxs("div",{className:"pc-details",children:[Ee.jsx("h3",{children:"Jarne Wieme"}),Ee.jsx("p",{children:"Software Engineer"})]}),Ee.jsx("div",{children:Ee.jsx("img",{className:"avatar",src:"./images/Me.png",alt:"Jarne Wieme avatar",loading:"lazy",onError:o=>{const t=o.target;t.style.display="none"}})})]}),Ee.jsxs("div",{className:"pc-about",children:[Ee.jsx("h3",{children:"About Me"}),Ee.jsx("p",{children:'" Hello! My name is Jarne Wieme, I graduated in DAE game development in June 2024 at Howest University in Kortrijk. During my time at Howest I learned to work with commonly used tools that are being used by game developments companies today. This includes C++, C#, Unity, Unreal Engine 4 and 5... There were also two group projects where we learned to work with source control and communicate with each other. We learned different categories of programming for a game studio like graphics programming, gameplay programming, game engine programming and AI programming."'})]})]})}),Ee.jsxs("section",{className:"sectionStyle",children:[Ee.jsx(Lo,{cardPadding:"1% 1% 1% 5%",cardHeight:"55svh",children:Ee.jsxs("div",{className:"skills-content",children:[Ee.jsx("h3",{children:Ee.jsx("strong",{children:"Skills"})}),Ee.jsxs("div",{className:"skillsGrid",children:[Ee.jsxs("div",{className:"skillItem",children:[Ee.jsx("img",{src:"./images/logos/cppLogo.png",className:"logoImage"}),Ee.jsx("span",{children:"C++"})]}),Ee.jsxs("div",{className:"skillItem",children:[Ee.jsx("img",{src:"./images/logos/csLogo.png",className:"logoImage"}),Ee.jsx("span",{children:"C#"})]}),Ee.jsxs("div",{className:"skillItem",children:[Ee.jsx("img",{src:"./images/logos/gitLogo.png",className:"logoImage"}),Ee.jsx("span",{children:"Git"})]}),Ee.jsxs("div",{className:"skillItem",children:[Ee.jsx("img",{src:"./images/logos/perforceLogo.png",className:"logoImage"}),Ee.jsx("span",{children:"Perforce"})]}),Ee.jsxs("div",{className:"skillItem",children:[Ee.jsx("img",{src:"./images/logos/unityLogo.png",className:"logoImage"}),Ee.jsx("span",{children:"Unity"})]}),Ee.jsxs("div",{className:"skillItem",children:[Ee.jsx("img",{src:"./images/logos/unrealLogo.png",className:"logoImage"}),Ee.jsx("span",{children:"Unreal engine"})]}),Ee.jsxs("div",{className:"skillItem",children:[Ee.jsx("img",{src:"./images/logos/luaLogo.png",className:"logoImage"}),Ee.jsx("span",{children:"Lua"})]}),Ee.jsxs("div",{className:"skillItem",children:[Ee.jsx("img",{src:"./images/logos/robloxStudioLogo.png",className:"logoImage"}),Ee.jsx("span",{children:"Roblox studio"})]})]})]})}),Ee.jsx(Lo,{cardPadding:"1% 5% 1% 1%",cardHeight:"55svh",children:Ee.jsxs("div",{className:"myProfile",children:[Ee.jsx("h3",{children:Ee.jsx("strong",{children:"My Profile"})}),Ee.jsx("span",{children:"Jarne Wieme"}),Ee.jsx("br",{}),Ee.jsx("span",{children:"Ghent, Belgium"}),Ee.jsx("br",{}),Ee.jsx("span",{children:"Digital Arts and Entertainment - Game Development (graduated June 2024)"}),Ee.jsx("br",{}),Ee.jsx("h3",{children:Ee.jsx("strong",{children:"Contact Me"})}),Ee.jsx("span",{children:"+32 496/81.49.52"}),Ee.jsx("br",{}),Ee.jsx("span",{children:"jarne.wieme@telenet.be"}),Ee.jsx("br",{}),Ee.jsx("a",{href:"https://www.linkedin.com/in/jarnewieme/",target:"_blank",children:"linkedin.com/in/jarnewieme "})]})})]}),Ee.jsx(sS,{}),Ee.jsx("footer",{style:{zIndex:"999"},children:Ee.jsx("strong",{children:"© Jarne Wieme 2024-2026"})})]})}const hh="181",lS=0,mg=1,cS=2,fx=1,uS=2,aa=3,ja=0,Vn=1,ra=2,la=0,_s=1,gg=2,xg=3,_g=4,fS=5,Sr=100,dS=101,hS=102,pS=103,mS=104,gS=200,xS=201,_S=202,vS=203,bd=204,Ed=205,SS=206,yS=207,MS=208,bS=209,ES=210,TS=211,AS=212,RS=213,CS=214,Td=0,Ad=1,Rd=2,Ss=3,Cd=4,wd=5,Dd=6,Ud=7,dx=0,wS=1,DS=2,qa=0,US=1,LS=2,NS=3,OS=4,PS=5,IS=6,zS=7,hx=300,ys=301,Ms=302,Ld=303,Nd=304,wc=306,Od=1e3,sa=1001,Pd=1002,ei=1003,FS=1004,ec=1005,di=1006,qf=1007,Mr=1008,ua=1009,px=1010,mx=1011,No=1012,ph=1013,Er=1014,oa=1015,Ts=1016,mh=1017,gh=1018,Oo=1020,gx=35902,xx=35899,_x=1021,vx=1022,Mi=1023,Po=1026,Io=1027,Sx=1028,xh=1029,_h=1030,vh=1031,Sh=1033,yc=33776,Mc=33777,bc=33778,Ec=33779,Id=35840,zd=35841,Fd=35842,Bd=35843,Gd=36196,Hd=37492,Vd=37496,kd=37808,Xd=37809,Wd=37810,qd=37811,jd=37812,Yd=37813,Zd=37814,Kd=37815,Qd=37816,Jd=37817,$d=37818,eh=37819,th=37820,nh=37821,ih=36492,ah=36494,rh=36495,sh=36283,oh=36284,lh=36285,ch=36286,BS=3200,GS=3201,HS=0,VS=1,Xa="",fi="srgb",bs="srgb-linear",Ac="linear",kt="srgb",as=7680,vg=519,kS=512,XS=513,WS=514,yx=515,qS=516,jS=517,YS=518,ZS=519,Sg=35044,yg="300 es",wi=2e3,Rc=2001;function Mx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KS(){const o=Cc("canvas");return o.style.display="block",o}const Mg={};function bg(...o){const t="THREE."+o.shift();console.log(t,...o)}function ft(...o){const t="THREE."+o.shift();console.warn(t,...o)}function an(...o){const t="THREE."+o.shift();console.error(t,...o)}function zo(...o){const t=o.join(" ");t in Mg||(Mg[t]=!0,ft(...o))}function QS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class As{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,uh=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function At(o,t,i){return Math.max(t,Math.min(i,o))}function JS(o,t){return(o%t+t)%t}function Yf(o,t,i){return(1-i)*o+i*t}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(t=0,i=0){Rt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(At(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3],S=u[d+0],M=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(h>=1){t[i+0]=S,t[i+1]=M,t[i+2]=A,t[i+3]=C;return}if(x!==C||m!==S||p!==M||_!==A){let y=m*S+p*M+_*A+x*C;y<0&&(S=-S,M=-M,A=-A,C=-C,y=-y);let v=1-h;if(y<.9995){const z=Math.acos(y),L=Math.sin(z);v=Math.sin(v*z)/L,h=Math.sin(h*z)/L,m=m*v+S*h,p=p*v+M*h,_=_*v+A*h,x=x*v+C*h}else{m=m*v+S*h,p=p*v+M*h,_=_*v+A*h,x=x*v+C*h;const z=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=z,p*=z,_*=z,x*=z}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=u[d],S=u[d+1],M=u[d+2],A=u[d+3];return t[i]=h*A+_*x+m*M-p*S,t[i+1]=m*A+_*S+p*x-h*M,t[i+2]=p*A+_*M+h*S-m*x,t[i+3]=_*A-h*x-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),x=h(u/2),S=m(r/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*_*x+p*M*A,this._y=p*M*x-S*_*A,this._z=p*_*A+S*M*x,this._w=p*_*x-S*M*A;break;case"YXZ":this._x=S*_*x+p*M*A,this._y=p*M*x-S*_*A,this._z=p*_*A-S*M*x,this._w=p*_*x+S*M*A;break;case"ZXY":this._x=S*_*x-p*M*A,this._y=p*M*x+S*_*A,this._z=p*_*A+S*M*x,this._w=p*_*x-S*M*A;break;case"ZYX":this._x=S*_*x-p*M*A,this._y=p*M*x+S*_*A,this._z=p*_*A-S*M*x,this._w=p*_*x+S*M*A;break;case"YZX":this._x=S*_*x+p*M*A,this._y=p*M*x+S*_*A,this._z=p*_*A-S*M*x,this._w=p*_*x-S*M*A;break;case"XZY":this._x=S*_*x-p*M*A,this._y=p*M*x-S*_*A,this._z=p*_*A+S*M*x,this._w=p*_*x+S*M*A;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],S=r+h+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>x){const M=2*Math.sqrt(1+r-h-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-r-x);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(At(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(t=0,i=0,r=0){ue.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Eg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Eg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),_=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+m*p+d*x-h*_,this.y=r+m*_+h*p-u*x,this.z=l+m*x+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Zf.copy(this).projectOnVector(t),this.sub(Zf)}reflect(t){return this.sub(Zf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(At(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new ue,Eg=new Bo;class pt{constructor(t,i,r,l,u,d,h,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],x=r[7],S=r[2],M=r[5],A=r[8],C=l[0],y=l[3],v=l[6],z=l[1],L=l[4],B=l[7],k=l[2],O=l[5],P=l[8];return u[0]=d*C+h*z+m*k,u[3]=d*y+h*L+m*O,u[6]=d*v+h*B+m*P,u[1]=p*C+_*z+x*k,u[4]=p*y+_*L+x*O,u[7]=p*v+_*B+x*P,u[2]=S*C+M*z+A*k,u[5]=S*y+M*L+A*O,u[8]=S*v+M*B+A*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=_*d-h*p,S=h*m-_*u,M=p*u-d*m,A=i*x+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=x*C,t[1]=(l*p-_*r)*C,t[2]=(h*r-l*d)*C,t[3]=S*C,t[4]=(_*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=M*C,t[7]=(r*m-p*i)*C,t[8]=(d*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Kf.makeScale(t,i)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new pt,Tg=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ag=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const o={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===kt&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[bs]:{primaries:t,whitePoint:r,transfer:Ac,toXYZ:Tg,fromXYZ:Ag,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:Tg,fromXYZ:Ag,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Nt=$S();function ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class ey{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{rs===void 0&&(rs=Cc("canvas")),rs.width=t.width,rs.height=t.height;const l=rs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=rs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Cc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ca(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ca(i[r]/255)*255):i[r]=ca(i[r]);return{data:i,width:t.width,height:t.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ty=0;class yh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Qf(l[d].image)):u.push(Qf(l[d]))}else u=Qf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ey.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let ny=0;const Jf=new ue;class On extends As{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=sa,l=sa,u=di,d=Mr,h=Mi,m=ua,p=On.DEFAULT_ANISOTROPY,_=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Fo(),this.name="",this.source=new yh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jf).x}get height(){return this.source.getSize(Jf).y}get depth(){return this.source.getSize(Jf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Od:t.x=t.x-Math.floor(t.x);break;case sa:t.x=t.x<0?0:1;break;case Pd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Od:t.y=t.y-Math.floor(t.y);break;case sa:t.y=t.y<0?0:1;break;case Pd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=hx;On.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],x=m[8],S=m[1],M=m[5],A=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(x-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(x+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,B=(M+1)/2,k=(v+1)/2,O=(_+S)/4,P=(x+C)/4,ne=(A+y)/4;return L>B&&L>k?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=O/r,u=P/r):B>k?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=O/l,u=ne/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=P/u,l=ne/u),this.set(r,l,u,i),this}let z=Math.sqrt((y-A)*(y-A)+(x-C)*(x-C)+(S-_)*(S-_));return Math.abs(z)<.001&&(z=1),this.x=(y-A)/z,this.y=(x-C)/z,this.z=(S-_)/z,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this.w=At(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this.w=At(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iy extends As{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new On(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new yh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends iy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class bx extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ay extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(t=new ue(1/0,1/0,1/0),i=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,xi):xi.fromBufferAttribute(u,d),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tc.copy(r.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),nc.subVectors(this.max,Ao),ss.subVectors(t.a,Ao),os.subVectors(t.b,Ao),ls.subVectors(t.c,Ao),Fa.subVectors(os,ss),Ba.subVectors(ls,os),hr.subVectors(ss,ls);let i=[0,-Fa.z,Fa.y,0,-Ba.z,Ba.y,0,-hr.z,hr.y,Fa.z,0,-Fa.x,Ba.z,0,-Ba.x,hr.z,0,-hr.x,-Fa.y,Fa.x,0,-Ba.y,Ba.x,0,-hr.y,hr.x,0];return!$f(i,ss,os,ls,nc)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,ss,os,ls,nc))?!1:(ic.crossVectors(Fa,Ba),i=[ic.x,ic.y,ic.z],$f(i,ss,os,ls,nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],xi=new ue,tc=new Go,ss=new ue,os=new ue,ls=new ue,Fa=new ue,Ba=new ue,hr=new ue,Ao=new ue,nc=new ue,ic=new ue,pr=new ue;function $f(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){pr.fromArray(o,u);const h=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=t.dot(pr),p=i.dot(pr),_=r.dot(pr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const ry=new Go,Ro=new ue,ed=new ue;class Mh{constructor(t=new ue,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):ry.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(ed)),this.expandByPoint(Ro.copy(t.center).sub(ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new ue,td=new ue,ac=new ue,Ga=new ue,nd=new ue,rc=new ue,id=new ue;class sy{constructor(t=new ue,i=new ue(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){td.copy(t).add(i).multiplyScalar(.5),ac.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(td);const u=t.distanceTo(i)*.5,d=-this.direction.dot(ac),h=Ga.dot(this.direction),m=-Ga.dot(ac),p=Ga.lengthSq(),_=Math.abs(1-d*d);let x,S,M,A;if(_>0)if(x=d*m-h,S=d*h-m,A=u*_,x>=0)if(S>=-A)if(S<=A){const C=1/_;x*=C,S*=C,M=x*(x+d*S+2*h)+S*(d*x+S+2*m)+p}else S=u,x=Math.max(0,-(d*S+h)),M=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(d*S+h)),M=-x*x+S*(S+2*m)+p;else S<=-A?(x=Math.max(0,-(-d*u+h)),S=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p):S<=A?(x=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(x=Math.max(0,-(d*u+h)),S=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p);else S=d>0?-u:u,x=Math.max(0,-(d*S+h)),M=-x*x+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(td).addScaledVector(ac,S),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,d=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,d=(t.min.y-S.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-S.z)*x,m=(t.max.z-S.z)*x):(h=(t.max.z-S.z)*x,m=(t.min.z-S.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,r,l,u){nd.subVectors(i,t),rc.subVectors(r,t),id.crossVectors(nd,rc);let d=this.direction.dot(id),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(rc.crossVectors(Ga,rc));if(m<0)return null;const p=h*this.direction.dot(nd.cross(Ga));if(p<0||m+p>d)return null;const _=-h*Ga.dot(id);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,i,r,l,u,d,h,m,p,_,x,S,M,A,C,y){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,_,x,S,M,A,C,y)}set(t,i,r,l,u,d,h,m,p,_,x,S,M,A,C,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=S,v[3]=M,v[7]=A,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/cs.setFromMatrixColumn(t,0).length(),u=1/cs.setFromMatrixColumn(t,1).length(),d=1/cs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const S=d*_,M=d*x,A=h*_,C=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=M+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+M*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*_,M=m*x,A=p*_,C=p*x;i[0]=S+C*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=M*h-A,i[6]=C+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*_,M=m*x,A=p*_,C=p*x;i[0]=S-C*h,i[4]=-d*x,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*_,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*_,M=d*x,A=h*_,C=h*x;i[0]=m*_,i[4]=A*p-M,i[8]=S*p+C,i[1]=m*x,i[5]=C*p+S,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=C-S*x,i[8]=A*x+M,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*x+A,i[10]=S-C*x}else if(t.order==="XZY"){const S=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=S*x+C,i[5]=d*_,i[9]=M*x-A,i[2]=A*x-M,i[6]=h*_,i[10]=C*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oy,t,ly)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ha.crossVectors(r,Jn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ha.crossVectors(r,Jn)),Ha.normalize(),sc.crossVectors(Jn,Ha),l[0]=Ha.x,l[4]=sc.x,l[8]=Jn.x,l[1]=Ha.y,l[5]=sc.y,l[9]=Jn.y,l[2]=Ha.z,l[6]=sc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],x=r[5],S=r[9],M=r[13],A=r[2],C=r[6],y=r[10],v=r[14],z=r[3],L=r[7],B=r[11],k=r[15],O=l[0],P=l[4],ne=l[8],w=l[12],R=l[1],H=l[5],Y=l[9],le=l[13],pe=l[2],fe=l[6],N=l[10],X=l[14],j=l[3],re=l[7],ce=l[11],D=l[15];return u[0]=d*O+h*R+m*pe+p*j,u[4]=d*P+h*H+m*fe+p*re,u[8]=d*ne+h*Y+m*N+p*ce,u[12]=d*w+h*le+m*X+p*D,u[1]=_*O+x*R+S*pe+M*j,u[5]=_*P+x*H+S*fe+M*re,u[9]=_*ne+x*Y+S*N+M*ce,u[13]=_*w+x*le+S*X+M*D,u[2]=A*O+C*R+y*pe+v*j,u[6]=A*P+C*H+y*fe+v*re,u[10]=A*ne+C*Y+y*N+v*ce,u[14]=A*w+C*le+y*X+v*D,u[3]=z*O+L*R+B*pe+k*j,u[7]=z*P+L*H+B*fe+k*re,u[11]=z*ne+L*Y+B*N+k*ce,u[15]=z*w+L*le+B*X+k*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],x=t[6],S=t[10],M=t[14],A=t[3],C=t[7],y=t[11],v=t[15];return A*(+u*m*x-l*p*x-u*h*S+r*p*S+l*h*M-r*m*M)+C*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*_-u*m*_)+y*(+i*p*x-i*h*M-u*d*x+r*d*M+u*h*_-r*p*_)+v*(-l*h*_-i*m*x+i*h*S+l*d*x-r*d*S+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=t[9],S=t[10],M=t[11],A=t[12],C=t[13],y=t[14],v=t[15],z=x*y*p-C*S*p+C*m*M-h*y*M-x*m*v+h*S*v,L=A*S*p-_*y*p-A*m*M+d*y*M+_*m*v-d*S*v,B=_*C*p-A*x*p+A*h*M-d*C*M-_*h*v+d*x*v,k=A*x*m-_*C*m-A*h*S+d*C*S+_*h*y-d*x*y,O=i*z+r*L+l*B+u*k;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/O;return t[0]=z*P,t[1]=(C*S*u-x*y*u-C*l*M+r*y*M+x*l*v-r*S*v)*P,t[2]=(h*y*u-C*m*u+C*l*p-r*y*p-h*l*v+r*m*v)*P,t[3]=(x*m*u-h*S*u-x*l*p+r*S*p+h*l*M-r*m*M)*P,t[4]=L*P,t[5]=(_*y*u-A*S*u+A*l*M-i*y*M-_*l*v+i*S*v)*P,t[6]=(A*m*u-d*y*u-A*l*p+i*y*p+d*l*v-i*m*v)*P,t[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*M+i*m*M)*P,t[8]=B*P,t[9]=(A*x*u-_*C*u-A*r*M+i*C*M+_*r*v-i*x*v)*P,t[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*v+i*h*v)*P,t[11]=(_*h*u-d*x*u-_*r*p+i*x*p+d*r*M-i*h*M)*P,t[12]=k*P,t[13]=(_*C*l-A*x*l+A*r*S-i*C*S-_*r*y+i*x*y)*P,t[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*y-i*h*y)*P,t[15]=(d*x*l-_*h*l+_*r*m-i*x*m-d*r*S+i*h*S)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,x=h+h,S=u*p,M=u*_,A=u*x,C=d*_,y=d*x,v=h*x,z=m*p,L=m*_,B=m*x,k=r.x,O=r.y,P=r.z;return l[0]=(1-(C+v))*k,l[1]=(M+B)*k,l[2]=(A-L)*k,l[3]=0,l[4]=(M-B)*O,l[5]=(1-(S+v))*O,l[6]=(y+z)*O,l[7]=0,l[8]=(A+L)*P,l[9]=(y-z)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const d=cs.set(l[4],l[5],l[6]).length(),h=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/u,_=1/d,x=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=x,_i.elements[9]*=x,_i.elements[10]*=x,i.setFromRotationMatrix(_i),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=wi,m=!1){const p=this.elements,_=2*u/(i-t),x=2*u/(r-l),S=(i+t)/(i-t),M=(r+l)/(r-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===wi)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Rc)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=wi,m=!1){const p=this.elements,_=2/(i-t),x=2/(r-l),S=-(i+t)/(i-t),M=-(r+l)/(r-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===wi)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===Rc)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const cs=new ue,_i=new mn,oy=new ue(0,0,0),ly=new ue(1,1,1),Ha=new ue,sc=new ue,Jn=new ue,Rg=new mn,Cg=new Bo;class fa{constructor(t=0,i=0,r=0,l=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(At(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Rg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Cg.setFromEuler(this),this.setFromQuaternion(Cg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class Ex{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cy=0;const wg=new ue,us=new Bo,ea=new mn,oc=new ue,Co=new ue,uy=new ue,fy=new Bo,Dg=new ue(1,0,0),Ug=new ue(0,1,0),Lg=new ue(0,0,1),Ng={type:"added"},dy={type:"removed"},fs={type:"childadded",child:null},ad={type:"childremoved",child:null};class ti extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new ue,i=new fa,r=new Bo,l=new ue(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new pt}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Dg,t)}rotateY(t){return this.rotateOnAxis(Ug,t)}rotateZ(t){return this.rotateOnAxis(Lg,t)}translateOnAxis(t,i){return wg.copy(t).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Dg,t)}translateY(t){return this.translateOnAxis(Ug,t)}translateZ(t){return this.translateOnAxis(Lg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?oc.copy(t):oc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Co,oc,this.up):ea.lookAt(oc,Co,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),us.setFromRotationMatrix(ea),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(an("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ng),fs.child=t,this.dispatchEvent(fs),fs.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(dy),ad.child=t,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ng),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,uy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,fy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),x=d(t.shapes),S=d(t.skeletons),M=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new ue(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new ue,ta=new ue,rd=new ue,na=new ue,ds=new ue,hs=new ue,Og=new ue,sd=new ue,od=new ue,ld=new ue,cd=new rn,ud=new rn,fd=new rn;class yi{constructor(t=new ue,i=new ue,r=new ue){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){vi.subVectors(l,i),ta.subVectors(r,i),rd.subVectors(t,i);const d=vi.dot(vi),h=vi.dot(ta),m=vi.dot(rd),p=ta.dot(ta),_=ta.dot(rd),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(p*m-h*_)*S,A=(d*_-h*m)*S;return u.set(1-M-A,A,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(d,na.y),m.addScaledVector(h,na.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return cd.setScalar(0),ud.setScalar(0),fd.setScalar(0),cd.fromBufferAttribute(t,i),ud.fromBufferAttribute(t,r),fd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(cd,u.x),d.addScaledVector(ud,u.y),d.addScaledVector(fd,u.z),d}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),ta.subVectors(t,i),vi.cross(ta).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),vi.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ds.subVectors(l,r),hs.subVectors(u,r),sd.subVectors(t,r);const m=ds.dot(sd),p=hs.dot(sd);if(m<=0&&p<=0)return i.copy(r);od.subVectors(t,l);const _=ds.dot(od),x=hs.dot(od);if(_>=0&&x<=_)return i.copy(l);const S=m*x-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(ds,d);ld.subVectors(t,u);const M=ds.dot(ld),A=hs.dot(ld);if(A>=0&&M<=A)return i.copy(u);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(hs,h);const y=_*A-M*x;if(y<=0&&x-_>=0&&M-A>=0)return Og.subVectors(u,l),h=(x-_)/(x-_+(M-A)),i.copy(l).addScaledVector(Og,h);const v=1/(y+C+S);return d=C*v,h=S*v,i.copy(r).addScaledVector(ds,d).addScaledVector(hs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},lc={h:0,s:0,l:0};function dd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Xt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Nt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Nt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Nt.workingColorSpace){if(t=JS(t,1),i=At(i,0,1),r=At(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=dd(d,u,t+1/3),this.g=dd(d,u,t),this.b=dd(d,u,t-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&ft("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ft("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=Tx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Nt.workingToColorSpace(Un.copy(this),t),Math.round(At(Un.r*255,0,255))*65536+Math.round(At(Un.g*255,0,255))*256+Math.round(At(Un.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Nt.workingColorSpace){Nt.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=_<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=fi){Nt.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(lc);const r=Yf(Va.h,lc.h,i),l=Yf(Va.s,lc.s,i),u=Yf(Va.l,lc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Xt;Xt.NAMES=Tx;let hy=0;class Dc extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=_s,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ed,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ed&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ax extends Dc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new ue,cc=new Rt;let py=0;class Di{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:py++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Sg,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(t),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sg&&(t.usage=this.usage),t}}class Rx extends Di{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Cx extends Di{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class br extends Di{constructor(t,i,r){super(new Float32Array(t),i,r)}}let my=0;const ui=new mn,hd=new ti,ps=new ue,$n=new Go,wo=new Go,Mn=new ue;class Ya extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mx(t)?Cx:Rx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return hd.lookAt(t),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new br(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors($n.min,wo.min),$n.expandByPoint(Mn),Mn.addVectors($n.max,wo.max),$n.expandByPoint(Mn)):($n.expandByPoint(wo.min),$n.expandByPoint(wo.max))}$n.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)Mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Mn.fromBufferAttribute(h,p),m&&(ps.fromBufferAttribute(t,p),Mn.add(ps)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ne=0;ne<r.count;ne++)h[ne]=new ue,m[ne]=new ue;const p=new ue,_=new ue,x=new ue,S=new Rt,M=new Rt,A=new Rt,C=new ue,y=new ue;function v(ne,w,R){p.fromBufferAttribute(r,ne),_.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),S.fromBufferAttribute(u,ne),M.fromBufferAttribute(u,w),A.fromBufferAttribute(u,R),_.sub(p),x.sub(p),M.sub(S),A.sub(S);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(H),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(H),h[ne].add(C),h[w].add(C),h[R].add(C),m[ne].add(y),m[w].add(y),m[R].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let ne=0,w=z.length;ne<w;++ne){const R=z[ne],H=R.start,Y=R.count;for(let le=H,pe=H+Y;le<pe;le+=3)v(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const L=new ue,B=new ue,k=new ue,O=new ue;function P(ne){k.fromBufferAttribute(l,ne),O.copy(k);const w=h[ne];L.copy(w),L.sub(k.multiplyScalar(k.dot(w))).normalize(),B.crossVectors(O,w);const H=B.dot(m[ne])<0?-1:1;d.setXYZW(ne,L.x,L.y,L.z,H)}for(let ne=0,w=z.length;ne<w;++ne){const R=z[ne],H=R.start,Y=R.count;for(let le=H,pe=H+Y;le<pe;le+=3)P(t.getX(le+0)),P(t.getX(le+1)),P(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new ue,u=new ue,d=new ue,h=new ue,m=new ue,p=new ue,_=new ue,x=new ue;if(t)for(let S=0,M=t.count;S<M;S+=3){const A=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(_),m.add(_),p.add(_),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,x=h.normalized,S=new p.constructor(m.length*_);let M=0,A=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*_;for(let v=0;v<_;v++)S[A++]=p[M++]}return new Di(S,_,x)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ya,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,x=p.length;_<x;_++){const S=p[_],M=t(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],x=u[p];for(let S=0,M=x.length;S<M;S++)_.push(x[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pg=new mn,mr=new sy,uc=new Mh,Ig=new ue,fc=new ue,dc=new ue,hc=new ue,pd=new ue,pc=new ue,zg=new ue,mc=new ue;class da extends ti{constructor(t=new Ya,i=new Ax){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){pc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],x=u[m];_!==0&&(pd.fromBufferAttribute(x,t),d?pc.addScaledVector(pd,_):pc.addScaledVector(pd.sub(i),_))}i.add(pc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(u),mr.copy(t.ray).recast(t.near),!(uc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(uc,Ig)===null||mr.origin.distanceToSquared(Ig)>(t.far-t.near)**2))&&(Pg.copy(u).invert(),mr.copy(t.ray).applyMatrix4(Pg),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,mr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],v=d[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let B=z,k=L;B<k;B+=3){const O=h.getX(B),P=h.getX(B+1),ne=h.getX(B+2);l=gc(this,v,t,r,p,_,x,O,P,ne),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=A,v=C;y<v;y+=3){const z=h.getX(y),L=h.getX(y+1),B=h.getX(y+2);l=gc(this,d,t,r,p,_,x,z,L,B),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],v=d[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let B=z,k=L;B<k;B+=3){const O=B,P=B+1,ne=B+2;l=gc(this,v,t,r,p,_,x,O,P,ne),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=A,v=C;y<v;y+=3){const z=y,L=y+1,B=y+2;l=gc(this,d,t,r,p,_,x,z,L,B),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function gy(o,t,i,r,l,u,d,h){let m;if(t.side===Vn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ja,h),m===null)return null;mc.copy(h),mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(mc);return p<i.near||p>i.far?null:{distance:p,point:mc.clone(),object:o}}function gc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,fc),o.getVertexPosition(m,dc),o.getVertexPosition(p,hc);const _=gy(o,t,i,r,fc,dc,hc,zg);if(_){const x=new ue;yi.getBarycoord(zg,fc,dc,hc,x),l&&(_.uv=yi.getInterpolatedAttribute(l,h,m,p,x,new Rt)),u&&(_.uv1=yi.getInterpolatedAttribute(u,h,m,p,x,new Rt)),d&&(_.normal=yi.getInterpolatedAttribute(d,h,m,p,x,new ue),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ue,materialIndex:0};yi.getNormal(fc,dc,hc,S.normal),_.face=S,_.barycoord=x}return _}class Ho extends Ya{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],x=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new br(p,3)),this.setAttribute("normal",new br(_,3)),this.setAttribute("uv",new br(x,2));function A(C,y,v,z,L,B,k,O,P,ne,w){const R=B/P,H=k/ne,Y=B/2,le=k/2,pe=O/2,fe=P+1,N=ne+1;let X=0,j=0;const re=new ue;for(let ce=0;ce<N;ce++){const D=ce*H-le;for(let K=0;K<fe;K++){const me=K*R-Y;re[C]=me*z,re[y]=D*L,re[v]=pe,p.push(re.x,re.y,re.z),re[C]=0,re[y]=0,re[v]=O>0?1:-1,_.push(re.x,re.y,re.z),x.push(K/P),x.push(1-ce/ne),X+=1}}for(let ce=0;ce<ne;ce++)for(let D=0;D<P;D++){const K=S+D+fe*ce,me=S+D+fe*(ce+1),Se=S+(D+1)+fe*(ce+1),De=S+(D+1)+fe*ce;m.push(K,me,De),m.push(me,Se,De),j+=6}h.addGroup(M,j,w),M+=j,S+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Es(o[i]);for(const l in r)t[l]=r[l]}return t}function xy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function wx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}const _y={clone:Es,merge:Nn};var vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Dc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vy,this.fragmentShader=Sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Dx extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new ue,Fg=new Rt,Bg=new Rt;class Si extends Dx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=uh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uh*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,Fg,Bg),i.subVectors(Bg,Fg)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class yy extends ti{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(ms,gs,t,i);l.layers=this.layers,this.add(l);const u=new Si(ms,gs,t,i);u.layers=this.layers,this.add(u);const d=new Si(ms,gs,t,i);d.layers=this.layers,this.add(d);const h=new Si(ms,gs,t,i);h.layers=this.layers,this.add(h);const m=new Si(ms,gs,t,i);m.layers=this.layers,this.add(m);const p=new Si(ms,gs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,x=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,S,M),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Ux extends On{constructor(t=[],i=ys,r,l,u,d,h,m,p,_){super(t,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class My extends Tr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Ux(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ho(5,5,5),u=new Ui({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:la});u.uniforms.tEquirect.value=i;const d=new da(l,u),h=i.minFilter;return i.minFilter===Mr&&(i.minFilter=di),new yy(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class xc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const by={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,r),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=_.position.distanceTo(x.position),M=.02,A=.005;p.inputState.pinching&&S>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(by)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new xc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Ey extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ty extends On{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ei,_=ei,x,S){super(null,d,h,m,p,_,l,u,x,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new ue,Ay=new ue,Ry=new pt;class vr{constructor(t=new ue(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=gd.subVectors(r,i).cross(Ay.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(gd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Ry.getNormalMatrix(t),l=this.coplanarPoint(gd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Mh,Cy=new Rt(.5,.5),_c=new ue;class Lx{constructor(t=new vr,i=new vr,r=new vr,l=new vr,u=new vr,d=new vr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=wi,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],x=u[5],S=u[6],M=u[7],A=u[8],C=u[9],y=u[10],v=u[11],z=u[12],L=u[13],B=u[14],k=u[15];if(l[0].setComponents(p-d,M-_,v-A,k-z).normalize(),l[1].setComponents(p+d,M+_,v+A,k+z).normalize(),l[2].setComponents(p+h,M+x,v+C,k+L).normalize(),l[3].setComponents(p-h,M-x,v-C,k-L).normalize(),r)l[4].setComponents(m,S,y,B).normalize(),l[5].setComponents(p-m,M-S,v-y,k-B).normalize();else if(l[4].setComponents(p-m,M-S,v-y,k-B).normalize(),i===wi)l[5].setComponents(p+m,M+S,v+y,k+B).normalize();else if(i===Rc)l[5].setComponents(m,S,y,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){gr.center.set(0,0,0);const i=Cy.distanceTo(t.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(_c.x=l.normal.x>0?t.max.x:t.min.x,_c.y=l.normal.y>0?t.max.y:t.min.y,_c.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(_c)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nx extends On{constructor(t,i,r=Er,l,u,d,h=ei,m=ei,p,_=Po,x=1){if(_!==Po&&_!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:x};super(S,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ox extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vo extends Ya{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,x=t/h,S=i/m,M=[],A=[],C=[],y=[];for(let v=0;v<_;v++){const z=v*S-d;for(let L=0;L<p;L++){const B=L*x-u;A.push(B,-z,0),C.push(0,0,1),y.push(L/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<h;z++){const L=z+p*v,B=z+p*(v+1),k=z+1+p*(v+1),O=z+1+p*v;M.push(L,B,O),M.push(B,k,O)}this.setIndex(M),this.setAttribute("position",new br(A,3)),this.setAttribute("normal",new br(C,3)),this.setAttribute("uv",new br(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.width,t.height,t.widthSegments,t.heightSegments)}}class wy extends Dc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dy extends Dc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Px extends Dx{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Uy extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ly{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Gg(o,t,i,r){const l=Ny(r);switch(i){case _x:return o*t;case Sx:return o*t/l.components*l.byteLength;case xh:return o*t/l.components*l.byteLength;case _h:return o*t*2/l.components*l.byteLength;case vh:return o*t*2/l.components*l.byteLength;case vx:return o*t*3/l.components*l.byteLength;case Mi:return o*t*4/l.components*l.byteLength;case Sh:return o*t*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case bc:case Ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case zd:case Bd:return Math.max(o,16)*Math.max(t,8)/4;case Id:case Fd:return Math.max(o,8)*Math.max(t,8)/2;case Gd:case Hd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case qd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case jd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case $d:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case eh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case th:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case nh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case ih:case ah:case rh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case sh:case oh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case lh:case ch:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ny(o){switch(o){case ua:case px:return{byteLength:1,components:1};case No:case mx:case Ts:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case Er:case ph:case oa:return{byteLength:4,components:1};case gx:case xx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);function Ix(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Oy(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,_);else{x.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<x.length;M++){const A=x[S],C=x[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,x[S]=C)}x.length=S+1;for(let M=0,A=x.length;M<A;M++){const C=x[M];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ky=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$b=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:Py,alphahash_pars_fragment:Iy,alphamap_fragment:zy,alphamap_pars_fragment:Fy,alphatest_fragment:By,alphatest_pars_fragment:Gy,aomap_fragment:Hy,aomap_pars_fragment:Vy,batching_pars_vertex:ky,batching_vertex:Xy,begin_vertex:Wy,beginnormal_vertex:qy,bsdfs:jy,iridescence_fragment:Yy,bumpmap_pars_fragment:Zy,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:Qy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:$y,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:aM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:oM,displacementmap_vertex:lM,emissivemap_fragment:cM,emissivemap_pars_fragment:uM,colorspace_fragment:fM,colorspace_pars_fragment:dM,envmap_fragment:hM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:RM,envmap_vertex:xM,fog_vertex:_M,fog_pars_vertex:vM,fog_fragment:SM,fog_pars_fragment:yM,gradientmap_pars_fragment:MM,lightmap_pars_fragment:bM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:TM,lights_pars_begin:AM,lights_toon_fragment:CM,lights_toon_pars_fragment:wM,lights_phong_fragment:DM,lights_phong_pars_fragment:UM,lights_physical_fragment:LM,lights_physical_pars_fragment:NM,lights_fragment_begin:OM,lights_fragment_maps:PM,lights_fragment_end:IM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:GM,map_fragment:HM,map_pars_fragment:VM,map_particle_fragment:kM,map_particle_pars_fragment:XM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:qM,morphinstance_vertex:jM,morphcolor_vertex:YM,morphnormal_vertex:ZM,morphtarget_pars_vertex:KM,morphtarget_vertex:QM,normal_fragment_begin:JM,normal_fragment_maps:$M,normal_pars_fragment:eb,normal_pars_vertex:tb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:ab,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:sb,iridescence_pars_fragment:ob,opaque_fragment:lb,packing:cb,premultiplied_alpha_fragment:ub,project_vertex:fb,dithering_fragment:db,dithering_pars_fragment:hb,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:gb,shadowmap_pars_vertex:xb,shadowmap_vertex:_b,shadowmask_pars_fragment:vb,skinbase_vertex:Sb,skinning_pars_vertex:yb,skinning_vertex:Mb,skinnormal_vertex:bb,specularmap_fragment:Eb,specularmap_pars_fragment:Tb,tonemapping_fragment:Ab,tonemapping_pars_fragment:Rb,transmission_fragment:Cb,transmission_pars_fragment:wb,uv_pars_fragment:Db,uv_pars_vertex:Ub,uv_vertex:Lb,worldpos_vertex:Nb,background_vert:Ob,background_frag:Pb,backgroundCube_vert:Ib,backgroundCube_frag:zb,cube_vert:Fb,cube_frag:Bb,depth_vert:Gb,depth_frag:Hb,distanceRGBA_vert:Vb,distanceRGBA_frag:kb,equirect_vert:Xb,equirect_frag:Wb,linedashed_vert:qb,linedashed_frag:jb,meshbasic_vert:Yb,meshbasic_frag:Zb,meshlambert_vert:Kb,meshlambert_frag:Qb,meshmatcap_vert:Jb,meshmatcap_frag:$b,meshnormal_vert:e3,meshnormal_frag:t3,meshphong_vert:n3,meshphong_frag:i3,meshphysical_vert:a3,meshphysical_frag:r3,meshtoon_vert:s3,meshtoon_frag:o3,points_vert:l3,points_frag:c3,shadow_vert:u3,shadow_frag:f3,sprite_vert:d3,sprite_frag:h3},Pe={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Xt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Nn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Nn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Xt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Nn([Pe.points,Pe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Nn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Nn([Pe.common,Pe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Nn([Pe.sprite,Pe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Nn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Nn([Pe.lights,Pe.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const vc={r:0,b:0,g:0},xr=new fa,p3=new mn;function m3(o,t,i,r,l,u,d){const h=new Xt(0);let m=u===!0?0:1,p,_,x=null,S=0,M=null;function A(L){let B=L.isScene===!0?L.background:null;return B&&B.isTexture&&(B=(L.backgroundBlurriness>0?i:t).get(B)),B}function C(L){let B=!1;const k=A(L);k===null?v(h,m):k&&k.isColor&&(v(k,1),B=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||B)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,B){const k=A(B);k&&(k.isCubeTexture||k.mapping===wc)?(_===void 0&&(_=new da(new Ho(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Es(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,P,ne){this.matrixWorld.copyPosition(ne.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),xr.copy(B.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),_.material.uniforms.envMap.value=k,_.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(p3.makeRotationFromEuler(xr)),_.material.toneMapped=Nt.getTransfer(k.colorSpace)!==kt,(x!==k||S!==k.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,x=k,S=k.version,M=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new da(new Vo(2,2),new Ui({name:"BackgroundMaterial",uniforms:Es(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Nt.getTransfer(k.colorSpace)!==kt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(x!==k||S!==k.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=k,S=k.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,B){L.getRGB(vc,wx(o)),r.buffers.color.setClear(vc.r,vc.g,vc.b,B,d)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,B=1){h.set(L),m=B,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:C,addToRenderList:y,dispose:z}}function g3(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(R,H,Y,le,pe){let fe=!1;const N=x(le,Y,H);u!==N&&(u=N,p(u.object)),fe=M(R,le,Y,pe),fe&&A(R,le,Y,pe),pe!==null&&t.update(pe,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,B(R,H,Y,le),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function x(R,H,Y){const le=Y.wireframe===!0;let pe=r[R.id];pe===void 0&&(pe={},r[R.id]=pe);let fe=pe[H.id];fe===void 0&&(fe={},pe[H.id]=fe);let N=fe[le];return N===void 0&&(N=S(m()),fe[le]=N),N}function S(R){const H=[],Y=[],le=[];for(let pe=0;pe<i;pe++)H[pe]=0,Y[pe]=0,le[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:le,object:R,attributes:{},index:null}}function M(R,H,Y,le){const pe=u.attributes,fe=H.attributes;let N=0;const X=Y.getAttributes();for(const j in X)if(X[j].location>=0){const ce=pe[j];let D=fe[j];if(D===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),ce===void 0||ce.attribute!==D||D&&ce.data!==D.data)return!0;N++}return u.attributesNum!==N||u.index!==le}function A(R,H,Y,le){const pe={},fe=H.attributes;let N=0;const X=Y.getAttributes();for(const j in X)if(X[j].location>=0){let ce=fe[j];ce===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor));const D={};D.attribute=ce,ce&&ce.data&&(D.data=ce.data),pe[j]=D,N++}u.attributes=pe,u.attributesNum=N,u.index=le}function C(){const R=u.newAttributes;for(let H=0,Y=R.length;H<Y;H++)R[H]=0}function y(R){v(R,0)}function v(R,H){const Y=u.newAttributes,le=u.enabledAttributes,pe=u.attributeDivisors;Y[R]=1,le[R]===0&&(o.enableVertexAttribArray(R),le[R]=1),pe[R]!==H&&(o.vertexAttribDivisor(R,H),pe[R]=H)}function z(){const R=u.newAttributes,H=u.enabledAttributes;for(let Y=0,le=H.length;Y<le;Y++)H[Y]!==R[Y]&&(o.disableVertexAttribArray(Y),H[Y]=0)}function L(R,H,Y,le,pe,fe,N){N===!0?o.vertexAttribIPointer(R,H,Y,pe,fe):o.vertexAttribPointer(R,H,Y,le,pe,fe)}function B(R,H,Y,le){C();const pe=le.attributes,fe=Y.getAttributes(),N=H.defaultAttributeValues;for(const X in fe){const j=fe[X];if(j.location>=0){let re=pe[X];if(re===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){const ce=re.normalized,D=re.itemSize,K=t.get(re);if(K===void 0)continue;const me=K.buffer,Se=K.type,De=K.bytesPerElement,J=Se===o.INT||Se===o.UNSIGNED_INT||re.gpuType===ph;if(re.isInterleavedBufferAttribute){const se=re.data,Ae=se.stride,Ue=re.offset;if(se.isInstancedInterleavedBuffer){for(let Fe=0;Fe<j.locationSize;Fe++)v(j.location+Fe,se.meshPerAttribute);R.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Fe=0;Fe<j.locationSize;Fe++)y(j.location+Fe);o.bindBuffer(o.ARRAY_BUFFER,me);for(let Fe=0;Fe<j.locationSize;Fe++)L(j.location+Fe,D/j.locationSize,Se,ce,Ae*De,(Ue+D/j.locationSize*Fe)*De,J)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)v(j.location+se,re.meshPerAttribute);R.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<j.locationSize;se++)y(j.location+se);o.bindBuffer(o.ARRAY_BUFFER,me);for(let se=0;se<j.locationSize;se++)L(j.location+se,D/j.locationSize,Se,ce,D*De,D/j.locationSize*se*De,J)}}else if(N!==void 0){const ce=N[X];if(ce!==void 0)switch(ce.length){case 2:o.vertexAttrib2fv(j.location,ce);break;case 3:o.vertexAttrib3fv(j.location,ce);break;case 4:o.vertexAttrib4fv(j.location,ce);break;default:o.vertexAttrib1fv(j.location,ce)}}}}z()}function k(){ne();for(const R in r){const H=r[R];for(const Y in H){const le=H[Y];for(const pe in le)_(le[pe].object),delete le[pe];delete H[Y]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const Y in H){const le=H[Y];for(const pe in le)_(le[pe].object),delete le[pe];delete H[Y]}delete r[R.id]}function P(R){for(const H in r){const Y=r[H];if(Y[R.id]===void 0)continue;const le=Y[R.id];for(const pe in le)_(le[pe].object),delete le[pe];delete Y[R.id]}}function ne(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:z}}function x3(o,t,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function h(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let M=0;for(let A=0;A<x;A++)M+=_[A];i.update(M,r,1)}function m(p,_,x,S){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],_[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,x);let A=0;for(let C=0;C<x;C++)A+=_[C]*S[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function _3(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Mi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const ne=P===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ua&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==oa&&!ne)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ft("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),B=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=A>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:B,vertexTextures:k,maxSamples:O}}function v3(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new vr,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||r!==0||l;return l=S,r=x.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=_(x,S,0)},this.setState=function(x,S,M){const A=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,v=o.get(x);if(!l||A===null||A.length===0||u&&!y)u?_(null):p();else{const z=u?0:r,L=z*4;let B=v.clippingState||null;m.value=B,B=_(A,S,L,M);for(let k=0;k!==L;++k)B[k]=i[k];v.clippingState=B,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,S,M,A){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const v=M+C*4,z=S.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,B=M;L!==C;++L,B+=4)d.copy(x[L]).applyMatrix4(z,h),d.normal.toArray(y,B),y[B+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function S3(o){let t=new WeakMap;function i(d,h){return h===Ld?d.mapping=ys:h===Nd&&(d.mapping=Ms),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ld||h===Nd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new My(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Wa=4,Hg=[.125,.215,.35,.446,.526,.582],yr=20,y3=256,Do=new Px,Vg=new Xt;let xd=null,_d=0,vd=0,Sd=!1;const M3=new ue;class kg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=M3}=u;xd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xd,_d,vd),this._renderer.xr.enabled=Sd,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ys||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Ts,format:Mi,colorSpace:bs,depthBuffer:!1},l=Xg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xg(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b3(u)),this._blurMaterial=T3(u,t,i),this._ggxMaterial=E3(u,t,i)}return l}_compileMaterial(t){const i=new da(new Ya,t);this._renderer.compile(i,Do)}_sceneToCubeUV(t,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,M=x.toneMapping;x.getClearColor(Vg),x.toneMapping=qa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new da(new Ho,new Ax({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const z=t.background;z?z.isColor&&(y.color.copy(z),t.background=null,v=!0):(y.color.copy(Vg),v=!0);for(let L=0;L<6;L++){const B=L%3;B===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[L],u.y,u.z)):B===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[L]));const k=this._cubeSize;xs(l,B*k,L>2?k:0,k,k),x.setRenderTarget(l),v&&x.render(C,m),x.render(t,m)}x.toneMapping=M,x.autoClear=S,t.background=z}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ys||t.mapping===Ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wg());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;xs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Do)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),S=.05+p*.95,M=x*S,{_lodMax:A}=this,C=this._sizeLods[r],y=3*C*(r>A-Wa?r-A+Wa:0),v=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=A-i,xs(u,y,v,3*C,2*C),l.setRenderTarget(u),l.render(h,Do),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,xs(t,y,v,3*C,2*C),l.setRenderTarget(t),l.render(h,Do)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&an("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*yr-1),C=u/A,y=isFinite(u)?1+Math.floor(_*C):yr;y>yr&&ft(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yr}`);const v=[];let z=0;for(let P=0;P<yr;++P){const ne=P/C,w=Math.exp(-ne*ne/2);v.push(w),P===0?z+=w:P<y&&(z+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/z;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:L}=this;S.dTheta.value=A,S.mipInt.value=L-r;const B=this._sizeLods[l],k=3*B*(l>L-Wa?l-L+Wa:0),O=4*(this._cubeSize-B);xs(i,k,O,3*B,2*B),m.setRenderTarget(i),m.render(x,Do)}}function b3(o){const t=[],i=[],r=[];let l=o;const u=o-Wa+1+Hg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Wa?m=Hg[d-o+Wa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,x=1+p,S=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,A=6,C=3,y=2,v=1,z=new Float32Array(C*A*M),L=new Float32Array(y*A*M),B=new Float32Array(v*A*M);for(let O=0;O<M;O++){const P=O%3*2/3-1,ne=O>2?0:-1,w=[P,ne,0,P+2/3,ne,0,P+2/3,ne+1,0,P,ne,0,P+2/3,ne+1,0,P,ne+1,0];z.set(w,C*A*O),L.set(S,y*A*O);const R=[O,O,O,O,O,O];B.set(R,v*A*O)}const k=new Ya;k.setAttribute("position",new Di(z,C)),k.setAttribute("uv",new Di(L,y)),k.setAttribute("faceIndex",new Di(B,v)),r.push(new da(k,null)),l>Wa&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Xg(o,t,i){const r=new Tr(o,t,i);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xs(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function E3(o,t,i){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function T3(o,t,i){const r=new Float32Array(yr),l=new ue(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function Wg(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function qg(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A3(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Ld||m===Nd,_=m===ys||m===Ms;if(p||_){let x=t.get(h);const S=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new kg(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new kg(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function R3(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zo("WebGLRenderer: "+r+" extension not supported."),l}}}function C3(o,t,i,r){const l={},u=new WeakMap;function d(x){const S=x.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(x,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(x){const S=[],M=x.index,A=x.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let L=0,B=z.length;L<B;L+=3){const k=z[L+0],O=z[L+1],P=z[L+2];S.push(k,O,O,P,P,k)}}else if(A!==void 0){const z=A.array;C=A.version;for(let L=0,B=z.length/3-1;L<B;L+=3){const k=L+0,O=L+1,P=L+2;S.push(k,O,O,P,P,k)}}else return;const y=new(Mx(S)?Cx:Rx)(S,1);y.version=C;const v=u.get(x);v&&t.remove(v),u.set(x,y)}function _(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function w3(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,S*d,A),i.update(M,r,A))}function _(S,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,A);let y=0;for(let v=0;v<A;v++)y+=M[v];i.update(y,r,1)}function x(S,M,A,C){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/d,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,C,0,A);let v=0;for(let z=0;z<A;z++)v+=M[z]*C[z];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function D3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:an("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function U3(o,t,i){const r=new WeakMap,l=new rn;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==x){let R=function(){ne.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let B=0;A===!0&&(B=1),C===!0&&(B=2),y===!0&&(B=3);let k=h.attributes.position.count*B,O=1;k>t.maxTextureSize&&(O=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const P=new Float32Array(k*O*4*x),ne=new bx(P,k,O,x);ne.type=oa,ne.needsUpdate=!0;const w=B*4;for(let H=0;H<x;H++){const Y=v[H],le=z[H],pe=L[H],fe=k*O*4*H;for(let N=0;N<Y.count;N++){const X=N*w;A===!0&&(l.fromBufferAttribute(Y,N),P[fe+X+0]=l.x,P[fe+X+1]=l.y,P[fe+X+2]=l.z,P[fe+X+3]=0),C===!0&&(l.fromBufferAttribute(le,N),P[fe+X+4]=l.x,P[fe+X+5]=l.y,P[fe+X+6]=l.z,P[fe+X+7]=0),y===!0&&(l.fromBufferAttribute(pe,N),P[fe+X+8]=l.x,P[fe+X+9]=l.y,P[fe+X+10]=l.z,P[fe+X+11]=pe.itemSize===4?l.w:1)}}S={count:x,texture:ne,size:new Rt(k,O)},r.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function L3(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const zx=new On,jg=new Nx(1,1),Fx=new bx,Bx=new ay,Gx=new Ux,Yg=[],Zg=[],Kg=new Float32Array(16),Qg=new Float32Array(9),Jg=new Float32Array(4);function Rs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Yg[l];if(u===void 0&&(u=new Float32Array(l),Yg[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function xn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Lc(o,t){let i=Zg[t];i===void 0&&(i=new Int32Array(t),Zg[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function N3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function O3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),xn(i,t)}}function P3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),xn(i,t)}}function I3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),xn(i,t)}}function z3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(gn(i,r))return;Jg.set(r),o.uniformMatrix2fv(this.addr,!1,Jg),xn(i,r)}}function F3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(gn(i,r))return;Qg.set(r),o.uniformMatrix3fv(this.addr,!1,Qg),xn(i,r)}}function B3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(gn(i,r))return;Kg.set(r),o.uniformMatrix4fv(this.addr,!1,Kg),xn(i,r)}}function G3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function H3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),xn(i,t)}}function V3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),xn(i,t)}}function k3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),xn(i,t)}}function X3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function W3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),xn(i,t)}}function q3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),xn(i,t)}}function j3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),xn(i,t)}}function Y3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(jg.compareFunction=yx,u=jg):u=zx,i.setTexture2D(t||u,l)}function Z3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Bx,l)}function K3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Gx,l)}function Q3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Fx,l)}function J3(o){switch(o){case 5126:return N3;case 35664:return O3;case 35665:return P3;case 35666:return I3;case 35674:return z3;case 35675:return F3;case 35676:return B3;case 5124:case 35670:return G3;case 35667:case 35671:return H3;case 35668:case 35672:return V3;case 35669:case 35673:return k3;case 5125:return X3;case 36294:return W3;case 36295:return q3;case 36296:return j3;case 35678:case 36198:case 36298:case 36306:case 35682:return Y3;case 35679:case 36299:case 36307:return Z3;case 35680:case 36300:case 36308:case 36293:return K3;case 36289:case 36303:case 36311:case 36292:return Q3}}function $3(o,t){o.uniform1fv(this.addr,t)}function e1(o,t){const i=Rs(t,this.size,2);o.uniform2fv(this.addr,i)}function t1(o,t){const i=Rs(t,this.size,3);o.uniform3fv(this.addr,i)}function n1(o,t){const i=Rs(t,this.size,4);o.uniform4fv(this.addr,i)}function i1(o,t){const i=Rs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function a1(o,t){const i=Rs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function r1(o,t){const i=Rs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function s1(o,t){o.uniform1iv(this.addr,t)}function o1(o,t){o.uniform2iv(this.addr,t)}function l1(o,t){o.uniform3iv(this.addr,t)}function c1(o,t){o.uniform4iv(this.addr,t)}function u1(o,t){o.uniform1uiv(this.addr,t)}function f1(o,t){o.uniform2uiv(this.addr,t)}function d1(o,t){o.uniform3uiv(this.addr,t)}function h1(o,t){o.uniform4uiv(this.addr,t)}function p1(o,t,i){const r=this.cache,l=t.length,u=Lc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||zx,u[d])}function m1(o,t,i){const r=this.cache,l=t.length,u=Lc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Bx,u[d])}function g1(o,t,i){const r=this.cache,l=t.length,u=Lc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Gx,u[d])}function x1(o,t,i){const r=this.cache,l=t.length,u=Lc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Fx,u[d])}function _1(o){switch(o){case 5126:return $3;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return a1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return f1;case 36295:return d1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return x1}}class v1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=J3(i.type)}}class S1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_1(i.type)}}class y1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function $g(o,t){o.seq.push(t),o.map[t.id]=t}function M1(o,t,i){const r=o.name,l=r.length;for(yd.lastIndex=0;;){const u=yd.exec(r),d=yd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){$g(i,p===void 0?new v1(h,o,t):new S1(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new y1(h),$g(i,x)),i=x}}}class Tc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);M1(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function ex(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const b1=37297;let E1=0;function T1(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const tx=new pt;function A1(o){Nt._getMatrix(tx,Nt.workingColorSpace,o);const t=`mat3( ${tx.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(o)){case Ac:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function nx(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+T1(o.getShaderSource(t),h)}else return u}function R1(o,t){const i=A1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function C1(o,t){let i;switch(t){case US:i="Linear";break;case LS:i="Reinhard";break;case NS:i="Cineon";break;case OS:i="ACESFilmic";break;case IS:i="AgX";break;case zS:i="Neutral";break;case PS:i="Custom";break;default:ft("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new ue;function w1(){Nt.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),t=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function U1(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function L1(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Uo(o){return o!==""}function ix(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ax(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(o){return o.replace(N1,P1)}const O1=new Map;function P1(o,t){let i=xt[t];if(i===void 0){const r=O1.get(t);if(r!==void 0)i=xt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return fh(i)}const I1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rx(o){return o.replace(I1,z1)}function z1(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function sx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===fx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===uS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function B1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case Ms:t="ENVMAP_TYPE_CUBE";break;case wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G1(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function H1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dx:t="ENVMAP_BLENDING_MULTIPLY";break;case wS:t="ENVMAP_BLENDING_MIX";break;case DS:t="ENVMAP_BLENDING_ADD";break}return t}function V1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function k1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=F1(i),p=B1(i),_=G1(i),x=H1(i),S=V1(i),M=D1(i),A=U1(u),C=l.createProgram();let y,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),v.length>0&&(v+=`
`)):(y=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),v=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?xt.tonemapping_pars_fragment:"",i.toneMapping!==qa?C1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,R1("linearToOutputTexel",i.outputColorSpace),w1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),d=fh(d),d=ix(d,i),d=ax(d,i),h=fh(h),h=ix(h,i),h=ax(h,i),d=rx(d),h=rx(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=z+y+d,B=z+v+h,k=ex(l,l.VERTEX_SHADER,L),O=ex(l,l.FRAGMENT_SHADER,B);l.attachShader(C,k),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(H){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(C)||"",le=l.getShaderInfoLog(k)||"",pe=l.getShaderInfoLog(O)||"",fe=Y.trim(),N=le.trim(),X=pe.trim();let j=!0,re=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,k,O);else{const ce=nx(l,k,"vertex"),D=nx(l,O,"fragment");an("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+fe+`
`+ce+`
`+D)}else fe!==""?ft("WebGLProgram: Program Info Log:",fe):(N===""||X==="")&&(re=!1);re&&(H.diagnostics={runnable:j,programLog:fe,vertexShader:{log:N,prefix:y},fragmentShader:{log:X,prefix:v}})}l.deleteShader(k),l.deleteShader(O),ne=new Tc(l,C),w=L1(l,C)}let ne;this.getUniforms=function(){return ne===void 0&&P(this),ne};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,b1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=O,this}let X1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new q1(t),i.set(t,r)),r}}class q1{constructor(t){this.id=X1++,this.code=t,this.usedTimes=0}}function j1(o,t,i,r,l,u,d){const h=new Ex,m=new W1,p=new Set,_=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,H,Y,le){const pe=Y.fog,fe=le.geometry,N=w.isMeshStandardMaterial?Y.environment:null,X=(w.isMeshStandardMaterial?i:t).get(w.envMap||N),j=X&&X.mapping===wc?X.image.height:null,re=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&ft("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ce=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,D=ce!==void 0?ce.length:0;let K=0;fe.morphAttributes.position!==void 0&&(K=1),fe.morphAttributes.normal!==void 0&&(K=2),fe.morphAttributes.color!==void 0&&(K=3);let me,Se,De,J;if(re){const wt=Ci[re];me=wt.vertexShader,Se=wt.fragmentShader}else me=w.vertexShader,Se=w.fragmentShader,m.update(w),De=m.getVertexShaderID(w),J=m.getFragmentShaderID(w);const se=o.getRenderTarget(),Ae=o.state.buffers.depth.getReversed(),Ue=le.isInstancedMesh===!0,Fe=le.isBatchedMesh===!0,Qe=!!w.map,ct=!!w.matcap,nt=!!X,mt=!!w.aoMap,F=!!w.lightMap,ot=!!w.bumpMap,gt=!!w.normalMap,Mt=!!w.displacementMap,Ie=!!w.emissiveMap,It=!!w.metalnessMap,qe=!!w.roughnessMap,rt=w.anisotropy>0,U=w.clearcoat>0,b=w.dispersion>0,$=w.iridescence>0,xe=w.sheen>0,ye=w.transmission>0,de=rt&&!!w.anisotropyMap,je=U&&!!w.clearcoatMap,Oe=U&&!!w.clearcoatNormalMap,Je=U&&!!w.clearcoatRoughnessMap,We=$&&!!w.iridescenceMap,Me=$&&!!w.iridescenceThicknessMap,Te=xe&&!!w.sheenColorMap,Ye=xe&&!!w.sheenRoughnessMap,ke=!!w.specularMap,ze=!!w.specularColorMap,at=!!w.specularIntensityMap,G=ye&&!!w.transmissionMap,Le=ye&&!!w.thicknessMap,Ce=!!w.gradientMap,we=!!w.alphaMap,be=w.alphaTest>0,ve=!!w.alphaHash,Ge=!!w.extensions;let st=qa;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(st=o.toneMapping);const Bt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:me,fragmentShader:Se,defines:w.defines,customVertexShaderID:De,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Fe,batchingColor:Fe&&le._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&le.instanceColor!==null,instancingMorph:Ue&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:se===null?o.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:bs,alphaToCoverage:!!w.alphaToCoverage,map:Qe,matcap:ct,envMap:nt,envMapMode:nt&&X.mapping,envMapCubeUVHeight:j,aoMap:mt,lightMap:F,bumpMap:ot,normalMap:gt,displacementMap:S&&Mt,emissiveMap:Ie,normalMapObjectSpace:gt&&w.normalMapType===VS,normalMapTangentSpace:gt&&w.normalMapType===HS,metalnessMap:It,roughnessMap:qe,anisotropy:rt,anisotropyMap:de,clearcoat:U,clearcoatMap:je,clearcoatNormalMap:Oe,clearcoatRoughnessMap:Je,dispersion:b,iridescence:$,iridescenceMap:We,iridescenceThicknessMap:Me,sheen:xe,sheenColorMap:Te,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:ze,specularIntensityMap:at,transmission:ye,transmissionMap:G,thicknessMap:Le,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===_s&&w.alphaToCoverage===!1,alphaMap:we,alphaTest:be,alphaHash:ve,combine:w.combine,mapUv:Qe&&C(w.map.channel),aoMapUv:mt&&C(w.aoMap.channel),lightMapUv:F&&C(w.lightMap.channel),bumpMapUv:ot&&C(w.bumpMap.channel),normalMapUv:gt&&C(w.normalMap.channel),displacementMapUv:Mt&&C(w.displacementMap.channel),emissiveMapUv:Ie&&C(w.emissiveMap.channel),metalnessMapUv:It&&C(w.metalnessMap.channel),roughnessMapUv:qe&&C(w.roughnessMap.channel),anisotropyMapUv:de&&C(w.anisotropyMap.channel),clearcoatMapUv:je&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&C(w.sheenRoughnessMap.channel),specularMapUv:ke&&C(w.specularMap.channel),specularColorMapUv:ze&&C(w.specularColorMap.channel),specularIntensityMapUv:at&&C(w.specularIntensityMap.channel),transmissionMapUv:G&&C(w.transmissionMap.channel),thicknessMapUv:Le&&C(w.thicknessMap.channel),alphaMapUv:we&&C(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(gt||rt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!fe.attributes.uv&&(Qe||we),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ae,skinning:le.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:K,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:st,decodeVideoTexture:Qe&&w.map.isVideoTexture===!0&&Nt.getTransfer(w.map.colorSpace)===kt,decodeVideoTextureEmissive:Ie&&w.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(w.emissiveMap.colorSpace)===kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ra,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(z(R,w),L(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function z(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function L(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function B(w){const R=A[w.type];let H;if(R){const Y=Ci[R];H=_y.clone(Y.uniforms)}else H=w.uniforms;return H}function k(w,R){let H;for(let Y=0,le=_.length;Y<le;Y++){const pe=_[Y];if(pe.cacheKey===R){H=pe,++H.usedTimes;break}}return H===void 0&&(H=new k1(o,R,w,u),_.push(H)),H}function O(w){if(--w.usedTimes===0){const R=_.indexOf(w);_[R]=_[_.length-1],_.pop(),w.destroy()}}function P(w){m.remove(w)}function ne(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:B,acquireProgram:k,releaseProgram:O,releaseShaderCache:P,programs:_,dispose:ne}}function Y1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Z1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ox(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function lx(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(x,S,M,A,C,y){let v=o[t];return v===void 0?(v={id:x.id,object:x,geometry:S,material:M,groupOrder:A,renderOrder:x.renderOrder,z:C,group:y},o[t]=v):(v.id=x.id,v.object=x,v.geometry=S,v.material=M,v.groupOrder=A,v.renderOrder=x.renderOrder,v.z=C,v.group=y),t++,v}function h(x,S,M,A,C,y){const v=d(x,S,M,A,C,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(x,S,M,A,C,y){const v=d(x,S,M,A,C,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,S){i.length>1&&i.sort(x||Z1),r.length>1&&r.sort(S||ox),l.length>1&&l.sort(S||ox)}function _(){for(let x=t,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function K1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new lx,o.set(r,[d])):l>=u.length?(d=new lx,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function Q1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ue,color:new Xt};break;case"SpotLight":i={position:new ue,direction:new ue,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ue,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ue,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":i={color:new Xt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return o[t.id]=i,i}}}function J1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let $1=0;function eE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function tE(o){const t=new Q1,i=J1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ue);const l=new ue,u=new mn,d=new mn;function h(p){let _=0,x=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,C=0,y=0,v=0,z=0,L=0,B=0,k=0,O=0,P=0;p.sort(eE);for(let w=0,R=p.length;w<R;w++){const H=p[w],Y=H.color,le=H.intensity,pe=H.distance,fe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=Y.r*le,x+=Y.g*le,S+=Y.b*le;else if(H.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(H.sh.coefficients[N],le);P++}else if(H.isDirectionalLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,j=i.get(H);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=fe,r.directionalShadowMatrix[M]=H.shadow.matrix,z++}r.directional[M]=N,M++}else if(H.isSpotLight){const N=t.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(Y).multiplyScalar(le),N.distance=pe,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,r.spot[C]=N;const X=H.shadow;if(H.map&&(r.spotLightMap[k]=H.map,k++,X.updateMatrices(H),H.castShadow&&O++),r.spotLightMatrix[C]=X.matrix,H.castShadow){const j=i.get(H);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,r.spotShadow[C]=j,r.spotShadowMap[C]=fe,B++}C++}else if(H.isRectAreaLight){const N=t.get(H);N.color.copy(Y).multiplyScalar(le),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=N,y++}else if(H.isPointLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const X=H.shadow,j=i.get(H);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,r.pointShadow[A]=j,r.pointShadowMap[A]=fe,r.pointShadowMatrix[A]=H.shadow.matrix,L++}r.point[A]=N,A++}else if(H.isHemisphereLight){const N=t.get(H);N.skyColor.copy(H.color).multiplyScalar(le),N.groundColor.copy(H.groundColor).multiplyScalar(le),r.hemi[v]=N,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=S;const ne=r.hash;(ne.directionalLength!==M||ne.pointLength!==A||ne.spotLength!==C||ne.rectAreaLength!==y||ne.hemiLength!==v||ne.numDirectionalShadows!==z||ne.numPointShadows!==L||ne.numSpotShadows!==B||ne.numSpotMaps!==k||ne.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=B+k-O,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=P,ne.directionalLength=M,ne.pointLength=A,ne.spotLength=C,ne.rectAreaLength=y,ne.hemiLength=v,ne.numDirectionalShadows=z,ne.numPointShadows=L,ne.numSpotShadows=B,ne.numSpotMaps=k,ne.numLightProbes=P,r.version=$1++)}function m(p,_){let x=0,S=0,M=0,A=0,C=0;const y=_.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const L=p[v];if(L.isDirectionalLight){const B=r.directional[x];B.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(y),x++}else if(L.isSpotLight){const B=r.spot[M];B.position.setFromMatrixPosition(L.matrixWorld),B.position.applyMatrix4(y),B.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const B=r.rectArea[A];B.position.setFromMatrixPosition(L.matrixWorld),B.position.applyMatrix4(y),d.identity(),u.copy(L.matrixWorld),u.premultiply(y),d.extractRotation(u),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),B.halfWidth.applyMatrix4(d),B.halfHeight.applyMatrix4(d),A++}else if(L.isPointLight){const B=r.point[S];B.position.setFromMatrixPosition(L.matrixWorld),B.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const B=r.hemi[C];B.direction.setFromMatrixPosition(L.matrixWorld),B.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function cx(o){const t=new tE(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function nE(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new cx(o),t.set(l,[h])):u>=d.length?(h=new cx(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const iE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rE(o,t,i){let r=new Lx;const l=new Rt,u=new Rt,d=new rn,h=new wy({depthPacking:GS}),m=new Dy,p={},_=i.maxTextureSize,x={[ja]:Vn,[Vn]:ja,[ra]:ra},S=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:iE,fragmentShader:aE}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ya;A.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new da(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fx;let v=this.type;this.render=function(O,P,ne){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(la),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const le=v!==aa&&this.type===aa,pe=v===aa&&this.type!==aa;for(let fe=0,N=O.length;fe<N;fe++){const X=O[fe],j=X.shadow;if(j===void 0){ft("WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const re=j.getFrameExtents();if(l.multiply(re),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/re.x),l.x=u.x*re.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/re.y),l.y=u.y*re.y,j.mapSize.y=u.y)),j.map===null||le===!0||pe===!0){const D=this.type!==aa?{minFilter:ei,magFilter:ei}:{};j.map!==null&&j.map.dispose(),j.map=new Tr(l.x,l.y,D),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const ce=j.getViewportCount();for(let D=0;D<ce;D++){const K=j.getViewport(D);d.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),Y.viewport(d),j.updateMatrices(X,D),r=j.getFrustum(),B(P,ne,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===aa&&z(j,ne),j.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,H)};function z(O,P){const ne=t.update(C);S.defines.VSM_SAMPLES!==O.blurSamples&&(S.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Tr(l.x,l.y)),S.uniforms.shadow_pass.value=O.map.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(P,null,ne,S,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(P,null,ne,M,C,null)}function L(O,P,ne,w){let R=null;const H=ne.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)R=H;else if(R=ne.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=R.uuid,le=P.uuid;let pe=p[Y];pe===void 0&&(pe={},p[Y]=pe);let fe=pe[le];fe===void 0&&(fe=R.clone(),pe[le]=fe,P.addEventListener("dispose",k)),R=fe}if(R.visible=P.visible,R.wireframe=P.wireframe,w===aa?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:x[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,ne.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=o.properties.get(R);Y.light=ne}return R}function B(O,P,ne,w,R){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===aa)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,O.matrixWorld);const le=t.update(O),pe=O.material;if(Array.isArray(pe)){const fe=le.groups;for(let N=0,X=fe.length;N<X;N++){const j=fe[N],re=pe[j.materialIndex];if(re&&re.visible){const ce=L(O,re,w,R);O.onBeforeShadow(o,O,P,ne,le,ce,j),o.renderBufferDirect(ne,null,le,ce,O,j),O.onAfterShadow(o,O,P,ne,le,ce,j)}}}else if(pe.visible){const fe=L(O,pe,w,R);O.onBeforeShadow(o,O,P,ne,le,fe,null),o.renderBufferDirect(ne,null,le,fe,O,null),O.onAfterShadow(o,O,P,ne,le,fe,null)}}const Y=O.children;for(let le=0,pe=Y.length;le<pe;le++)B(Y[le],P,ne,w,R)}function k(O){O.target.removeEventListener("dispose",k);for(const ne in p){const w=p[ne],R=O.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const sE={[Td]:Ad,[Rd]:Dd,[Cd]:Ud,[Ss]:wd,[Ad]:Td,[Dd]:Rd,[Ud]:Cd,[wd]:Ss};function oE(o,t){function i(){let G=!1;const Le=new rn;let Ce=null;const we=new rn(0,0,0,0);return{setMask:function(be){Ce!==be&&!G&&(o.colorMask(be,be,be,be),Ce=be)},setLocked:function(be){G=be},setClear:function(be,ve,Ge,st,Bt){Bt===!0&&(be*=st,ve*=st,Ge*=st),Le.set(be,ve,Ge,st),we.equals(Le)===!1&&(o.clearColor(be,ve,Ge,st),we.copy(Le))},reset:function(){G=!1,Ce=null,we.set(-1,0,0,0)}}}function r(){let G=!1,Le=!1,Ce=null,we=null,be=null;return{setReversed:function(ve){if(Le!==ve){const Ge=t.get("EXT_clip_control");ve?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Le=ve;const st=be;be=null,this.setClear(st)}},getReversed:function(){return Le},setTest:function(ve){ve?se(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(ve){Ce!==ve&&!G&&(o.depthMask(ve),Ce=ve)},setFunc:function(ve){if(Le&&(ve=sE[ve]),we!==ve){switch(ve){case Td:o.depthFunc(o.NEVER);break;case Ad:o.depthFunc(o.ALWAYS);break;case Rd:o.depthFunc(o.LESS);break;case Ss:o.depthFunc(o.LEQUAL);break;case Cd:o.depthFunc(o.EQUAL);break;case wd:o.depthFunc(o.GEQUAL);break;case Dd:o.depthFunc(o.GREATER);break;case Ud:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}we=ve}},setLocked:function(ve){G=ve},setClear:function(ve){be!==ve&&(Le&&(ve=1-ve),o.clearDepth(ve),be=ve)},reset:function(){G=!1,Ce=null,we=null,be=null,Le=!1}}}function l(){let G=!1,Le=null,Ce=null,we=null,be=null,ve=null,Ge=null,st=null,Bt=null;return{setTest:function(wt){G||(wt?se(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!G&&(o.stencilMask(wt),Le=wt)},setFunc:function(wt,Cn,kn){(Ce!==wt||we!==Cn||be!==kn)&&(o.stencilFunc(wt,Cn,kn),Ce=wt,we=Cn,be=kn)},setOp:function(wt,Cn,kn){(ve!==wt||Ge!==Cn||st!==kn)&&(o.stencilOp(wt,Cn,kn),ve=wt,Ge=Cn,st=kn)},setLocked:function(wt){G=wt},setClear:function(wt){Bt!==wt&&(o.clearStencil(wt),Bt=wt)},reset:function(){G=!1,Le=null,Ce=null,we=null,be=null,ve=null,Ge=null,st=null,Bt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},S=new WeakMap,M=[],A=null,C=!1,y=null,v=null,z=null,L=null,B=null,k=null,O=null,P=new Xt(0,0,0),ne=0,w=!1,R=null,H=null,Y=null,le=null,pe=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),N=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),N=X>=2);let re=null,ce={};const D=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),me=new rn().fromArray(D),Se=new rn().fromArray(K);function De(G,Le,Ce,we){const be=new Uint8Array(4),ve=o.createTexture();o.bindTexture(G,ve),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ge=0;Ge<Ce;Ge++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,we,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Le+Ge,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return ve}const J={};J[o.TEXTURE_2D]=De(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=De(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=De(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=De(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),se(o.DEPTH_TEST),d.setFunc(Ss),ot(!1),gt(mg),se(o.CULL_FACE),mt(la);function se(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function Ae(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function Ue(G,Le){return x[G]!==Le?(o.bindFramebuffer(G,Le),x[G]=Le,G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Le),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function Fe(G,Le){let Ce=M,we=!1;if(G){Ce=S.get(Le),Ce===void 0&&(Ce=[],S.set(Le,Ce));const be=G.textures;if(Ce.length!==be.length||Ce[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,Ge=be.length;ve<Ge;ve++)Ce[ve]=o.COLOR_ATTACHMENT0+ve;Ce.length=be.length,we=!0}}else Ce[0]!==o.BACK&&(Ce[0]=o.BACK,we=!0);we&&o.drawBuffers(Ce)}function Qe(G){return A!==G?(o.useProgram(G),A=G,!0):!1}const ct={[Sr]:o.FUNC_ADD,[dS]:o.FUNC_SUBTRACT,[hS]:o.FUNC_REVERSE_SUBTRACT};ct[pS]=o.MIN,ct[mS]=o.MAX;const nt={[gS]:o.ZERO,[xS]:o.ONE,[_S]:o.SRC_COLOR,[bd]:o.SRC_ALPHA,[ES]:o.SRC_ALPHA_SATURATE,[MS]:o.DST_COLOR,[SS]:o.DST_ALPHA,[vS]:o.ONE_MINUS_SRC_COLOR,[Ed]:o.ONE_MINUS_SRC_ALPHA,[bS]:o.ONE_MINUS_DST_COLOR,[yS]:o.ONE_MINUS_DST_ALPHA,[TS]:o.CONSTANT_COLOR,[AS]:o.ONE_MINUS_CONSTANT_COLOR,[RS]:o.CONSTANT_ALPHA,[CS]:o.ONE_MINUS_CONSTANT_ALPHA};function mt(G,Le,Ce,we,be,ve,Ge,st,Bt,wt){if(G===la){C===!0&&(Ae(o.BLEND),C=!1);return}if(C===!1&&(se(o.BLEND),C=!0),G!==fS){if(G!==y||wt!==w){if((v!==Sr||B!==Sr)&&(o.blendEquation(o.FUNC_ADD),v=Sr,B=Sr),wt)switch(G){case _s:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gg:o.blendFunc(o.ONE,o.ONE);break;case xg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _g:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:an("WebGLState: Invalid blending: ",G);break}else switch(G){case _s:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case xg:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _g:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",G);break}z=null,L=null,k=null,O=null,P.set(0,0,0),ne=0,y=G,w=wt}return}be=be||Le,ve=ve||Ce,Ge=Ge||we,(Le!==v||be!==B)&&(o.blendEquationSeparate(ct[Le],ct[be]),v=Le,B=be),(Ce!==z||we!==L||ve!==k||Ge!==O)&&(o.blendFuncSeparate(nt[Ce],nt[we],nt[ve],nt[Ge]),z=Ce,L=we,k=ve,O=Ge),(st.equals(P)===!1||Bt!==ne)&&(o.blendColor(st.r,st.g,st.b,Bt),P.copy(st),ne=Bt),y=G,w=!1}function F(G,Le){G.side===ra?Ae(o.CULL_FACE):se(o.CULL_FACE);let Ce=G.side===Vn;Le&&(Ce=!Ce),ot(Ce),G.blending===_s&&G.transparent===!1?mt(la):mt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const we=G.stencilWrite;h.setTest(we),we&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?se(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function gt(G){G!==lS?(se(o.CULL_FACE),G!==H&&(G===mg?o.cullFace(o.BACK):G===cS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),H=G}function Mt(G){G!==Y&&(N&&o.lineWidth(G),Y=G)}function Ie(G,Le,Ce){G?(se(o.POLYGON_OFFSET_FILL),(le!==Le||pe!==Ce)&&(o.polygonOffset(Le,Ce),le=Le,pe=Ce)):Ae(o.POLYGON_OFFSET_FILL)}function It(G){G?se(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function qe(G){G===void 0&&(G=o.TEXTURE0+fe-1),re!==G&&(o.activeTexture(G),re=G)}function rt(G,Le,Ce){Ce===void 0&&(re===null?Ce=o.TEXTURE0+fe-1:Ce=re);let we=ce[Ce];we===void 0&&(we={type:void 0,texture:void 0},ce[Ce]=we),(we.type!==G||we.texture!==Le)&&(re!==Ce&&(o.activeTexture(Ce),re=Ce),o.bindTexture(G,Le||J[G]),we.type=G,we.texture=Le)}function U(){const G=ce[re];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function xe(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function ye(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function de(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function je(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Oe(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Je(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function We(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Me(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Te(G){me.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),me.copy(G))}function Ye(G){Se.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Se.copy(G))}function ke(G,Le){let Ce=p.get(Le);Ce===void 0&&(Ce=new WeakMap,p.set(Le,Ce));let we=Ce.get(G);we===void 0&&(we=o.getUniformBlockIndex(Le,G.name),Ce.set(G,we))}function ze(G,Le){const we=p.get(Le).get(G);m.get(Le)!==we&&(o.uniformBlockBinding(Le,we,G.__bindingPointIndex),m.set(Le,we))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},re=null,ce={},x={},S=new WeakMap,M=[],A=null,C=!1,y=null,v=null,z=null,L=null,B=null,k=null,O=null,P=new Xt(0,0,0),ne=0,w=!1,R=null,H=null,Y=null,le=null,pe=null,me.set(0,0,o.canvas.width,o.canvas.height),Se.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:se,disable:Ae,bindFramebuffer:Ue,drawBuffers:Fe,useProgram:Qe,setBlending:mt,setMaterial:F,setFlipSided:ot,setCullFace:gt,setLineWidth:Mt,setPolygonOffset:Ie,setScissorTest:It,activeTexture:qe,bindTexture:rt,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:We,texImage3D:Me,updateUBOMapping:ke,uniformBlockBinding:ze,texStorage2D:Oe,texStorage3D:Je,texSubImage2D:xe,texSubImage3D:ye,compressedTexSubImage2D:de,compressedTexSubImage3D:je,scissor:Te,viewport:Ye,reset:at}}function lE(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,_=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,b){return M?new OffscreenCanvas(U,b):Cc("canvas")}function C(U,b,$){let xe=1;const ye=rt(U);if((ye.width>$||ye.height>$)&&(xe=$/Math.max(ye.width,ye.height)),xe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(xe*ye.width),je=Math.floor(xe*ye.height);x===void 0&&(x=A(de,je));const Oe=b?A(de,je):x;return Oe.width=de,Oe.height=je,Oe.getContext("2d").drawImage(U,0,0,de,je),ft("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+de+"x"+je+")."),Oe}else return"data"in U&&ft("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,b,$,xe,ye=!1){if(U!==null){if(o[U]!==void 0)return o[U];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=b;if(b===o.RED&&($===o.FLOAT&&(de=o.R32F),$===o.HALF_FLOAT&&(de=o.R16F),$===o.UNSIGNED_BYTE&&(de=o.R8)),b===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.R8UI),$===o.UNSIGNED_SHORT&&(de=o.R16UI),$===o.UNSIGNED_INT&&(de=o.R32UI),$===o.BYTE&&(de=o.R8I),$===o.SHORT&&(de=o.R16I),$===o.INT&&(de=o.R32I)),b===o.RG&&($===o.FLOAT&&(de=o.RG32F),$===o.HALF_FLOAT&&(de=o.RG16F),$===o.UNSIGNED_BYTE&&(de=o.RG8)),b===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.RG8UI),$===o.UNSIGNED_SHORT&&(de=o.RG16UI),$===o.UNSIGNED_INT&&(de=o.RG32UI),$===o.BYTE&&(de=o.RG8I),$===o.SHORT&&(de=o.RG16I),$===o.INT&&(de=o.RG32I)),b===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.RGB8UI),$===o.UNSIGNED_SHORT&&(de=o.RGB16UI),$===o.UNSIGNED_INT&&(de=o.RGB32UI),$===o.BYTE&&(de=o.RGB8I),$===o.SHORT&&(de=o.RGB16I),$===o.INT&&(de=o.RGB32I)),b===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),$===o.UNSIGNED_INT&&(de=o.RGBA32UI),$===o.BYTE&&(de=o.RGBA8I),$===o.SHORT&&(de=o.RGBA16I),$===o.INT&&(de=o.RGBA32I)),b===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(de=o.R11F_G11F_B10F)),b===o.RGBA){const je=ye?Ac:Nt.getTransfer(xe);$===o.FLOAT&&(de=o.RGBA32F),$===o.HALF_FLOAT&&(de=o.RGBA16F),$===o.UNSIGNED_BYTE&&(de=je===kt?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function B(U,b){let $;return U?b===null||b===Er||b===Oo?$=o.DEPTH24_STENCIL8:b===oa?$=o.DEPTH32F_STENCIL8:b===No&&($=o.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Er||b===Oo?$=o.DEPTH_COMPONENT24:b===oa?$=o.DEPTH_COMPONENT32F:b===No&&($=o.DEPTH_COMPONENT16),$}function k(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==ei&&U.minFilter!==di?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function O(U){const b=U.target;b.removeEventListener("dispose",O),ne(b),b.isVideoTexture&&_.delete(b)}function P(U){const b=U.target;b.removeEventListener("dispose",P),R(b)}function ne(U){const b=r.get(U);if(b.__webglInit===void 0)return;const $=U.source,xe=S.get($);if(xe){const ye=xe[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&w(U),Object.keys(xe).length===0&&S.delete($)}r.remove(U)}function w(U){const b=r.get(U);o.deleteTexture(b.__webglTexture);const $=U.source,xe=S.get($);delete xe[b.__cacheKey],d.memory.textures--}function R(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(b.__webglFramebuffer[xe]))for(let ye=0;ye<b.__webglFramebuffer[xe].length;ye++)o.deleteFramebuffer(b.__webglFramebuffer[xe][ye]);else o.deleteFramebuffer(b.__webglFramebuffer[xe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[xe])}else{if(Array.isArray(b.__webglFramebuffer))for(let xe=0;xe<b.__webglFramebuffer.length;xe++)o.deleteFramebuffer(b.__webglFramebuffer[xe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let xe=0;xe<b.__webglColorRenderbuffer.length;xe++)b.__webglColorRenderbuffer[xe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[xe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=U.textures;for(let xe=0,ye=$.length;xe<ye;xe++){const de=r.get($[xe]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove($[xe])}r.remove(U)}let H=0;function Y(){H=0}function le(){const U=H;return U>=l.maxTextures&&ft("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function pe(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function fe(U,b){const $=r.get(U);if(U.isVideoTexture&&It(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const xe=U.image;if(xe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{J($,U,b);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+b)}function N(U,b){const $=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){J($,U,b);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+b)}function X(U,b){const $=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){J($,U,b);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+b)}function j(U,b){const $=r.get(U);if(U.version>0&&$.__version!==U.version){se($,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+b)}const re={[Od]:o.REPEAT,[sa]:o.CLAMP_TO_EDGE,[Pd]:o.MIRRORED_REPEAT},ce={[ei]:o.NEAREST,[FS]:o.NEAREST_MIPMAP_NEAREST,[ec]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[qf]:o.LINEAR_MIPMAP_NEAREST,[Mr]:o.LINEAR_MIPMAP_LINEAR},D={[kS]:o.NEVER,[ZS]:o.ALWAYS,[XS]:o.LESS,[yx]:o.LEQUAL,[WS]:o.EQUAL,[YS]:o.GEQUAL,[qS]:o.GREATER,[jS]:o.NOTEQUAL};function K(U,b){if(b.type===oa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===di||b.magFilter===qf||b.magFilter===ec||b.magFilter===Mr||b.minFilter===di||b.minFilter===qf||b.minFilter===ec||b.minFilter===Mr)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,re[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,re[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,re[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,ce[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,D[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ei||b.minFilter!==ec&&b.minFilter!==Mr||b.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function me(U,b){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",O));const xe=b.source;let ye=S.get(xe);ye===void 0&&(ye={},S.set(xe,ye));const de=pe(b);if(de!==U.__cacheKey){ye[de]===void 0&&(ye[de]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),ye[de].usedTimes++;const je=ye[U.__cacheKey];je!==void 0&&(ye[U.__cacheKey].usedTimes--,je.usedTimes===0&&w(b)),U.__cacheKey=de,U.__webglTexture=ye[de].texture}return $}function Se(U,b,$){return Math.floor(Math.floor(U/$)/b)}function De(U,b,$,xe){const de=U.updateRanges;if(de.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,$,xe,b.data);else{de.sort((Me,Te)=>Me.start-Te.start);let je=0;for(let Me=1;Me<de.length;Me++){const Te=de[je],Ye=de[Me],ke=Te.start+Te.count,ze=Se(Ye.start,b.width,4),at=Se(Te.start,b.width,4);Ye.start<=ke+1&&ze===at&&Se(Ye.start+Ye.count-1,b.width,4)===ze?Te.count=Math.max(Te.count,Ye.start+Ye.count-Te.start):(++je,de[je]=Ye)}de.length=je+1;const Oe=o.getParameter(o.UNPACK_ROW_LENGTH),Je=o.getParameter(o.UNPACK_SKIP_PIXELS),We=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Me=0,Te=de.length;Me<Te;Me++){const Ye=de[Me],ke=Math.floor(Ye.start/4),ze=Math.ceil(Ye.count/4),at=ke%b.width,G=Math.floor(ke/b.width),Le=ze,Ce=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,at),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,at,G,Le,Ce,$,xe,b.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Oe),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Je),o.pixelStorei(o.UNPACK_SKIP_ROWS,We)}}function J(U,b,$){let xe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(xe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(xe=o.TEXTURE_3D);const ye=me(U,b),de=b.source;i.bindTexture(xe,U.__webglTexture,o.TEXTURE0+$);const je=r.get(de);if(de.version!==je.__version||ye===!0){i.activeTexture(o.TEXTURE0+$);const Oe=Nt.getPrimaries(Nt.workingColorSpace),Je=b.colorSpace===Xa?null:Nt.getPrimaries(b.colorSpace),We=b.colorSpace===Xa||Oe===Je?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Me=C(b.image,!1,l.maxTextureSize);Me=qe(b,Me);const Te=u.convert(b.format,b.colorSpace),Ye=u.convert(b.type);let ke=L(b.internalFormat,Te,Ye,b.colorSpace,b.isVideoTexture);K(xe,b);let ze;const at=b.mipmaps,G=b.isVideoTexture!==!0,Le=je.__version===void 0||ye===!0,Ce=de.dataReady,we=k(b,Me);if(b.isDepthTexture)ke=B(b.format===Io,b.type),Le&&(G?i.texStorage2D(o.TEXTURE_2D,1,ke,Me.width,Me.height):i.texImage2D(o.TEXTURE_2D,0,ke,Me.width,Me.height,0,Te,Ye,null));else if(b.isDataTexture)if(at.length>0){G&&Le&&i.texStorage2D(o.TEXTURE_2D,we,ke,at[0].width,at[0].height);for(let be=0,ve=at.length;be<ve;be++)ze=at[be],G?Ce&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,ze.width,ze.height,Te,Ye,ze.data):i.texImage2D(o.TEXTURE_2D,be,ke,ze.width,ze.height,0,Te,Ye,ze.data);b.generateMipmaps=!1}else G?(Le&&i.texStorage2D(o.TEXTURE_2D,we,ke,Me.width,Me.height),Ce&&De(b,Me,Te,Ye)):i.texImage2D(o.TEXTURE_2D,0,ke,Me.width,Me.height,0,Te,Ye,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,ke,at[0].width,at[0].height,Me.depth);for(let be=0,ve=at.length;be<ve;be++)if(ze=at[be],b.format!==Mi)if(Te!==null)if(G){if(Ce)if(b.layerUpdates.size>0){const Ge=Gg(ze.width,ze.height,b.format,b.type);for(const st of b.layerUpdates){const Bt=ze.data.subarray(st*Ge/ze.data.BYTES_PER_ELEMENT,(st+1)*Ge/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,st,ze.width,ze.height,1,Te,Bt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,ze.width,ze.height,Me.depth,Te,ze.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,be,ke,ze.width,ze.height,Me.depth,0,ze.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,ze.width,ze.height,Me.depth,Te,Ye,ze.data):i.texImage3D(o.TEXTURE_2D_ARRAY,be,ke,ze.width,ze.height,Me.depth,0,Te,Ye,ze.data)}else{G&&Le&&i.texStorage2D(o.TEXTURE_2D,we,ke,at[0].width,at[0].height);for(let be=0,ve=at.length;be<ve;be++)ze=at[be],b.format!==Mi?Te!==null?G?Ce&&i.compressedTexSubImage2D(o.TEXTURE_2D,be,0,0,ze.width,ze.height,Te,ze.data):i.compressedTexImage2D(o.TEXTURE_2D,be,ke,ze.width,ze.height,0,ze.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,ze.width,ze.height,Te,Ye,ze.data):i.texImage2D(o.TEXTURE_2D,be,ke,ze.width,ze.height,0,Te,Ye,ze.data)}else if(b.isDataArrayTexture)if(G){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,ke,Me.width,Me.height,Me.depth),Ce)if(b.layerUpdates.size>0){const be=Gg(Me.width,Me.height,b.format,b.type);for(const ve of b.layerUpdates){const Ge=Me.data.subarray(ve*be/Me.data.BYTES_PER_ELEMENT,(ve+1)*be/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,Me.width,Me.height,1,Te,Ye,Ge)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Te,Ye,Me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ke,Me.width,Me.height,Me.depth,0,Te,Ye,Me.data);else if(b.isData3DTexture)G?(Le&&i.texStorage3D(o.TEXTURE_3D,we,ke,Me.width,Me.height,Me.depth),Ce&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Te,Ye,Me.data)):i.texImage3D(o.TEXTURE_3D,0,ke,Me.width,Me.height,Me.depth,0,Te,Ye,Me.data);else if(b.isFramebufferTexture){if(Le)if(G)i.texStorage2D(o.TEXTURE_2D,we,ke,Me.width,Me.height);else{let be=Me.width,ve=Me.height;for(let Ge=0;Ge<we;Ge++)i.texImage2D(o.TEXTURE_2D,Ge,ke,be,ve,0,Te,Ye,null),be>>=1,ve>>=1}}else if(at.length>0){if(G&&Le){const be=rt(at[0]);i.texStorage2D(o.TEXTURE_2D,we,ke,be.width,be.height)}for(let be=0,ve=at.length;be<ve;be++)ze=at[be],G?Ce&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Te,Ye,ze):i.texImage2D(o.TEXTURE_2D,be,ke,Te,Ye,ze);b.generateMipmaps=!1}else if(G){if(Le){const be=rt(Me);i.texStorage2D(o.TEXTURE_2D,we,ke,be.width,be.height)}Ce&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,Ye,Me)}else i.texImage2D(o.TEXTURE_2D,0,ke,Te,Ye,Me);y(b)&&v(xe),je.__version=de.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function se(U,b,$){if(b.image.length!==6)return;const xe=me(U,b),ye=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+$);const de=r.get(ye);if(ye.version!==de.__version||xe===!0){i.activeTexture(o.TEXTURE0+$);const je=Nt.getPrimaries(Nt.workingColorSpace),Oe=b.colorSpace===Xa?null:Nt.getPrimaries(b.colorSpace),Je=b.colorSpace===Xa||je===Oe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const We=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!We&&!Me?Te[ve]=C(b.image[ve],!0,l.maxCubemapSize):Te[ve]=Me?b.image[ve].image:b.image[ve],Te[ve]=qe(b,Te[ve]);const Ye=Te[0],ke=u.convert(b.format,b.colorSpace),ze=u.convert(b.type),at=L(b.internalFormat,ke,ze,b.colorSpace),G=b.isVideoTexture!==!0,Le=de.__version===void 0||xe===!0,Ce=ye.dataReady;let we=k(b,Ye);K(o.TEXTURE_CUBE_MAP,b);let be;if(We){G&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,we,at,Ye.width,Ye.height);for(let ve=0;ve<6;ve++){be=Te[ve].mipmaps;for(let Ge=0;Ge<be.length;Ge++){const st=be[Ge];b.format!==Mi?ke!==null?G?Ce&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,st.width,st.height,ke,st.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,at,st.width,st.height,0,st.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,0,0,st.width,st.height,ke,ze,st.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge,at,st.width,st.height,0,ke,ze,st.data)}}}else{if(be=b.mipmaps,G&&Le){be.length>0&&we++;const ve=rt(Te[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,we,at,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Me){G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,ke,ze,Te[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,Te[ve].width,Te[ve].height,0,ke,ze,Te[ve].data);for(let Ge=0;Ge<be.length;Ge++){const Bt=be[Ge].image[ve].image;G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,Bt.width,Bt.height,ke,ze,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,at,Bt.width,Bt.height,0,ke,ze,Bt.data)}}else{G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ke,ze,Te[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,ke,ze,Te[ve]);for(let Ge=0;Ge<be.length;Ge++){const st=be[Ge];G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,0,0,ke,ze,st.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ge+1,at,ke,ze,st.image[ve])}}}y(b)&&v(o.TEXTURE_CUBE_MAP),de.__version=ye.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ae(U,b,$,xe,ye,de){const je=u.convert($.format,$.colorSpace),Oe=u.convert($.type),Je=L($.internalFormat,je,Oe,$.colorSpace),We=r.get(b),Me=r.get($);if(Me.__renderTarget=b,!We.__hasExternalTextures){const Te=Math.max(1,b.width>>de),Ye=Math.max(1,b.height>>de);ye===o.TEXTURE_3D||ye===o.TEXTURE_2D_ARRAY?i.texImage3D(ye,de,Je,Te,Ye,b.depth,0,je,Oe,null):i.texImage2D(ye,de,Je,Te,Ye,0,je,Oe,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xe,ye,Me.__webglTexture,0,Mt(b)):(ye===o.TEXTURE_2D||ye>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xe,ye,Me.__webglTexture,de),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ue(U,b,$){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const xe=b.depthTexture,ye=xe&&xe.isDepthTexture?xe.type:null,de=B(b.stencilBuffer,ye),je=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Oe=Mt(b);Ie(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Oe,de,b.width,b.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Oe,de,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,de,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,U)}else{const xe=b.textures;for(let ye=0;ye<xe.length;ye++){const de=xe[ye],je=u.convert(de.format,de.colorSpace),Oe=u.convert(de.type),Je=L(de.internalFormat,je,Oe,de.colorSpace),We=Mt(b);$&&Ie(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Je,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,We,Je,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Je,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Fe(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(b.depthTexture);xe.__renderTarget=b,(!xe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe(b.depthTexture,0);const ye=xe.__webglTexture,de=Mt(b);if(b.depthTexture.format===Po)Ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ye,0);else if(b.depthTexture.format===Io)Ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Qe(U){const b=r.get(U),$=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const xe=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),xe){const ye=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,xe.removeEventListener("dispose",ye)};xe.addEventListener("dispose",ye),b.__depthDisposeCallback=ye}b.__boundDepthTexture=xe}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const xe=U.texture.mipmaps;xe&&xe.length>0?Fe(b.__webglFramebuffer[0],U):Fe(b.__webglFramebuffer,U)}else if($){b.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[xe]),b.__webglDepthbuffer[xe]===void 0)b.__webglDepthbuffer[xe]=o.createRenderbuffer(),Ue(b.__webglDepthbuffer[xe],U,!1);else{const ye=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[xe];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,de)}}else{const xe=U.texture.mipmaps;if(xe&&xe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ue(b.__webglDepthbuffer,U,!1);else{const ye=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,de)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ct(U,b,$){const xe=r.get(U);b!==void 0&&Ae(xe.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Qe(U)}function nt(U){const b=U.texture,$=r.get(U),xe=r.get(b);U.addEventListener("dispose",P);const ye=U.textures,de=U.isWebGLCubeRenderTarget===!0,je=ye.length>1;if(je||(xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture()),xe.__version=b.version,d.memory.textures++),de){$.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[Oe]=[];for(let Je=0;Je<b.mipmaps.length;Je++)$.__webglFramebuffer[Oe][Je]=o.createFramebuffer()}else $.__webglFramebuffer[Oe]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)$.__webglFramebuffer[Oe]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(je)for(let Oe=0,Je=ye.length;Oe<Je;Oe++){const We=r.get(ye[Oe]);We.__webglTexture===void 0&&(We.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Ie(U)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Oe=0;Oe<ye.length;Oe++){const Je=ye[Oe];$.__webglColorRenderbuffer[Oe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Oe]);const We=u.convert(Je.format,Je.colorSpace),Me=u.convert(Je.type),Te=L(Je.internalFormat,We,Me,Je.colorSpace,U.isXRRenderTarget===!0),Ye=Mt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,Te,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,$.__webglColorRenderbuffer[Oe])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Ue($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),K(o.TEXTURE_CUBE_MAP,b);for(let Oe=0;Oe<6;Oe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Je=0;Je<b.mipmaps.length;Je++)Ae($.__webglFramebuffer[Oe][Je],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Je);else Ae($.__webglFramebuffer[Oe],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);y(b)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Oe=0,Je=ye.length;Oe<Je;Oe++){const We=ye[Oe],Me=r.get(We);let Te=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Te,Me.__webglTexture),K(Te,We),Ae($.__webglFramebuffer,U,We,o.COLOR_ATTACHMENT0+Oe,Te,0),y(We)&&v(Te)}i.unbindTexture()}else{let Oe=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Oe,xe.__webglTexture),K(Oe,b),b.mipmaps&&b.mipmaps.length>0)for(let Je=0;Je<b.mipmaps.length;Je++)Ae($.__webglFramebuffer[Je],U,b,o.COLOR_ATTACHMENT0,Oe,Je);else Ae($.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Oe,0);y(b)&&v(Oe),i.unbindTexture()}U.depthBuffer&&Qe(U)}function mt(U){const b=U.textures;for(let $=0,xe=b.length;$<xe;$++){const ye=b[$];if(y(ye)){const de=z(U),je=r.get(ye).__webglTexture;i.bindTexture(de,je),v(de),i.unbindTexture()}}}const F=[],ot=[];function gt(U){if(U.samples>0){if(Ie(U)===!1){const b=U.textures,$=U.width,xe=U.height;let ye=o.COLOR_BUFFER_BIT;const de=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=r.get(U),Oe=b.length>1;if(Oe)for(let We=0;We<b.length;We++)i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Je=U.texture.mipmaps;Je&&Je.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let We=0;We<b.length;We++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=o.STENCIL_BUFFER_BIT)),Oe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[We]);const Me=r.get(b[We]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,$,xe,0,0,$,xe,ye,o.NEAREST),m===!0&&(F.length=0,ot.length=0,F.push(o.COLOR_ATTACHMENT0+We),U.depthBuffer&&U.resolveDepthBuffer===!1&&(F.push(de),ot.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Oe)for(let We=0;We<b.length;We++){i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,je.__webglColorRenderbuffer[We]);const Me=r.get(b[We]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,Me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Mt(U){return Math.min(l.maxSamples,U.samples)}function Ie(U){const b=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(U){const b=d.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function qe(U,b){const $=U.colorSpace,xe=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==bs&&$!==Xa&&(Nt.getTransfer($)===kt?(xe!==Mi||ye!==ua)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",$)),b}function rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=Y,this.setTexture2D=fe,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=ct,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ie}function cE(o,t){function i(r,l=Xa){let u;const d=Nt.getTransfer(l);if(r===ua)return o.UNSIGNED_BYTE;if(r===mh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===gh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===gx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===xx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===px)return o.BYTE;if(r===mx)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===ph)return o.INT;if(r===Er)return o.UNSIGNED_INT;if(r===oa)return o.FLOAT;if(r===Ts)return o.HALF_FLOAT;if(r===_x)return o.ALPHA;if(r===vx)return o.RGB;if(r===Mi)return o.RGBA;if(r===Po)return o.DEPTH_COMPONENT;if(r===Io)return o.DEPTH_STENCIL;if(r===Sx)return o.RED;if(r===xh)return o.RED_INTEGER;if(r===_h)return o.RG;if(r===vh)return o.RG_INTEGER;if(r===Sh)return o.RGBA_INTEGER;if(r===yc||r===Mc||r===bc||r===Ec)if(d===kt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===zd||r===Fd||r===Bd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Id)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===Hd||r===Vd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Gd||r===Hd)return d===kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Vd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kd||r===Xd||r===Wd||r===qd||r===jd||r===Yd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===eh||r===th||r===nh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===kd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$d)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===th)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ih||r===ah||r===rh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===ih)return d===kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ah)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sh||r===oh||r===lh||r===ch)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===sh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===oh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ch)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const uE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Ox(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ui({vertexShader:uE,fragmentShader:fE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new da(new Vo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hE extends As{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,x=null,S=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",y=new dE,v={},z=i.getContextAttributes();let L=null,B=null;const k=[],O=[],P=new Rt;let ne=null;const w=new Si;w.viewport=new rn;const R=new Si;R.viewport=new rn;const H=[w,R],Y=new Uy;let le=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=k[J];return se===void 0&&(se=new md,k[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=k[J];return se===void 0&&(se=new md,k[J]=se),se.getGripSpace()},this.getHand=function(J){let se=k[J];return se===void 0&&(se=new md,k[J]=se),se.getHandSpace()};function fe(J){const se=O.indexOf(J.inputSource);if(se===-1)return;const Ae=k[se];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,p||d),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",X);for(let J=0;J<k.length;J++){const se=O[J];se!==null&&(O[J]=null,k[J].disconnect(se))}le=null,pe=null,y.reset();for(const J in v)delete v[J];t.setRenderTarget(L),M=null,S=null,x=null,l=null,B=null,De.stop(),r.isPresenting=!1,t.setPixelRatio(ne),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",N),l.addEventListener("inputsourceschange",X),z.xrCompatible!==!0&&await i.makeXRCompatible(),ne=t.getPixelRatio(),t.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Ue=null,Fe=null;z.depth&&(Fe=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=z.stencil?Io:Po,Ue=z.stencil?Oo:Er);const Qe={colorFormat:i.RGBA8,depthFormat:Fe,scaleFactor:u};x=this.getBinding(),S=x.createProjectionLayer(Qe),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new Tr(S.textureWidth,S.textureHeight,{format:Mi,type:ua,depthTexture:new Nx(S.textureWidth,S.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ae={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Tr(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:ua,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),De.setContext(l),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(J){for(let se=0;se<J.removed.length;se++){const Ae=J.removed[se],Ue=O.indexOf(Ae);Ue>=0&&(O[Ue]=null,k[Ue].disconnect(Ae))}for(let se=0;se<J.added.length;se++){const Ae=J.added[se];let Ue=O.indexOf(Ae);if(Ue===-1){for(let Qe=0;Qe<k.length;Qe++)if(Qe>=O.length){O.push(Ae),Ue=Qe;break}else if(O[Qe]===null){O[Qe]=Ae,Ue=Qe;break}if(Ue===-1)break}const Fe=k[Ue];Fe&&Fe.connect(Ae)}}const j=new ue,re=new ue;function ce(J,se,Ae){j.setFromMatrixPosition(se.matrixWorld),re.setFromMatrixPosition(Ae.matrixWorld);const Ue=j.distanceTo(re),Fe=se.projectionMatrix.elements,Qe=Ae.projectionMatrix.elements,ct=Fe[14]/(Fe[10]-1),nt=Fe[14]/(Fe[10]+1),mt=(Fe[9]+1)/Fe[5],F=(Fe[9]-1)/Fe[5],ot=(Fe[8]-1)/Fe[0],gt=(Qe[8]+1)/Qe[0],Mt=ct*ot,Ie=ct*gt,It=Ue/(-ot+gt),qe=It*-ot;if(se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qe),J.translateZ(It),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Fe[10]===-1)J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const rt=ct+It,U=nt+It,b=Mt-qe,$=Ie+(Ue-qe),xe=mt*nt/U*rt,ye=F*nt/U*rt;J.projectionMatrix.makePerspective(b,$,xe,ye,rt,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function D(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let se=J.near,Ae=J.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(Ae=y.depthFar)),Y.near=R.near=w.near=se,Y.far=R.far=w.far=Ae,(le!==Y.near||pe!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),le=Y.near,pe=Y.far),Y.layers.mask=J.layers.mask|6,w.layers.mask=Y.layers.mask&3,R.layers.mask=Y.layers.mask&5;const Ue=J.parent,Fe=Y.cameras;D(Y,Ue);for(let Qe=0;Qe<Fe.length;Qe++)D(Fe[Qe],Ue);Fe.length===2?ce(Y,w,R):Y.projectionMatrix.copy(w.projectionMatrix),K(J,Y,Ue)};function K(J,se,Ae){Ae===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=uh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(J){return v[J]};let me=null;function Se(J,se){if(_=se.getViewerPose(p||d),A=se,_!==null){const Ae=_.views;M!==null&&(t.setRenderTargetFramebuffer(B,M.framebuffer),t.setRenderTarget(B));let Ue=!1;Ae.length!==Y.cameras.length&&(Y.cameras.length=0,Ue=!0);for(let nt=0;nt<Ae.length;nt++){const mt=Ae[nt];let F=null;if(M!==null)F=M.getViewport(mt);else{const gt=x.getViewSubImage(S,mt);F=gt.viewport,nt===0&&(t.setRenderTargetTextures(B,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(B))}let ot=H[nt];ot===void 0&&(ot=new Si,ot.layers.enable(nt),ot.viewport=new rn,H[nt]=ot),ot.matrix.fromArray(mt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(mt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(F.x,F.y,F.width,F.height),nt===0&&(Y.matrix.copy(ot.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ue===!0&&Y.cameras.push(ot)}const Fe=l.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const nt=x.getDepthInformation(Ae[0]);nt&&nt.isValid&&nt.texture&&y.init(nt,l.renderState)}if(Fe&&Fe.includes("camera-access")&&C){t.state.unbindTexture(),x=r.getBinding();for(let nt=0;nt<Ae.length;nt++){const mt=Ae[nt].camera;if(mt){let F=v[mt];F||(F=new Ox,v[mt]=F);const ot=x.getCameraImage(mt);F.sourceTexture=ot}}}}for(let Ae=0;Ae<k.length;Ae++){const Ue=O[Ae],Fe=k[Ae];Ue!==null&&Fe!==void 0&&Fe.update(Ue,se,p||d)}me&&me(J,se),se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:se}),A=null}const De=new Ix;De.setAnimationLoop(Se),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}}const _r=new fa,pE=new mn;function mE(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,wx(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,z,L,B){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),x(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,B)):v.isMeshMatcapMaterial?(u(y,v),A(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),C(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,z,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Vn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Vn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const z=t.get(v),L=z.envMap,B=z.envMapRotation;L&&(y.envMap.value=L,_r.copy(B),_r.x*=-1,_r.y*=-1,_r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),y.envMapRotation.value.setFromMatrix4(pE.makeRotationFromEuler(_r)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,z,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*z,y.scale.value=L*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,z){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const z=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function gE(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,L){const B=L.program;r.uniformBlockBinding(z,B)}function p(z,L){let B=l[z.id];B===void 0&&(A(z),B=_(z),l[z.id]=B,z.addEventListener("dispose",y));const k=L.program;r.updateUBOMapping(z,k);const O=t.render.frame;u[z.id]!==O&&(S(z),u[z.id]=O)}function _(z){const L=x();z.__bindingPointIndex=L;const B=o.createBuffer(),k=z.__size,O=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,k,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,B),B}function x(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const L=l[z.id],B=z.uniforms,k=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,P=B.length;O<P;O++){const ne=Array.isArray(B[O])?B[O]:[B[O]];for(let w=0,R=ne.length;w<R;w++){const H=ne[w];if(M(H,O,w,k)===!0){const Y=H.__offset,le=Array.isArray(H.value)?H.value:[H.value];let pe=0;for(let fe=0;fe<le.length;fe++){const N=le[fe],X=C(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,Y+pe,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,pe),pe+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,L,B,k){const O=z.value,P=L+"_"+B;if(k[P]===void 0)return typeof O=="number"||typeof O=="boolean"?k[P]=O:k[P]=O.clone(),!0;{const ne=k[P];if(typeof O=="number"||typeof O=="boolean"){if(ne!==O)return k[P]=O,!0}else if(ne.equals(O)===!1)return ne.copy(O),!0}return!1}function A(z){const L=z.uniforms;let B=0;const k=16;for(let P=0,ne=L.length;P<ne;P++){const w=Array.isArray(L[P])?L[P]:[L[P]];for(let R=0,H=w.length;R<H;R++){const Y=w[R],le=Array.isArray(Y.value)?Y.value:[Y.value];for(let pe=0,fe=le.length;pe<fe;pe++){const N=le[pe],X=C(N),j=B%k,re=j%X.boundary,ce=j+re;B+=re,ce!==0&&k-ce<X.storage&&(B+=k-ce),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=B,B+=X.storage}}}const O=B%k;return O>0&&(B+=k-O),z.__size=B,z.__cache={},this}function C(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",z),L}function y(z){const L=z.target;L.removeEventListener("dispose",y);const B=d.indexOf(L.__bindingPointIndex);d.splice(B,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function v(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const xE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ia=null;function _E(){return ia===null&&(ia=new Ty(xE,32,32,_h,Ts),ia.minFilter=di,ia.magFilter=di,ia.wrapS=sa,ia.wrapT=sa,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class vE{constructor(t={}){const{canvas:i=KS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Set([Sh,vh,xh]),C=new Set([ua,Er,No,Oo,mh,gh]),y=new Uint32Array(4),v=new Int32Array(4);let z=null,L=null;const B=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let P=!1;this._outputColorSpace=fi;let ne=0,w=0,R=null,H=-1,Y=null;const le=new rn,pe=new rn;let fe=null;const N=new Xt(0);let X=0,j=i.width,re=i.height,ce=1,D=null,K=null;const me=new rn(0,0,j,re),Se=new rn(0,0,j,re);let De=!1;const J=new Lx;let se=!1,Ae=!1;const Ue=new mn,Fe=new ue,Qe=new rn,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function mt(){return R===null?ce:1}let F=r;function ot(T,W){return i.getContext(T,W)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hh}`),i.addEventListener("webglcontextlost",be,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",Ge,!1),F===null){const W="webgl2";if(F=ot(W,T),F===null)throw ot(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let gt,Mt,Ie,It,qe,rt,U,b,$,xe,ye,de,je,Oe,Je,We,Me,Te,Ye,ke,ze,at,G,Le;function Ce(){gt=new R3(F),gt.init(),at=new cE(F,gt),Mt=new _3(F,gt,t,at),Ie=new oE(F,gt),Mt.reversedDepthBuffer&&S&&Ie.buffers.depth.setReversed(!0),It=new D3(F),qe=new Y1,rt=new lE(F,gt,Ie,qe,Mt,at,It),U=new S3(O),b=new A3(O),$=new Oy(F),G=new g3(F,$),xe=new C3(F,$,It,G),ye=new L3(F,xe,$,It),Ye=new U3(F,Mt,rt),We=new v3(qe),de=new j1(O,U,b,gt,Mt,G,We),je=new mE(O,qe),Oe=new K1,Je=new nE(gt),Te=new m3(O,U,b,Ie,ye,M,m),Me=new rE(O,ye,Mt),Le=new gE(F,It,Mt,Ie),ke=new x3(F,gt,It),ze=new w3(F,gt,It),It.programs=de.programs,O.capabilities=Mt,O.extensions=gt,O.properties=qe,O.renderLists=Oe,O.shadowMap=Me,O.state=Ie,O.info=It}Ce();const we=new hE(O,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(T){T!==void 0&&(ce=T,this.setSize(j,re,!1))},this.getSize=function(T){return T.set(j,re)},this.setSize=function(T,W,ae=!0){if(we.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,re=W,i.width=Math.floor(T*ce),i.height=Math.floor(W*ce),ae===!0&&(i.style.width=T+"px",i.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(j*ce,re*ce).floor()},this.setDrawingBufferSize=function(T,W,ae){j=T,re=W,ce=ae,i.width=Math.floor(T*ae),i.height=Math.floor(W*ae),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(le)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,W,ae,te){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,W,ae,te),Ie.viewport(le.copy(me).multiplyScalar(ce).round())},this.getScissor=function(T){return T.copy(Se)},this.setScissor=function(T,W,ae,te){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,W,ae,te),Ie.scissor(pe.copy(Se).multiplyScalar(ce).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){Ie.setScissorTest(De=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,ae=!0){let te=0;if(T){let Z=!1;if(R!==null){const Re=R.texture.format;Z=A.has(Re)}if(Z){const Re=R.texture.type,Ne=C.has(Re),Be=Te.getClearColor(),He=Te.getClearAlpha(),et=Be.r,it=Be.g,Ze=Be.b;Ne?(y[0]=et,y[1]=it,y[2]=Ze,y[3]=He,F.clearBufferuiv(F.COLOR,0,y)):(v[0]=et,v[1]=it,v[2]=Ze,v[3]=He,F.clearBufferiv(F.COLOR,0,v))}else te|=F.COLOR_BUFFER_BIT}W&&(te|=F.DEPTH_BUFFER_BIT),ae&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",be,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",Ge,!1),Te.dispose(),Oe.dispose(),Je.dispose(),qe.dispose(),U.dispose(),b.dispose(),ye.dispose(),G.dispose(),Le.dispose(),de.dispose(),we.dispose(),we.removeEventListener("sessionstart",Cs),we.removeEventListener("sessionend",ws),hi.stop()};function be(T){T.preventDefault(),bg("WebGLRenderer: Context Lost."),P=!0}function ve(){bg("WebGLRenderer: Context Restored."),P=!1;const T=It.autoReset,W=Me.enabled,ae=Me.autoUpdate,te=Me.needsUpdate,Z=Me.type;Ce(),It.autoReset=T,Me.enabled=W,Me.autoUpdate=ae,Me.needsUpdate=te,Me.type=Z}function Ge(T){an("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){const W=T.target;W.removeEventListener("dispose",st),Bt(W)}function Bt(T){wt(T),qe.remove(T)}function wt(T){const W=qe.get(T).programs;W!==void 0&&(W.forEach(function(ae){de.releaseProgram(ae)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,ae,te,Z,Re){W===null&&(W=ct);const Ne=Z.isMesh&&Z.matrixWorld.determinant()<0,Be=Nc(T,W,ae,te,Z);Ie.setMaterial(te,Ne);let He=ae.index,et=1;if(te.wireframe===!0){if(He=xe.getWireframeAttribute(ae),He===void 0)return;et=2}const it=ae.drawRange,Ze=ae.attributes.position;let dt=it.start*et,Ct=(it.start+it.count)*et;Re!==null&&(dt=Math.max(dt,Re.start*et),Ct=Math.min(Ct,(Re.start+Re.count)*et)),He!==null?(dt=Math.max(dt,0),Ct=Math.min(Ct,He.count)):Ze!=null&&(dt=Math.max(dt,0),Ct=Math.min(Ct,Ze.count));const Dt=Ct-dt;if(Dt<0||Dt===1/0)return;G.setup(Z,te,Be,ae,He);let bt,Pt=ke;if(He!==null&&(bt=$.get(He),Pt=ze,Pt.setIndex(bt)),Z.isMesh)te.wireframe===!0?(Ie.setLineWidth(te.wireframeLinewidth*mt()),Pt.setMode(F.LINES)):Pt.setMode(F.TRIANGLES);else if(Z.isLine){let $e=te.linewidth;$e===void 0&&($e=1),Ie.setLineWidth($e*mt()),Z.isLineSegments?Pt.setMode(F.LINES):Z.isLineLoop?Pt.setMode(F.LINE_LOOP):Pt.setMode(F.LINE_STRIP)}else Z.isPoints?Pt.setMode(F.POINTS):Z.isSprite&&Pt.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const $e=Z._multiDrawStarts,Wt=Z._multiDrawCounts,Et=Z._multiDrawCount,_n=He?$.get(He).bytesPerElement:1,pa=qe.get(te).currentProgram.getUniforms();for(let jt=0;jt<Et;jt++)pa.setValue(F,"_gl_DrawID",jt),Pt.render($e[jt]/_n,Wt[jt])}else if(Z.isInstancedMesh)Pt.renderInstances(dt,Dt,Z.count);else if(ae.isInstancedBufferGeometry){const $e=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Wt=Math.min(ae.instanceCount,$e);Pt.renderInstances(dt,Dt,Wt)}else Pt.render(dt,Dt)};function Cn(T,W,ae){T.transparent===!0&&T.side===ra&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,dn(T,W,ae),T.side=ja,T.needsUpdate=!0,dn(T,W,ae),T.side=ra):dn(T,W,ae)}this.compile=function(T,W,ae=null){ae===null&&(ae=T),L=Je.get(ae),L.init(W),k.push(L),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),T!==ae&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),L.setupLights();const te=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Re=Z.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const Be=Re[Ne];Cn(Be,ae,Z),te.add(Be)}else Cn(Re,ae,Z),te.add(Re)}),L=k.pop(),te},this.compileAsync=function(T,W,ae=null){const te=this.compile(T,W,ae);return new Promise(Z=>{function Re(){if(te.forEach(function(Ne){qe.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){Z(T);return}setTimeout(Re,10)}gt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let kn=null;function ko(T){kn&&kn(T)}function Cs(){hi.stop()}function ws(){hi.start()}const hi=new Ix;hi.setAnimationLoop(ko),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){kn=T,we.setAnimationLoop(T),T===null?hi.stop():hi.start()},we.addEventListener("sessionstart",Cs),we.addEventListener("sessionend",ws),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),T.isScene===!0&&T.onBeforeRender(O,T,W,R),L=Je.get(T,k.length),L.init(W),k.push(L),Ue.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(Ue,wi,W.reversedDepth),Ae=this.localClippingEnabled,se=We.init(this.clippingPlanes,Ae),z=Oe.get(T,B.length),z.init(),B.push(z),we.enabled===!0&&we.isPresenting===!0){const Re=O.xr.getDepthSensingMesh();Re!==null&&Za(Re,W,-1/0,O.sortObjects)}Za(T,W,0,O.sortObjects),z.finish(),O.sortObjects===!0&&z.sort(D,K),nt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,nt&&Te.addToRenderList(z,T),this.info.render.frame++,se===!0&&We.beginShadows();const ae=L.state.shadowsArray;Me.render(ae,T,W),se===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=z.opaque,Z=z.transmissive;if(L.setupLights(),W.isArrayCamera){const Re=W.cameras;if(Z.length>0)for(let Ne=0,Be=Re.length;Ne<Be;Ne++){const He=Re[Ne];Us(te,Z,T,He)}nt&&Te.render(T);for(let Ne=0,Be=Re.length;Ne<Be;Ne++){const He=Re[Ne];Ds(z,T,He,He.viewport)}}else Z.length>0&&Us(te,Z,T,W),nt&&Te.render(T),Ds(z,T,W);R!==null&&w===0&&(rt.updateMultisampleRenderTarget(R),rt.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(O,T,W),G.resetDefaultState(),H=-1,Y=null,k.pop(),k.length>0?(L=k[k.length-1],se===!0&&We.setGlobalState(O.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?z=B[B.length-1]:z=null};function Za(T,W,ae,te){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)ae=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)L.pushLight(T),T.castShadow&&L.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){te&&Qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);const Ne=ye.update(T),Be=T.material;Be.visible&&z.push(T,Ne,Be,ae,Qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const Ne=ye.update(T),Be=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qe.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Qe.copy(Ne.boundingSphere.center)),Qe.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(Be)){const He=Ne.groups;for(let et=0,it=He.length;et<it;et++){const Ze=He[et],dt=Be[Ze.materialIndex];dt&&dt.visible&&z.push(T,Ne,dt,ae,Qe.z,Ze)}}else Be.visible&&z.push(T,Ne,Be,ae,Qe.z,null)}}const Re=T.children;for(let Ne=0,Be=Re.length;Ne<Be;Ne++)Za(Re[Ne],W,ae,te)}function Ds(T,W,ae,te){const{opaque:Z,transmissive:Re,transparent:Ne}=T;L.setupLightsView(ae),se===!0&&We.setGlobalState(O.clippingPlanes,ae),te&&Ie.viewport(le.copy(te)),Z.length>0&&Xn(Z,W,ae),Re.length>0&&Xn(Re,W,ae),Ne.length>0&&Xn(Ne,W,ae),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Us(T,W,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[te.id]===void 0&&(L.state.transmissionRenderTarget[te.id]=new Tr(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Ts:ua,minFilter:Mr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Re=L.state.transmissionRenderTarget[te.id],Ne=te.viewport||le;Re.setSize(Ne.z*O.transmissionResolutionScale,Ne.w*O.transmissionResolutionScale);const Be=O.getRenderTarget(),He=O.getActiveCubeFace(),et=O.getActiveMipmapLevel();O.setRenderTarget(Re),O.getClearColor(N),X=O.getClearAlpha(),X<1&&O.setClearColor(16777215,.5),O.clear(),nt&&Te.render(ae);const it=O.toneMapping;O.toneMapping=qa;const Ze=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),se===!0&&We.setGlobalState(O.clippingPlanes,te),Xn(T,ae,te),rt.updateMultisampleRenderTarget(Re),rt.updateRenderTargetMipmap(Re),gt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Ct=0,Dt=W.length;Ct<Dt;Ct++){const bt=W[Ct],{object:Pt,geometry:$e,material:Wt,group:Et}=bt;if(Wt.side===ra&&Pt.layers.test(te.layers)){const _n=Wt.side;Wt.side=Vn,Wt.needsUpdate=!0,sn(Pt,ae,te,$e,Wt,Et),Wt.side=_n,Wt.needsUpdate=!0,dt=!0}}dt===!0&&(rt.updateMultisampleRenderTarget(Re),rt.updateRenderTargetMipmap(Re))}O.setRenderTarget(Be,He,et),O.setClearColor(N,X),Ze!==void 0&&(te.viewport=Ze),O.toneMapping=it}function Xn(T,W,ae){const te=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Re=T.length;Z<Re;Z++){const Ne=T[Z],{object:Be,geometry:He,group:et}=Ne;let it=Ne.material;it.allowOverride===!0&&te!==null&&(it=te),Be.layers.test(ae.layers)&&sn(Be,W,ae,He,it,et)}}function sn(T,W,ae,te,Z,Re){T.onBeforeRender(O,W,ae,te,Z,Re),T.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(O,W,ae,te,T,Re),Z.transparent===!0&&Z.side===ra&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,O.renderBufferDirect(ae,W,te,Z,T,Re),Z.side=ja,Z.needsUpdate=!0,O.renderBufferDirect(ae,W,te,Z,T,Re),Z.side=ra):O.renderBufferDirect(ae,W,te,Z,T,Re),T.onAfterRender(O,W,ae,te,Z,Re)}function dn(T,W,ae){W.isScene!==!0&&(W=ct);const te=qe.get(T),Z=L.state.lights,Re=L.state.shadowsArray,Ne=Z.state.version,Be=de.getParameters(T,Z.state,Re,W,ae),He=de.getProgramCacheKey(Be);let et=te.programs;te.environment=T.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(T.isMeshStandardMaterial?b:U).get(T.envMap||te.environment),te.envMapRotation=te.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",st),et=new Map,te.programs=et);let it=et.get(He);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Ne)return Ar(T,Be),it}else Be.uniforms=de.getUniforms(T),T.onBeforeCompile(Be,O),it=de.acquireProgram(Be,He),et.set(He,it),te.uniforms=Be.uniforms;const Ze=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=We.uniform),Ar(T,Be),te.needsLights=Xo(T),te.lightsStateVersion=Ne,te.needsLights&&(Ze.ambientLightColor.value=Z.state.ambient,Ze.lightProbe.value=Z.state.probe,Ze.directionalLights.value=Z.state.directional,Ze.directionalLightShadows.value=Z.state.directionalShadow,Ze.spotLights.value=Z.state.spot,Ze.spotLightShadows.value=Z.state.spotShadow,Ze.rectAreaLights.value=Z.state.rectArea,Ze.ltc_1.value=Z.state.rectAreaLTC1,Ze.ltc_2.value=Z.state.rectAreaLTC2,Ze.pointLights.value=Z.state.point,Ze.pointLightShadows.value=Z.state.pointShadow,Ze.hemisphereLights.value=Z.state.hemi,Ze.directionalShadowMap.value=Z.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ze.spotShadowMap.value=Z.state.spotShadowMap,Ze.spotLightMatrix.value=Z.state.spotLightMatrix,Ze.spotLightMap.value=Z.state.spotLightMap,Ze.pointShadowMap.value=Z.state.pointShadowMap,Ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),te.currentProgram=it,te.uniformsList=null,it}function Li(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=Tc.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Ar(T,W){const ae=qe.get(T);ae.outputColorSpace=W.outputColorSpace,ae.batching=W.batching,ae.batchingColor=W.batchingColor,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.instancingMorph=W.instancingMorph,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function Nc(T,W,ae,te,Z){W.isScene!==!0&&(W=ct),rt.resetTextureUnits();const Re=W.fog,Ne=te.isMeshStandardMaterial?W.environment:null,Be=R===null?O.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:bs,He=(te.isMeshStandardMaterial?b:U).get(te.envMap||Ne),et=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,it=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Ct=!!ae.morphAttributes.color;let Dt=qa;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Dt=O.toneMapping);const bt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Pt=bt!==void 0?bt.length:0,$e=qe.get(te),Wt=L.state.lights;if(se===!0&&(Ae===!0||T!==Y)){const Sn=T===Y&&te.id===H;We.setState(te,T,Sn)}let Et=!1;te.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Wt.state.version||$e.outputColorSpace!==Be||Z.isBatchedMesh&&$e.batching===!1||!Z.isBatchedMesh&&$e.batching===!0||Z.isBatchedMesh&&$e.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&$e.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&$e.instancing===!1||!Z.isInstancedMesh&&$e.instancing===!0||Z.isSkinnedMesh&&$e.skinning===!1||!Z.isSkinnedMesh&&$e.skinning===!0||Z.isInstancedMesh&&$e.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$e.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&$e.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&$e.instancingMorph===!1&&Z.morphTexture!==null||$e.envMap!==He||te.fog===!0&&$e.fog!==Re||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==We.numPlanes||$e.numIntersection!==We.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==it||$e.morphTargets!==Ze||$e.morphNormals!==dt||$e.morphColors!==Ct||$e.toneMapping!==Dt||$e.morphTargetsCount!==Pt)&&(Et=!0):(Et=!0,$e.__version=te.version);let _n=$e.currentProgram;Et===!0&&(_n=dn(te,W,Z));let pa=!1,jt=!1,Ni=!1;const Yt=_n.getUniforms(),vn=$e.uniforms;if(Ie.useProgram(_n.program)&&(pa=!0,jt=!0,Ni=!0),te.id!==H&&(H=te.id,jt=!0),pa||Y!==T){Ie.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Yt.setValue(F,"projectionMatrix",T.projectionMatrix),Yt.setValue(F,"viewMatrix",T.matrixWorldInverse);const bn=Yt.map.cameraPosition;bn!==void 0&&bn.setValue(F,Fe.setFromMatrixPosition(T.matrixWorld)),Mt.logarithmicDepthBuffer&&Yt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Yt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),Y!==T&&(Y=T,jt=!0,Ni=!0)}if(Z.isSkinnedMesh){Yt.setOptional(F,Z,"bindMatrix"),Yt.setOptional(F,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Yt.setValue(F,"boneTexture",Sn.boneTexture,rt))}Z.isBatchedMesh&&(Yt.setOptional(F,Z,"batchingTexture"),Yt.setValue(F,"batchingTexture",Z._matricesTexture,rt),Yt.setOptional(F,Z,"batchingIdTexture"),Yt.setValue(F,"batchingIdTexture",Z._indirectTexture,rt),Yt.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Yt.setValue(F,"batchingColorTexture",Z._colorsTexture,rt));const hn=ae.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Ye.update(Z,ae,_n),(jt||$e.receiveShadow!==Z.receiveShadow)&&($e.receiveShadow=Z.receiveShadow,Yt.setValue(F,"receiveShadow",Z.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(vn.envMap.value=He,vn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(vn.envMapIntensity.value=W.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=_E()),jt&&(Yt.setValue(F,"toneMappingExposure",O.toneMappingExposure),$e.needsLights&&Oc(vn,Ni),Re&&te.fog===!0&&je.refreshFogUniforms(vn,Re),je.refreshMaterialUniforms(vn,te,ce,re,L.state.transmissionRenderTarget[T.id]),Tc.upload(F,Li($e),vn,rt)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Tc.upload(F,Li($e),vn,rt),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Yt.setValue(F,"center",Z.center),Yt.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Yt.setValue(F,"normalMatrix",Z.normalMatrix),Yt.setValue(F,"modelMatrix",Z.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Sn=te.uniformsGroups;for(let bn=0,bi=Sn.length;bn<bi;bn++){const Oi=Sn[bn];Le.update(Oi,_n),Le.bind(Oi,_n)}}return _n}function Oc(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Xo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,W,ae){const te=qe.get(T);te.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),qe.get(T.texture).__webglTexture=W,qe.get(T.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const ae=qe.get(T);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0};const Ka=F.createFramebuffer();this.setRenderTarget=function(T,W=0,ae=0){R=T,ne=W,w=ae;let te=!0,Z=null,Re=!1,Ne=!1;if(T){const He=qe.get(T);if(He.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(F.FRAMEBUFFER,null),te=!1;else if(He.__webglFramebuffer===void 0)rt.setupRenderTarget(T);else if(He.__hasExternalTextures)rt.rebindTextures(T,qe.get(T.texture).__webglTexture,qe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(He.__boundDepthTexture!==Ze){if(Ze!==null&&qe.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(T)}}const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ne=!0);const it=qe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(it[W])?Z=it[W][ae]:Z=it[W],Re=!0):T.samples>0&&rt.useMultisampledRTT(T)===!1?Z=qe.get(T).__webglMultisampledFramebuffer:Array.isArray(it)?Z=it[ae]:Z=it,le.copy(T.viewport),pe.copy(T.scissor),fe=T.scissorTest}else le.copy(me).multiplyScalar(ce).floor(),pe.copy(Se).multiplyScalar(ce).floor(),fe=De;if(ae!==0&&(Z=Ka),Ie.bindFramebuffer(F.FRAMEBUFFER,Z)&&te&&Ie.drawBuffers(T,Z),Ie.viewport(le),Ie.scissor(pe),Ie.setScissorTest(fe),Re){const He=qe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,ae)}else if(Ne){const He=W;for(let et=0;et<T.textures.length;et++){const it=qe.get(T.textures[et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+et,it.__webglTexture,ae,He)}}else if(T!==null&&ae!==0){const He=qe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,He.__webglTexture,ae)}H=-1},this.readRenderTargetPixels=function(T,W,ae,te,Z,Re,Ne,Be=0){if(!(T&&T.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He){Ie.bindFramebuffer(F.FRAMEBUFFER,He);try{const et=T.textures[Be],it=et.format,Ze=et.type;if(!Mt.textureFormatReadable(it)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ze)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-te&&ae>=0&&ae<=T.height-Z&&(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Be),F.readPixels(W,ae,te,Z,at.convert(it),at.convert(Ze),Re))}finally{const et=R!==null?qe.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(F.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(T,W,ae,te,Z,Re,Ne,Be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He)if(W>=0&&W<=T.width-te&&ae>=0&&ae<=T.height-Z){Ie.bindFramebuffer(F.FRAMEBUFFER,He);const et=T.textures[Be],it=et.format,Ze=et.type;if(!Mt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,Re.byteLength,F.STREAM_READ),T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Be),F.readPixels(W,ae,te,Z,at.convert(it),at.convert(Ze),0);const Ct=R!==null?qe.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(F.FRAMEBUFFER,Ct);const Dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await QS(F,Dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Re),F.deleteBuffer(dt),F.deleteSync(Dt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,ae=0){const te=Math.pow(2,-ae),Z=Math.floor(T.image.width*te),Re=Math.floor(T.image.height*te),Ne=W!==null?W.x:0,Be=W!==null?W.y:0;rt.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,Ne,Be,Z,Re),Ie.unbindTexture()};const Ls=F.createFramebuffer(),ha=F.createFramebuffer();this.copyTextureToTexture=function(T,W,ae=null,te=null,Z=0,Re=null){Re===null&&(Z!==0?(zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Z,Z=0):Re=0);let Ne,Be,He,et,it,Ze,dt,Ct,Dt;const bt=T.isCompressedTexture?T.mipmaps[Re]:T.image;if(ae!==null)Ne=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,He=ae.isBox3?ae.max.z-ae.min.z:1,et=ae.min.x,it=ae.min.y,Ze=ae.isBox3?ae.min.z:0;else{const hn=Math.pow(2,-Z);Ne=Math.floor(bt.width*hn),Be=Math.floor(bt.height*hn),T.isDataArrayTexture?He=bt.depth:T.isData3DTexture?He=Math.floor(bt.depth*hn):He=1,et=0,it=0,Ze=0}te!==null?(dt=te.x,Ct=te.y,Dt=te.z):(dt=0,Ct=0,Dt=0);const Pt=at.convert(W.format),$e=at.convert(W.type);let Wt;W.isData3DTexture?(rt.setTexture3D(W,0),Wt=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),Wt=F.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),Wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Et=F.getParameter(F.UNPACK_ROW_LENGTH),_n=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pa=F.getParameter(F.UNPACK_SKIP_PIXELS),jt=F.getParameter(F.UNPACK_SKIP_ROWS),Ni=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,it),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze);const Yt=T.isDataArrayTexture||T.isData3DTexture,vn=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const hn=qe.get(T),Sn=qe.get(W),bn=qe.get(hn.__renderTarget),bi=qe.get(Sn.__renderTarget);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Oi=0;Oi<He;Oi++)Yt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.get(T).__webglTexture,Z,Ze+Oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.get(W).__webglTexture,Re,Dt+Oi)),F.blitFramebuffer(et,it,Ne,Be,dt,Ct,Ne,Be,F.DEPTH_BUFFER_BIT,F.NEAREST);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||qe.has(T)){const hn=qe.get(T),Sn=qe.get(W);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,Ls),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,ha);for(let bn=0;bn<He;bn++)Yt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hn.__webglTexture,Z,Ze+bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hn.__webglTexture,Z),vn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Sn.__webglTexture,Re,Dt+bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Sn.__webglTexture,Re),Z!==0?F.blitFramebuffer(et,it,Ne,Be,dt,Ct,Ne,Be,F.COLOR_BUFFER_BIT,F.NEAREST):vn?F.copyTexSubImage3D(Wt,Re,dt,Ct,Dt+bn,et,it,Ne,Be):F.copyTexSubImage2D(Wt,Re,dt,Ct,et,it,Ne,Be);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else vn?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Wt,Re,dt,Ct,Dt,Ne,Be,He,Pt,$e,bt.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Wt,Re,dt,Ct,Dt,Ne,Be,He,Pt,bt.data):F.texSubImage3D(Wt,Re,dt,Ct,Dt,Ne,Be,He,Pt,$e,bt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Re,dt,Ct,Ne,Be,Pt,$e,bt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Re,dt,Ct,bt.width,bt.height,Pt,bt.data):F.texSubImage2D(F.TEXTURE_2D,Re,dt,Ct,Ne,Be,Pt,$e,bt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Et),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_n),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pa),F.pixelStorei(F.UNPACK_SKIP_ROWS,jt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ni),Re===0&&W.generateMipmaps&&F.generateMipmap(Wt),Ie.unbindTexture()},this.initRenderTarget=function(T){qe.get(T).__webglFramebuffer===void 0&&rt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?rt.setTextureCube(T,0):T.isData3DTexture?rt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?rt.setTexture2DArray(T,0):rt.setTexture2D(T,0),Ie.unbindTexture()},this.resetState=function(){ne=0,w=0,R=null,Ie.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Nt._getUnpackColorSpace()}}const SE=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,yE=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.5;
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,ux=8;function ME(o){let t=o.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,r=255,l=255;return t.length===3?(i=parseInt(t[0]+t[0],16),r=parseInt(t[1]+t[1],16),l=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),l=parseInt(t.slice(4,6),16)),new ue(i/255,r/255,l/255)}function bE({linesGradient:o,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:r=[5],topWavePosition:l,middleWavePosition:u,bottomWavePosition:d={x:2,y:-.7,rotate:-1},animationSpeed:h=1,interactive:m=!0,bendRadius:p=5,bendStrength:_=-.5,mouseDamping:x=.05,parallax:S=!0,parallaxStrength:M=.2,mixBlendMode:A="screen"}){const C=Jt.useRef(null),y=Jt.useRef(new Rt(-1e3,-1e3)),v=Jt.useRef(new Rt(-1e3,-1e3)),z=Jt.useRef(0),L=Jt.useRef(0),B=Jt.useRef(new Rt(0,0)),k=Jt.useRef(new Rt(0,0)),O=pe=>{if(typeof i=="number")return i;if(!t.includes(pe))return 0;const fe=t.indexOf(pe);return i[fe]??6},P=pe=>{if(typeof r=="number")return r;if(!t.includes(pe))return .1;const fe=t.indexOf(pe);return r[fe]??.1},ne=t.includes("top")?O("top"):0,w=t.includes("middle")?O("middle"):0,R=t.includes("bottom")?O("bottom"):0,H=t.includes("top")?P("top")*.01:.01,Y=t.includes("middle")?P("middle")*.01:.01,le=t.includes("bottom")?P("bottom")*.01:.01;return Jt.useEffect(()=>{if(!C.current)return;const pe=new Ey,fe=new Px(-1,1,1,-1,0,1);fe.position.z=1;const N=new vE({antialias:!0,alpha:!1});N.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),N.domElement.style.width="100%",N.domElement.style.height="100%",C.current.appendChild(N.domElement);const X={iTime:{value:0},iResolution:{value:new ue(1,1,1)},animationSpeed:{value:h},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:ne},middleLineCount:{value:w},bottomLineCount:{value:R},topLineDistance:{value:H},middleLineDistance:{value:Y},bottomLineDistance:{value:le},topWavePosition:{value:new ue(l?.x??10,l?.y??.5,l?.rotate??-.4)},middleWavePosition:{value:new ue(u?.x??5,u?.y??0,u?.rotate??.2)},bottomWavePosition:{value:new ue(d?.x??2,d?.y??-.7,d?.rotate??.4)},iMouse:{value:new Rt(-1e3,-1e3)},interactive:{value:m},bendRadius:{value:p},bendStrength:{value:_},bendInfluence:{value:0},parallax:{value:S},parallaxStrength:{value:M},parallaxOffset:{value:new Rt(0,0)},lineGradient:{value:Array.from({length:ux},()=>new ue(1,1,1))},lineGradientCount:{value:0}};if(o&&o.length>0){const Ae=o.slice(0,ux);X.lineGradientCount.value=Ae.length,Ae.forEach((Ue,Fe)=>{const Qe=ME(Ue);X.lineGradient.value[Fe].set(Qe.x,Qe.y,Qe.z)})}const j=new Ui({uniforms:X,vertexShader:SE,fragmentShader:yE}),re=new Vo(2,2),ce=new da(re,j);pe.add(ce);const D=new Ly,K=()=>{const Ae=C.current,Ue=Ae.clientWidth||1,Fe=Ae.clientHeight||1;N.setSize(Ue,Fe,!1);const Qe=N.domElement.width,ct=N.domElement.height;X.iResolution.value.set(Qe,ct,1)};K();const me=typeof ResizeObserver<"u"?new ResizeObserver(K):null;me&&C.current&&me.observe(C.current);const Se=Ae=>{const Ue=N.domElement.getBoundingClientRect(),Fe=Ae.clientX-Ue.left,Qe=Ae.clientY-Ue.top,ct=N.getPixelRatio();if(y.current.set(Fe*ct,(Ue.height-Qe)*ct),z.current=1,S){const nt=Ue.width/2,mt=Ue.height/2,F=(Fe-nt)/Ue.width,ot=-(Qe-mt)/Ue.height;B.current.set(F*M,ot*M)}},De=()=>{z.current=0};m&&(N.domElement.addEventListener("pointermove",Se),N.domElement.addEventListener("pointerleave",De));let J=0;const se=()=>{X.iTime.value=D.getElapsedTime(),m&&(v.current.lerp(y.current,x),X.iMouse.value.copy(v.current),L.current+=(z.current-L.current)*x,X.bendInfluence.value=L.current),S&&(k.current.lerp(B.current,x),X.parallaxOffset.value.copy(k.current)),N.render(pe,fe),J=requestAnimationFrame(se)};return se(),()=>{cancelAnimationFrame(J),me&&C.current&&me.disconnect(),m&&(N.domElement.removeEventListener("pointermove",Se),N.domElement.removeEventListener("pointerleave",De)),re.dispose(),j.dispose(),N.dispose(),N.domElement.parentElement&&N.domElement.parentElement.removeChild(N.domElement)}},[o,t,i,r,l,u,d,h,m,p,_,x,S,M]),Ee.jsx("div",{ref:C,className:"floating-lines-container",style:{mixBlendMode:A}})}function EE(){return Ee.jsxs(Ee.Fragment,{children:[Ee.jsx("div",{style:{width:"100%",position:"sticky",zIndex:"-1"},children:Ee.jsx(bE,{enabledWaves:["top","middle","bottom"],lineCount:[10,15,20],lineDistance:[80,80,80],bendRadius:5,bendStrength:-.5,interactive:!1,parallax:!1})}),Ee.jsx(oS,{})]})}nS.createRoot(document.getElementById("root")).render(Ee.jsx(Jt.StrictMode,{children:Ee.jsx(EE,{})}));
