/*
 * @Author: tanshaobo
 * @Date: 2022-07-02 21:56:01
 * @LastEditors: tanshaobo
 * @LastEditTime: 2024-03-26 00:17:01
 * @Description: ts中的函数
 * @FilePath: \T\ts\ts-02.ts
 */
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
 * 传参
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
 * 重载 函数同名，参数类型不同 
 * 注：重载应该是想锁死函数处理功能几个重载，意味着至多几种处理结果 且每个重载必须有对应处理逻辑？
 * 该功能是真的废  
 * */
console.log('为了保证上面的注释出现在对应的js文件中')

function f8(name:string):string
function f8(sex:number):string
function f8(name:string, age:number): string
function f8(name: any, age?:number): string {
    return !age ? `我是${name}` :  `今年${age}岁` 
}

// console.log(f8(34)) // 错误 因为重载中没有只传数字的形式