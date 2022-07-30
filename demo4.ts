// function fn(name:string, age:number):string{
//   return name + age
// }
// // fn('张三', 28)
// console.log(fn('张三', 28))


// function sum(x: number, y: number): number {
//   return x + y;
// }
// // sum(1, 2, 3); 注意，输入多余的（或者少于要求的）参数，是不被允许的

// 函数重载
function fn(params: number): void
function fn(params: string, params2: number): void
function fn(params: any, params2?: any): void {
    console.log(params)
    console.log(params2)
}
 
fn(123)

fn('123',456)