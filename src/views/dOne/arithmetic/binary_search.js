/*
list必须是有序数组
*/

var searchInsert = function (list, item) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var guess = list[mid];
    console.log(mid, "aaa");
    if (guess === item) {
      console.log(mid);
      return mid;
    } else if (guess > item) {
      end = mid - 1;
      console.log("one");
    } else if (guess < item) {
      start = mid + 1;
      console.log("two");
    } else {
      console.log(mid);
      return mid;
    }
    console.log("three");
  }
};
// let myList = [9, 7, 5, 3, 1];  //反向用
let myList = [1, 3, 5, 6];
console.time("timer");
searchInsert(myList, 6);
console.timeEnd("timer");
