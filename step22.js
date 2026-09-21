// outer block
let message = "The farest enclosing value is used"

function inner() {
    // inner block
    let message = "The closest enclosing value is used"
    if (true) {
     // innermost block
     console.log(message)
    }
}

inner()
// the value from the inner block will be used becouse its the closest one.