## TypeScript学习

由于越来越多项目基于ts来写，所以开始学习ts的基本使用。ts始于js,忠于js.

这部分只做个了解：如何使用ts，ts与js的区别。

参考资料：[TypeScript 入门教程 (xcatliu.com)](http://ts.xcatliu.com/) ；[一份不可多得的 TS 学习指南（1.8W字） - 掘金 (juejin.cn)](https://juejin.cn/post/6872111128135073806#heading-3) ；[小满TypeScript基础教程全集（完结）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1wR4y1377K?spm_id_from=333.999.0.0&vd_source=87bb43eedb405d58408d27181f3998b3) ；[typescript01- CSDN搜索](https://so.csdn.net/so/search?q=typescript01&t=blog&u=qq1195566313&urw=)；[还不会TS？ 带你 TypeScript 快速入门 - 掘金 (juejin.cn)](https://juejin.cn/post/6999440503712251935)

只是了解基本的一些使用方法，后续多接触多熟悉

---

### demo1

* 了解到ts是一种强类型语言，类似java强类型；js是弱类型语言，没有静态类型选项

#### 基本数据

基本数据类型就需要 `：类型` 阐述;否则会报错;

undefined,null为所有类型子类型

#### 引用类型

```
nodejs 环境执行ts
npm i @types/node --save-dev （node环境支持的依赖必装）
npm i ts-node --g
```

Any 类型 和 unknown 顶级类型；赋值能力不同

```
unknown类型不能赋值给其他类型，unknown可赋值对象只有unknown 和 any；
any类型在对象没有这个属性的时候还在获取是不会报错的，unknow 是不能调用属性和方法
```

这里还有类型推论：如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查--与js没有区别

---

### demo2

#### 接口与对象类型

通过接口写定义的类型变量，怎么有点像java的感觉呢？

* 可选属性 使用?操作符

* 任意属性 [propName: string]

* 只读属性 readonly
* extends继承接口属性或方法

---

### demo3

#### 数组类型

* 「类型 + 方括号」表示法：数组的项中**不允许**出现其他的类型
* 泛型： Array<类型>  `let arr:Array<number> = [1,2,3,4,5]`
* 多维数组： 多个中括号或者泛型 `let data:number[][] = [[1,2], [3,4]]`
* 函数形式

---

### demo4

#### 函数类型

约束输入输出 

需要注意的是，可选参数必须接在必需参数后面 `属性名?:类型`

函数重载

----

### demo5

联合类型使用 `|` 分隔每个类型。

交叉类型 `& ` 类似于extends

类型断言   值 as 类型或<类型>值   value as string  <string>value  ：

类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误

---

### demo6 内置对象

ES内置对象：`Boolean`、`Error`、`Date`、`RegExp` 等；DOM与BOM：`Document`、`HTMLElement`、`Event`、`NodeList` 等

后续直接表示

### demo7: class

### demo8: 元组、枚举、类型推论、类型别名、never类型

### demo9: 泛型

### demo10: 命名空间、三斜线指令

### demo11: declare ,mixins



