"use strict";

import { ListNode, LinkedList, LinkedListIterator } from "./LinkedList.js";
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




const list = new LinkedList("dytfuy","htdtyf","jhdytj");

console.log(list);
