function hasTargetSum(array, target) {
  // Write your algorithm here
  let numSet = new Set();
  
  for (let num of array) {
    if (numSet.has(target - num)) {
      return true;
    }
    numSet.add(num);
  }
  
  return false;
}



/* 
  Write the Big O time complexity of your function here
  The time complexity of the function is determined by the length of the input array.
The hasTargetSum function has a linear time complexity O(n)

*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target) {
   variable numSet = the new Set();
  
  loop through num of array {
    if (numSet.has(target - num)) {
      return true;
    }
    numSet.add(num);
  }
  
  return false;
}

*/

/*
  Add written explanation of your solution here
   Add written explanation of your solution here
  The function looks for a pair of numbers in the input array that add up to the target number.
  It does this by keeping track of the numbers it has seen so far in a set.
  For each number in the array, the function checks if the difference between the target and that number is already in the set.
  If it is, then there exists a pair of numbers in the array that add up to the target, so the function returns true.
  If the loop completes without finding a pair of numbers that add up to the target, the function returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
