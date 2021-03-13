function libraryFine(d1, m1, y1, d2, m2, y2) {
    let sum = 0
    if (y1 - y2 != 0) {
        sum += (y1 - y2) * 10000
    }
    else if (m1 - m2 != 0) {
        sum += (m1 - m2) * 500
    }
    else if (d1 - d2 != 0) {
        sum += (d1 - d2) * 15
    }
    if (sum < 0) {
        return 0
    }
    else {
        return sum
    }
}