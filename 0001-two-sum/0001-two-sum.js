/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let result=[];
    let map=new Map();

    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            result=[map.get(target-nums[i]),i];
            break;
        }
        map.set(nums[i],i);
    }
    return result;
};