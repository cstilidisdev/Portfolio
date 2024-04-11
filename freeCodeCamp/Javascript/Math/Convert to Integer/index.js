function convertToInteger(str) {
    let result = parseInt(str)
    return parseInt(str, 2)
}

console.log(convertToInteger("10011"))