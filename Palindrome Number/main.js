function isPalindrome(x) {
    return +(x.toString().split("").reverse().join("")) === x;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))