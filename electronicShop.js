function getMoneySpent(keyboards, drives, b) {
    let sum = 0
    let d = 0
    let k = 0
    let len = keyboards.length * drives.length
    for (let i = 0; i < len; i++) {
        console.log("Iteration: "+i+"\n keyboard: "+k+"\n drive: "+d)
        if ((drives[d] + keyboards[k] <= b) && (sum < drives[d] + keyboards[k])) {
            sum = drives[d] + keyboards[k]
        }
        if (keyboards.length >= drives.length) {
            d++
            if (d >= drives.length) {
                k++
                d = 0
            }
        }
        else {
            k++
            if (k >= keyboards.length) {
                d++
                k = 0
            }  
        }
    }
    if (sum == 0) {
        return -1
    }
    else {
        return sum
    }
}