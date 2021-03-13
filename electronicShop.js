function getMoneySpent(keyboards, drives, b) {
    let array = []
    for (let i = 0; i < keyboards.length; i++) {
        for (let d = 0; d < drives.length; d++) {
            if (drives[d] + keyboards[i] <= b) {
                array.push(drives[d] + keyboards[i])
            }
        }
    }
    array.sort(function (a, b) { return a - b }).reverse()
    if (array.length == 0) {
        return -1
    }
    else {
        return array[0]
    }
}
