function pickingNumbers(a) {
    if (a.length == 0) {
        return 0
    }
    a = a.sort(function (a, b) { return a - b })
    let array1 = [a[0]]
    let array2 = []
    console.log(a)
    console.log(array1)
    for (let i = 1; i < a.length; i++) {
        console.log("iteration " + i + " array before true/false " + array1)
        if ((array1[0] - a[i] <= 1) && (a[i] - array1[0] <= 1)) {
            array1.push(a[i])
            console.log("iteration " + i + " array1 when true" + array1)
        }
        else {
            if (array2.length < array1.length) {
                array2 = array1;
            }
            console.log("iteration " + i + " array2 when false " + array2)
            console.log("iteration " + i + " new " + a[i])
            array1 = [a[i]]
            console.log("iteration " + i + " array1 when false " + array1)


        }
    }
    if (array1.length < array2.length) {
        console.log(array2)
        return array2.length

    }
    else {
        console.log(array1)
        return array1.length
    }
}