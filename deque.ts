// deque.ts

class Deque<T> {
  private elements: T[] = [];

  pushFront(item: T): void {
    this.elements.unshift(item);
  }

  pushBack(item: T): void {
    this.elements.push(item);
  }

  popFront(): T | undefined {
    return this.elements.shift();
  }

  popBack(): T | undefined {
    return this.elements.pop();
  }

  size(): number {
    return this.elements.length;
  }
}

const deque = new Deque<number>();
deque.pushBack(1);
deque.pushFront(2);
deque.pushBack(3);
deque.pushFront(4);
console.log(deque.popBack()); // 3
console.log(deque.popFront()); // 4
console.log(deque.size()); // 2
