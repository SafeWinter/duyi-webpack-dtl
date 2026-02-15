"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
// const a = 1;

// const b = () => console.log('b');

// const Method = function() {
//   const c = () => {
//     console.log(this);
//   }
// }

var p = Promise.resolve(123).then(console.log).catch(console.error);