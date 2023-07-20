class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    addFront(val){
        // Create new Node from provided parameter val
        let new_node = new Node(val);
        // Check if LinkedList has a head. If not make the new Node the head
        if(!this.head){
            this.head = new_node;
            // Return LinkedList
            return this;
        }
        // Else, if LinkedList has a head, make the next pointer point to the current head
        new_node.next = this.head;
        // And assign the new Node to the head. Virtually adding the new Node to the front of the list
        this.head = new_node;
        return this;
    }
}