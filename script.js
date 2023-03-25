function fibs(n) {
    if (n == 1) {
        return [0];
    }
    if (n == 2) {
        return [0, 1];
    }
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
        let next = result[i-2] + result[i-1];
        result.push(next);
    }
    return result;
}

console.log(fibs(8));

function fibsRec(n) {
    if (n == 1) {
        return [0];
    }
    if (n == 2) {
        return [0, 1];
    }
    let arr = fibsRec(n - 1);
    let next = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(next);
    return arr;
}

console.log(fibsRec(8));