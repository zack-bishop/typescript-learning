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

### 16. Object Types <-- This section needs more review.  It's fuzzy in my brain.
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

### 17. Nested Objects & Types 
* Nesting objects is possible and very easy:

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
* TypeScript supports any JavaScript arrays.
* TypeScript will detect/infere their types, i.e. `['sports', 'cooking']` will be cast as `string[]`.
* Explicitly set it: `let favoriteActivities: string[]`. 
* Mixed arrays: `let mixedArray: any[]`.
  * Don't use too often, as having mixed arrays removes the benefits that TypeScript provides.
* Wow.  Why did I not know you can do a loop like this in regular JS: `for (const item of object.items) {...}`?
  * When iterating through a loop, TypeScript will infer the item's type.  For instance, with a string you could do `item.toUpperCase()`. 

** Note: It's really interesting how the presenter keeps mentioning things to the effect of "Don't stricktly type cast things, instead let TypeScript infer / do everything for you."  Dunno how I feel about that.

### 19. Working with Tuples
* WTF is a Tuple?
* A `Tuple` is an array with a fixed length and type?  is a `Tuple` limited to only two values?
* Example `role: [2, 'author']`.  It's almost like a `key: value` pair.  In this example, the 2 is akin to the `ID` of `author`.
* Looks like there's some potential issues with using `Tuples`.  For instance you could `person.role[1] = 10`, or `person.role.push('admin')`
* When using Tuples is when you'd want to explictly cast an object, i.e.:

```
const person: {
  name: string;
  age: number;
  role: [number, string]';
} 
```

* if explicitly declared like above, then `person.role[1] = 10` would fail.
* however, pushing would still "work", i.e. `person.rol.push('admin')` because apparently you're allowed to push to tuples.

### 20. Working with Enums
* Are similar to tuples.
* Enum <-- only exists in TypeScript
* Is useful when you want to do essentially a "key value pair", but not in a array
* Declare it like this: `enum Role { ADMIN, READ_ONLY, AUTHOR};`
* Access it like this: `Role.ADMIN`
* Get when you need something human readable that maps to another value.


### 21. The "any" Type
* Doesn't tell TypeScript anything.
* TypeScript won't yell at you for using it.
* But, it also strips away the core advantages of using TypeScript.  
* Use it as a fallback when you don't know what kind of data you'd be getting.

### 22. Union Types
* Can be used in function parameters if you want to accept two or more types `function foobar(input1: number | string) {...}`;
* TypeScript doesn't like the `+` operator when used with union types.  It will yell at you, but it will still work.
* You'll most likely have to do some type checks, i.e. `if( typeof X === 'number')` when working with Union Types

### 23. Literal Types
* Similar to Union Types in appearance: `function( resultConversion: 'as-number' | 'as-text' );`
* This seems pretty handy!
* Basically, it will lock you into only using a predetermined list of strings instead of any old string.
 
### 24. Type Aliases / Custom Types
* Lets you define your own type for TypeScript to use.
* Handy to use with Union and Literals

```
type Combinable = number | string;
type ConverstionDescription = 'as-number' | 'as-text'

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescription
) {
  ...
}
```


### 25. Type Aliases & Object Types
* Also type aliases are handy for very complex object types.
* Seems like these are great for complex and/or repetitive things.

### Quiz 2: Core Types & Concepts
* Missed question #2.  I always get confused with arrays and objects.  Arrays use `[]`.  Objects use `{}`.

### 26. Function Return Types & "Void'
* Define a return time by: `function foobar(x: number, y: string): boolean {...}`.
* In general, unless you have a good reason to define the return type, you should let TypeScript infer the return type.
* **Note: Starting to see a trend here: "Just Let TypeScript Do It's Thing"
* you can use a `:void` as a return type for functions.     

### 27. Functions as Types
* Apparently in JS, you can do this:
```
function add(x, y){...};

let functionVariable = add; //<--- this creates a "pointer" to the `add` function.

functionVariable(x, y); // <-- Then, you can call the "variable" like you would the orginial function.  Nuts. 
```
* The above is problematic because TypeScript will find the following as valid:

