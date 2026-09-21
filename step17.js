let describeAge = (Age) => {

    let m = "minor"
    let a = "adult" 

    if (Age >= 18) {
        return `You are an ${a}`
    } else {
        return `You are a ${m}`
    }
}

console.log(describeAge(20))