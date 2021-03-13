function equalizeArray(arr) {
    if (arr.length == 0) {
        return 0
    }
    console.log(arr)
    arr = arr.sort(function (a, b) { return a - b })
    let array1 = [arr[0]]
    let array2 = []
    console.log(arr)
    console.log(array1)
    for (let i = 1; i < arr.length; i++) {
        console.log("iteration " + i + " array before true/false " + array1)
        if ((array1[0] - arr[i] == 0) && (arr[i] - array1[0] == 0)) {
            array1.push(arr[i])
            console.log("iteration " + i + " array1 when true" + array1)
        }
        else {
            if (array2.length < array1.length) {
                array2 = array1;
            }
            console.log("iteration " + i + " array2 when false " + array2)
            console.log("iteration " + i + " new " + arr[i])
            array1 = [arr[i]]
            console.log("iteration " + i + " array1 when false " + array1)


        }
    }
    if (array1.length < array2.length) {
        console.log(array2)
        return arr.length - array2.length

    }
    else {
        console.log(array1)
        return arr.length - array1.length
    }

}