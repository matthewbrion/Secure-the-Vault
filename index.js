
let code1 = 7 + 3
console.log(code1)
code2 = 180 / 2 - 50
console.log(code2)
const code3 = 17 % 9 + 31
console.log(code3)

const message = "The vault has been secured.  The combination is: "
console.log(message)

var codeA = '"' + code1 + "-" + code2 + "-" + code3 + '"'
console.log(codeA)

var codeB = `"${code1}-${code2}-${code3}"`
console.log(codeB)

console.log(message, codeA, codeB)