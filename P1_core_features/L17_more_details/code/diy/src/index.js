const $ = require('jquery');
const _ = require('lodash');

$(function() {
  $('h1').css({
    'font-style': 'italic',
    'background': '#eee'
  });
});

const arr = _.map([1, 2, 3], n => n ** 2);
console.log('arr:', arr);