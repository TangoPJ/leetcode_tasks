/*
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

  Example 1:
    Input: strs = ["flower", "flow", "flight"]
    Output: "fl"

  Example 2:
    Input: strs = ["dog", "racecar", "car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

  Constraints:
    * 1 <= strs.length <= 200
    * 0 <= strs[i].length <= 200
    * strs[i] consists of only lowercase English letters.
 
  Testcases:
    longestCommonPrefix(["flower","flow","fli"]);
    longestCommonPrefix(["flower","flow","fli"]);
*/

/**
 * @param {string[]} strings
 * @return {string}
 */
 const longestCommonPrefix = (strings) => {
  if (strings.length === 1) {
      return strings[0];
  }

  const sortedStrings = strings.sort();
  const first = sortedStrings.at(0).split('');
  const last = sortedStrings.at(-1);
  let result = '';

  first.every((letter, index) => {
    if (letter === last[index]) {
      return result += letter;
    }
  });

  return result;
};
