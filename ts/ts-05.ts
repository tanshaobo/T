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

/**
 * 属性接口
 * 
 * 对json的约束 约束对象中必须包含接口定义字段，字段之间顺序不受影响
 */

interface FullName{
  firstName: string
  secondName: string
}

function printName(name: FullName):void{
  console.log('name是'+name.firstName + '--' + name.secondName)
}

let tempObj = { // 对象中必须包含接口字段，允许有其他字段
   firstName: '张',
  secondName: '三',
  age: 1
}

printName(tempObj)

interface FullInfo{ // 接口中可设置某个字段为可选字段 通过 ?
  firstName: string
  secondName: string
  age?: number
}

function printInfo(info: FullInfo):void{
  console.log('name是'+info.firstName + '--' + info.secondName + info.age)
}

printInfo(tempObj)

interface request{
  type: string
  url: string
  data?: string
  dataType: string
}

function ajax(config:request){
  var xhr = new XMLHttpRequest()

  xhr.open(config.type,config.url, true)

  xhr.send(config.data)

  xhr.onreadystatechange = function():void{
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log('success')

      if(config.dataType == 'json'){
        console.log(JSON.parse(xhr.responseText))
      }else{
        console.log(xhr.responseText)
      }
    }
  }
}

let ajaxData = {
  type: 'get',
  url: 'http://a.itying.com/api/productlist',
  dataType: 'json'
}

ajax(ajaxData)

/**
 * 函数类型接口
 * 
 * 对方法传入的参数以及返回值进行约束
 */

// 加密的函数类型接口

interface encrypt{
  (key:string, value: string): string
}

var md5:encrypt =function(key: string, value: string):string{
  return `${key}${value}`
}

console.log(md5('name', '张三'))

var sha1:encrypt = function(key, value){
  return `${key}---${value}`
}

console.log(sha1('name', '李四'))