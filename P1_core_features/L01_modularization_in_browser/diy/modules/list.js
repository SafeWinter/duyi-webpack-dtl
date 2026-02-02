import item from "./item.js";

console.log("from module item:", item);

console.log("\
I am a list module, \
I depend on item moduel. \
I will export 'list' name");

export default "list";
