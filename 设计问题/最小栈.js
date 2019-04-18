/**
设计一个支持 push，pop，top 操作，
并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。


示例:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 */



 /**
  * 问题在于pop的时候可能会把最小的pop出去
  * 所以搞一个专门的东西存theMinest不行
  * 解决方法是另外再用一个theMinArr来存放最小数栈
  * 
  * 为了不用老是this.arr[this.arr.lenth-1]
  * 改用队列表示所求栈  就变成了this.arr[0]
  */



var MinStack = function () {
    this.arr = []
    this.minarr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.arr.unshift(x)
    if (this.minarr.length === 0 || this.minarr[0] >= x) {
        this.minarr.unshift(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.arr.shift() === this.minarr[0]) {
        this.minarr.shift()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minarr[0]
};

