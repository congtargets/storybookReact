console.time("timer");
const hello = function () {
  console.log("Hello Console!");
};
const bye = function () {
  console.log("Bye Console!");
};
hello(); // calling hello;

bye(); // calling bye;
console.timeEnd("timer");
