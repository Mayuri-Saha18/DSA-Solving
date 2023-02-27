const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
let current=head;
 let fast= head;
 
    for(let i=0;i<n;i++) {
        fast=fast.next;
    }
while(fast!=null) {
    
     fast=fast.next;
 current=current.next;
}
return current.data; 
}