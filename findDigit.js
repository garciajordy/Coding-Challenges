function findDigits(n) {
    let string = n.toString()
    let sum = 0
    for (let i = 0; i < string.length; i++) {
        if (n % parseInt(string[i]) == 0) {
            sum++
            console.log(sum)
        }
    }
    return sum
}
