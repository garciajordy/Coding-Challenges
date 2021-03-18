
function encryption(s) {
    let string1 = s.replace(/\W+/g, "").replace(/_/g, "").split("")
    let len = string1.length
    let newstr = ""
    let string2 = string1

    console.log(string2)
    let columns = 1
    if (len < 3) {
        return s
    }
    else if (len <= 4) {
        columns = 2
    }
    else if (len <= 9) {
        columns = 3
    }
    else if (len <= 16) {
        columns = 4
    }
    else if (len <= 25) {
        columns = 5
    }
    else if (len <= 36) {
        columns = 6
    }
    else if (len <= 49) {
        columns = 7
    }
    else if (len <= 64) {
        columns = 8
    }
    else if (len <= 91) {
        columns = 9
    }
    else if (len <= 100) {
        columns = 10
    }
    else if (len <= 121) {
        columns = 11
    }
    for (let i = 0; i < columns; i++) {

        for (let t = 0; t < columns; t++) {
            if (string2[t * columns] != undefined) {
                newstr += string2[t * columns]
            }

        }
        string2.shift()
        newstr += " "
    }

    return newstr

}