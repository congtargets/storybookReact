// 面试题 01.02. 判定是否互为字符重排
// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

// 示例 1：

// 输入: s1 = "abc", s2 = "bca"
// 输出: true 
// 示例 2：

// 输入: s1 = "abc", s2 = "bad"
// 输出: false
// 说明：

// 0 <= len(s1) <= 100
// 0 <= len(s2) <= 100
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
  //没有相同的字符串
 // 长度相等
var CheckPermutation = function(s1, s2) {
    let a=s1.split('');
    let b=s2.split('');
    let al=a.length;
    if(al!==b.length){
        return false;
    }
    let map =new Map();
    let c=[...a,...b];
    let d=0;
    for (let i = 0; i < a.length; i++){
        let ju = map.get(a[i])
        if (ju === 2) {
            
            return false;
        }
        if(ju===undefined){
            map.set(a[i],1);
        } 
        // else {
        //     map.set(a[i],ju+1);
        //     d++;
        // }
    }
    for (let i = 0; i < b.length; i++){
        let ju = map.get(b[i])
        if (ju === 2) {
            
            return false;
        }
        if(ju===undefined){
            map.set(b[i],1);
        } else {
            map.set(b[i],ju+1);
            d++;
        }
    }
    console.log(al);
    console.log(d);
    if(d!==al){
        return false;
    }else{
        return true;
    }
};

let s1 = "aa";
let s2 = "bb";
CheckPermutation(s1, s2);