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
/**
 * 类继承
 *  */
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
        var _this = _super.call(this, name) || this;
        _this.height = 165;
        return _this;
    }
    supPerson.print = function () {
        console.log(supPerson.attr); // 静态方法中调用静态属性与在外部一致，但无法调用实例属性和实例方法 
        console.log(this);
        return '这是静态方法';
    };
    supPerson.attr = '这是静态属性';
    return supPerson;
}(person));
console.log(supPerson.attr);
console.log(supPerson.print());
/**
 * 多态  父类定义了方法 但是父类不去实现 由子类去实现不同方法
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('看看父类定义的方法有没有被执行');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃骨头';
    };
    return Dog;
}(Animal));
var d = new Dog('旺财');
console.log(d.eat());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃骨头渣';
    };
    return Cat;
}(Animal));
var c = new Cat('来福');
console.log(c.eat());
/**
 * 抽象类 抽象方法
 *
 * 抽象类是提供其他类继承的基类，不能直接被实例化，主要是用来提供标准
 *
 * 用abstract关键字定义，抽象类中的抽象方法不包含具体实现 但该方法必须在派生类中实现
 *
 * 抽象方法只能放在抽象类中
 *
 */
var Base = /** @class */ (function () {
    function Base(name) {
        this.name = name;
    }
    return Base;
}());
var subBase = /** @class */ (function (_super) {
    __extends(subBase, _super);
    function subBase(name) {
        return _super.call(this, name) || this;
    }
    subBase.prototype.getName = function () {
        return this.name + 'subBase';
    };
    return subBase;
}(Base));
var supBase = /** @class */ (function (_super) {
    __extends(supBase, _super);
    function supBase(name) {
        return _super.call(this, name) || this;
    }
    supBase.prototype.getName = function () {
        return this.name + 'supBase';
    };
    return supBase;
}(Base));
