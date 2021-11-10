/*
list必须是有序数组
*/
//第一个版本
// function binary_search(list, item) {
//   let start = 0;
//   let end = list.length - 1;
//   function binary() {
//     if (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       let guess = list[mid];
//       console.log(mid);
//       console.log(guess);
//       if (guess === item) {
//         console.log("----------");
//         console.log(mid);
//       } else if (guess > item) {
//         //   } else if (guess < item) {  //反向用
//         end = mid - 1;
//         binary();
//       } else {
//         start = mid + 1;
//         binary();
//       }
//       console.log(null);
//     }
//   }
//   binary();
// }
// // let myList = [9, 7, 5, 3, 1];  //反向用
// let myList = [1, 3, 5, 7, 9];
// console.time("timer");
// binary_search(myList, 3);
// console.timeEnd("timer");
var searchInsert = function(list, item) {
  
  let start = 0;
  let end=list.length-1;
  let mid=null;
      while (start<= end){
          mid=Math.floor((start+end)/2);
          var guess =list[mid];
          if(guess===item){
              console.log(mid);
              return mid;
          }else if(guess>item){
              end = mid-1;
          }else{
              start =mid+1;
          }
      }
      console.log(end+1);
     return end+1;

};

// let myList = [9, 7, 5, 3, 1];  //反向用
let myList = [1, 3, 5,6];
console.time("timer");
searchInsert(myList, 2);
console.timeEnd("timer");