# typescript-learning


##  Section 1. 
### 1.1
* brief introduction

### 1.2

* TypeScript = A JavaScript Superset 
* Browsers can’t execute it 
* Node.js can’t execute it 
* Tpescript compiles to JavaScript. 
* One big advantage of TypeScript: It adds types. 
* Basically, TypeScript gives you some new features / cleaner syntax that then gets compiled into mess / difficult / complex JS

### 1.3
* just an announcement to join their discord

### 1.4

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

### 1.5