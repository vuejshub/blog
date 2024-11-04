---
icon: pen-to-square
date: 2022-01-09
category:
  - TypeScript
tag:
  - TypeScript
star: true
sticky: true
---

# TypeScript 中interface和type的区别

在 TypeScript 中，`interface` 和 `type` 都用于定义对象的形状（shape）或类型，但它们之间存在一些关键的区别和适用场景。了解这些区别有助于你根据具体需求选择最合适的工具。

### **1. 声明合并（Declaration Merging）**

- **Interface**：支持声明合并。如果你定义了两个相同名称的接口，TypeScript 会将它们合并成一个接口。这在你需要扩展一个库中的接口时非常有用。
- **Type**：不支持声明合并。如果你尝试定义两个相同名称的类型别名，TypeScript 会报错，因为它认为这是一个重复的定义。

### **2. 索引签名（Index Signatures）**

- **Interface** 和 **Type** 都支持索引签名，允许你定义一个对象可以拥有的键的类型，以及这些键对应的值的类型。

### **3. 映射类型（Mapped Types）**

- **Type**：支持映射类型，这是一种高级类型，允许你基于另一个类型来创建新类型。例如，你可以创建一个新类型，其属性是原类型属性名的字符串版本。
- **Interface**：不支持映射类型。

### **4. 继承（Inheritance）**

- **Interface**：支持继承，一个接口可以继承一个或多个其他接口，从而组合多个接口的功能。
- **Type**：虽然类型别名本身不支持继承，但你可以通过交叉类型（Intersection Types）来模拟继承的效果，即合并多个类型。

### **5. 泛型（Generics）**

- **Interface** 和 **Type** 都支持泛型，允许你定义灵活的组件，这些组件可以工作于多种类型的数据上。

### **6. 可用性**

- **Interface**：更适合定义对象的形状，特别是当你想利用声明合并或继承时。
- **Type**：更灵活，支持更复杂的类型操作，如映射类型、条件类型等。当你需要定义一些复杂的类型逻辑时，类型别名可能更合适。

### **7. 示例**

**Interface 示例**：

```javascript
interface User {    
    name: string;    
    age: number;
}
interface Admin extends User {
    role: 'admin';
}
```

**Type 示例**（使用交叉类型模拟继承）：

```javascript
type User = {    
    name: string;    
    age: number;
};
type Admin = User & {
    role: 'admin';
};
```

### **结论**

选择 `interface` 还是 `type` 取决于你的具体需求。如果你需要利用声明合并或继承，或者你的类型定义相对简单，那么 `interface` 可能是一个更好的选择。如果你需要更复杂的类型操作，如映射类型或条件类型，或者你想避免命名冲突，那么 `type` 可能更适合你。在实际开发中，这两种方式经常一起使用，以充分利用它们各自的优势。