---
# 注意不要修改本文头文件，如修改，CodeBuddy（内网版）将按照默认逻辑设置
type: always
---
你是一个专业的 JavaScript/TypeScript 开发助手，所有代码必须严格遵循以下编码规范。

## 基本原则

- 优先考虑代码的可读性和可维护性
- 遵循一致性原则，保持代码风格统一
- 规范等级：【必须】= MUST/REQUIRED，【推荐】= SHOULD，【可选】= MAY

## 1. 变量和引用【必须】

- 使用 `const` 声明不会重新赋值的变量，使用 `let` 声明需要重新赋值的变量
- 禁止使用 `var`，变量先声明再使用
- 每个变量单独声明，不使用逗号分隔

```javascript
// 好的示例
const name = "example";
let count = 0;

// 错误示例
var name = "example";
const a = 1,
  b = 2;
let a = (b = c = 1); // 链式赋值
```

## 2. 对象和数组【必须】

- 使用字面量语法创建对象和数组
- 使用对象方法简写和属性值简写
- 只对无效标识符的属性使用引号
- 优先使用展开运算符

```javascript
// 好的示例
const obj = {
  name,
  getValue() {
    return this.name;
  },
};
const arr = [1, 2, 3];
const copy = { ...original, newProp: "value" };

// 错误示例
const obj = new Object();
const arr = new Array();
const bad = { foo: 3, bar: 4 };
```

## 3. 字符串【推荐】

- 使用单引号定义字符串
- 使用模板字符串进行字符串拼接
- 永远不要使用 eval()

```javascript
// 好的示例
const message = "Hello world";
const greeting = `Hello, ${name}!`;

// 错误示例
const message = "Hello world";
const greeting = "Hello, " + name + "!";
```

## 4. 函数【推荐】

- 使用默认参数语法，默认参数放在最后
- 使用 rest 语法代替 arguments
- 不要改变入参

```javascript
// 好的示例
function handleThings(name, opts = {}) {
  /* */
}
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// 错误示例
function handleThings(opts = {}, name) {
  /* */
} // 默认参数不在最后
```

## 5. 箭头函数【推荐】

- 使用箭头函数处理匿名函数
- 单个参数时可省略圆括号，简单表达式可省略大括号

```javascript
// 好的示例
[1, 2, 3].map((x) => x * 2);
[1, 2, 3].filter((x) => {
  return x > 1;
});

// 错误示例
[1, 2, 3].map(function (x) {
  return x * 2;
});
```

## 6. 类【推荐】

- 使用 class 语法而非直接操作 prototype
- 使用 extends 实现继承
- 避免定义重复的类成员

```javascript
// 好的示例
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    return this.queue.shift();
  }
}

class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
```

## 7. 模块【必须】

- 使用 ES6 模块语法 import/export
- 不要使用 import \* 通配符
- 所有 import 语句放在文件顶部
- 对同一路径只使用一个 import 语句

```javascript
// 好的示例
import { es6 } from "./AirbnbStyleGuide";
import foo, { named1, named2 } from "foo";
export default es6;

// 错误示例
import * as AirbnbStyleGuide from "./AirbnbStyleGuide";
const utils = require("./utils");
```

## 8. 解构【推荐】

- 访问多个对象属性时使用对象解构
- 多个返回值时使用对象解构而不是数组解构

```javascript
// 好的示例
const { firstName, lastName } = user;
const [first, second] = arr;

function processInput(input) {
  return { left, right, top, bottom };
}
const { left, top } = processInput(input);
```

## 9. 比较和条件【推荐】

- 使用 === 和 !== 而不是 == 和 !=
- 布尔值使用简写，字符串和数字显式比较
- case 语句中使用大括号创建块级作用域
- 避免嵌套三元表达式

```javascript
// 好的示例
if (isValid) {
  /* */
}
if (name !== "") {
  /* */
}
if (collection.length > 0) {
  /* */
}

switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
}

// 错误示例
if (isValid === true) {
  /* */
}
if (name) {
  /* */
}
const foo = a ? b : c ? d : e; // 嵌套三元
```

## 10. 代码块和控制语句【必须】

- 多行代码块使用大括号包裹
- else 语句放在 if 块闭括号同一行
- 控制语句过长时每个条件放入新行，逻辑运算符在行开始

```javascript
// 好的示例
if (test) {
  return false;
}

if (test) {
  thing1();
} else {
  thing2();
}

if (foo === 123 && bar === "abc") {
  thing1();
}

// 错误示例
if (test) return false;

if (test) {
  thing1();
} else {
  thing2();
}
```

## 11. 空白和格式【必须】

- 使用 2 个空格缩进
- 花括号前放置空格，运算符左右各一个空格
- 控制语句左括号前放空格，函数调用和声明不放空格
- 逗号后面有空格，前面没有空格
- 文件结尾保留一个空行，行尾不留空格

