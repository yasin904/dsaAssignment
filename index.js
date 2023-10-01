//Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithSum(arr, targetSum) {
    const pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }
  const integerArray = [2, 4, 3, 1, 5, 6];
  const targetSum = 7;
  const result = findPairsWithSum(integerArray, targetSum);
  
  console.log(`Pairs with sum ${targetSum}:`);
  result.forEach(pair => {
    console.log(`(${pair[0]}, ${pair[1]})`);
  });
  
  //Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array
  
  function reverseArrayInPlace(arr) {
    const length = arr.length;
    const mid = Math.floor(length / 2);
  
    for (let i = 0; i < mid; i++) {
      const temp = arr[i];
      arr[i] = arr[length - 1 - i];
      arr[length - 1 - i] = temp;
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  reverseArrayInPlace(myArray);
  console.log(myArray); // Output: [5, 4, 3, 2, 1]
  [ 5, 4, 3, 2, 1 ]
  //Write a program to check if two strings are a rotation of each other
  
  function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const concatenatedStr = str1 + str1;
    if (concatenatedStr.includes(str2)) {
      return true;
    }
    return false;
  }
  const string1 = "waterbottle";
  const string2 = "erbottlewat";
  
  if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
  } else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
  }

  //Write a program to print the first non-repeated character from a string
  
  function findFirstNonRepeatedChar(str) {
    const charCount = new Map();
    for (const char of str) {
      if (charCount.has(char)) {
        charCount.set(char, charCount.get(char) + 1);
      } else {
        charCount.set(char, 1);
      }
    }
  
    for (const char of str) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  const inputString = "hello";
  const firstNonRepeatedChar = findFirstNonRepeatedChar(inputString);
  
  if (firstNonRepeatedChar !== null) {
    console.log(`The first non-repeated character in "${inputString}" is "${firstNonRepeatedChar}".`);
  } else {
    console.log("There are no non-repeated characters in the string.");
  }
  
  //Read about the Tower of Hanoi algorithm. Write a program to implement it
  
  function towerOfHanoi(n, sourceRod, auxiliaryRod, destinationRod) {
    if (n === 1) {
      console.log(`Move disk 1 from ${sourceRod} to ${destinationRod}`);
      return;
    }
    towerOfHanoi(n - 1, sourceRod, destinationRod, auxiliaryRod);
  
    console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);
  
    towerOfHanoi(n - 1, auxiliaryRod, sourceRod, destinationRod);
  }
  const numberOfDisks = 3;
  const sourceRod = 'A';
  const auxiliaryRod = 'B';
  const destinationRod = 'C';
  
  console.log(`Tower of Hanoi with ${numberOfDisks} disks:`);
  towerOfHanoi(numberOfDisks, sourceRod, auxiliaryRod, destinationRod);
 
  // Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression
  
  function postfixToPrefix(postfixExpression) {
    const stack = [];
  
    function isOperator(char) {
      return ['+', '-', '*', '/'].includes(char);
    }
  
    for (const token of postfixExpression.split(' ')) {
      if (!isOperator(token)) {
        stack.push(token);
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const newExpression = `${token} ${operand1} ${operand2}`;
        stack.push(newExpression);
      }
    }
    return stack[0];
  }
  const postfixExpression = '5 4 * 7 2 / +';
  const prefixExpression = postfixToPrefix(postfixExpression);
  console.log(`Postfix: ${postfixExpression}`);
  console.log(`Prefix: ${prefixExpression}`);

  class MyStack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function prefixToInfix(prefix) {
    const stack = new MyStack();
    const tokens = prefix.split(' ');
  
    for (let i = tokens.length - 1; i >= 0; i--) {
      const token = tokens[i];
      if (!isOperator(token)) {
        stack.push(token);
      } else {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExpression = `(${operand1} ${token} ${operand2})`;
        stack.push(infixExpression);
      }
    }
  
    return stack.pop();
  }
  
  const preExpression = '* + 2 3 4';
  const infixExpression = prefixToInfix(preExpression);
  
  console.log("Prefix Expression:", preExpression);
  console.log("Infix Expression:", infixExpression);
 
  //Write a program to check if all the brackets are closed in a given code snippet
  
  function areBracketsClosed(codeSnippet) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    for (const char of codeSnippet) {
      if (brackets[char]) {
        stack.push(char);
      } else if (Object.values(brackets).includes(char)) {
        const topBracket = stack.pop();
        if (brackets[topBracket] !== char) {
          return false; // Mismatched brackets
        }
      }
    }
    return stack.length === 0;
  }
  
  const codeSnippet = 'function foo() { if (true) { return [1, 2]; } }';
  if (areBracketsClosed(codeSnippet)) {
    console.log('All brackets are closed properly.');
  } else {
    console.log('Brackets are not closed properly.');
  }

  //Write a program to reverse a stack.
  
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      }
    }
  }
  
  function reverseStack(stack) {
    const reversedStack = new Stack();
    const originalStackArray = [];
  
    while (!stack.isEmpty()) {
      const item = stack.pop();
      reversedStack.push(item);
      originalStackArray.push(item);
    }
  
    const reversedStackArray = [];
    while (!reversedStack.isEmpty()) {
      reversedStackArray.push(reversedStack.pop());
    }
  
    return { reversedStackArray, originalStackArray };
  }
  
  // Example usage:
  const originalStack = new Stack();
  originalStack.push(1);
  originalStack.push(2);
  originalStack.push(3);
  originalStack.push(4);
  
  const { reversedStackArray, originalStackArray } = reverseStack(originalStack);
  
  console.log("Original Stack (Array):", originalStackArray);
  console.log("Reversed Stack (Array):", reversedStackArray);

  //Write a program to find the smallest number using a stack
  
  class MinStack {
    constructor() {
      this.dataStack = []; // Stack to store elements
      this.minStack = [];  // Stack to track minimum elements
    }
    push(item) {
      this.dataStack.push(item);
      if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(item);
      }
    }
  
    pop() {
      if (!this.isEmpty()) {
        if (this.dataStack[this.dataStack.length - 1] === this.minStack[this.minStack.length - 1]) {
          this.minStack.pop();
        }
        return this.dataStack.pop();
      }
      return null;
    }
  
    top() {
      if (!this.isEmpty()) {
        return this.dataStack[this.dataStack.length - 1];
      }
      return null;
    }
  
    getMin() {
      if (!this.isEmpty()) {
        return this.minStack[this.minStack.length - 1];
      }
      return null;
    }
    isEmpty() {
      return this.dataStack.length === 0;
    }
  }
  
  const minStack = new MinStack();
  minStack.push(3);
  minStack.push(5);
  minStack.push(2);
  minStack.push(1);
  
  console.log(`Minimum element: ${minStack.getMin()}`); // Output: 1
 