/**
 * 要是x是那么x后面的全是
 * 从1开始
 * log2N
 */
let low = 1
while (low < n) {
    let mid = Math.floor((n + low) / 2)
    //low = mid + 1             
    ifItIs(mid) ? n = mid : low = mid + 1
}