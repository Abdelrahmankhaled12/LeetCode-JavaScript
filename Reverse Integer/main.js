function reverse(x) {
    x > 0 ? x = +x.toString().split("").reverse().join("")  : x = -Math.abs(x).toString().split("").reverse().join("");
    if(x>(2**31 - 1) || x< -(2**31))
    {
        return 0
    }else {
        return x;
    }
    
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))
