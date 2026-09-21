function safeDivide(a, b) {
    if (b == 0) {
        return "Cannot divide by zero"
    }
    return a / b
}

console.log(safeDivide(10, 0))