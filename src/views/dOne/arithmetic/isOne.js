
// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

// 示例 1：

// 输入: s = "leetcode"
// 输出: false 
// 示例 2：

// 输入: s = "abc"
// 输出: true
// 限制：

// 0 <= len(s) <= 100
// 如果你不使用额外的数据结构，会很加分。
// 通过次数96,008提交次数133,753
// 请问您在哪类招聘中遇到此题？

var findMedianSortedArrays = function(nums1, nums2) {
    let a=nums1.length;
    let b=nums2.length;
    let c=a+b;
    if(c===1){
        if(a===1){
            return nums1[0];
        }else{
            return nums2[0];
        }
    }else if(c>1){//&&
        let d=new Array(c); 
        d=[...nums1,...nums2];
        d.sort()
        if(c%2!==0){
            return d[Math.floor(c/2)];
        }else{
          return (d[Math.floor(c/2)]+d[Math.floor(c/2)-1])/2;
        }
    }
    return 0;
};
findMedianSortedArrays([],[1]);