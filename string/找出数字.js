
/**
 * 
 *  为空跳过 第一个非空的不是数字或正负返回0
 *  找出数字 范围 +-2^32 
 */


/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    //     const l=str.trim()
    //     let r=''
    //     if(/[^\+\-0-9]/.test(l[0]))return 0
    //     else r+=l[0]

    //     for (let i=1;i<l.length;i++){
    //         if(/[0-9]/.test(l[i])){
    //             r+=l[i]
    //         }else{
    //             break;
    //         }
    //     }
    //     const i = parseInt(r)
    let i = parseInt(str, 10);
    return i > 2147483647 ? 2147483647 : i < -2147483648 ? -2147483648 : i ? i : 0;
};