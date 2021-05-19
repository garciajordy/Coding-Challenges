function beautifulTriplets(d, arr) {
    let sum = 0
  
    for (let i = 0; i < arr.length; i++) {

        num = (arr[i] + d)
        num1 = (arr[i] + (d * 2))

        if (string.includes(num)) {

            if (string.includes(num1)) {
                sum++

            }
        }

    }
    return sum
}