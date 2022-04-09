// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // declare array representing the first time when the leaves appear at there position
    let B = [];
    for (let i = 0; i < X; i++) {
        B[i] = -1;
    }
    
    // loop for array A and save the timing of there position at first time
    let n = A.length;
    for (let i = 0; i < n; i++) {
        if (B[A[i] - 1] == -1) {
            B[A[i] - 1] = i;
        }
    }
    
    let r = 0;
    for (let i in B) {
        let b = B[i];
        if (b > r) {
            r = b;
        } else if (b == -1) {
            return -1;
        }
    }
    return r;
}