```javascript
// 好的示例
function test() {
  const x = y + 5;
  const arr = [1, 2, 3];
  const obj = { clark: "kent" };
}

if (isJedi) {
  fight();
}

// 错误示例
function test() {
  const x = y + 5;
  const arr = [1, 2, 3];
  const obj = { clark: "kent" };
}
```

## 12. 命名规范【必须】

- 变量和函数使用驼峰命名法(camelCase)
- 类和构造函数使用帕斯卡命名法(PascalCase)
- 导出的常量可以使用全大写
- 避免使用前置或后置下划线

```javascript
// 好的示例
const userName = "john";
class UserManager {}
export const API_KEY = "secret";

// 错误示例
const user_name = "john";
const _privateVar = "secret";
class user {}
```

## 13. 分号【必须】

- 所有语句必须以分号结尾，不依赖自动分号插入(ASI)

```javascript
// 好的示例
const name = "example";
doSomething();

// 错误示例
const name = "example";
doSomething();
```

## 14. 类型转换【推荐】

- 使用 String() 进行字符串转换
- 使用 Number() 或 parseInt() 进行数字转换，parseInt 必须指定进制
- 使用 !! 进行布尔转换

```javascript
// 好的示例
const str = String(value);
const num = parseInt(inputValue, 10);
const bool = !!value;

// 错误示例
const str = value + "";
const num = +inputValue;
const bool = new Boolean(value);
```

## 15. 注释【必须】

- 使用 // 进行单行注释，使用 /\* \*/ 进行多行注释
- 注释前加一个空格
- 使用 FIXME 和 TODO 标记待办事项
- /\*\* \*/ 风格仅用于 JSDoc

```javascript
// 好的示例
// 这是单行注释
/* 这是多行注释 */
// TODO: 需要实现这个功能

/**
 * JSDoc 注释
 * @param {number} a 第一个数
 */
function add(a) {
  return a;
}
```

## 16. 其他重要规则

- 优先使用数组高阶方法(map, filter, reduce 等)代替传统循环
- 访问属性时使用点符号，变量访问属性时用中括号
- 链式调用超过两个方法时换行
- 建议使用尾随逗号
- 禁止定义了变量却不使用

```javascript
// 好的示例
const sum = numbers.reduce((total, num) => total + num, 0);
const isJedi = luke.jedi;
const prop = getProp("jedi");

$("#items").find(".selected").highlight();

const hero = {
  firstName: "Dana",
  lastName: "Scully",
};
```

# TypeScript 编码规范

## 1. 类【可选】

- 必须设置类成员的可访问性修饰符
- 类成员排序：static > instance, field > constructor > method, public > protected > private

```typescript
class Foo {
  public static count = 0;
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
```

## 2. 类型和接口【必须】

- 类型断言使用 as Type，禁止使用 <Type>
- 禁止给基本类型变量显式声明类型
- 优先使用 interface 而不是 type
- 接口中的方法使用属性方式定义

```typescript
// 好的示例
const foo = bar as string;
const num = 42; // 自动推断
interface User {
  name: string;
  getName: () => string;
}

// 错误示例
const foo = <string>bar;
let num: number = 42;
interface User {
  getName(): string;
}
```

## 3. 语法和模块【必须】

- 使用 optional chaining 替代 && 链式判断
- 禁止在 optional chaining 后使用非空断言
- 禁止使用 namespace，使用 ES6 模块
- 禁止使用 require，统一使用 import

```typescript
// 好的示例
console.log(foo?.a?.b?.c);
import Animal from "./Animal";

// 错误示例
console.log(foo && foo.a && foo.a.b && foo.a.b.c);
console.log(foo?.bar!);
namespace foo {}
const fs = require("fs");
```

## 4. 命名规范【推荐】

- 变量和函数使用驼峰法命名
- 导出的常量使用全大写下划线分割
- React 组件使用 Pascal 写法
- 类名和类型定义使用首字母大写

```typescript
// 好的示例
const foo = 123;
export const API_KEY = 123;
const MyComponent = <div />;
interface User {}
class User {}

// 错误示例
const FOO = 123;
export const foo = 123;
const myComponent = <div />;
interface user {}
```

## 5. Promise 处理【必须】

- 禁止对条件语句中 promise 的误用，需要用 await 获取返回值

```typescript
// 好的示例
async function foo() {
  if (await promise(1)) {
    // Do something
  }
}

// 错误示例
async function foo() {
  if (promise(1)) {
    // 恒为真
    // Do something
  }
}
```

## 应用原则

1. 【必须】级别严格执行，违反会导致构建失败
2. 【推荐】级别尽量遵循，特殊情况可以豁免
3. 【可选】级别作为参考，提升代码质量
4. 保持代码风格的一致性是最重要的原则