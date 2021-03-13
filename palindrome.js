function palindromeIndex(s) {
    let ind = s.length
    let num
    let arr = []
    let arr2 = []
    for (let i = 0; i < s.length; i++) {
        ind--

        if (s[i] !== s[ind]) {
            arr = s.split("")
            arr.splice(ind, 1)
            arr2 = s.split("")
            arr2.splice(i, 1)
            if (arr.join("") == arr.reverse().join("")) {
                return ind
                num = ind

            }
            else if (arr2.join("") == arr2.reverse().join("")) {
                return i
                num = i

            }
            else {
                return -1
            }

        }

    }
    if (num == undefined) {
        return -1
    }
    else {
        return num
    }
}