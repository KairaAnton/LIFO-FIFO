"use strict";


class Stack {
  constructor(maxSize = 1000) {
    if (typeof maxSize !== "number") {
      throw new TypeError("size must be a number");
    }
    if (maxSize < 1) {
      throw new RangeError("must be a positive number");
    }
    this._maxSize = maxSize;
    this._size = 0;
  }
  get maxSize() {
    return this._maxSize;
  }
  get isEmpty() {
    return this._size === 0;
  }
  get size() {
    return this._size;
  }
  set size(value) {
    this._size = value;
  }
  push(value) {
    if (this.size >= this.maxSize) {
      throw new RangeError("Stack overflow");
    }
    this[this.size++] = value;
    return this.size;
  }
  pop() {
    if (this.isEmpty) {
      return;
    }
    const deletedElement = this[--this.size];
    delete this[this.size];
    return deletedElement;
  }
  peek() {
    if (this.isEmpty) {
      return;
    }
    return this[this.size - 1];
  }
}

export { Stack };