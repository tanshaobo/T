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

// 类继承

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