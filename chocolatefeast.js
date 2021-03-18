function chocolateFeast(n, c, m) {
    let chocolat = parseInt(n / c)
    let wrappers = chocolat
    let extra = 0
    for (let i = 0; wrappers >= m; i++) {
        extra = parseInt(wrappers / m)
        wrappers -= (extra * m)
        chocolat += extra
        wrappers += extra
    }
    return chocolat
}