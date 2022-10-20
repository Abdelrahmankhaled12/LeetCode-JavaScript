function longestCommonPrefix(strs) {
    // check length element in array 
    let len = strs.length;
    // if len == 1 return same input 
    if(len == 1) {
        return strs.join("");
    }
    // if len > 1  steps solution 
    // [1] convert string in array to array by function split("")
    strs = strs.map(ele=>ele.split(""));

    //[2] check bigger element length
    let elementBigLength = strs.reduce((acc,ele)=>{
        return acc.length > ele.length ? acc.length : ele.length ;
    });

    // [3] use loop => check index => Each element is compared to the first element
    let count = 0; // 
    for(let i = 0 ; i<1 ; i++) { // the target is to repeat nested loop only once 
        for(let j = 0 ; j < elementBigLength ; j++) { // the target of this episode is the check each letter that matches the remaining elements with the first element
            let number = 0; // the variable is used to check if tht condition ( * ) is true that index = index increments by one
            for(let m = 0 ; m < len ; m++) {
                    if(strs[i][j] == strs[m][j]){ // ( * ) ^^
                        number++;
                    }
            }
            if(number == strs.length) { // if it is equal to the number of elements then this character is found in all elements
                count++;
            }else {
                break;
            }
        }
    }
    // [4] check final 
    if(count>0) { // if count > 0  => So there are repeated letters in all the elements
        return strs[0].slice(0,count).join(""); // return letters 
    }else {
        return ""; // if count = 0 => return empety string 
    } 
}
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["a"]))
