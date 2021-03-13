function angryProfessor(k, a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 1) {
            sum++
        }
    }
    if (k <= sum) {
        return "NO"
    }
    else {
        return "YES"
    }

}