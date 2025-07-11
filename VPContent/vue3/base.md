# Vue3 中的理论知识

## 概要

`提示：这里主要混总vue中相关技巧或者知识点`

## 一、响应式数据（ref和reactive）

在 Vue 3 中，ref 是最简单的响应式数据管理方式之一，它允许直接修改值或整体替换数据。相比之下，reactive 主要用于创建深层响应式对象，适用于管理复杂的状态。以下是对 reactive 的详细记录。

```ts
const car = reactive({ brand: '奔驰', price: 1 })

// 整体替换car对象应该使用
Object.assign(car, { brand: '奥迪', price: 2 })
```

若需要一个基本类型的响应式数据，必须使用 `ref` ; 若需要一个响应式对象，层级不深，`ref、reactive` 都可以 ; 若需要一个响应式对象，且层级较深，推荐使用 `reactive`。

### 1. toRefs

```ts
let person = reactive({
  name: '张三',
  age: 20,
})

// 使用 toRefs 来解构对象保持响应式
let { name, age } = toRefs(person)
console.log(name.value)
```

## 二、计算属性（computed）

```js
// 进阶写法
const a = computed(() => {
  get() { },
  set(val) { }
})

```

## 三、watch

::: warning 注意：监视ref定义的对象数据类型
若修改的是 `ref` 定义的对象中的属性， `newValue` 和 `oldvalue` 都是新值，因为它们是同一个对象。

若修改整个 `ref` 定义的对象，`newValue` 是新值，`oldValue` 是旧值，因为不是同一个对象了。
:::

::: code-group

```ts [监视ref基本数据类型]
let sum = ref(0)
const stopWatch = watch(sum, (newVal, oldVal) => {
  if (newVal >= 3) {
    // 停止监听
    stopWatch()
  }
})
```

```ts [监视ref对象数据类型]
let person = ref({
  name: '张三',
})

// 监听的是对象的地址值。若想监听对象内部属性的变化，需要手动开启深度监听！
watch(person, (newVal, oldVal) => {}, {
  deep: true,
})
```

```ts [监视reactive对象数据类型]
// 默认是开启深度监听的
```

```ts [监视ref/reactive对象类型中的某个属性]
let person = reactive({
  name: '张三',
  car: {
    c1: '奔驰',
  },
})

watch(
  () => {
    return person.name
  },
  () => {},
)

// person.car:更改某一个可以监听到，整体修改监听不到
// () => person.car: 整体修改可以，更改某一个需要deep
watch(person.car, () => {})
```

:::
