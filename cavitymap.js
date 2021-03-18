function cavityMap(grid) {
    let len = grid.length
    let result = []
    result.push(grid[0])
    for (let i = 1; i < len; i++) {
        let row = grid[i]
        row = row.split("")
        for (let t = 0; t < len; t++) {
            if ((grid[i][t] < grid[i][t + 1]) && (grid[i][t + 2] < grid[i][t + 1]) && (grid[i - 1][t + 1] < grid[i][t + 1]) && (grid[i + 1][t + 1] < grid[i][t + 1])) {
                row[t + 1] = "X"

            }
        }

        result.push(row.join(""))
    }
    return result

}
