const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMinimum = function (head) {
    
    let prev = null;
 
let min= head;

    let curr = head;
while(curr!=null){
    if (curr.next != null && curr.next.data<= min.data) {
            min =curr.next;
            prev =curr;
        }
        
        curr=curr.next;
}
    
if(min !=head) {
    
        prev.next = min.next;
        
    }else {
        head = head.next
    }
    return head
};
