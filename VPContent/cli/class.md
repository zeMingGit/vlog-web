# Class 类

## 概要

`提示：什么是Class 类？`

Class 是 JavaScript 中的一种语法糖，用于更清晰地定义对象的结构和行为。它是创建对象的模板，封装了数据和操作数据的方法，以支持面向对象编程的设计理念。

## 一、定义

::: code-group

```ts [class 类]
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log(`我叫：${this.name}，今年${this.age}岁`)
  }
}

const p1 = new Person('张三', 18)
console.log(p1)
p1.speak()
```

```ts [继承]
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log(`我叫：${this.name}，今年${this.age}岁`)
  }
}

// 继承
class Student extends Person {
  grade: string
  constructor(name: string, age: number, grade: string) {
    super(name, age)
    this.grade = grade
  }
  study() {
    console.log(`${this.name}正在努力学习...`)
  }
  // 覆盖父类
  override speak() {
    console.log(`我是学生，我叫：${this.name}，今年${this.age}岁`)
  }
}
const s1 = new Student('李同学', 16, '大一')
s1.study()
```

:::

### 核心特性

1. **类的定义**
2. **构造函数 (constructor)**
   - 每个类可以有一个特殊的 constructor 方法，用于初始化实例对象。
3. **实例化对象**
   - 使用 new 关键字创建类的实例。
4. **方法与属性**
   - 类方法：在类中定义的函数。
   - 类属性：绑定到实例对象的变量。
5. **继承 (extends)**
   - 子类可以通过 extends 关键字继承父类的属性和方法。
   - 子类可以使用 super 调用父类的构造函数或方法。
6. **静态方法 (static)**
   - 使用 static 关键字定义，与类本身关联，而非实例对象。
7. **私有字段与方法 (ES2022+)**
   - 以 # 开头的字段或方法只能在类内部访问。

## 二、属性修饰符

| 修饰符    |   含义   | 具体规则                                     |
| --------- | :------: | :------------------------------------------- |
| public    |  公开的  | 可以被：**类内部**、**子类**、**类外部**访问 |
| protected | 受保护的 | 可以被：**类内部**、**子类**访问             |
| private   |  私有的  | 可以被：**类内部**访问                       |
| readonly  | 只读属性 | 属性无法修改                                 |

## 三、抽象类

抽象类是一种**无法被实例化**的类，专门用来定义类的**结构和行为**，类中可以写抽象方法，也可以写**具体实现**。抽象类主要用来为其派生类提供一个**基础结构**，要求其派生类**必须实现**其中的抽象方法。

简单来说：抽象类**不能实例化**，其意义是**可以被继承**，抽象类里可以有**普通方法**、也可以有**抽象方法**。

```ts
abstract class Package {
  // 构造方法
  constructor(public weight: number) {}
  // 抽象方法
  abstract calculate(): number
  // 具体方法
  printPackage() {
    console.log(`包裹重量为:${this.weight},运费为:${this.calculate}`)
  }
}

class StandardPackage extends Package {
  constructor(
    weight: number,
    public unitPrice: number,
  ) {
    super(weight)
  }
  calculate(): number {
    return this.weight * this.unitPrice
  }
}

const p1 = new StandardPackage(10, 5)
p1.printPackage()
```

### **什么时候使用抽象类？**

- 定义通用接口：为一组相关的类定义通用的行为(方法或属性)时。
- 提供基础实现：在抽象类中提供某些方法或为其提供基础实现，这样派生类就可以继承这些实现。
- 确保关键实现：强制派生类实现一些关键行为。
- 共享代码和逻辑：当多个类需要共享部分代码时，抽象类可以避免代码重复。
