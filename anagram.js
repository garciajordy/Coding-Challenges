function anagram(s) {
    let str1
    let str2
    let sum = 0
    if (s.length % 2 == 0) {
        str1 = s.substring(0, (s.length / 2))
        str2 = s.substring((s.length / 2), s.length)

    }
    else if (s.length % 2 == 1) {
        str1 = s.substring(0, parseInt(s.length / 2))
        str2 = s.substring(parseInt(s.length / 2), s.length)
        sum -= 1
        return sum

    }
    let array = []
    let index
    str1 = str1.split("")
    str2 = str2.split("")
    let len = str2.length
    for (let i = 0; i < len; i++) {

        index = str1[i]
        index = str2.indexOf(index)
        if (index != -1) {
            console.log(index)
            array += str2.splice(index, 1)
        }
    }

    return len - array.length
}