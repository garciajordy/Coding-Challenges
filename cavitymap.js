function cavityMap(grid) {
    let len = grid.length
    let result = []
    result.push(grid[0])
    let rown = 1
    let row = grid[rown]
    for (let i = 1; rown < len-1; i++) {
       
        if ((grid[rown - 1][i] < grid[rown][i]) && (grid[rown][i - 1] < grid[rown][i]) && (grid[rown][i + 1] < grid[rown][i]) && (grid[rown + 1][i] < grid[rown][i])) {
            row = row.split("")
            row[i] = "X"
            row = row.join("")
        }
        
        if (!grid[rown][i+1]) {
            result.push(row)
            console.log(i)
            i = 1
            rown++
            row = grid[rown]
        }
    }

    if (len > 1) {
        result.push(grid[len - 1])
    }
    return result
}