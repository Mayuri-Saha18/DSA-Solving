const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    
    let revHead = reverseLL(head);

let carry = 1;
    
let curr=revHead;

    while(carry >0 && curr!==null)  {
        
        let currData = curr.data;
        curr.data = (currData + carry)%10;
        carry =parseInt((currData + carry)/10);
        curr=curr.next;
    }
    
let newHead= reverseLL(revHead);
    
        if(carry>0)  {
        
            let newNode = new LinkedListNode(carry);
        
            newNode.next=newHead;
            newHead=newNode;
        }
    
    return newHead;
};
function reverseLL(head){
    
let curr = head;

    let prev = null;
let next = null;

    while(curr !== null)  {
        
        next=curr.next;
        curr.next=prev;
        
        prev=curr;
        curr=next;
    }
    
        
        head=prev;
        return head;
}


