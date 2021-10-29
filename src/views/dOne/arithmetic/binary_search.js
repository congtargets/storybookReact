/*
list必须是有序数组
*/
function binary_search(list, item) {
  let start = 0;
  let end = list.length - 1;
  function binary() {
    if (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let guess = list[mid];
      console.log(mid);
      console.log(guess);
      if (guess === item) {
        console.log("----------");
        console.log(mid);
      } else if (guess > item) {
        //   } else if (guess < item) {  //反向用
        end = mid - 1;
        binary();
      } else {
        start = mid + 1;
        binary();
      }
      console.log(null);
    }
  }
  binary();
}
// let myList = [9, 7, 5, 3, 1];  //反向用
let myList = [1, 3, 5, 7, 9];

binary_search(myList, 3);
