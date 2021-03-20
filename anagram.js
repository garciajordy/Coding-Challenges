function anagram(s) {
    
    if (s.length % 2 == 1) {
        return -1
    }

    let str1 = s.substring(0, (s.length / 2)).split("")
    let str2 = s.substring((s.length / 2), s.length).split("")
    let array = []
    let index = 0
    let len = str2.length
    for (let i = 0; i < len; i++) {
        index = str2.indexOf(str1[i])
        if (index != -1) {
            console.log(index)
            array += str2.splice(index, 1)
        }
    }
    return len - array.length
}