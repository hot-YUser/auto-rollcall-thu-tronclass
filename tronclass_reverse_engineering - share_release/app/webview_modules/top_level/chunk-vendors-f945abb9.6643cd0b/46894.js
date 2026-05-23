// Extracted from decompiled/apktool/base/assets/public/js/chunk-vendors-f945abb9.6643cd0b.js
// Webpack module id: 46894
function(t){var e=Math.pow(2,32),n=function(t){var n,r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getBigUint64?(n=r.getBigUint64(0),n<Number.MAX_SAFE_INTEGER?Number(n):n):r.getUint32(0)*e+r.getUint32(4)};t.exports={getUint64:n,MAX_UINT32:e}}
