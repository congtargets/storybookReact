var twoSum = function(nums, target) {
    let map =new Map();
    let arr=new Array(2);
    for(let i=0;i<nums.length;i++){
        if(map.get(target-nums[i])===undefined){
            map.set(nums[i],i);
        }else{
            arr=[map.get(target-nums[i]),i];
            return arr;
        }
    }
    //   return new Error("空");
};

let nums =  [3,2,4];
let target = 6;
twoSum(nums,target)