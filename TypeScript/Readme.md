# TypeScript Basics


- [TypeScript Basics](#typescript-basics)
  - [Installing and Configuration](#installing-and-configuration)
  - [Variables](#variables)
  - [Arrays](#arrays)
  - [Tuples](#tuples)
    - [Tuple Arrays](#tuple-arrays)
  - [Unions](#unions)
  - [Enums](#enums)
  - [Objects](#objects)
    - [Interfaces](#interfaces)
  - [Type Assertions](#type-assertions)
  - [Functions](#functions)
    - [Interfaces with Functions](#interfaces-with-functions)
  - [Classes](#classes)
    - [Access Modifiers](#access-modifiers)
  - [Generics](#generics)



## Installing and Configuration
- **install Typescript compiler** 

`npm install -g typescript`

- **Check Typescript compiler version**
`tsc -v`



- **How to compile TS to JS using TSC**
`tsc targetFile`





- **watch file**
`tsc --watch fileName`


where we in developmet and we don't need to compile yet  all errors will show in vscode 


- **SetUp Configuration File**
`tsc --init` which gonna create `tsconfig.json` file which can look a little bit intimidating cause it has lot of stuff most of it's commented out 

Be default typescript is gonna compile to ES5 ,we can change this behavior in config file 
to change the version of JS change the target in `tsconfig.json`







---
## Variables

TypeScript allows you to define variables with specific types:

```typescript
let id: number = 6;
let userName: string = "ubey";
let isActive: boolean = true;
let x: any = "hello";

// `any` type allows reassignment without type errors
x = true;
```

> **Types by inference** TS has some thing called Type by inference which mean that the vaiarable we define without giving it a `:type` will take the type of the first value 


> **any:** it can be any thing when declare something as any it will not give use any error when we are trying to assign a value of any type 


## Arrays

You can define arrays with specific types:

```typescript
// Array of numbers
let ids: number[] = [1, 2, 3, 4, 5];

// Array of mixed types using `any`
let arr: any[] = [1, "3", true];
```

## Tuples

Tuples allow you to define an array with fixed types and order:

```typescript
let person: [number, string, boolean] = [2, "ubey", true];
```

### Tuple Arrays

You can also create arrays of tuples:

```typescript
let employee: [string, number][] = [
    ["ubey", 2],
    ["udey", 3],
];
```

## Unions

Unions allow a variable to hold more than one type:

```typescript
let userId: string | number = 22;
userId = '323df';
```

## Enums

Enums allow you to define a set of named constants, either numeric or string-based:

```typescript
// Numeric enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}



// String enum
enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}


```

## Objects

You can define objects with specific types for each attribute:

```typescript
type User = {
    id: number,
    name: string
};

const userObject: User = {
    id: 1,
    name: 'ubey'
};
```

### Interfaces

Interfaces are similar to types but are more commonly used for objects and functions:

```typescript
interface UserInterface {
    readonly id: number,  // Read-only attribute
    name: string,
    age?: number  // Optional attribute
}

const user1: UserInterface = {
    id: 2,
    name: "noor"
};

console.log(user1.id);
```

## Type Assertions

Type assertions allow you to explicitly tell the compiler to treat a variable as a specific type:

```typescript
let cid: any = "1f";
let customerId = <number>cid;
let customerId2 = cid as number;
```

## Functions

You can define functions with specific parameter and return types:

```typescript
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(3, 3));

function log(message: string | number): void {
    console.log(message);
}

log("hello world from the log function");
```

### Interfaces with Functions

Interfaces can also be used to define function signatures:

```typescript
interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number) => x + y;
const sub: MathFunc = (x: number, y: number) => x - y;
```

## Classes

Classes in TypeScript can implement interfaces:

```typescript
interface PersonInterface {
    readonly id: number,
    name: string,
    age?: number,
    register(): string
}

class Person implements PersonInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register(): string {
        return `This person ${this.name} is registered now`;
    }

    showId(): number {
        return this.id;
    }
}

const mike = new Person(1, "mike");
console.log(mike.showId());
console.log(mike.register());
```

### Access Modifiers

- **Public**: Accessible everywhere (default).
- **Private**: Accessible only within the class.
- **Protected**: Accessible within the class and its subclasses.

```typescript
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }

    register(): string {
        return `This employee: ${this.name} is registered now`;
    }
}

const emp = new Employee(11, 'ubey', 'engineer');
console.log(emp.register());
```

## Generics

Generics allow you to create reusable components that work with multiple types:

```typescript
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["hello", "world"]);

// numArray.push("arar");  // This will cause a type error
```

---



