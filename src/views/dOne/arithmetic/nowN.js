
// 1137. 第 N 个泰波那契数
// 泰波那契序列 Tn 定义如下： 

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

 

// 示例 1：

// 输入：n = 4
// 输出：4
// 解释：
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// 示例 2：

// 输入：n = 25
// 输出：1389537
 

// 提示：

// 0 <= n <= 37
// 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。
// 通过次数90,350提交次数148,269
var tribonacci = function (n) {
    let sum=new Array(n+1);

    for(let i=0;i<=n;i++){
        if (i < 3) {
            // console.log(i);
            // console.log('---');
          if(i===0){
               sum[i]=0;
          }else{
               sum[i]=1;
          }
        console.log(sum)
        }else{
            sum[i] = sum[i - 1] + sum[i - 3] + sum[i - 2]
            console.log(sum[i - 1])
            console.log(sum[i - 2] )
            console.log(sum[i - 3])
            console.log(sum)
        }
    }
    
    console.log(sum[n])
     return sum[n];
};

tribonacci(4);