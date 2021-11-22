// 53. 最大子序和
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：
// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [0]
// 输出：0
// 示例 4：

// 输入：nums = [-1]
// 输出：-1
// 示例 5：

// 输入：nums = [-100000]
// 输出：-100000
 

// 提示：

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
 

// 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max=null;
    let sum=null;
    let mmmax=Math.max(...nums);
    if(mmmax<=0){
        return mmmax;
    }
    for(let i=0;i<nums.length;i++){
        max=max+nums[i];
        if(max>0){
            // console.log(sum);
            if(max>sum||sum===null){
                sum=max;
            }
          
        }else{
            max=0;
        }
    }
         return sum;
};
// let nums = [-2,1,-3,4,-1,2,1,-5,4]
let nums = [0]
maxSubArray(nums);