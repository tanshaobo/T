// 接口 设定变量集合的规则

// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label)
// }
// let myObj = {size:1,label:'helloworld'}
// printLabel(myObj)

// 接口 必须包含label
interface labelledObj {
    label: string;
}
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label)
}
let myObj = {size:1,label:'helloworld'}
let myObjs = {size: 1,name:'str'}
printLabel(myObj)
// printLabel(myObjs) // 此处因缺少label选项报错

// 可选属性 ?
interface SquareConfig{
    color?: string;
    width?: number;
}

function createSquare(config:SquareConfig):{color:string,area:number} {
    let newSquare = {color: "red", area: 100}
    if(config.color){
        newSquare.color = config.color
    }
    if(config.width){
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({color:'#ff0',width:23})
console.log(mySquare)


// 只读属性
interface Point{
    readonly x: number;
    readonly y: number
}

let p1: Point = {x : 20, y:1}
//  p1.x = 2 //此处Error 只读属性不可被更改 
console.log(p1)

let  a : number[] = [1,2,3]
let ra: ReadonlyArray<number> = a.map(i => ++i)
console.log(ra[0])
a = [...ra]
console.log(a)
a = ra as number[]
console.log(a)
a = <number[]>ra
console.log(a)
a =JSON.parse(JSON.stringify(ra))
console.log(a)

// 额外属性检查绕开方式
let mySquare1 = createSquare({colour:'red',width: 34})
let mySquare2 = createSquare({colour:'red'})
let mySquare3 = createSquare({})
console.log(mySquare1,mySquare2,mySquare3)
// 断言式
let mySquares = createSquare({colour:'blue',width:20} as SquareConfig)
// 转赋值
let testSquare = {colors:'red',width:100}
let mySquaress = createSquare(testSquare)
// 增加任意签名式
interface SquareConfig{
    color?: string;
    width?: number;
    [propName:string]: any
}

// 函数类型
interface searchFunc{
    (source: string, subString:string): boolean
}

let mySearch: searchFunc
mySearch = function (source:string,subString:string) {
    let r = source.search(subString)
    return r > -1
}
let mySearchs: searchFunc
mySearchs = function(src: string, str: string):boolean{
    let r = src.search(str)
    return r > -1
}
let mySearcha: searchFunc;
mySearcha = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}