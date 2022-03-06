//没有返回值的函数可以用void声明
const fn1 = (param1: string, param2: number): void => {
  console.log("我是没有返回值的箭头函数");
};
function fn2(param1: string, param2: number): void {
  console.log("我是没有返回值的普通函数");
}
//有返回值的箭头函数声明
const fn3 = (): string => {
  return "字符串=》";
};
//有返回值的普通函数声明
function fn4(): string {
  return "字符串";
}

//函数表达式的双向限定
//上述fn1 其实只对=右侧做了限制，对左侧并没有
//完善一点，可以这样=> 用来表示函数的定义，左输入类型，需要用括号括起来，右输出类型
const fn11: (param1: string, param2: number) => void = (){
    
}
//函数的可选参数
//注意可选参数要在确定参数后
function fn5(name: string, age?: number): string {
    return "字符串"
}

//函数参数默认值
function fn6(name: string, age: number = 18): string {
    return `${name}--${age}`
}

//此时可选参数不必一定在确定参数后，但是调用有问题
// function fn7()

//剩余参数
function fn8(...args: number[]): number[] {
    return args
}
console.log(fn8(1, 2, 3, 4, 5));//[1,2,3,4,5]


//声明一个变量为任意值之后，对他的任何操作，返回的内容的类型都是任意值。
//变量如果在声明的时候，为制定其类型，那么就会被识别为任意值类型

// 1：any
//非any类型不可以跨类型赋值
let str1: string = "字符串"
// str1=123//报错 

//any类型可以跨类型赋值,这就像js本身
//注意，这种属于显式声明any类型，tsconfig.json中noImplicitAny属性校验的是隐式
let str2:any="冷月心"
str2=123//不报