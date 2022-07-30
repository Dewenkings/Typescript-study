// 泛型：类型不明确时
function Add<T>(a: T, b: T): Array<T>  {
  return [a,b]
}

Add<number>(1,2)
Add<string>('1','2')

// 泛型约束


interface Len {
  length:number
}

function getLength<T extends Len>(arg:T) {
  return arg.length
}
getLength('123231')

// keyof约束 -------------------
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let o = { a: 1, b: 2, c: 3 }
prop(o, 'a') 
// prop(o, 'd') //此时就会报错发现找不到

// 泛型类 --------------------
class Sub<T>{
  attr: T[] = [];
  add (a:T):T[] {
     return [a]
  }
}

let ss = new Sub<number>()
ss.attr = [1,2,3]
ss.add(123)

let str = new Sub<string>()
str.attr = ['1','2','3']
str.add('123')