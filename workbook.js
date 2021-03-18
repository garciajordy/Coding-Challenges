function workbook(n, k, arr) {
    let page = 0
    let sum = 0
    let problems = 0
    let num = 0
    for (let i = 0; i < n; i++) {
        problems = arr[i]          
        page++                     
        let t = 1
        for (t = 1; t <= problems; t++) {
            num = t      
            if (num == page) {
                sum++      
            }
            if ((num % k == 0) && (num != problems)) {
                page++
            }

        }
    }
    return sum
}