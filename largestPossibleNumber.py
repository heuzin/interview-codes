# Given a list of non-negative integers nums, arrange them such that they form the largest number.
# Note: The result may be very large, so you need to return a string instead of an integer.

from typing import List
def sort_nums(nums: List[str]) -> None:
    im_done = True
    for position, num in enumerate(nums[:-1]):
        if int(nums[position] + nums[position + 1]) < int(nums[position + 1] + nums[position]):
            im_done = False
            nums[position], nums[position + 1] = nums[position + 1], nums[position]
    if not im_done:
        sort_nums(nums)
def strip_leading_zeros(num: str) -> str:
    """
    "0000043" -> "43"
    "00" -> "0"
    """
    if len(num) in [0, 1]:
        return num
    if num[0] == "0":
        return strip_leading_zeros(num[1:])
    return num
class SpecialString(str):
    def __lt__(self, other):
        return int(self + other) < int(other + self)
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        if not nums:
            return '0'
        if len(nums) == 1:
            return str(nums[0])
        # we know from here on that nums is at least 2 elements
        nums = [str(num) for num in nums]
        sort_nums(nums)
        return strip_leading_zeros("".join(nums))
class BetterSolution:
    def largestNumber(self, nums: List[int]) -> str:
        if not nums:
            return '0'
        if len(nums) == 1:
            return str(nums[0])
        # we know from here on that nums is at least 2 elements
        nums = [str(num) for num in nums]
        return strip_leading_zeros("".join(sorted(nums, key=SpecialString, reverse=True)))