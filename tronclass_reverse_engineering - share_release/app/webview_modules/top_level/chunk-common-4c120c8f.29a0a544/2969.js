// Extracted from decompiled/apktool/base/assets/public/js/chunk-common-4c120c8f.29a0a544.js
// Webpack module id: 2969
function(A,e,t){"use strict";t(9653);var i=t(69367);e["Z"]={describeClockwiseArc:function(A,e,t,o,n,r){void 0===n&&(n=0),void 0===r&&(r=360);var a=Math.abs(r-n);360===a&&(r+=.1);var c=i.Z.polarToCartesian(A,e,o,n),g=i.Z.polarToCartesian(A,e,o,r),s=Number(a>180);return["M",c.x,t-c.y,"A",o,o,0,s,1,g.x,t-g.y].join(" ")}}}
