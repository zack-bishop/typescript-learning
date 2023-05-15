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

### 38. Understanding TypeScript Core Libs

### 39. More Configuration & Compilation Options

### 40. Working with Source Maps

### 41. rootDir and outDir

### 42. Stop Emitting Files on Compliation Errors

### 43. Strict Compliation

### 44. Code Quality Options

### 45. Debugging with Visual Studio Code

### 46. Wrap Up

### 47. Useful Resources & Links

