const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {

let currnt=head;
    let prev=null;

let next= currnt;
    while(currnt!==null)  {
        
    next=currnt.next;
    currnt.next =prev;
        
    prev = currnt;
    currnt=next;
    
}
    head=prev;
return head;  
}

