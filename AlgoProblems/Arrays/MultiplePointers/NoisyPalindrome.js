//=========================================================
//You are given a string s containing lowercase and uppercase alphabet characters as well as digits from "0" to "9". Return whether s is a palindrome if we only consider the lowercase alphabet characters
//=========================================================

//Steps
//1. Mutate the string by removing all the numeric values (use ascii)
//2. Set up a while loop, with a left & right pointer and check if there is a match

function noisyPalindrome(str) {
    let arr = str.split("")
    let newArray = arr.filter(ele => ele.charCodeAt() >= 97 && ele.charCodeAt() <= 122)
    let left = 0;
    let right = newArray.length - 1;

    console.log(newArray)
    
    while (left < right) {
        if (newArray[left] === newArray[right]) {
            left++
            right--
        }
        else {
            return false
        }
    }
    return true
}

console.log(noisyPalindrome("a92bcbXa"))


