(self.webpackChunk_jupyrdf_jupyter_forcegraph=self.webpackChunk_jupyrdf_jupyter_forcegraph||[]).push([[562],{2562:(t,n,e)=>{"use strict";e.r(n),e.d(n,{compress:()=>a,compressUsingDict:()=>_,createCCtx:()=>l,createDCtx:()=>u,decompress:()=>s,decompressUsingDict:()=>f,freeCCtx:()=>p,freeDCtx:()=>c,init:()=>m});const r=e(7965),o=new Promise((t=>{r.onRuntimeInitialized=t})),i=t=>(0,r._ZSTD_isError)(t),s=(t,n={defaultHeapSize:1048576})=>{const e=r._malloc,o=e(t.byteLength);r.HEAP8.set(t,o);const s=((t,n)=>(0,r._ZSTD_getFrameContentSize)(t,n))(o,t.byteLength),a=-1===s?n.defaultHeapSize:s,u=r._free,c=e(a);try{const n=(0,r._ZSTD_decompress)(c,a,o,t.byteLength);if(i(n))throw new Error(`Failed to compress with code ${n}`);const e=new Uint8Array(r.HEAPU8.buffer,c,n).slice();return u(c,a),u(o,t.byteLength),e}catch(n){throw u(c,a),u(o,t.byteLength),n}},a=(t,n)=>{const e=(o=t.byteLength,(0,r._ZSTD_compressBound)(o));var o;const s=r._malloc,a=s(e),u=s(t.byteLength);r.HEAP8.set(t,u);const c=r._free;try{const o=(0,r._ZSTD_compress)(a,e,u,t.byteLength,null!=n?n:3);if(i(o))throw new Error(`Failed to compress with code ${o}`);const s=new Uint8Array(r.HEAPU8.buffer,a,o).slice();return c(a,e),c(u,t.byteLength),s}catch(n){throw c(a,e),c(u,t.byteLength),n}},u=()=>r._ZSTD_createDCtx(),c=t=>r._ZSTD_freeDCtx(t),f=(t,n,e,o={defaultHeapSize:1048576})=>{const s=r._malloc,a=s(n.byteLength);r.HEAP8.set(n,a);const u=s(e.byteLength);r.HEAP8.set(e,u);const c=((t,n)=>(0,r._ZSTD_getFrameContentSize)(t,n))(a,n.byteLength),f=-1===c?o.defaultHeapSize:c,l=r._free,p=s(f);try{const o=(0,r._ZSTD_decompress_usingDict)(t,p,f,a,n.byteLength,u,e.byteLength);if(i(o))throw new Error(`Failed to compress with code ${o}`);const s=new Uint8Array(r.HEAPU8.buffer,p,o).slice();return l(p,f),l(a,n.byteLength),l(u,e.byteLength),s}catch(t){throw l(p,f),l(a,n.byteLength),l(u,e.byteLength),t}},l=()=>r._ZSTD_createCCtx(),p=t=>r._ZSTD_freeCCtx(t),_=(t,n,e,o)=>{const s=(a=n.byteLength,(0,r._ZSTD_compressBound)(a));var a;const u=r._malloc,c=u(s),f=u(n.byteLength);r.HEAP8.set(n,f);const l=u(e.byteLength);r.HEAP8.set(e,l);const p=r._free;try{const a=(0,r._ZSTD_compress_usingDict)(t,c,s,f,n.byteLength,l,e.byteLength,null!=o?o:3);if(i(a))throw new Error(`Failed to compress with code ${a}`);const u=new Uint8Array(r.HEAPU8.buffer,c,a).slice();return p(c,s),p(f,n.byteLength),p(l,e.byteLength),u}catch(t){throw p(c,s),p(f,n.byteLength),p(l,e.byteLength),t}};const m=t=>{return n=void 0,i=void 0,a=function*(){var n;const i=e(9579);var s,a,u,c;r.init(null!==(n=null!=t?t:i.default)&&void 0!==n?n:i),yield(s=void 0,a=void 0,u=void 0,c=function*(){yield o},new(u||(u=Promise))((function(t,n){function e(t){try{o(c.next(t))}catch(t){n(t)}}function r(t){try{o(c.throw(t))}catch(t){n(t)}}function o(n){var o;n.done?t(n.value):(o=n.value,o instanceof u?o:new u((function(t){t(o)}))).then(e,r)}o((c=c.apply(s,a||[])).next())})))},new((s=void 0)||(s=Promise))((function(t,e){function r(t){try{u(a.next(t))}catch(t){e(t)}}function o(t){try{u(a.throw(t))}catch(t){e(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,o)}u((a=a.apply(n,i||[])).next())}));var n,i,s,a}},7965:t=>{var n,e=void 0!==e?e:{},r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);var o,i=[],s=e.printErr||console.warn.bind(console);for(n in r)r.hasOwnProperty(n)&&(e[n]=r[n]);r=null,e.arguments&&(i=e.arguments),e.thisProgram&&(thisProgram=e.thisProgram),e.quit&&(quit_=e.quit),"object"!=typeof WebAssembly&&d("no native wasm support detected");var a,u,c=!1;function f(t){a=t,e.HEAP8=new Int8Array(t),e.HEAPU8=u=new Uint8Array(t)}e.INITIAL_MEMORY;var l,p=[],_=[],m=[],h=0,y=null,g=null;function d(t){throw e.onAbort&&e.onAbort(t),s(t+=""),c=!0,EXITSTATUS=1,t="abort("+t+").",new WebAssembly.RuntimeError(t)}function b(t){for(;t.length>0;){var n=t.shift();if("function"!=typeof n){var r=n.func;"number"==typeof r?void 0===n.arg?l.get(r)():l.get(r)(n.arg):r(void 0===n.arg?null:n.arg)}else n(e)}}function D(t){try{return o.grow(t-a.byteLength+65535>>>16),f(o.buffer),1}catch(t){}}e.preloadedImages={},e.preloadedAudios={};var S,w={a:function(t,n,e,r){d("Assertion failed: "+[n||"unknown filename",e,r||"unknown function"])},b:function(t){var n,e=u.length,r=2147483648;if((t>>>=0)>r)return!1;for(var o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,t+100663296),D(Math.min(r,((n=Math.max(t,i))%65536>0&&(n+=65536-n%65536),n))))return!0}return!1},c:function(t){}};function T(t){function n(){S||(S=!0,e.calledRun=!0,c||(b(_),e.onRuntimeInitialized&&e.onRuntimeInitialized(),function(){if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)t=e.postRun.shift(),m.unshift(t);var t;b(m)}()))}t=t||i,h>0||(function(){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)t=e.preRun.shift(),p.unshift(t);var t;b(p)}(),h>0||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),n()}),1)):n()))}if(e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.e).apply(null,arguments)},e._malloc=function(){return(e._malloc=e.asm.q).apply(null,arguments)},e._free=function(){return(e._free=e.asm.r).apply(null,arguments)},e._ZSTD_isError=function(){return(e._ZSTD_isError=e.asm.f).apply(null,arguments)},e._ZSTD_compressBound=function(){return(e._ZSTD_compressBound=e.asm.g).apply(null,arguments)},e._ZSTD_createCCtx=function(){return(e._ZSTD_createCCtx=e.asm.h).apply(null,arguments)},e._ZSTD_freeCCtx=function(){return(e._ZSTD_freeCCtx=e.asm.i).apply(null,arguments)},e._ZSTD_compress_usingDict=function(){return(e._ZSTD_compress_usingDict=e.asm.j).apply(null,arguments)},e._ZSTD_compress=function(){return(e._ZSTD_compress=e.asm.k).apply(null,arguments)},e._ZSTD_createDCtx=function(){return(e._ZSTD_createDCtx=e.asm.l).apply(null,arguments)},e._ZSTD_freeDCtx=function(){return(e._ZSTD_freeDCtx=e.asm.m).apply(null,arguments)},e._ZSTD_getFrameContentSize=function(){return(e._ZSTD_getFrameContentSize=e.asm.n).apply(null,arguments)},e._ZSTD_decompress_usingDict=function(){return(e._ZSTD_decompress_usingDict=e.asm.o).apply(null,arguments)},e._ZSTD_decompress=function(){return(e._ZSTD_decompress=e.asm.p).apply(null,arguments)},g=function t(){S||T(),S||(g=t)},e.run=T,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();e.init=function(t){var n={a:w};function r(t,n){var r,i=t.exports;e.asm=i,f((o=e.asm.d).buffer),l=e.asm.s,r=e.asm.e,_.unshift(r),function(t){if(h--,e.monitorRunDependencies&&e.monitorRunDependencies(h),0==h&&(null!==y&&(clearInterval(y),y=null),g)){var n=g;g=null,n()}}()}function i(t){r(t.instance)}function a(e){return(r=t,fetch(r,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+r+"'";return t.arrayBuffer()}))).then((function(t){return WebAssembly.instantiate(t,n)})).then(e,(function(t){s("failed to asynchronously prepare wasm: "+t),d(t)}));var r}if(h++,e.monitorRunDependencies&&e.monitorRunDependencies(h),e.instantiateWasm)try{return e.instantiateWasm(n,r)}catch(t){return s("Module.instantiateWasm callback failed with error: "+t),!1}return t&&t.byteLength>0?WebAssembly.instantiate(t,n).then(i,(function(t){s("wasm compile failed: "+t)})):"function"==typeof WebAssembly.instantiateStreaming&&"string"==typeof t&&"function"==typeof fetch?fetch(t,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(i,(function(t){return s("wasm streaming compile failed: "+t),s("falling back to ArrayBuffer instantiation"),a(i)}))})):a(i),{}},t.exports=e},9579:(t,n,e)=>{"use strict";t.exports=e.p+"998250a831af662f5f25.wasm"}}]);
//# sourceMappingURL=562.928857973c775977676d.js.map?v=928857973c775977676d