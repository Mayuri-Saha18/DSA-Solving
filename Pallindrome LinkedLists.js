const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    
    let str="";
     
     
let curr=head;
while(curr.next!=null )  {
        str+= curr.data
        curr= curr.next
    }
    
str+= curr.data

 let str2=""
    for(let i=str.length-1;i>=0;i--)  {
        
        str2+= str[i]
    }
    
    
    if (str2 == str)  {
      return true
    }
    
    else  {
      return false
      
    }
};
