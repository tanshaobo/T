/**
 * 声明函数、匿名函数
 */

function f2():void{
    console.log(1)
}

const f3 = ():number => {
    return 1
}

/**
 * 传参, 
 */

const f4 = (name:string, age: number):string => {
    return `${name}${age < 18 ? '未成年' : '成年了'}`
}

console.log(f4('张三',2))

/**
 * 可选参数 必须位于所有参数最后
 */

const f5 = (name:string, age?:number): string => {
    return `${name + (age ? name + age : name)}`
}

console.log(f5('李四',3), f5('王五'))

/**
 * 默认参数
 */

const f6 = (num:number = 23):void => {
    console.log(num)
}

f6(),f6(82)

/**
 * 剩余参数
 */

const f7 = (...result:number[]):number => result.reduce((i,j) => i += j , result[0])
    
console.log(f7(1,2,3,5,6,7,8))

/**
 * 重载
 */

function f8(name:string):string
function f8(age:number): string
function f8(str:any): string {
    return typeof str === 'string' ? str : '现在' + str
}

console.log(f8(34))