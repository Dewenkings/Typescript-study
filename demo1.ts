
// 基本数据类型

let str:string = '13'
let num:number = 13

let createdBoolean: Boolean = new Boolean(1)

// 空值类型
function voidFn(): void {
  console.log('test void')
}

let u: undefined = undefined;//定义undefined
let n: null = null;//定义null

// let num = u
let test:void = undefined
let zz:undefined = void

console.log('num:', num)

// 引用数据类型
let anys:any = 123
anys = '123'
anys = true

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
// 默认any类型：弊端如果使用any 就失去了TS类型检测的作用
let Anys;
Anys = 'ddw'

//unknown 可以定义任何类型的值
let value: unknown;
 
value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = null;             // OK
value = undefined;        // OK
value = Symbol("type");   // OK
 
//这样写会报错unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
//unknown类型不能赋值给其他类型
// let names:unknown = '123'
// let names2:string = names
 
//这样就没问题 any类型是可以的
let names:any = '123'
let names2:string = names   
 
//unknown可赋值对象只有unknown 和 any
let bbb:unknown = '123'
let aaa:any= '456'
 
aaa = bbb

// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
// let obj:any = {b:1}
// obj.a
 
 
// 如果是unknow 是不能调用属性和方法
let obj1:unknown = {b:1,ccc:():number=>213}
// obj.b
// obj.ccc()