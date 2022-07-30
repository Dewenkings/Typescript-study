// js数组
// let arr = [] or let arr = new Array(); 可以任意类型

// 类型
//类型加中括号
// let arr:number[] = [123]
//这样会报错定义了数字类型出现字符串是不允许的
// let arr:number[] = [1,2,3,'1']
//操作方法添加也是不允许的
// let arr:number[] = [1,2,3,]
// arr.unshift('1')
 

// var arr: number[] = [1, 2, 3]; //数字类型的数组
// var arr2: string[] = ["1", "2"]; //字符串类型的数组
// var arr3: any[] = [1, "2", true]; //任意类型的数组
// let arr4: boolean[] = [true, false]; // 波尔类型

// 数组泛型
let arr:Array<number> = [1,2,3,4,5]

// 接口表示数组：类数组
interface NumberArray {
  [index:number]:string
}
let fibon: NumberArray = ['1','1','2','3','5']

// 多维数组
let data:number[][] = [[1,2], [3,4]];

// arguments数组
// function Arr(...args:any): void {
//   console.log(arguments)
//   //错误的arguments 是类数组不能这样定义
//   let arr:number[] = arguments
// }
// Arr(111, 222, 333)



function Arr(...args:any): void {
  console.log(arguments) 
  //ts内置对象IArguments 定义
  let arr:IArguments = arguments
}
Arr(111, 222, 333)
console.log(Arr)
//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
// interface IArguments {
// [index: number]: any;
// length: number;
// callee: Function;
// }