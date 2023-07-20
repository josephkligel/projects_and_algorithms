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

    front(){
        console.log("Returning head value...")
        return this.head.data;
    }

    contains(value){
        let runner = this.head;

        while(runner !== null){
            if(runner.data === value){
                return true;
            }
            runner = runner.next;
        }

        return false;
    }

    length(){
        let runner = this.head;
        let count = 0;

        while(runner){
            count++;
            runner = runner.next;
        }

        return count;
    }


    display(){
        let runner = this.head;
        let lnklst = []

        while(runner){
            lnklst.push(runner.data);
            runner = runner.next;
        }
        
        console.log(lnklst.join(", "));
    }
}

let SLL1 = new SLL();
SLL1.addFront("one").addFront("two").addFront("three").display();