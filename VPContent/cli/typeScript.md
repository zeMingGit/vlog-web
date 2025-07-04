# TypeScript

## 概要

`提示：什么是TypeScript？`

[TypeScript](https://www.typescriptlang.org/zh/) 是由微软开发的一种开源编程语言，是 JavaScript 的超集，增加了强类型和其他特性。其核心特点包括：类型系统、增强的代码提示和自动补全、ES6+ 特性支持、类与接口、兼容性。通过 TypeScript，开发者可以在开发阶段捕获潜在错误，使代码更加可靠和可维护，尤其适合大型项目。

## 一、基本类型

类型声明：通过类型声明可以指定TS中变量（参数、形参）的类型。指定类型后，当为变量赋值时，TS编辑器会自动检查值是否符合类型声明，否则报错。简而言之，变量只能存储声明时候定义的类型值。

| 类型    |      例子       |              描述              |
| ------- | :-------------: | :----------------------------: |
| number  |    1,-33,2.5    |            任意数字            |
| string  |      'hi'       |           任意字符串           |
| boolean |   true、false   |       布尔值true或false        |
| 字面量  |     其本身      |  限制变量的值就是该字面量的值  |
| any     |       \*        |            任意类型            |
| unknown |       \*        |         类型安全的any          |
| void    | 空置(undefined) |      没有值(或undefined)       |
| never   |     没有值      |          不能是任何值          |
| object  |  _{name:'xx'}_  |          任意的JS对象          |
| array   |     [1,2,3]     |          任意的JS数组          |
| tuple   |      [4,5]      | 元素，TS新增类型，固定长度数组 |
| enum    |  enum _{A,B}_   |       枚举，TS中新增类型       |

::: details 语法和举例
::: code-group

```ts [语法]
let 变量: 类型
let 变量: 类型 = 值
function fn(参数: 类型, 参数: 类型): 类型 {
  ...
}

```

```ts [举例]
/** 如果a的类型为unknown */
let a: unknown
a = 99
a = '123'

let b: string
// 方法一
if (typeof a === 'string') {
  b = a
}
// 方法二 断言
b = a as string // 或 b = <string>a

/** 如果a的类型为object */
let a: {
  name: string
  [key: string]: any // 索引签名
}
a = {
  name: 'sd',
  age: 88,
}
```

:::

::: details enum 枚举和type使用
::: code-group

```ts [enum 枚举]
/** 1.数字枚举 */
enum Direction {
  Up,
  Down,
  ...
}
console.log(Direction.Up)

const walk = (data: Direction) => {
  data // 0
  if (data === Direction.Up) {}
}
walk(Direction.Up)

/** 2.字符串枚举 */
enum Direction {
  Up = 'up',
  Down = 'down',
  ...
}
let dir: Direction = Direction.Up

/** 3.常量枚举 */
const enum Direction {
  Up,
  Down,
  ...
}
console.log(Direction.Up)
```

```ts [type]
/** 联合类型 */
type Status = number | string
type Gender = '男' | '女'

const printStatus = (data: Status) => {}
printStatus(404) // printStatus('404')

/** 交叉类型 */
type Area = {
  width: number
  height: number
}

type Address = {
  room: string
  cell: number
}

type House = Area & Address
```

```ts [特殊情况]
// https://www.typescriptlang.org/docs/handbook/2/functions.html#assignability-of-functions
// 总结：使用类型声明限制函数返回值为void时，TypeScript 并不会严格要求函数返回空
type LogFunc = () => void // 换undefined

const f1 = () => 200 // 允许返回非空值

let x = f1()
if (x) {
} // 会报错
```

:::

## 二、interface（接口）

`interface` 是一种定义结构的方式，主要作用是为：类、对象、函数等规定一种契约这样可以确保代码的一致性和类型安全，但要注意 **interface 只能定义格式，不能包含任何实现!**

::: code-group

```ts [定义对象]
interface UserInterface {
  name: string
  readonly gender: string // 只读属性
  age?: number // 可选属性
  run: (n: number) => void
}

const user: UserInterface = {
  name: '张三',
  gender: '男',
  age: 13,
  run(n) {},
}
```

```ts [定义函数结构]
interface CountInterface {
  (a: number, b: number): number
}

const count: CountInterface = (x, y) => {
  return x + y
}
```

```ts [定义类结构]
interface PersonInterface {
  name: string
  age: number
  speak(n: number): void
}

class Person implements PersonInterface {
  constructor(
    public name: string,
    public age: number,
  ) {}
  speak(n: number): void {
    for (let i = 0; i < n; i++) {}
  }
}

const p1 = new Person('老三', 8)
p1.speak(3)
```

```ts [接口之间继承]
interface PersonInterface {
  name: string
  age: number
}

interface StudentInterface extends PersonInterface {
  grade: string
}
```

:::
**什么时候使用接口**

- 定义对象的格式：描述数据模型、API响应格式、配置对象...等等，是开发中用最多的场景。
- 类的契约：规定一个类需要实现哪些属性和方法。
- 自动合并：一般用于扩展第三方库的类型，这种特性在大型项目中可能会用到。

## 三、相似概念区别

### 1. interface 与 type 的区别

**相同点：**

`interface` 和 `type` 都可以用于定义**对象结构**，两者在许多场景中是可以互换的。

**不同点：**

- `interface`- 更专注于定义**对象**和**类**的结构，支持继承、合并。

- `type`- 可以定义**类型别名、联合类型(|)、交叉类型(&)**，但不支持继承和自动合并。

### 2. interface 与抽象类的区别

**相同点：**

都用于定义一个**类的格式**（应该遵循的契约）

**不同点：**

- 接口：**只能描述结构**，**不能有任何实现代码**，一个类可以实现多个接口。

- 抽象类：既可以包含**抽象方法**，也可以包含具**体方法**，一个类只能继承一个抽象类。

## 四、泛型

**泛型**允许我们在定义函数、类或接口时，使用类型参数来表示**未指定的类型**，这些参数在具体**使用时**才被指定**具体的类型**，泛型能让同一段代码适用于多种类型，同时仍然保持类型的安全性。

简单的定义：

```ts
function logData<T>(data: T) {
  console.log(data)
}

logData<number>(10)
logData<string>('szd')
```

高级定义：
::: code-group

```ts [多个泛型]
function logData<T, U>(data: T, str: U): T | U {
  return Date.now() % 2 ? data : str
}

logData<number, string>(10, 'sdf')
logData<string, boolean>('szd', false)
```

```ts [泛型接口]
interface PersonInterface<T> {
  name: string
  age: number
  extraInfo: T
}

let p: PersonInterface<string> = {
  name: 'zhangsan',
  age: 20,
  extraInfo: '这是个字符串',
}

// 或
type JobInfo = {
  title: string
  company: string
}

let p: PersonInterface<JobInfo> = {
  name: 'zhangsan',
  age: 20,
  extraInfo: {
    title: '前端工程师',
    company: '阿里巴巴',
  },
}
```

```ts [泛型类]
class Person<T> {
  constructor(
    public name: string,
    public age: number,
    public sex: T,
  ) {}
  speak() {
    console.log(this.name, this.age, this.sex)
  }
}

const p = new Person<string>('小明', 18, '男')
```

:::

## 五、声明文件

**TypeScript 声明文件**（Declaration File） 是以 `.d.ts` 为后缀的文件，用于向 TypeScript 提供类型声明信息。使得 TypeScript 能够在使用这些 JavaScript 库或模块时进行类型检查和提示。它告诉 TypeScript 编译器某些 JavaScript 代码的类型信息，而无需直接修改这些代码。

项目中，当你想使用未用 TypeScript 编写的库（如普通 JavaScript 库）时，TypeScript 无法推断它们的类型。此时，可以使用声明文件来为这些库提供类型支持。

```ts
declare function add(a: number, b: number): number

export { add }
```

## 六、装饰器

装饰器本质是一种特殊的函数，它可以对:类、属性、方法、参数进行扩展，同时能让代码更简洁。

**装饰器有 5 种：类装饰器、属性装饰器、方法装饰器、访问器装饰器、参数装饰器。**

### 1. 类装饰器

类装饰器是一个应用在类声明上的函数，可以为类添加额外的功能，或添加额外的逻辑。

**类装饰器有返回值：** 若类装饰器返回一个新的类，那这个新类将**替换**掉被装饰的类。

**类装饰器无返回值：** 若类装饰器无返回值或返回 `undefined` ，那被装饰的类不会被替换。

```ts
/**
 * Demo函数会在Person类定义时执行
 * 参数说明：target是被装饰的类，即：Person
 */
function CustomString(target: Function) {
  console.log(target)
  target.prototype.toString = function () {
    return Json.stringify(this)
  }
  Object.seal(target.prototype)
}

@CustomString
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p1 = new Person('咋', 18)
console.log(p1.toString())
```

**关于构造类型**
::: details 关于构造类型

```ts
// 仅声明构造类型
type Constructor = new (...args: any[]) => {}
function test(fn: Constructor) {}
class Person {}
text(Person)

// 声明构造类型 + 指定静态属性
type Constructor = {
  new (...args: any[]): {}
  wife: string
}
function test(fn: Constructor) {}
class Person {
  static wife: string
}
text(Person)
```

:::

::: details 替换被装饰的类

```ts
type Constructor = new (...args: any[]) => {}

interface Person {
  getTime(): void
}
function LogTime<T extends Constructor>(target: T) {
  return class extends target {
    createdTime: Date
    constructor(...args: any[]) {
      super(...args)
      this.createdTime = new Date()
    }
    getTime() {
      console.log(this.createdTime)
    }
  }
}

@LogTime
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p1 = new Person('张三', 18)
console.log(p1.getTime())
```

:::

## 小结

TS定义类型油电男。
