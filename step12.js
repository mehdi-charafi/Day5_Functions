function isEven(n) {
return (n % 2 == 0)
}


function describeParity(n) {
if (isEven(n) == true) {
    return "even"
} else { return "odd"}
}

console.log(describeParity(7))