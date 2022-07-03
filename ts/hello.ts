// 基础类型 字符串
let hello: string = 'hello'
let age: number = 88
let sentence: string = `${hello},good night,
I'll be ${age + 1} years old next month`

// 基础类型 数字
let n : number = 1
let f_n: number = 1.2
let hex_n: number = 0xf00
let binary_n: number = 0b10
let octal_n: number = 0o67
// 基础类型  布尔值
let b:boolean = false
// 引用类型 数组
let list: number[] = [1,2,3]
let lists: Array<number> = [4,5,6]
let lista: Array<any> = [1, 'a', false, null, undefined,[1,2],{a: 1},function(){console.log(1)}]
// 元祖 Tuple 指定长度以及每项类型的数组
let listb: [string,number]
listb = ['feh', 1]
console.log(listb[0].substr(1))
console.log(listb[1].toFixed(1))
/**
 * 设置超出元祖长度的元素时，编辑器报错，此处与文档不符，但是该代码仍可被解析
 * listb[2]= 2 
*/
// 枚举 enum 
enum Color {Red = 1,Green = -1,Blue = Math.random(),Dark = Color.Red, Pink = 4 + 3,Black = parseInt('1.0')}
let enum_a: Color = Color.Green
let enum_b: string = Color[1]
console.log(enum_a, enum_b)
console.dir(Color)

enum Word {'en', 'cn','贵','%￥'}
let eWord : Word = Word["%￥"]

// any 任意类型
let any_a: any = 1
any_a.toFixed(2)
any_a = 'hello'
any_a.slice(1)
any_a = [2,4,6]
any_a.pop()
any_a = {a:1}
delete any_a.a
// void 无类型
let void_a:void = undefined
/**
 * 此处与文档不符，设置成null后会报类型检测错误
 * let void_b:void = null
*/
// null undefined
/**
 * 只能赋值为null或undefined 可为任意类型的子类型
*/
// never
/**
 * 永不存在的类型 排查错误使用
*/

// Object 不是原始类型的其他类型 
// declare function create(o:object|null): void;
// console.log(create)
// create({a:0})

// 类型断言
/**
 * 指定类型 忽略类型检测
*/

let v_length : number = (<string>hello).length
let v_lengths: number = (hello as string).length
console.log(v_length, v_lengths)

// export default{
//     v_lengths
// }
