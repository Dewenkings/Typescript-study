let myFavoriteNumber: number | string
myFavoriteNumber = 'ddw'
console.log(myFavoriteNumber)
myFavoriteNumber = 123
console.log(myFavoriteNumber)

// 函数联合
const fn5 = (type:number | boolean):boolean => {
  return !!type
}
let res = fn5(false)
console.log(res)

// 交叉类型
interface People {
  age: number,
  height:number
}
interface Man{
  sex: string
}
const xiaoman = (man: People & Man) => {
  console.log(man.age)
  console.log(man.height)
  console.log(man.sex)
}
xiaoman({age: 18,height: 180,sex: 'male'});

// 类型断言
interface A {
  run: string
}

interface B {
  build: string
}

const fn6 = (type: A | B): string => {
  return (type as A).run
}
//可以使用类型断言来推断他传入的是A接口的值