```
function add(x, y){...};

let functionVariable = add; 
functionVariable = 5;

functionVariable(x, y); // <-- This will succesffully build, but will throw a console log error.` 
```

* One step in the right direction: `let functionVariable: Function` <-- setting the type for this variable as `Function`.
* This still could cause problems because `Function` might be too generic.  
* You can use function types to be more precise: `let functionVariable: (a:number, b:number) => returnType`
* **Question: Can you make a type alias for the above?

### 28. Function Types & Callbacks
* I always sucked with the concept of callback function.
* Callbacks are what you want to do after the function finishes.
* Two things I noted:
  * `_cb` <-- My IDE liked added the underscore to make the TypeScript infer correctly.
  * My IDE recommended I drop the `()` around the callback function `result`:
```
addAndHandle( 10, 20, result => {...});
```

### Quiz 3: Functions & Types
* Missed a question about what the callback function would return.
* Missed a question about the types.  I got it wrong, because I was assuming they meant literally `Function` as the type instead of the precise `(x, y) => type` function type.

### 29. The "unknown" Type
* Kind of sounds like `any`.  
* The main difference is that if you tried to assign a variable with a type of `unknown` to a `string`, TypeScript will yell at you.  If you use `any` however, TypeScript will let it proceed.   This is because `any` lets you do whatever you want.  Where as using `unknown` is a bit stricter.
* Using `unknown` will require you to do type checks to assign an `unknown` value to a `string`.
* while the above is helpful, it's better to use a union type if you aware of potential types.  In other words, if the value would be either a string or a number, use `string | number` instead of `unknown`.

### 30. The "never" Type
* the `Never` type is used when a function does not return ever.  Basically, if the function is meant to crash the script, such as with error messaging, you'd set the return of a function to `: never`.

### 31. Wrap Up
* My thoughts: 
  * learned Tuples were a thing, 
  * Union Types seem very useful
  * Type Aliases seem very useful

### 32. Useful Resources & Links
* just included links to project files. 

## Section 3: The TypeScript Compiler (and its Configuration)

### 33. Module Introduction
* just introduced the module.  
* Sounds like this is just going to be about how to set up NPM

### 34. Using "Watch Mode"
* You can watch a file with `tsc filename.ts --watch` or `tsc filename.ts -w`
* You can close it with `CMD + C`.

### 35. Compiling the Entire Project / Multiple Files
* `tsc --init` <-- takes over the project.  adds tsconfig.json
* after that, you can just run `tsc` to compile the project.
* `tsc -w` or `tsc --watch` <-- watches all the TS files.

### 36. Including & Excluding Files
* use `@import filename`
* at the end of the `tsconfig.json`, you can add `exclude` files you don't want to include in the complied TS. 
  * Works with wildcards `**/*.dev.ts`
  * you'll want to exclude `node_modules`
    * Buuuut it's excluded by detault. But if you update `exclude`, you'll need to include `node_modules`
  * `include` <-- if you use it, these are the __ONLY__ items that will be included within the compiled files

### 37. Setting a Compilation Target
* This affects how the files are treated. 
* `tsconfig.json => "target"`: You can set this to which version of JS you'd like TypeScript to output.

### 38. Understanding TypeScript Core Libs
* `tsconfig.json => "lib"`: This affects what libraries are available to TypeScript
  * If commented out, this will default to some some options determined the `target` setting and sets all DOM APIs as available. 
  * default setup:
```
"lib": [
  "dom",
  "es6",
  "dom.iterable",
  "scripthost"
]
```

### 39. More Configuration & Compilation Options
* `allowJs`: allows you to include regular javascript files
* `checkJs`: error reporting

### 40. Working with Source Maps
* helps with debugging and development
* Allows browser to load and read the `.ts` files when using the console log.
* Apparently Chrome allows you to add break points in the `.ts` files.

### 41. rootDir and outDir
* `rootDir`: Allows you to set the root directory of your TS project files. 
  * i.e. `src/ts` <-- if you wanted to keep your typescript files in an assets folder
* `outDir`: the directory you'd like to output the compiled files into
  * i.e. `dist/js`<-- if you wanted the output in the special directory.
* `downlevelIteration`: Set to true if you want your code to work in older browsers.

### 42. Stop Emitting Files on Compilation Errors
* `noEmitOnError`: Controls whether or not the JS file gets compiled when TypeScript encounters an error.  If set to `true` errors will prevent JS from compiling.

### 43. Strict Compilation
* `noImplicitAny`: I understand this controls something related to `any`, but review this later as it's a bit fuzzy
* `strictNullChecks`: This is how you inform TypeScript how to handle potential null values.  A good example of this is `const button = document.querySelector('button);`.  Normally, you'd have to include a `!` at the end to tell TypeScript that this thing will exist.  But if you enable this option, you wouldn't have to.
  * you need an iffy check to get around this.  i.e. `if(button) {...}` 
* `strictFunctionTypes`: Niche usage.  Advanced setting.
* `strictBindCallApply`: affects how you bind, call, and apply things.
  * `clickHandler.bind()`<-- `.bind` confuses me.  What does `.bind` do?  You use `.bind` to pass things into other functions?
```
const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log('Clicked! ' + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!")); //<-- .bind here is how you pass stuff to the clickHandlder function?
}
```
* `strictPropertyInitialization`: Deals with classes?
* `noImplicitThis`: Related to how `this` works in functions, maybe?
* `alwaysStrict`: Adds `use strict;` to files.  What does this do?

### 44. Code Quality Options
* `noUnusedLocals`: Enabling this will remind you to make sure every variable gets used.  TypeScript can only do this for local variables in functions
* `noUnusedParameters`: Enabling this will force you to use all the function parameters. 
* `noImplicitReturns`: Will give you an error if a function sometimes returns something, sometimes it doesn't.

**NOTE: It looks like there's a lot more options in `tsconfig.json` than is in the video.

### 45. Debugging with Visual Studio Code
The following are VS Code plugins.  Not paying too much attention to this section as I use PHPStorm.
* `ES Lint`
* `Prettier`
* `Debugger for Chrome`

### 46. Wrap Up
* nothing note worthy

### 47. Useful Resources & Links
These links might also be interesting:

* tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
* Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
* VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging

## Section 4: Next-generation JavaScript & TypeScript

### 48. Module Introduction
* This module is about newish features of ES6.

### 49. "let" and "const"
* [https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)
* `const`: Constants, cannot be changed. 
  * One exception is if the `const` is an array or object.  You can `.push` to arrays or objects.
* `let`: A variable that can be changed, very similar to `var`.    
* Why no use `var`?
  * `var` has weird scope.  
  * `let` has a more appropriate, easier to predict scope called `block scope`

### 50. Arrow Functions 
* I've always been confused by this.  Looking forward to someone explaining it to me.
* `(a: number, b: number) => {}` is the same as `function(a: number, b: number) => {}`
```
// The following are all the same.

function(a: number, b: number) {
  return a + b;
}

(a: number, b: number) => {
  return a + b;
}

(a: number, b: number) => a + b; // has an implict return statement 
```
* There's some additional ways to shorten it, but that's making my brain hurt.

### 51. Default Function Parameters
* `const add = (a: number, b: number = 1) => a + b;` <-- add a `= value` to the parameter to give it a default value and make it optional. 
  * Just like PHP, the optional parameters must come last. 

### 52. The Spread Operator (...)
* the spread operator "speads out" an array.  For instance:
```
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies) // <-- this will add all the items to the activeHobbies array.
```
* another usage:
```
const copiedPerson = { ...person } // <-- this will create a new object of an existing object instead of just creating a reference of it.
```

### 53. Rest Parameters 
* kind of related to spread operator.
```
const add = (...numbers:number) => { //<-- this will allow you to add as many parameters as you want to a function.
  return numbers.reduce((curResult, curValue) => {
    return curResults + curValue;  
  }, 0);
}
```
* `.reduce()` looks interesting, learn more about it.

### 54. Array & Object Destructuring
* For arrays: `const [ hobby1, hobby2, ...remainingHobbies] = hobbies` <-- this pulls out hobbies for `hobby` and `hobby2`, then the remaining hobbies get lumped together in `remainingHobbies`.  
  * This respects the order of the items in the originial array.  i.e. `hobby1 = hobbies[0]`, `hobby2 = hobbies[1]`, etc.
* For objects: `const { firstName, age, } = person;` <-- this pulls out specific properties of an object.  
  * This doesn't care about the order of the object.
  * You can rewrite the name of the property in the new `const` like this `const { oldName: newName } = person`

### 55. How Code Gets Compiled & Wrap Up
* This is just a reminder that you can dictate which version of JavaScript you'd like your code to be compiled into.

### 56. Useful Resources & Links
* Just contained links to the project files.

## Section 5: Classes & Interfaces

### 57. Module Introduction
* Quick intro over what we'll covering.

### 58. What are Classes?
* OOP => Object-oriented Programming
  * Work with (real-life) Entities in your Code
* Difference between `Objects` and `Classes`?
  * `Objects` -> Concrete things we work with in code.
    * `Objects` -> instances of a class
  * `Classes` -> Blueprints for Objects
    * Classes define what objects look like, which properties and methods they have.
    * Exist to speed up the creating of objects.  
    * Make it easier to create multiple similar objects

### 59. Creating a First Class
* use `class` to define a class

```
class Department { // use class to define a class
    name: string; // this is a poperty of the class, don't have to use const or let
    constructor(n: string) { // constructor method of class.
        this.name = n;
    }
} 

const accounting = new Deparment('Accounting'); // how a new instance of the class is created.
```

### 60. Compiling to JavaScript
* This video shows how TypeScript gets compiled
* In `ES6`, the JS looks pretty similar
* For `ES5`, the JS uses older workarounds

### 61. Constructor Functions & The "this" Keyword
* `this` usually refers to the thing that's responsible for calling the method.
* In general, if you're using `this` in a method within a class, it's a good idea to include it as a parameter, i.e.:

```
describe(this: Department) {
  console.log('Department: `, this.name);
}
```

### 62. "private" and "public" Access Modifiers
* use `private` to make a property within a class editable only by methods within that class. 
* `public` properties are accessible from outside as well.
* `private` properties are new.  They're introduced in TypeScript.
* In general `private` helps you to keep your code cleaner.

### 63. Shorthand Initialization
* you can create properties on a class within the constructor.
```
constructor(private id: string, private name; string) {}
```
replaces
```
private id:  string;
private name: string;

constructor(id: string, name: string) {
  this.id = id;
  this.name = name;
}
```
* New stuff: 
```
console.log(`Department (${this.id}): ${this.name}`);
```

### 64. "readonly" Properties
* `readonly` is useful if the property never needs to be changed.
  * Probably will be useful for `id`s.
* **NOTE: look into .prototype** this is something I've needed to do for years.

### Quiz 4: Class Basics
* Aced that shit.

### 65. Inheritance
* use `extends` to extend a class.
* When extending a class, if you overwrite the constructor, you have to use `super()` inside the constructor.
  * You have to pass the parameters that the original constructor required through super, i.e. `super(id, name)`.
  * `super()` has to come first before any `this` usages.

### 66. Overriding Properties & The "protected" Modifier
* You can override Properties and Methods. 
* However, `private` methods and properties are not available when extending a class.
* `protected` => it is like `private`, but is available to classes that extend from the original. 

### 67. Getters & Setters
* `get` => use this modifier to write a function that gets properties of the class.
  * Useful when a property is set to `private`
* `set` => use this modifier to write a function that sets a property
  * What's interesting is you can use the same name for get and set properties.
* both `get` and `set` are accessed like properties, not methods
  * In other words, never use `()` when trying to access it

### 68. Static Methods & Properties
* `static` => use this modifier to access properties and methods without having to declare a new instance of it.
  * i.e. `Math.PI` <-- you didn't have to write `new Math` to access the PI method.
  * One thing to note: if a property or method is static, then it can't be accessed by using `this` within the class itself.

### 69. Abstract Classes
* `abstract` => used when on the base class to define a method or property and then force classes that extend this class to overwrite it. 
  * If you set a method to `abstract`, the whole class will need the `abstract` keyword.
  * Useful if you want make sure any inherited classes use the same functionality / properties.
  
### 70. Singletons & Private Constructors
* `singleton` => use this if you want only one instance of a class. to use it:
  * Set the constructor to `private`.
  * Set an `isntance` property on the class.
  * Set a method `getInstance` inside the class that checks if that property is set
    * if it's set, return the property
    * If it's not set, create a new instance and return it. 
  * Outside of the class, to get the instance, use `Object.getInstance`
  * This is pretty confusing.
  
### 71. Classes - A Summary
* review of the classes lectures.

### Quiz 5: Classes
* Missed a question regarding inheritance.  It was confusingly worded.
### 72. A First Interface
* interfaces describe the structure of an object.
* `interface` only exists in TypeScript.
* Appear to be very similar to custom types. Let's you rough out an object's structure / properties.

### 73. Using Interfaces with Classes
* Interfaces can only be used to describe the structure of an object.
* Can you use union types within an interface? Answer: nope!
* The main advantage of using an interface is clarity. 
* Interfaces can be implemented inside a class
* `class Person implments Greetable{}`
* interfaces are used to share functionality across classes
  * similar to abstract classes
  * Difference is that interfaces don't have any implementation details at all
  * Abstract classes can have some implementation details
  * classes can implement more than one interface.

### 74. Why Interfaces?
* useful when you have a certain set of functionalities that you want shared amoung classes.
* useful to reinforce structure

### 75. Readonly Interface Properties
* `readonly` is the only modifier you can use on properties within interfaces

### 76. Extending Interfaces
* Interfaces can extend other interfaces. 
* This is a useful way to include and build upon common functionality.

### 77. Interfaces as Function Types
* Since functions are essentially objects, you can use interfaces with functions.
```
interface AddFn {
  (a: number, b: number): number // () contains the arguments, : number is the return type
}
```

### 78. Optional Parameters & Properties
* You can include option properties like this:
```
interface Named {
  readonly name: string;
  outputName?: string // the ? makes it optional
}
```
* You can mark methods as optional like this:
```
interface Named {
  myMethod?(){...} // the ? comes before the paranethesis. 
}
```
* You can include option properties and methods in classes (I wonder if this is limited to classes that extend the interfaces)

### 79. Compiling Interfaces to JavaScript
* Interesting.  Interfaces don't get compiled. 
* Interfaces are pure development feature.

### Quiz 6: Interfaces
* aced that shit

### 80. Wrap Up
* Interfaces = Pure TypeScript

### 81. Useful Resources & Links.
These links might also be interesting:

* More on (JS) Classes: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* More on TS Interfaces: [https://www.typescriptlang.org/docs/handbook/2/objects.html](https://www.typescriptlang.org/docs/handbook/2/objects.html)

## Section 6: Advanced Types

### 82. Module Introduction
* brief introduction to project

### 83. Intersection Types 
* you can use two types when instaniating a thing
```
type Admin = {...};

type Employee = {...};

type ElevatedEmployee = Admin & Employee;

```

* this is interesting:
```
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
```
* In the above, the intersection would be numeric, meaning Universal would be of type `numeric` since `numeric` was the only one present in both (need to confirm this)

### 84. More on Type Guards
* A way to check for a property when the type of an object is unclear:
```
if('privileges' in emp) {...}
```
* `instanceof` <= good way to check the type of an object / class.  is in vanilla JavaScript
```
if(vehicle instanceof Truck) {...}
```

### 85. Discriminated Unions
* basically, you include a literal type (i.e. `type: 'bird'`) when using unioned interfaces
* This type can be used to as a type guard

```
interface Bird {
  type: 'bird',
  ...
}

interface Horse {
  type: 'horse,
}

type Animal = Bird | Horse;

function foo(animal: Animal) {
  switch(animal.type) {
    case 'bird':
      ...
    case 'horse:
      ...
  }
} 
```

### 86. Type Casting
* Type casting is useful when getting elements from the DOM. 
* TypeScript doesn't know what anything about the markup.
* Two ways to do this:
  * `const input = <HTMLInputElement>document.getElementById('input')!;` <-- might clash with React
  * `const input = document.getElementById('input')! as HTMLInputElement;` <-- doesn't clash with react
* **Reminder: `!` after an expression tells TypeScript it will never yield null**
* Interesting Syntax:
```
const input = document.getElementById('input')! as HTMLInputElement;

if(input) {
  (input as HTMLInputElement).value = 'Hi there!';
}
```

### 87. Index Properties
* Index Types: Allows us to be more flexible.
* Good for instances where you don't know the number of properties you'll have.
```
interface ErrorContainer {
  [prop: string]: string 
}
```
* In the above, `[prop: string]` <-- this means you don't know how many props you'll have but they'll have a name that's a string.
* In the above, `: string` <-- this defines the type of the properties.
* You can still add other props, but they must be of the same type as the index type.

### 88. Function Overloads
* Define multiple functional parameters.
```
function add(a: number, b: number): number;
function add(a: string, b: string): string {...}
```
* in the above, you can basically declare the function twice with different parameters / return type.
  
### 89. Optional Chaining
* Not sure something is defined, use the optional chaining character: `?`
* `console.log(fetchedUserData?.job.title);`
* `foo?.bar`<-- the chaining operator checks the thing in front of the question the mark. 

### 90. Nullish Coalescing
* `const storedData = userInput ?? 'DEFAULT'`<-- the double checkmarks checks to see if the value is `null` or `undefined`.  an empty value, i.e. `userInput = ''` would pass. 
* This is useful if you want to keep that empty value and not overwrite it.

### Quiz 7: Advanced Types
* Missed a question about typecasting.

### 91: Wrap up
* Wrapping up

### 92: Useful Resources & Links
* These links might also be interesting:
* More on Advanced Types: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

## Section 7: Generics

### 93. Module Introduction
* Intro

### 94. Built-in Generics & What are Generics
* Arrays are a type of "Generic"
* Anytime you see this syntax `Array<T>` you're dealing with a generic.
* `Promize<string>` is another Generic Type
  * You suck at Promises Zack, research them.
* In general, using generics will give you more type safety.

### 95. Creating a Generic Function
* WTF is `Object.assign`?
  * `Object.assign` <-- merges objects
```
function merge<T, U>(objA: T, objB: U) {...}
```
* the above is useful because it gives more information about the objects passing into the function.
* This section was as clear as mud to me.

### 96. Working with Constraints
```
function merge<T, U>(objA: T extends object, objB: U extends object) {...}
```
* Extending the generic types in the above will make your functions more robust.

### 97. Another Generic Function
* This video really confused me.  He created an interface that has a `length` property.  So if he passes in a string or an array -- which already have a length property -- JS will just apparently convert it for him? 

### 98. The "keyof" Constraint
```function extractAndConvert<T extends object, U extends keyof T>(...)```
* I feel like this is very useful albeit very esoteric.  
 
### 99. Generic Classes.
```
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

// Use the generic storage class to create new storage classes 
const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();

```
* so much to unpack in the above.
* **note: Look into the difference between primitives and reference values**.
### 100. A First Summary
* Generics vive us flexibly plus type safety.

### 101. Generic Utility Types 
* [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
* Some examples
  * `Partial` <-- useful to do things "step by step" by setting all the properties to being optional. 
    * `let courseGoal: Partial<CourseGoal> = {}`
    * Can't return partials, need to convert them when ready to return it
  * `Readonly` <-- 
    * `const names: Readonly<string[]> = [...]`
    * WTF is `.pop()`? You can remove something with it?  Googled it.  Sounds like you can use this to remove the last element in an array.

### 102. Generic Types vs. Union Types
* Generic types are a bit stricter when it comes to types.

### Quiz 8: Generics
* Aced that shit

### 102. Useful Resources & Links.
*Generics: https://www.typescriptlang.org/docs/handbook/generics.html

## Section 8: Decorators
### 104. Module Introduction
* Decorators are more for other developers working on the code. 
* more for "meta programming"
### 105. A First Class Decorators
* updates to `tsconfig.json` to use decorators
  * `tsconfig.json` to `ES6` 
  * `experimentalDecorators: true`
* decorators start with a capital letter

```
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
```

### 106. Working with Decorator Factories.
* Here's how you can make these more flexible:
```
function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
```

### 107. Building More Useful Decorators
* This section confused me.  At first they said that decorators were meta programming.  However, the examples are writing a bunch of content to the DOM. 
* The "line in the sand" is that we're writing the decorators for other developers? 
### 108. Adding Multiple Decorators
* Render bottom up
### 109. Diving into Property Decorators
* one thing to note: Decorators will run when JS is ran, not necessarily when the class in instantiated.
```
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;
}

```
### 110 Accessor & Parameter Decorators
```
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

```
### 111. When Do Decorators Execute?
* Decorators on a class execute when you define a class.
* Decorators are basically fired when things are defined, which will allow you to set up things before the user does stuff / does stuff behind the scenes.

### 112. Returning (an changing) a Class in a Class Decorator

### 113. Other Decorator Return Types

### 114. Example: Creating an "Autobind" Decorating.

### 115. Validation with Decorators - Fist Steps

## Section 9: Practice Time! Let's build a Drag & Drop Project
### 121. Module Intro

### 122. Getting Started
* `<template>` <-- interesting HTML tag, look into it
  * Dig the usage of this.  Basically, you can include this tag and modern browsers know not to render it.
  * instead, it can be targeted via Javascript and used within Apps
* `HTMLTemplateElement` <-- new type
* `HTMLDivElement` <-- new type
* Question: When should you use `<HTMLElement>` vs `as HTMLElement`
* `document.importNode()` <--- new JS command
* `this.hostElement.insertAdjacentElement` <-- new JS command
* `importedNode.firstElementChild` <-- new JS

### 123. Interacting with DOM Elements
* `this.element.id = 'user-input';` <-- huh.  In the past, I feel like I had to do something like `element.attr('id) = 'something'`
* This video has a good example of when `this` breaks
* Solution: `this.submitHandler.bind(this)` <-- God, you ugly JS

### 124. Creating & Using an "Autobind" Decorator
* useful example of a decorator
* Need to circle back to decorators.

### 125. Fetching User Input 
* pretty straightforward section.  Nothing to note here.

### 126. Creating a Re-Usable Validation Functionality
* `isValid = isValid && validatableInput.value.toString().trim().length !== 0;`<-- the `isValid = isValid && XYZ` syntax confuses me a bit.

### 127. Rendering Project Lists
* `${variable}` <-- need to look into when to use this more, forget what it's called.

### 128. Managing Application States with Singletons
* this section confused the crap out of me.
* Research more about `state management`.
* so much to unpack with this video!
* `for (const listernFn of this.listeners) {...}` <-- not sure if I've seen this syntax before
* `.slice()` <-- I know I've seen this, but I've forgotten about it before.
* dang.  The author uses `any` all over the place.  Thought it was supposed to be bad?

### 129. More Classes & Custom Types
* Need to revisit what an `enum` is

### 130. Filtering Projects with Enums
* I really need to master the function shorthand.
### 131. Adding Inheritance & Generics
* `Component` <-- common term for UI components in react and angular
* `super()` <-- need to use this when extending abstract classes
* `protected` <-- similar to `private` but can be overwritten

### 132. Rendering Project Items with a Class
* I always struggle with the inherited properties.
* in this example, it took me awhile to recall that when a class extended the `Component` class, it didn't need to insantiate the `element` property.
* look into why `new ProjectItem(this.element.querySelector('ul')!.id, projectItem);` renders correctly.  I don't udnerstand how it just creates a new element and it shows up

### 133. Using a Getter
* `template literals` <-- this is the specific term for `${this.variable}` usage;

### 134. Utilizing Interfaces to Implement Drag & Drop
* `implements` <-- What's the difference between `implements` and `extends`?
* This is novel and interesting.  or is it interestingly novel?  Novelly interesting?

### 135. Drag Events & Reflecting the Current State in the UI
* really need to figure out that `autobind` decorator.

### 136. Adding a Droppable Area
* `.dataTransfer` <-- another new thing to research
* `.setData` <-- Another thing to research.
* Learning a lot about draging / dropping.  Refer to this section in the future if you need to use these functions

### 137. Finishing Drag & Drop
* `.find` <-- another usefule JS thingie
* `.slice()` <-- I know I've mentioned this one before, but you need to look into this one again.

### 138. Wrap Up
* nothing noteworthy

### 139. Useful Resources & Links
* [More on Drag & Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

## Section 10: Modules & Namespaces
### 140. Module Introduction
* Just a quick intro

### 141. Writing Module Code - Your Options
* Options to split code up
1. Namespaces & File Bundling
   * use "namespace" code syntax to group code
   * per-file or bundled compilation is possible (less imports to manage)
2. ES6 Imports / Exports
   * Modern JS supports this out of the box
   * Use EX import / export syntax
   * per-file compilation but single <script> import

### 142. Working with Namespaces
* `namespace DDInterfaces {...}` <-- namespacing stuff goes inside
* `export` <-- this keyword makes stuff inside of namespace available outside of file
* `/// <reference path="drag-drop-interfaces.ts" />` <-- this is some ugly-ass import
* This shit seems wonky. 
* 

### 143. Organizing Files & Folders

### 144. A Problem with Namespace Imports

### 145. Important: Use Chrome or Firefox

### 146. Using ES Modules

### 147. Understanding various Import & Export Syntaxes

### 148. How Does Code in Modules Execute?

### 149. Wrap Up

### 150. Useful Resources & Tips

## Section 11: Using Webpack with TypeScript

## Section 12: 3rd Party Libraries & TypeScript

## Section 13: Time to Practice!  Let's build a "Select & Share a Place" App (incl. Google Maps)

## Section 14: React.js & TypeScript

## Section 15: Node.js + Express & TypeScript

## Section 16: Course Roundup



