function hurdleRace(k, height) {
    let array = height.sort(function (a, b) { return a - b }).reverse()
    console.log(array)
    let sum = array[0] - k
    console.log(sum)
    if (sum < 0) {
        return 0
    }
    else {
        return sum
    }


}