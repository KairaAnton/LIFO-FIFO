"use strict";

export class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor(...value) {
        this.head = null;
        this.length = 0;

    for (const item of value){
        const node = new ListNode(item);
        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    }

    addNode(value) {
        const node = new ListNode(value);
        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    getNodeByIndex(index) {
        if (this.length === 0 || index < 0 || index > this.length) {
            throw new RangeError("Not in list");
        }
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }

    [Symbol.iterator]() {
        return new LinkedListIterator(this);
    }
}

export class LinkedListIterator {
    constructor(list) {
        this.iterable = list.head;
    }
    
    next() {
        if (this.iterable) {
            const value = this.iterable.value;
            this.iterable = this.iterable.next; 
            return {
                value,
                done: false,
            };
        }
        return { done: true };
    }
}
