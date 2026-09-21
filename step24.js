let n = 1;

let counter = () => {
    return  n++;
}



function makeCounter() {
console.log(counter(n))
console.log(counter(n))
console.log(counter(n))

}

makeCounter()