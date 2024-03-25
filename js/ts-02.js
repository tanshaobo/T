"use strict";
/*
 * @Author: tanshaobo
 * @Date: 2022-07-02 21:56:01
 * @LastEditors: tanshaobo
 * @LastEditTime: 2024-03-26 00:17:01
 * @Description: ts中的函数
 * @FilePath: \T\ts\ts-02.ts
 */
/**
 * 声明函数、匿名函数
 */
function f2() {
    console.log(1);
}
var f3 = function () {
    return 1;
};
/**
 * 传参
 */
var f4 = function (name, age) {
    return "".concat(name).concat(age < 18 ? '未成年' : '成年了');
};
console.log(f4('张三', 2));
/**
 * 可选参数 必须位于所有参数最后
 */
var f5 = function (name, age) {
    return "".concat(name + (age ? name + age : name));
};
console.log(f5('李四', 3), f5('王五'));
/**
 * 默认参数
 */
var f6 = function (num) {
    if (num === void 0) { num = 23; }
    console.log(num);
};
f6(), f6(82);
/**
 * 剩余参数
 */
var f7 = function () {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    return result.reduce(function (i, j) { return i += j; }, result[0]);
};
console.log(f7(1, 2, 3, 5, 6, 7, 8));
/**
 * 重载 函数同名，参数类型不同
 * 注：重载应该是想锁死函数处理功能几个重载，意味着至多几种处理结果 且每个重载必须有对应处理逻辑？
 * 该功能是真的废
 * */
console.log('为了保证上面的注释出现在对应的js文件中');
function f8(name, age) {
    return !age ? "\u6211\u662F".concat(name) : "\u4ECA\u5E74".concat(age, "\u5C81");
}
// console.log(f8(34)) // 错误 因为重载中没有只传数字的形式
