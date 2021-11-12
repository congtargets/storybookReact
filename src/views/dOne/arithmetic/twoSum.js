// function twoSum(list1, target) {
//   let newArr = [];
//   for (let i = 0; i < list1.length - 1; i++) {
//     for (let j = i + 1; i < list1.length - 1; j++) {
//       if (list1[i] + list1[j] === target) {
//         newArr = [i, j];
//       }
//     }
//   }
//   console.log(newArr);
// }
// let list1 = [];
// let target = 2;
// twoSum(list1, target);

//第二种方法

// var twoSum = function (nums, target) {
//   let map = new Map();
//   let array = new Array(2);
//   for (let i = 0; i < nums.length; i++) {
//     if (map.get(target - nums[i]) === undefined) {
//       console.log("1");
//       map.set(nums[i], i);
//     } else {
//       console.log("2");
//       array = [map.get(target - nums[i]), i];
//       console.log(array);
//       return array;
//     }
//   }
//   console.log("3");
// };

let list1 = [2, 7, 11, 15];
let target = 9;
twoSum(list1, target);
var twoSum = function (nums, target) {
  let map = new Map();
  let arr = new Array(2);
  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i]) === undefined) {
      map.set(nums[i], i);
    } else {
      arr = [map.get(target - nums[i]), i];
      return arr;
    }
  }
  //   return new Error("空");
};

let nums = [3, 2, 4];
let target = 6;
twoSum(nums, target);
