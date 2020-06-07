/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {


  for (let i =0; i< numbers.length; i++){
    for (let j= i + 1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] === target){
        return [i + 1, j + 1]; 
      }
    }
  }

};

const targ = 10;
const arr = [1,2,4,6,19];
twoSum(arr,targ)
// should return [1,5];
// index + 1 - location is not zero based but rather order based

// solve as a dev and as a human 
// nested loop, compare the first with the second and so on, already ordered, if first number and next number add to target then return index + 1 in an array for both values 


// numbers = [2,7,11,15], target = 9