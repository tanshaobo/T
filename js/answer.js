// 不知名公司的面试题
// 第一题
let a = [
  {"a":1,"b":"一级 1","c":0}, 
  {"a":2,"b":"一级 2","c":0}, 
  {"a":3,"b":"一级 3","c":0}, 
  {"a":4,"b":"二级 1-1","c":1}, 
  {"a":5,"b":"二级 2-1","c":2}, 
  {"a":6,"b":"二级 2-2","c":2}, 
  {"a":7,"b":"二级 3-1","c":3}, 
  {"a":8,"b":"二级 3-2","c":3}, 
  {"a":9,"b":"三级 1-1-1","c":4}, 
  {"a":10,"b":"三级 2-1-1","c":5}, 
  {"a":11,"b":"三级 2-2-1","c":6}, 
  {"a":12,"b":"三级 3-1-1","c":7}, 
  {"a":13,"b":"三级 3-2-1","c":8}
]

let r =  [
  {
    "a":1,
    "b":"一级 1",
    "c":0,
    "children":[
      { 
        "a":4,
        "b":"二级 1-1",
        "c":1,
        "children":[
          {"a":9,"b":"三级 1-1-1","c":4}
        ]
      }
    ]
  },
  {
    "a":2,
    "b":"一级 2",
    "c":0,
    "children":[
      {
        "a":5,
        "b":"二级 2-1",
        "c":2,
        "children":[
          {"a":10,"b":"三级 2-1-1","c":5}
        ]
      },
      {
        "a":6,
        "b":"二级 2-2",
        "c":2,
        "children":[
          {"a":11,"b":"三级 2-2-1","c":6}
        ]
      }
    ]
  },
  {
    "a":3,
    "b":"一级 3",
    "c":0,
    "children":[
      {"a":7,"b":"二级 3-1","c":3,"children":[{"a":12,"b":"三级 3-1-1","c":7}]},{"a":8,"b":"二级 3-2","c":3,"children":[{"a":13,"b":"三级 3-2-1","c":8}]}]}]
// 第一题答案
const Totree = (data, root = 0) => {
  let arr = []
  data.forEach((item) => {
    let p =item.b.length > 3 ? item.b.slice(3, item.b.length - 2) : 0
    if ( p == root) {
      arr.push(item)
      const children = Totree(data, item.b.slice(3))
      if (children.length) {
        item.children = children
      }
    }
  })
  return arr
}
console.log(Totree(a), 'Totree')

// 第二题
let timeArr = [
  "2022-02-11", 
  "2022-02-09", 
  "2021-12-29", 
  "2021-12-30", 
  "2021-12-31", 
  "2022-01-01", 
  "2022-01-05", 
  "2022-01-06", 
  "2022-01-07", 
  "2022-02-11", 
  "2022-02-11", 
  "2022-02-11", 
  "2022-02-11", 
  "2022-02-12"
]

timeArr = [...new Set(timeArr)]
console.log('timeArr',timeArr)
let tempObj = timeArr.map(item => {
  let o = {}
  o.key = item
  o.value = Date.parse(new Date(item).toString()) / 1000
  return o
})

tempObj.sort((a, b) => a.value - b.value)
console.log('tempObj', tempObj)
let tempResult = []
tempObj.forEach((item, index) => {
  if(index + 1 == tempObj.length){
    return
  }
  let start = item.value
  let end = tempObj[index + 1].value
  let Boolean = end - start  == 24 * 60 * 60
  tempResult.push({item:`${item.key}至${tempObj[index+1].key}`, Boolean})
})
// 到这里拿到所有连续日期 Boolean 为true 为连续日期
console.log('tempResult', tempResult)

let r2 = []

tempResult.forEach(item => {
  if(!r2.length){r2.push('')}
  if(item.Boolean){
    r2[r2.length - 1] = `${r2[r2.length - 1]}至${item.item}`
  }else if(r2[r2.length - 1] !== ''){
    r2.push('')
  }
})
console.log(JSON.parse(JSON.stringify(r2)))
r2.push('')
r2 =r2.filter(i=>i).map(item => {
  return `${item.slice(1,12)}${item.slice(item.length - 10, item.length)}`
})

console.log('result',r2)