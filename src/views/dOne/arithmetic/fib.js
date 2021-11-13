/**
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
给你 n ，请计算 F(n) 。
提示：

0 <= n <= 30
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fibonacci-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    let arr=new Array(30);
    if(n<2){
        return n;
    }else{
          for(let i=0;i<n;i++){
            if(i<2){
                arr[i]=i;
            }else{
                arr[i]=arr[i-1]+arr[i-2];
            }
        }
    }
  
    return arr[n-1]+arr[n-2];
};
// var fib = function(n) {
// if(n<2) return n;
// let a=0,b=1,c;
// while(n-->1){
//     c=a+b;
//     a=b;
//     b=c;
// }
// return b;
// };