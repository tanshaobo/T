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