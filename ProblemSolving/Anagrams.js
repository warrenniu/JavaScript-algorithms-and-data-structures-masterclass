//=========================================================================================
// Given two strings, write a function to determine if the second string is an anagram of the first. An Anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
//=========================================================================================

//Do the strings match up? If not, automatically returns false and we're done
function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
//Initializing the object for both objects. Count the different elements in each array
let frequencyCounter1 = {}
let frequencyCounter2 = {}

// Loop over the first string (which is also an array) and check if the string value exists in string 2
 for (let val of str1) {
    // Add one to the frequency counter if it exists. If it does not, initialize it with 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 //Why the OR operator here?
}
for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
}
//Loop over the first frequencyCounter object (forIn loop) and check if key is in frequencyCounter2
for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
        return false
    }
    //Checking to see if the frequency of the keys match in both strings
    else if (frequencyCounter2[key] !== frequencyCounter1[key]) {
        return false
    }
}
//Loop over the second frequencyCounter object (forIn loop) and check if key is in frequencyCounter1
for (let key in frequencyCounter2) {
    if (!(key in frequencyCounter1)) {
        return false
    }
    // else if (frequencyCounter2[key] !== frequencyCounter1[key]) {
    //     return false
    // }
}

return true
}


console.log(anagram("aaz", "zza"))

// Colt Steele's version
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false
    }

    const lookup = {}

    for (let i=0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1
        }
    }
    return true
}