const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var reversePair = function (head) {
    
    let curnt=head;
    
    
    while(curnt !== null && curnt.next!== null){
        let temp=curnt.data
        
        curnt.data=curnt.next.data
        curnt.next.data=temp
        
        curnt=curnt.next.next
    }
    return head
};
