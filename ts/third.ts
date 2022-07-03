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
    run(): string{
        return this.sex
    }
    ts(): number{
        return 1
        // return this.age  此处不可访问age
    }
}