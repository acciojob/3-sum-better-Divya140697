function threeSum(nums, target) {
// write your code here
	if (nums.length < 3) {
    return null; // Not enough numbers to form a triplet
  }

  nums.sort((a, b) => a - b); // Sort the array in ascending order

  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        return sum; // Found the exact sum, return it
      }

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum; // Update closestSum if the current sum is closer to the target
      }

      if (sum < target) {
        left++; // Move the left pointer to increase the sum
      } else {
        right--; // Move the right pointer to decrease the sum
      }
    }
  }

  return closestSum;
  
}

module.exports = threeSum;
