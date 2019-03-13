





'use strict'


/**
 * 非原地旋转
 * 但可用非方阵
 */
var a = [
    [1, 0],
    [1, 0],
    [1, 1]
]

let forA=[],
    col=a[0].length,
    row=a.length
for(let i=0;i<col;i++){
    let tmp=[]
    for(let j=0;j<row;j++){
        tmp.push(a[col-1-j][i])
    }
    forA.push(tmp)
}
a=[...forA]
