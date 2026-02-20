import $ from "jquery";
import { chunk } from "lodash-es";

$(function () {
  $(".heading")
    .css("font-style", "italic")
    .on("click", async function (ev) {
      console.log(chunk([1, 2, 3, 4, 5, 6], 2));
    });
});
