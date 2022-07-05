/**
 * es5 构造函数 实现类
 */

// 1、基础类
// function Person(){
//   this.name = '张三'
//   this.age = 18
// }

// let p = new Person()
// console.log(p.name)

// 2、构造函数和原型链里面增加方法
// function Person(){
//   this.name = '张三' // 属性
//   this.age = 18
//   this.run = function(){
//     console.log(this.name + '在运动')
//   }
// }

// // 原型链上的属性会被多个实例共享
// Person.prototype.sex= '男'
// Person.prototype.work= function(){
//   console.log(this.name + '在工作')
// }
// let p = new Person()
// p.run()
// p.work()

// 3、类里面的静态方法
// function Person(){
//   this.name = '张三' // 属性
//   this.age = 18
//   this.run = function(){
//     console.log(this.name + '在运动')
//   }
// }
// Person.getInfo = function(){
//   console.log('是静态方法')
// }
// // 原型链上的属性会被多个实例共享
// Person.prototype.sex= '男'
// Person.prototype.work= function(){
//   console.log(this.name + '在工作')
// }
// // 调用静态方法
// Person.getInfo()

// 4、es5 继承 对象冒充 | 伪造对象继承
// function Person(){
//   this.name = '张三' // 属性
//   this.age = 18
//   this.run = function(){
//     console.log(this.name + '在运动')
//   }
// }
// Person.prototype.sex= '男'
// Person.prototype.work= function(){
//   console.log(this.name + '在工作')
// }

// function Man(){
//   Person.call(this)  // 对象冒充实现继承
// }

// let m = new Man()
// console.dir(m)
// m.run() // 对象冒充可以继承 构造函数 里面的属性和方法
// m.work() // 对象冒充不可以继承 原型链 上面的属性和方法

// 5、es5 继承 原型链实现继承
// function Person(){
//   this.name = '张三' // 属性
//   this.age = 18
//   this.run = function(){
//     console.log(this.name + '在运动')
//   }
// }
// Person.prototype.sex= '男'
// Person.prototype.work= function(){
//   console.log(this.name + '在工作')
// }

// function Man(){
  
// }

// Man.prototype = new Person() // 原型链继承可继承 构造函数 里面的属性和方法，也可以继承 原型链 上面的属性和方法
// let m = new Man()
// console.dir(m)
// m.run() 
// m.work() 

// // 6、es5 继承 原型链实现继承的不足 
// function Person(name, age){
//   this.name = name // 属性
//   this.age = age
//   this.run = function(){
//     console.log(this.name + '在运动')
//   }
// }
// Person.prototype.sex= '男'
// Person.prototype.work= function(){
//   console.log(this.name + '在工作')
// }

// let p = new Person('李四', 20)
// p.run()

// function Man(name, age){}

// Man.prototype = new Person() 

// let m = new Man('王五', 20) // 实例化子类无法给父类传参

// m.run() // 此时输出undefined在运动

// 7、es5 继承 原型链+构造函数 组合继承
// function Person(name, age){
//   this.name = name // 属性
//   this.age = age
//   this.run = function(){
//     console.log(this.name + '在运动')
//   }
// }
// Person.prototype.sex= '男'
// Person.prototype.work= function(){
//   console.log(this.name + '在工作')
// }

// let p = new Person('李四', 20)
// p.run()

// function Man(name, age){
//   Person.call(this, name, age) // 对象冒充 实例化子类给父类传参
// }

// Man.prototype = new Person() 

// let m = new Man('王五', 20) 

// m.run() 
// m.work()

// 8 原型链+构造函数 组合继承 避免构造函数内属性和方法重复继承
// function Person(name, age){
//   this.name = name // 属性
//   this.age = age
//   this.run = function(){
//     console.log(this.name + '在运动')
//   }
// }
// Person.prototype.sex= '男'
// Person.prototype.work= function(){
//   console.log(this.name + '在工作')
// }

// let p = new Person('李四', 20)
// p.run()

// function Man(name, age){
//   Person.call(this, name, age) // 对象冒充 实例化子类给父类传参
// }

// Man.prototype = Person.prototype 

// let m = new Man('王五', 20) 

// m.run() 
// m.work()