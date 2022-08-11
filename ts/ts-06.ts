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