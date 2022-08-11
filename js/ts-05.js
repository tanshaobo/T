"use strict";
/**
 * 接口 定义标准
 *
 * 面向对象编程中，作为一种规范的定义 定义行为及动作的规范
 *
 * 不关心内部方法实现细节 只规定必须提供的某些方法
 *
 * 包含 属性类型接口 函数类型接口  可索引接口  类类型接口 接口扩展
 *
 *
 */
function printName(name) {
    console.log('name是' + name.firstName + '--' + name.secondName);
}
var tempObj = {
    firstName: '张',
    secondName: '三',
    age: 1
};
printName(tempObj);
function printInfo(info) {
    console.log('name是' + info.firstName + '--' + info.secondName + info.age);
}
printInfo(tempObj);
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('success');
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
var ajaxData = {
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
};
ajax(ajaxData);
var md5 = function (key, value) {
    return "".concat(key).concat(value);
};
console.log(md5('name', '张三'));
var sha1 = function (key, value) {
    return "".concat(key, "---").concat(value);
};
console.log(sha1('name', '李四'));
