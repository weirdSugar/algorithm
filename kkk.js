function quickSort(arr) {
    const pivot = arr[0];
    const left = [];
    const right = [];

    if (arr.length < 2) { return arr; }

    for (let i = 1, len = arr.length; i < len; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quickSort(left).concat([pivot], quickSort(right));
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(quickSort(arr));
/**
 * 二分
    不稳定
    O(n²) time, 但是通常都是 O(n·log(n)) time (或者更快)
    O(log(n)) extra space
 */





function mergeSort2(arr) {
    const len = arr.length;

    if (len < 2) { return arr; }

    const mid = Math.floor(len / 2);
    const left = arr.splice(0, mid);
    const right = arr;

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];

    while (left.length > 0 && right.length > 0) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }

    return result.concat(left, right);
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(mergeSort2(arr));

/**
 稳定 (在 O(n·log(n)) 时间复杂度的排序算法中，归并排序是唯一稳定的)
时间复杂度 O(n·log(n))
对于数组需要 Θ(n) 的额外空间 注意：归并排序需要额外的空间，这是它的不完美之处
对于链表需要 O(log(n)) 的额外空间，所以归并排序非常适合列表的排序
 */