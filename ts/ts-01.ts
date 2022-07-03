/**
 *  布尔类型  boolean
 */

let b1:boolean = true

let b2:boolean = false

let b3:boolean = true
/**
 * 数字类型 number
 */

let n1:number = 1

let n2:number = 0.2

let n3:number = -Math.PI

/**
 * 字符串 string
 */

let s1:string = 'this is typescript'

let s2:string = 12 + ''

let s3:string = [].toString()

/**
 * 数组 array
 */
// 法一

let a1:number[] = [1,2,3]

let a2:any[] = [1,'a',[2],false, null,NaN,undefined, function(){console.log(1)},{a:2}]

// 法二

let a3:Array<string> = ['a','hello','whosyourdaddy']

let a4:Array<boolean> = [0==0,!1, false]

/**
 * 元祖 tuple 指定数组中每个值的类型的数组
 */

let t1:[number, string] = [1, '1']

let t2:[boolean,number[]] = [false,[1,2,2,4]]

/**
 * 枚举 enum
 */

enum Flag {
    success,
    fail = 2,
    error = 8,
    warning,

}

console.log(Flag)

let e1:Flag = Flag.success

let e2:Flag = Flag.warning

console.log(e1, e2)

/**
 * 任意类型 any
 */

let an1:any = {a: 1}

an1 = 'greedisgood'

an1 = 9527

an1 = '剑光如我，斩尽芜杂'

/**
 * null undefined 
 * 除never外的类型的子类型
 */

let nu1:null

let u1:undefined

/**
 * void 无返回值类型
 */

const f1 = ():void => {
    console.log(1)
}

/**
 * never 从不出现的类型 
 */

let ne1:never;

ne1 = (()=>{
    throw new Error('靠，又错了')
})()


