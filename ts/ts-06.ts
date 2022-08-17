/**
 * 可索引接口 对数组、对象的约束
 */

// // 数组定义方式
// var arr1:number[] = [1,2,3]
// var arr2:Array<string> = ['a','b']


// 可索引接口 对数组的约束
interface UseArr{
  [index:number]:string
}

var arrs:UseArr = ['a', 's']
console.log(arrs)

// 可索引接口 对对象的约束

interface UseObj{
  [index:string]:string
}

var objs:UseObj = {
  name: '张三'
}

console.log(objs)

// 类类型接口 对类的约束 类似抽象类

interface Animal{
  name: string;
  eat(str:string):void;
}

class Dogs implements Animal{
  name:string
  constructor(name:string){
    this.name = name
  }

  eat(){
    console.log(`${this.name}吃啥`)
  }
}