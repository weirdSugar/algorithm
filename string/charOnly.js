/**
 * 给定一个字符串， 找到它的第一个不重复的字符， 并返回它的索引。 如果不存在， 则返回 - 1。

 案例:
     s = "leetcode"
     返回 0.

 s = "loveleetcode",
     返回 2.


 注意事项： 您可以假定该字符串只包含小写字母。
 */


// 用数组还是好
 /**
  * @param {string} s
  * @return {number}
  */
 var firstUniqChar = function (s) {
     // for(let i=0;i<s.length;i++){
     //     let o=s[i]
     //     if(s.indexOf(o)===s.lastIndexOf(o)){
     //         return i
     //     }
     // }
     // return -1
     // let arrMap=new Map()
     // for(let i=0;i<s.length;i++){
     //     let code=s[i]
     //     if(arrMap.has(code)){
     //         arrMap.set(code,-1)
     //     }else{
     //         arrMap.set(code,i)
     //     }
     // }
     // for(let val of arrMap.values()){
     //     if(val!==-1){
     //         return val
     //     }
     // }
     // return -1


         let words = Array(26).fill(-1), arr = [] 
           for (let i = 0; i < s.length; i++) {
             let code = s.charCodeAt(i) - 97
             if (words[code] === -1) {
               words[code] = i
               arr.push(code)
             } else {
               words[code] = -2
             }
           }
           for (let j = 0; j < arr.length; j++) {
             let index = arr[j]
             if (words[index] > -1) {
               return words[index]
             }
           }
         return -1
 };