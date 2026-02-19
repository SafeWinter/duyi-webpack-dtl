console.log("module index");

const btn = document.querySelector("button");
btn.addEventListener("click", async (ev) => {
  const { chunk } = await import("lodash-es");
  console.log(chunk([1, 2, 3, 4, 5, 6], 2));
});
