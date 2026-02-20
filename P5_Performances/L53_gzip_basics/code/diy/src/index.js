import $ from "jquery";

$(function () {
  $(".heading")
    .css("font-style", "italic")
    .on("click", async function (ev) {
      const {default: chunk} = await import('lodash-es/chunk');
      console.log(chunk([1, 2, 3, 4, 5, 6], 2));
    });
});