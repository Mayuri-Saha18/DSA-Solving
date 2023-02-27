const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    
let a=l1

let b=l2

let arr=[]
    
    while(a) {
        
        arr.push(a.val)
        a=a.next
    }
    while(b)  {
        
        arr.push(b.val)
        b=b.next
    }
    
        arr.sort(function(a,b){return a-b});
let head=new ListNode(arr[0]);
    
let curr=head
        let i=1
        while(i<arr.length)  {
        
            let node=new ListNode(arr[i]);
            curr.next=node
            curr=curr.next
            i++
        }

return head
};

