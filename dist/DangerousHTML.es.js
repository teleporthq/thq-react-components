import p from"react";var _={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=p,s=Symbol.for("react.element"),y=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function l(o,r,f){var e,t={},n=null,i=null;f!==void 0&&(n=""+f),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)m.call(r,e)&&!O.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:s,type:o,key:n,ref:i,props:t,_owner:d.current}}_.Fragment=y;_.jsx=l;_.jsxs=l;
