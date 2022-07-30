// 内置对象

let regexp:RegExp = /\w\d\s/

const date:Date = new Date()
let e: Error = new Error("error!")
console.log(e)

let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
//读取div 这种需要类型断言 或者加个判断应为读不到返回null
let div:HTMLElement = document.querySelector('div') as HTMLDivElement
document.addEventListener('click', function (e: MouseEvent) {
    
});
