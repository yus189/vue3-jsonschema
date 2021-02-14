
// 类型注解
let str1: string;
str1 = `111`
// str1 = 111

// 类型推论
let str2 = '2333'
// str2 = 2333

/***
 * 原始类型
 * string number boolean undefined null symbol
 */
let _var: string | number; // 联合类型
_var = '123'
_var = 123

// 类型数组
let arr: string[];
arr = ['1', /* 2 */]

// 任意类型
let _any: any;
_any = 1;
_any = '1';
_any = true;
let arrAny: any[];
arrAny = [1, true, '2', undefined];
arrAny[1] = 'sb'

// 函数类型约束
function greet(p: string = '2333'): string {
  return `hello, ${p}`
}
console.log( greet('sb') );
console.log( greet() );

// void类型
function _greet(p: string = '23333'): void {
  console.log(p);
}
_greet();

// 对象object, 不是原始类型就是对象类型
function objTest(o: object): void {}
objTest({});
objTest(function(){});
objTest([]);
// objTest(1);
// objTest(null);

// 声明对象字面量结构
function _objTest(o: {name: string}): void {}
_objTest({name: 'sb'});
// _objTest({});

// 类型别名 type关键字 自定义类型
type _o = {name: string} & {foo: string} // & 拓展
function __objTest(o: _o): void {}
__objTest({name: '1', foo: 'bar'});
// type和interface的区别, 基本上相同, 很少的一部分 如兼容性 有区别
// type 2.7版本后才支持 开放的接口官方建议使用interface
// 表达一种难以理解的类型 使用interface难以表达 可以使用type, 更方便快捷
interface _Prop {
  name: string,
}
function ___objTest(o: _Prop): void {}


// 断言 as 将更范的类型断言为更具体的类型
const someVal: any = 'someval'
const valLen: number = (someVal as string).length;

// 交叉类型
type First = {first: number}
type Second = {second: number}
// 拓展新type
type FirstAndSecond = First & Second
function fn11({first, second}: FirstAndSecond): FirstAndSecond {
  return {
    first: first + 1,
    second: second + 1,
  }
}
fn11({first: 1, second: 2,});

// 函数
// 参数设置了就是必填参数
// 可赋值默认值
// 可选参数？ 加在末尾

// 函数重载
// 场景主要是框架、源码, 给用户多一些选择
// 函数用参数个数、类型、或返回值类型区分同名函数
// 先声明 再实现
function watch(cb1: () => void): void; // 声明
function watch(cb1: () => void, cb2: (v1: string, v2: string) => void): void; // 声明
function watch(cb1: () => void, cb2?: (v1: string, v2: string) => void): void { // 实现 执行重载
  // do something
  if (cb2) {
    // do something
  }
}

// class
class Parent {
  private _foo: string = 'foo' // 私有 只能在类内部访问
  protected bar: string = 'bar' // 保护 可在子类中访问
  constructor(public tua: string = 'tua') {} // 参数属性 构造函数参数加修饰符 能够定义为成员属性
  private someMethod() {} // 方法也有修饰符
  // 读取器 属性方式访问 可添加额外逻辑 控制读写性
  // 可用于computed
  get foo () {
    return this._foo;
  }
  set foo (val) {
    this._foo = val;
  }
}
const p = new Parent()
console.log(p.foo, p.tua,);
p.foo = 'sb'
console.log(p.foo, p)

class Child extends Parent {}
const c = new Child();


// 泛型 Generics
// 在定义函数，接口，或者类的时候，不预先指定具体的类型，在使用时再指定类型
// 以此增加代码 通用型 复用性
// interface Result { // 不用泛型
//   ok: 0 | 1;
//   data: Feature[];
// }
interface Result<SB> {
  ok: 0 | 1;
  data: SB;
}

function getResult<SB>(data: SB): Result<SB> {
  return {ok: 1, data};
}
console.log( getResult<string>('sb') );
console.log( getResult(123) );




