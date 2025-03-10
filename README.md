# Restaurant-App

A simple Restaurant App built with TypeScript to practice and improve my TypeScript skills. This app is designed to be used in the console.

## Description

This Restaurant App allows you to manage a menu of pizzas, place orders, and complete orders. It includes functionalities to add new pizzas to the menu, place orders for pizzas, and mark orders as completed. The app maintains a record of the cash in the register and the order queue.

## Usage

To run this app, follow these steps:

1. Compile the TypeScript file to JavaScript:

   ```sh
   tsc index.ts --lib es2015,dom
   ```

2. Run the JavaScript file:
   ```sh
   node index.mjs
   ```

## Example

Here is an example of how to use the app:

```javascript
import { getPizzaDetails } from "./index.js";

console.log(getPizzaDetails(7));
```

## Note

I chose not to include a `package.json` file because the purpose of this repository is to practice TypeScript skills. The app is intended to be run in the console thats why i used tsc index.ts --lib es2015,dom to compile the Typescript file
