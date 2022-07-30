import axios from 'axios'
import express from 'express'


// 
class A {
  type: boolean = false;
  changeType() {
      this.type = !this.type
  }
}


class B {
  name: string = '张三';
  getName(): string {
      return this.name;
  }
}
class C implements A,B{
  type:boolean
  changeType:()=>void;
  name: string;
  getName:()=> string
} 

Mixins(C, [A, B])
function Mixins(curCls: any, itemCls: any[]) {
    itemCls.forEach(item => {
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            curCls.prototype[name] = item.prototype[name]
        })
    })
}

let ccc = new C()
console.log(ccc.type)
ccc.changeType()