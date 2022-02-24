"use strict";
// 接口 设定变量集合的规则
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 1, label: 'helloworld' };
var myObjs = { size: 1, name: 'str' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "red", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: '#ff0', width: 23 });
console.log(mySquare);
var p1 = { x: 20, y: 1 };
//  p1.x = 2 //此处Error 只读属性不可被更改 
console.log(p1);
var a = [1, 2, 3];
var ra = a.map(function (i) { return ++i; });
console.log(ra[0]);
a = __spreadArray([], ra);
console.log(a);
a = ra;
console.log(a);
a = ra;
console.log(a);
a = JSON.parse(JSON.stringify(ra));
console.log(a);
// 额外属性检查绕开方式
var mySquare1 = createSquare({ colour: 'red', width: 34 });
var mySquare2 = createSquare({ colour: 'red' });
var mySquare3 = createSquare({});
console.log(mySquare1, mySquare2, mySquare3);
// 断言式
var mySquares = createSquare({ colour: 'blue', width: 20 });
// 转赋值
var testSquare = { colors: 'red', width: 100 };
var mySquaress = createSquare(testSquare);
var mySearch;
mySearch = function (source, subString) {
    var r = source.search(subString);
    return r > -1;
};
var mySearchs;
mySearchs = function (src, str) {
    var r = src.search(str);
    return r > -1;
};
var mySearcha;
mySearcha = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
