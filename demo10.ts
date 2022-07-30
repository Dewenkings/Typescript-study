///<reference path="./demo10_1.ts" />

namespace A {
  export const c = 123
}
console.log(A.fn)
// 命名空间
namespace a {
  export const A: number = 10000
}

namespace b {
  export const A: number = 20000
}

console.log(a.A)
console.log(b.A)

// 嵌套空间
namespace a {
  export namespace b {
      export class Vue {
          parameters: string
          constructor(parameters: string) {
              this.parameters = parameters
          }
      }
  }
}

let v = a.b.Vue

new v('1')

// 
// 声明文件引入

// declare  当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
