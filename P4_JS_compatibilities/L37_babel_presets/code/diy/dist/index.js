"use strict";

var a = 1;
var b = function b() {
  return console.log('b');
};
var Method = function Method() {
  var _this = this;
  var c = function c() {
    console.log(_this);
  };
};