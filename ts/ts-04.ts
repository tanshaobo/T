/**
 * 修饰符  
 * public 在类、子类、外部空间均可访问
 * protected  在类、子类可访问
 * private 在类中可访问
 * */ 


 class person {
  public name: string
  protected sex: string
  private age: number
  constructor(name: string, sex?: string, age?: number){
      this.name = name
      this.sex = sex || '男'
      this.age = age || 1
  }
  getName(): string{
      return this.name
  }
  setName(name?: string): void{
      this.name = name || '张三'
  }
}


let p = new person('李四')
p.getName()
p.setName()

console.log(p.name)
// console.log(p.sex) 此处报错不可访问
// console.log(p.age) 此处报错不可访问

/**
 * 类继承
 *  */ 

class subPerson extends person{
  constructor(name: string){
      super(name)
  }
  getSex(): string{
      return this.sex // 子类中可访问 protected
  }
  getAge(): number{
      return 1
      // return this.age  此处不可访问age
  }
}

let s = new subPerson('王五')

console.log(s.getSex()) 

// 静态属性 静态方法 类似jquery中 $.ajax, 实例方法类似 $(dom).height

class supPerson extends person{
  public height:number = 165
  constructor(name:string){
    super(name)
  }
  static attr:string = '这是静态属性'
  static print():string{
    console.log(supPerson.attr) // 静态方法中调用静态属性与在外部一致，但无法调用实例属性和实例方法 
    console.log(this)
    return '这是静态方法'
  }
}

console.log(supPerson.attr)
console.log(supPerson.print())

/**
 * 多态  父类定义了方法 但是父类不去实现 由子类去实现不同方法
 */

class Animal {
  name:string
  constructor(name:string){
    this.name = name
  }

  eat():void{
    console.log('看看父类定义的方法有没有被执行')
  }
}

class Dog extends Animal{
  constructor(name:string){
    super(name)
  }
  eat():string{
    return this.name + '吃骨头'
  }
}

let d = new Dog('旺财')

console.log(d.eat())
class Cat extends Animal{
  constructor(name:string){
    super(name)
  }
  eat():string{
    return this.name + '吃骨头渣'
  }
}
let c = new Cat('来福')
console.log(c.eat())

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

abstract class Base {
  name: string
  constructor(name:string){
    this.name = name
  }
  abstract getName():any
}

class subBase extends Base{
  constructor(name:string){
    super(name)
  }
  getName() {
      return this.name + 'subBase'
  }
}

class supBase extends Base{
  constructor(name:string){
    super(name)
  }
  getName() {
      return this.name + 'supBase'
  }
}