// 如果需要一个固定大小的不同类型值的集合，我们需要使用元组
// let arrr1:[number,string] = [1,'string']

let arrr2: readonly [number,boolean,string,undefined] = [1,true,'sring',undefined]

// 对于越界的元素他的类型被限制为 联合类型（就是你在元组中定义的类型）
let arrr1:[number,string] = [1,'string']
// arr.push(true)//error

// 应用场景 例如定义execl返回的数据
let excel: [string, string, number, string][] = [
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
]

// --------------------------------------------
// enum关键字定义我们的枚举
// enum Types{
//   Red = 0,
//   Green = 1,
//   BLue = 2
// }
//默认就是从0开始的 可以不写值,也可以自己定义
// 字符串枚举
// enum Types{
//   Red = 'red',
//   Green = 'green',
//   BLue = 'blue'
// }
// -------------------------------------
// const 声明的枚举会被编译成常量
// 普通声明的枚举编译完后是个对象
const enum Types{
  No = "No",
  Yes = 1,
}
// -------------------------------------
// 类型推断
// let ggg = 'ddw'
// ggg = 123
// -------------------------------------
// type 关键字 （可以给一个类型定义一个名字）多用于符合类型
// type str = string
// let s:str = "我是小满"
// console.log(s);
// 函数类型别名
type str = () => string
let s: str = () => "我是小满"
// console.log(s);
// ======================================
// 使用 never 类型来表示不应该存在的状态
// type bb = string & number 
// 返回never的函数必须存在无法达到的终点
 
// 因为必定抛出异常，所以 error 将不会有返回值
function error(message: string): never {
  throw new Error(message);
}

// 因为存在死循环，所以 loop 将不会有返回值
function loop(): never {
  while (true) {
  }
}

interface Aa {
  type: "foo"
}

interface Bb {
  type: "bar"
}
interface Cc {
  type: "bizz"
}
type All = Aa | Bb | Cc; //  | Cc
function handleValue(val: All) {
  switch (val.type) {
      case 'foo':
          break;
      case 'bar':
          break
      case 'bizz':
        break
      default:
          //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了
          const exhaustiveCheck: never = val;
          break
  }
}

// ==============================================
// symbol类型的值是通过Symbol构造函数创建的。
let z:symbol = Symbol("插槽")
let na:symbol = Symbol("插槽")
// 内存地址指针位置不同所以是唯一值
// console.log(z == na)
let objj = {
  [na]:"value",
  [z]: '小满',
  age: 19,
  sex: '女'
}

for (const key in objj) {
  // 注意在console看key,是不是没有遍历到symbol1
  // console.log(key)
}
//
// console.log(z,na)

// 2 Object.keys 遍历
// Object.keys(objj)
// console.log(Object.keys(objj))
// // 3 getOwnPropertyNames
// console.log(Object.getOwnPropertyNames(objj))
// // // 4 JSON.stringfy
// console.log(JSON.stringify(objj))

// 如何取值
// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
Object.getOwnPropertySymbols(objj)
console.log(Object.getOwnPropertySymbols(objj))
// 2 es6 的 Reflect 拿到对象的所有属性
Reflect.ownKeys(objj)
console.log(Reflect.ownKeys(objj))

// Symbol.iterator使用
var arr8 = [1,2,3,4];
let iterator = arr8[Symbol.iterator]();
 
console.log(iterator.next());  //{ value: 1, done: false }
console.log(iterator.next());  //{ value: 2, done: false }
console.log(iterator.next());  //{ value: 3, done: false }
console.log(iterator.next());  //{ value: 4, done: false }
console.log(iterator.next());  //{ value: undefined, done: true }

// 测试用例
interface Item {
  age: number,
  name: string
}

const array: Array<Item> = [{ age: 123, name: "1" }, { age: 123, name: "2" }, { age: 123, name: "3" }]

type mapTypes = string | number
const map:Map<mapTypes,mapTypes> = new Map()

map.set('1','王爷')
map.set('2','陆北')

const obj = {
  aaa:123,
  bbb:456
}

let set:Set<number> = new Set([1,2,3,4,5,6])
// let it:Iterator<Item> = array[Symbol.iterator]()
const gen = (erg:any): void => {
  let it: Iterator<any> = erg[Symbol.iterator]()
  let next:any= { done: false }
  while (!next.done) {
      next =  it.next()
      if (!next.done) {
          console.log(next.value)
      }
  }
}
gen(array)