
class Person1 {
  public name:string; // 内外部都可以访问
  private age:number; // 仅内部访问
  protected sub:boolean // 内部和子类可以访问得到
  static aaa:string = '123465' // 静态属性：直接通过类调用
  constructor(name:string, age:number, sub:boolean){
    this.name = name  // ts这里需要声明下name的属性，在ts下
    this.age = age 
    this.sub = sub
  }
  static run (){
    // 静态方法只能获取静态属性
    return '789'
  }
}

class Man1 extends Person1 {
  constructor() {
    super("张三",19,false)
    this.sub // 可以访问protected属性
  }
  
}
let dd = new Person1("张三",19,false)

dd.name;

console.log(Person1.aaa)
console.log(Person1.run())


// 抽象类： 实现就不报错 我们定义的抽象方法必须在派生类实现
abstract class A {
  name: string
  constructor(name: string) {
     this.name = name;
  }
  print(): string {
     return this.name
  }

  abstract getName(): string
}

class B extends A {
  constructor() {
     super('小满')
  }
  getName(): string {
     return this.name
  }
}

let b = new B();

console.log(b.getName());