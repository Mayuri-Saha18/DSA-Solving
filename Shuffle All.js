const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var shuffle = function (head) {
    let curr = head;
    
    let arr = [];
    while (curr!=null )  {
        
        arr.push(curr.data );
        curr= curr.next
    }

let n = arr.length
let mainArr=[]
        
        for(let i=0; i<=Math.floor(n/2); i++)  {
            if(i!=0){
               mainArr.push(arr[n-i]);
              
              mainArr.push(arr[i]);
            }
                else{
                    mainArr.push(arr[i])
                }
        }
curr=head;
 let i=0
    
    while (curr!=null )  {
        curr.data = mainArr[i]
        curr = curr.next;
        
        i++
 }
    
  return head
};


