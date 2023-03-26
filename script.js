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

// merge sort
// input: an array
// return: a sorted array

// sort left half
// sort right half
// merge

function merge(leftArr, rightArr) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            result.push(leftArr[i]);
            i++;
        } else {
            result.push(rightArr[j]);
            j++;
        }
    }
    if (i < leftArr.length) {
        result = result.concat(leftArr.slice(i));
    }
    if (j < rightArr.length) {
        result = result.concat(rightArr.slice(j));
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    let m = Math.floor(arr.length / 2) - 1;
    let left = arr.slice(0, m + 1);
    let right = arr.slice(m + 1);
    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    return merge(leftSorted, rightSorted);
}

// testing the funtion
let numbers = [];
for (let i = 0; i < 10; i++) {
    let n = Math.floor(Math.random() * 100);
    numbers.push(n);
}

console.log(mergeSort(numbers));