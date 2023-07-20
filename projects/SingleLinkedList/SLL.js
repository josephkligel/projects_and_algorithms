class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {

    constructor(){
        this.head = null;
    }

    addFront(value){
        console.log("Adding Node to front...")
        let new_node = new Node(value);

        if(!this.head){
            this.head = new_node;
            return this;
        }

        new_node.next = this.head;
        this.head = new_node;

        return this;
    }

    removeFront(){
        console.log("Removing front Node...")
        this.head = this.head.next;
        return this;
    }

    printList(){
        console.log("Printing list...")
        let node = this.head;

        while(node){
            console.log(node);
            node = node.next;
        }
    }

    front(){
        console.log("Returning head value...")
        return this.head.data;
    }

}

// Main driver code
// Add 3 new nodes
SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
SLL1.printList();
// Remove two nodes
SLL1.removeFront();
SLL1.removeFront();
SLL1.printList();
// Print front of list
console.log(SLL1.front());
// Remove front of list
SLL1.removeFront();
// Returns null
SLL1.front();

