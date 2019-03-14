





'use strict'


/**
 * 非原地旋转
 * 但可用于非方阵
 */
// var a = [
//     [1, 0],
//     [1, 0],
//     [1, 1]
// ]
// let forA=[],
//     col=a[0].length,
//     row=a.length
// for(let i=0;i<col;i++){
//     let tmp=[]
//     for(let j=0;j<row;j++){
//         tmp.push(a[col-1-j][i])
//     }
//     forA.push(tmp)
// }
// a=[...forA]



/**
 * 转置再倒序
 */
var matrix = [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16]
    ];
for(let i=0;i<matrix.length;i++){
    for(let j=i+1;j<matrix.length;j++){
        let tmp=matrix[i][j]
        matrix[i][j]=matrix[j][i]
        matrix[j][i]=tmp
    }
}
for(let i=0;i<matrix.length;i++){
    matrix[i].reverse()
}
console.log(matrix)
