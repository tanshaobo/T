"use strict";
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
 * 传参,
 */
var f4 = function (name, age) {
    return "" + name + (age < 18 ? '未成年' : '成年了');
};
console.log(f4('张三', 2));
/**
 * 可选参数 必须位于所有参数最后
 */
var f5 = function (name, age) {
    return "" + (name + (age ? name + age : name));
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
function f8(str) {
    return typeof str === 'string' ? str : '现在' + str;
}
console.log(f8(34));
