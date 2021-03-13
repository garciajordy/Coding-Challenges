function fibonacciEven(t) {
    num1 = 1
    num2 = 2
    sum = 0
    for (let i = 0; num2 < t; i++) {
        if (num2 % 2 == 0) {
            sum += num2
        }
        num3 = num1 + num2
        num1 = num2
        num2 = num3
    }
    return sum
}