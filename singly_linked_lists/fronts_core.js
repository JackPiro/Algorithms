class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    
    removeFront() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    front() {
        if(this.head) {
            return this.head.data;
        } else {
            return null;
        }
    }
}

let sll = new SLL(); 

sll.addFront(18); 
console.log(sll.front()); 

sll.addFront(5);
console.log(sll.front());

sll.removeFront()
console.log(sll.front());


