/*
1920. Build Array from Permutation

Given a zero-based permutation nums (0-indexed), 
build an array ans of the same length where 
ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive)
*/ 

const buildArray = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]]);
    }

    return ans;
};

let nums = [0,2,1,5,3,4];

buildArray(nums); // [0,1,2,4,5,3]


/*

1512. Number of Good Pairs

Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/

const numIdenticalPairs = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                count++;
            }
        }
    }

    return count;
};

/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

const twoSum = function(nums, target) {
    let result = [];
    nums.map((item, index) => {
        for (let i = index + 1; i < nums.length; i++) {
            if (item + nums[i] === target) {
                result.push(index, i);
                break;
            }
        }
    })
    return result;
};


/*
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 

The remaining elements of nums are not important as well as the size of nums.

Return k.
*/