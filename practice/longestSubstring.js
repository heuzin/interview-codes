// var lengthOfLongestSubstring = function(s) {
//     let cache = {}

//     let s_array = Array.from(s)

//     for (let n = 0; n < s_array.length -1; n++) {
//         if (!cache.hasOwnProperty(s_array[n])) {
//             cache[s_array[n]] = n
//         }
//     }
//     console.log(Object.keys(cache).length)
// };

const lengthOfLongestSubstring = function(s) {
    let currentSubstring = ''
    let resultSubstring = ''
    let currentIndex = 0;
    for (let n = 0; n < s.length; n++) {
        if(currentSubstring.includes(s[n])) {
            if (currentSubstring.length > resultSubstring.length) {
                resultSubstring = currentSubstring
            }

            currentSubstring = ''
            n = currentIndex++;
        } else {
            currentSubstring = currentSubstring.concat(s[n])
        }
    }
    if(currentSubstring.length > resultSubstring.length) {
        resultSubstring = currentSubstring
    }
    console.log(resultSubstring)
}

lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')