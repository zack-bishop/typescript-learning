# TypeScript Learning: Zack's Notes

##  Section 1: Getting Started.
### 1 Welcome to the Course
* brief introduction

### 2 What is TypeScript & Why Should You Use It?

* TypeScript = A JavaScript Superset 
* Browsers can’t execute it 
* Node.js can’t execute it 
* Tpescript compiles to JavaScript. 
* One big advantage of TypeScript: It adds types. 
* Basically, TypeScript gives you some new features / cleaner syntax that then gets compiled into mess / difficult / complex JS

### 3 Join Our Learning Community
* just an announcement to join their discord

### 4 Installing & Using TypeScript

* Shows an example.  
* With Vanilla JS, anytime you get `.value`, it’s always a string.
* `npm install typescript` install it globally.
* **Ran into some issues getting typescript installed, had to update node and npm and all that stuff**
  * **Updated node / npm**
  * **TS only works on node v12?**
  * **Tested projects just to make sure I didn't bork them.  We're good.**
* `tsc --version` Check it's version.  `tsc` is what you use to invoke TS commands
* installed TS extensions into PHPStorm. 
* `const num1 = document.getElementById("num1")!` <-- the `!` at the end tells TS that it will always find an element with that ID.
* `const numb2 = document.getElementById("num1")! as HTMLInputElement;` <-- Type casting.  oooo!
* `function add(num1: number, num2: number)` <-- Type casting on function params.  oooo!
* `tsc zack-ts.js` <-- compiles the TS
  * will log errors in terminal, but still compiles if error encountered.
* ` console.log(add(+input1.value, +input2.value));` <-- `+` converts the values to numbers?  
  * Don't think this is specific to TS, but is a JS thing.

### 5 Overview
* TypeScript = Makes writing clean, good code easier
* Main claim to fame is typecasting, hence the name
* You can use next-gen JavaScript, but compiles for older browser.  Kinda like Babel
* Includes Non-JS features, like interfaces or Generics <-- I feel like I sorta know what these are, look into more down the road.
* Meta-programming features like Decorations <-- no idea what these are.
* Rich Configuration Options <-- You can configure the compiler in a lot of ways.  Interesting.  Never really done anything like that before.

### 6 Course Outline
* Getting Started <-- In progress
* TypeScript Basics
* Compiler + Configuration
* Working with Next-Gen JS Code
* Classes & Interfaces
* Advanced Types & TypeScript Features
* Generics 
* Decorators
* Time to Practice - Full Project
* Namespaces & Modules
* Webpack & TypeScript
* Third-Party Libraries & TypeScript
* React + TypeScript & NodeJS + TyeScript 

### 7 How to Get the Most Out of the Course
* Just tips that were all common sense that don't necessitate notes.

### 8 Setting up a Code Editor / IDE
* Recommends using VScode.  Hard pass. Skipped.

### 9 Course Project.
* Basic setup of the Project we'll be working throughout the course.
* `npm init` <-- think this is the first I've run this before.
  * ran into an issue.  Couldn't run this because of my node version.  ran `nvm install v14`
* `npm install --save-dev lite-server` <-- `--save-dev` = dev only dependency
* `npm start` <-- created this command to run the `lite-server`
  * had to add the start command.


## Section 2

### 10. Module Introduction
* very brief intro, nothing worth noting

### 11. Using Types
* Core Types
  * `number`
    * Good for all numbers
    * Only one number type, no `int`, `float`, etc.
  * `string`
  * `boolean` <-- true / false
    * No 'truthy' / 'falsy' types, strictly true/false9-

### 12. TypeScript Types vs. JavaScript Types
* `function foo(n: number)` <-- set types in function declaration.
* TypeScript only helps with development, it doesn't change anything about Javascript at runtime

### 13. Important: Type Casting
* `console.log(typeof number1)` <-- Not sure if I used `typeof` operator before, noting it here for future use.
* `throw new Error('foobar')` <-- how you can output your own errors
* JavaScript is dynamically typed. 
* TypeScript is statically typed
* In very general terms, doing type checks in functoins is not the "TypeScript way", so we want to avoid it.  Instead, we want to try to use TypeScript's checks / hints to make sure the code you're compiling is clean. Example to avoid:

```
if (typeof n1 !== 'number') {
  // do something
}
```
* The core primitive types in TypeScript are always lowercase.  Not `Number`.  Instead `number`.

### 14. Working with Numbers, Strings & Booleans
* if a string is present in an equation, i.e. `(string + number1 + number2)`, the script will concatenate the numeric values instead of adding them.

### 15. Type Assignment & Type Interface
* Always explicitly assign types within function parameters, i.e. `param: type`.
  * The above is introduced TypeScript
* The reason you don't include a type when declaring variables is because of TypeScript's `Type inferrence`.
  * TypeScript does its best to figure out it's type when variables are declared.
  * You can do this `let variable: number = 2.8;`, i.e. include a type after the variable name, but is redundant and not considered a best practice because the value is being set when the variable is declared.
    * However, `let variable: number` is a good practice if it's value is not being set immediately.
* Checking types is **THE** core task of TypeScript. 

### Quiz 1: Understanding Types
* Got a 3/4.  The last question threw me off.

### 16. Object Types
* using `const person: object = {...}` to cast an object as a JavaScript object is limiting, as it sort of strips away your IDE's ability to code hint.
  * if you tried to access a property of the object above, it will yell at you regardless of whether the property actually exists or not.
* instead, use `const person: {} = {...}`, the `{}` is TypeScripts notation of "specialized object types."
  * within the `{}` you can define `key: type;` pairs, i.e.:
```
const person: {
    name: string;
    age: number;
} = {...}
```
* all that said, apparently it's better to just let TypeScript infere the type, i.e.:
```
const person = {...}
```

### 17. Nested Objects & Types <-- This section needs more review.  It's fuzzy in my brain.
* nesting is a possible:

```
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

console.log(product.details.title);
```


### 18. Array Types

### 19. Working with Tuples

### 20. Working with Enums

### 21. The "any" Type

### 22. Union Types

### 23. Literal Types

### 24. Type Aliases / Custom Types

### 25. Type Aliases & Object Types

### Quiz 2: Core Types & Concepts

### 26. Function Return Types & "Void'

### 27. Functions as Types

### 28. Function Types & Callbacks

### Quiz 3: Functions & Types

### 29. The "unknown" Type

### 30. The "never" Type

### 31. Wrap Up

### 32. Useful Resources & Links/