function repeatedString(s, n) {
    let remain = n % s.length
    let sum = 0
    if (remain != 0 && s.substring(0, remain).match(/a/gi) != null) {
        sum = s.substring(0, remain).match(/a/gi).length
    }
    let subStr = s.match(/a/gi)
    if (subStr != null) {
        subStr = subStr.length
        sum += (subStr * parseInt(n / s.length))
        return sum
    }
    else {
        return 0
    }
}