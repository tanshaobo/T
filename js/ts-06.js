"use strict";
/**
 * 可索引接口 对数组、对象的约束
 */
var arrs = ['a', 's'];
console.log(arrs);
var objs = {
    name: '张三'
};
console.log(objs);
var Dogs = /** @class */ (function () {
    function Dogs(name) {
        this.name = name;
    }
    Dogs.prototype.eat = function () {
        console.log("".concat(this.name, "\u5403\u5565"));
    };
    return Dogs;
}());
