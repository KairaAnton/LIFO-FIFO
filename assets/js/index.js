"use strict";

import { LinkedList, LinkedListIterator, ListNode } from "./LinkedList.js";
import { Stack } from './Stack.js';

function checkBraces(string) {

  const roundBrackets = new Stack();
  const curlyBraces = new Stack();
  const squareBrackets = new Stack();

  if (string.length % 2 !== 0) {
    return false;
  }
  for (const brace of string) {

    switch (brace) {

      case "(":
        roundBrackets.push(brace);
        break;

      case ")":
        if (roundBrackets.isEmpty) {
          return false;
        }
        roundBrackets.pop();
        break;

      case "{":
        curlyBraces.push(brace);
        break;

      case "}":
        if (curlyBraces.isEmpty) {
          return false;
        }
        curlyBraces.pop();
        break;

      case "[":
        squareBrackets.push(brace);
        break;
      case "]":
        if (squareBrackets.isEmpty) {
          return false;
        }
        squareBrackets.pop();
        break;
    }
  }
  return squareBrackets.isEmpty && curlyBraces.isEmpty && roundBrackets.isEmpty;

}

console.log(checkBraces("{{}}[][][]()()"))



////////////////////////////////////////////////////

const list = new LinkedList("dytfuy", "htdtyf", "jhdytj", "yutfyj", "jgfkjhu");

console.dir(list);

////////////////////////////////////////////////////


const enterString = prompt("enter integers", "1234567890");


function noRepidesInRow(string){

  const listString = new LinkedList();

for (const i of string) {
  if (string[i] !== string[i - 1]) {
    listString.addNode(+i);
  }
}
return listString;
}
console.log(noRepidesInRow(enterString));


