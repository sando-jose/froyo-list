// This code started getting too complicated for it's purpose
//const froyoArray = froyo.split(",");
//const froyoList = {};
//for (let i = 0; i < froyoArray.length; i = i + 1) {
//  if (froyoList[froyoArray[i]] === undefined) {
//    froyoList[froyoArray[i]] = 1;
//  }
//}

//Started over, and learned .forEach, .trim, and more short-hands that can be used
let input = prompt(
  "Please enter a comma-separated list of froyo flavors:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

let flavors = input.split(",");

let froyoCounts = {};
flavors.forEach((flavor) => {
  // Triming in case they add unnecessary spaces
  flavors = flavor.trim();
  if (flavor in froyoCounts) {
    froyoCounts[flavors]++;
  } else {
    froyoCounts[flavor] = 1;
  }
});

console.log("Flavor Counts:");
console.table(froyoCounts);
