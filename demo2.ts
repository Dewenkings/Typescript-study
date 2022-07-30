// js而言，对象声明
// let obj = {
//   name: '哦哦',
//   age: 18
// }

interface Z {
  names:string
  age:number
}

let obj2:Z = {
  names: '嗷嗷叫',
  age: 18
}

console.log(obj2)

//可选属性的含义是该属性可以不存在
//所以说这样写也是没问题的
interface Person {
  b?:string,
  a:string
}

const person:Person  = {
  a:"213"
}

// 任意属性 [propName: string]
// readonly
// cb()添加函数
interface Person2 {
  readonly b?:string,
  a:string,
  cb(): number,
  [propName: string]: any;
}

const person2:Person2  = {
  a:"213",
  b: 'zhangsan',
  ddw: 18,
  da: 34,
  cb:():number => {
    return 123
  }
}
// person2.b = 'ddw'  // 无法分配到 "b" ，因为它是只读属性。
console.log(person2)


// 继承
interface C {
  name:string,
  cb():string
}
interface D extends C{
  age:number
}
let obj3:D = {
  name:'ddw',
  age:25,
  cb:():string => {
    return obj3.name + obj3.age
  }
}
console.log(obj3)
