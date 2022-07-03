"use strict";
// 基础类型 字符串
var hello = 'hello';
var age = 88;
var sentence = "".concat(hello, ",good night,\nI'll be ").concat(age + 1, " years old next month");
// 基础类型 数字
var n = 1;
var f_n = 1.2;
var hex_n = 0xf00;
var binary_n = 2;
var octal_n = 55;
// 基础类型  布尔值
var b = false;
// 引用类型 数组
var list = [1, 2, 3];
var lists = [4, 5, 6];
var lista = [1, 'a', false, null, undefined, [1, 2], { a: 1 }, function () { console.log(1); }];
// 元祖 Tuple 指定长度以及每项类型的数组
var listb;
listb = ['feh', 1];
console.log(listb[0].substr(1));
console.log(listb[1].toFixed(1));
/**
 * 设置超出元祖长度的元素时，编辑器报错，此处与文档不符，但是该代码仍可被解析
 * listb[2]= 2
*/
// 枚举 enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = -1] = "Green";
    Color[Color["Blue"] = Math.random()] = "Blue";
    Color[Color["Dark"] = 1] = "Dark";
    Color[Color["Pink"] = 7] = "Pink";
    Color[Color["Black"] = parseInt('1.0')] = "Black";
})(Color || (Color = {}));
var enum_a = Color.Green;
var enum_b = Color[1];
console.log(enum_a, enum_b);
console.dir(Color);
var Word;
(function (Word) {
    Word[Word["en"] = 0] = "en";
    Word[Word["cn"] = 1] = "cn";
    Word[Word["\u8D35"] = 2] = "\u8D35";
    Word[Word["%\uFFE5"] = 3] = "%\uFFE5";
})(Word || (Word = {}));
var eWord = Word["%￥"];
// any 任意类型
var any_a = 1;
any_a.toFixed(2);
any_a = 'hello';
any_a.slice(1);
any_a = [2, 4, 6];
any_a.pop();
any_a = { a: 1 };
delete any_a.a;
// void 无类型
var void_a = undefined;
/**
 * 此处与文档不符，设置成null后会报类型检测错误
 * let void_b:void = null
*/
// null undefined
/**
 * 只能赋值为null或undefined 可为任意类型的子类型
*/
// never
/**
 * 永不存在的类型 排查错误使用
*/
// Object 不是原始类型的其他类型 
// declare function create(o:object|null): void;
// console.log(create)
// create({a:0})
// 类型断言
/**
 * 指定类型 忽略类型检测
*/
var v_length = hello.length;
var v_lengths = hello.length;
console.log(v_length, v_lengths);
// export default{
//     v_lengths
// }
