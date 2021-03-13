function pageCount(n, p) {
    if (((n - p == 1) && (n % 2 != 0)) || (p == 1) || (n == p)) {
        return 0
    }
    else if ((n - p == 1) && (n % 2 == 0)) {
        return 1
    }
    else {
        let sum1 = parseInt((n - p) / 2)
        let sum2 = parseInt(p / 2)
        if (sum1 <= sum2) {
            return sum1
        }
        else {
            return sum2
        }
    }
}