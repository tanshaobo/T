"use strict";
/**
 *  布尔类型  boolean
 */
var b1 = true;
var b2 = false;
/**
 * 数字类型 number
 */
var n1 = 1;
var n2 = 0.2;
var n3 = -Math.PI;
/**
 * 字符串 string
 */
var s1 = 'this is typescript';
var s2 = 12 + '';
var s3 = [].toString();
/**
 * 数组 array
 */
// 法一
var a1 = [1, 2, 3];
var a2 = [1, 'a', [2], false, null, NaN, undefined, function () { console.log(1); }, { a: 2 }];
// 法二
var a3 = ['a', 'hello', 'whosyourdaddy'];
var a4 = [0 == 0, !1, false];
/**
 * 元祖 tuple
 */
var t1 = [1, '1'];
var t2 = [false, [1, 2, 2, 4]];
/**
 * 枚举 enum
 */
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["fail"] = 2] = "fail";
    Flag[Flag["error"] = 8] = "error";
    Flag[Flag["warning"] = 9] = "warning";
})(Flag || (Flag = {}));
console.log(Flag);
var e1 = Flag.success;
var e2 = Flag.warning;
console.log(e1, e2);
/**
 * 任意类型 any
 */
var an1 = { a: 1 };
an1 = 'greedisgood';
an1 = 9527;
an1 = '剑光如我，斩尽芜杂';
/**
 * null undefined
 * 除never外的类型的子类型
 */
var nu1;
var u1;
/**
 * void 无返回值类型
 */
var f1 = function () {
    console.log(1);
};
/**
 * never 从不出现的类型
 */
var ne1;
ne1 = (function () {
    throw new Error('靠，又错了');
})();
