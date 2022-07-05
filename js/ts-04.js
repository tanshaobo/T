"use strict";
/**
 * 修饰符
 * public 在类、子类、外部空间均可访问
 * protected  在类、子类可访问
 * private 在类中可访问
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, sex, age) {
        this.name = name;
        this.sex = sex || '男';
        this.age = age || 1;
    }
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.setName = function (name) {
        this.name = name || '张三';
    };
    return person;
}());
var p = new person('李四');
p.getName();
p.setName();
console.log(p.name);
// console.log(p.sex) 此处报错不可访问
// console.log(p.age) 此处报错不可访问
// 类继承
var subPerson = /** @class */ (function (_super) {
    __extends(subPerson, _super);
    function subPerson(name) {
        return _super.call(this, name) || this;
    }
    subPerson.prototype.getSex = function () {
        return this.sex; // 子类中可访问 protected
    };
    subPerson.prototype.getAge = function () {
        return 1;
        // return this.age  此处不可访问age
    };
    return subPerson;
}(person));
var s = new subPerson('王五');
console.log(s.getSex());
// 静态属性 静态方法 类似jquery中 $.ajax, 实例方法类似 $(dom).height
var supPerson = /** @class */ (function (_super) {
    __extends(supPerson, _super);
    function supPerson(name) {
        return _super.call(this, name) || this;
    }
    supPerson.print = function () {
        return '这是静态方法';
    };
    supPerson.attr = '这是静态属性';
    return supPerson;
}(person));
console.log(supPerson.attr);
console.log(supPerson.print());
